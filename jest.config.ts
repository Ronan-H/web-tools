import nextJest from 'next/jest';
import type { Config } from 'jest';

const createJestConfig = nextJest({
    dir: './',
});

const config: Config = {
    testEnvironment: 'jsdom',
    coverageProvider: 'v8',
    moduleNameMapper: {
        '^@/(.*)$': '<rootDir>/src/$1',
    },
    setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'],
};

export default createJestConfig(config);
