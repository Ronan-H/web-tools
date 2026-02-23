
const NO_SHIFT_SYMBOLS = ['-','=','[',']','\\',';',"'",',','.','/'];
const DIGITS = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

function pickRandomFromArray<T>(array: Array<T>): T {
    const index = Math.floor(Math.random() * array.length);
    return array[index];
}

function insertStrAtIndex(str: string, c: string, index: number) {
    return [str.slice(0, index), c, str.slice(index)].join('');
}

type PasswordOptions = {
    numWords: number;
    capitalEnd: boolean;
    includeSymbol: boolean;
    includeDigit: boolean;
}

export function generatePassword(wordlist: string[], options: PasswordOptions): string {
    let password = '';
    
    for (let i = 0; i < options.numWords; i++) {
        const nextIndex = Math.floor(Math.random() * wordlist.length);
        password += wordlist[nextIndex];
    }

    if (options.includeDigit) {
        const digit = pickRandomFromArray(DIGITS);
        const index = Math.floor(Math.random() * (password.length - 1)) + 1;
        password = insertStrAtIndex(password, digit, index);
    }

    if (options.includeSymbol) {
        const symbol = pickRandomFromArray(NO_SHIFT_SYMBOLS);
        const index = Math.floor(Math.random() * (password.length - 1)) + 1;
        password = insertStrAtIndex(password, symbol, index);
    }

    return password;
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
