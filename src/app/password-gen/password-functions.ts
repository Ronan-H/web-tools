
const NO_SHIFT_SYMBOLS = ['-','=','[',']',';',"'",',','.','/'];
const DIGITS = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

function secureRandomFloat() {
    const array = new Uint32Array(1);
    crypto.getRandomValues(array);

    return array[0] / 2 ** 32;
}

function randIntBetween(fromInclusive: number, toExclusive: number) {
    const range = toExclusive - fromInclusive;
    return fromInclusive + Math.floor(secureRandomFloat() * range);
}

function pickRandomFromArray<T>(array: Array<T>): T {
    const index = randIntBetween(0, array.length);
    return array[index];
}

function insertStrAtIndex(str: string, c: string, index: number) {
    return [str.slice(0, index), c, str.slice(index)].join('');
}

type PasswordOptions = {
    numWords: number;
    capitalizeEnd: boolean;
    includeSymbol: boolean;
    includeDigit: boolean;
}

export function generatePassword(wordlist: string[], options: PasswordOptions) {
    const words = [];
    
    for (let i = 0; i < options.numWords; i++) {
        const nextIndex = randIntBetween(0, wordlist.length);
        words.push(wordlist[nextIndex]);
    }

    let password = words.join('');

    if (options.includeDigit) {
        const digit = pickRandomFromArray(DIGITS);
        const index = randIntBetween(1, password.length - 1);
        password = insertStrAtIndex(password, digit, index);
    }

    if (options.includeSymbol) {
        const symbol = pickRandomFromArray(NO_SHIFT_SYMBOLS);
        const index = randIntBetween(1, password.length - 1);
        password = insertStrAtIndex(password, symbol, index);
    }

    if (options.capitalizeEnd) {
        password = password.slice(0, password.length - 1) + password.charAt(password.length - 1).toUpperCase();
    }

    return {
        password,
        words,
    };
}

export function generatePasswords(wordlist: string[], options: PasswordOptions, num: number) {
    const passwords = [];

    for (let i = 0; i < num; i++) {
        const password = generatePassword(wordlist, options);
        passwords.push({
            key: i,
            password,
        });
    }

    return passwords;
}
