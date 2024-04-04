# React Web Application with Typescript and Vite

You can run `sh ../react-ts-vite.sh` script to create new application.

## Adding Tailwind CSS in your application

### Installation

Official Website - https://tailwindcss.com/docs

1. `npm install -D tailwindcss`

2. `npx tailwindcss init -p`

3. Adding config in `tailwind.config.js`

    ```js
    export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    // ...other configs
    }
    ```

4. Adding `input.css`

    ```css
    @tailwind base;
    @tailwind components;
    @tailwind utilities;
    ```

5. Create a output css

    `npx tailwindcss -i ./src/input.css -o ./src/output.css`


6. In `main.tsx`, adding import of `output.css`

    ```tsx
    import './output.css';
    ```

### VS Code Extension for Tailwind CSS: 

Tailwind CSS provided an official extension for VS Code user. Go to market and find `Tailwind CSS IntelliSense` and install. This extension default only support syntax on html. In order to using it in JSX, add below configuration in your VS Code `User Setting`.

1. `Crtl/Cmd + Shift + P`
2. Find `Open User Setting (JSON)`
3. Paste below configuration.
```JSON
    "tailwindCSS.includeLanguages": {
        "javascript": "javascript",
        "html": "HTML"
    },
    "editor.quickSuggestions": {
        "strings": true
    }
```