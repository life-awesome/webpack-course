export type BuildMode = 'production' | 'development';

export type PlatformType = 'desktop' | 'mobile'


export interface BuildPaths {
    entry: string;
    output: string;
    html: string;
    src: string;
}

export interface BuildOptions {
    mode: BuildMode
    port: number,
    paths: BuildPaths;
    platform: PlatformType
}