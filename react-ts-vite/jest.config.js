/** @type {Config} */
const config = {
    bail: 10,
    clearMocks: true,
    collectCoverage: true,
    collectCoverageFrom: [
        "**/src/**/*.{js,jsx,ts,tsx}",
        "!**/node_modules/**",
        "!**/src/assets/**",
        "!**/src/**/constant.{ts,js}",
        "!**/src/**/*.d.{ts,js}",
        "!**/src/main.tsx",
        "!**/src/App.tsx",
        "!**/src/**/index.ts",
        "!**/src/__test__/**",
    ],
    coverageThreshold: {
        global: {
            branches: 80,
            functions: 80,
            lines: 80,
            statements: 80,
        },
    },
    globals: {
        __DEV__: true,
    },
    injectGlobals: true,
    moduleNameMapper: {
        '^@ui/(.*)$': '<rootDir>/src/components/ui/$1',
        '^@root/(.*)$': '<rootDir>/src/$1',
        '^@hooks/(.*)$': '<rootDir>/src/hooks/$1',
        '^@apis/(.*)$': '<rootDir>/src/apis/$1',
        '^@components/(.*)$': '<rootDir>/src/components/$1',
    },
    reporters: ["default"],
    resetMocks: true,
    setupFiles: ["<rootDir>/src/__test__/envSetup.js"],
    setupFilesAfterEnv: ["<rootDir>/src/__test__/afterEnvSetup.ts"],
    silent: true,
    testMatch: ["<rootDir>/src/**/*.test.{ts,tsx,js,jsx}"],
    testEnvironment: "jsdom",
};

export default config;