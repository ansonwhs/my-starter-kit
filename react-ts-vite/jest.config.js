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
    reporters: ["default"],
    resetMocks: true,
    setupFilesAfterEnv: ["<rootDir>/src/__test__/setup.ts"],
    silent: true,
    testMatch: ["<rootDir>/src/**/*.test.{ts,tsx,js,jsx}"],
    testEnvironment: "jsdom",
};

export default config;