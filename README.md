# My Starter Kit

This is my repository for starter kit on JS Framework.


## For Jest

### Dependencies

npm i -D @babel/core @babel/preset-env @babel/preset-react @testing-library/jest-dom @testing-library/react babel-jest jest jest-environment-jsdom

--- with Typescript

npm i -D @babel/preset-typescript @types/jest @types/react @types/react-dom ts-node

### babel.config.cjs

```JS
module.exports = {
  presets: [
    ["@babel/preset-env", { targets: { node: "current" } }],
    "@babel/preset-typescript",
    [
      "@babel/preset-react",
      {
        runtime: "automatic",
      },
    ],
  ],
};
```

### jest.config.ts

```TS
import type { Config } from "jest";

const config: Config = {
  bail: 10,
  clearMocks: true,
  collectCoverage: true,
  collectCoverageFrom: [
    "**/src/*.{js,jsx,ts,tsx}",
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
```

### src/__test__/setup.ts

```TS
import "@testing-library/jest-dom";

const setUp = () => {};

export default setUp;

```
