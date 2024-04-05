/// <reference types="vite/client" />

interface ImportMetaEnv {
    readonly VITE_APPLICAITON_NAME: string
}

interface ImportMeta {
    readonly env: ImportMetaEnv
}