module.exports = {
    preset: 'ts-jest',
    testEnvironment: 'jsdom',
    testPathIgnorePatterns: ['<rootDir>/.next/', '<rootDir>/node_modules/'],
    setupFilesAfterEnv: ['<rootDir>/setupTests.js'],
    transform: {
        '^.+\\.(js|jsx|ts|tsx)$': '<rootDir>/node_modules/babel-jest'
    }
};
