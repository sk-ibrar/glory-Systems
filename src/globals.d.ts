// eslint-disable-next-line no-unused-vars
declare const GEMINI_API_KEY: string;

declare module '*.vue' {
  import type { DefineComponent } from 'vue'
  const component: DefineComponent<{}, {}, any>
  export default component
}
