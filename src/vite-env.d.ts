/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_ROUTER_HISTORY: 'hash' | 'h5'
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}
