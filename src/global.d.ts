declare module '*.scss' {
    const content: Record<string, string>;
    export default content;
}

declare const __PLATFORM__: 'desktop' | 'mobile'