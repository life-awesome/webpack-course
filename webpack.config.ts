import {buildWebpack} from "./config/build/buildWebpack";
import {BuildMode, BuildPaths, PlatformType} from "./config/build/types/types";
import path from "path";


type EnvVariables = {
    mode?: BuildMode
    port?: number
    platform?: PlatformType
}
export default (env: EnvVariables) => {
    const paths: BuildPaths = {
        output: path.resolve(__dirname, 'build'),
        entry: path.resolve(__dirname, 'src', 'index.tsx'),
        html: path.resolve(__dirname, 'public', 'index.html'),
        src: path.resolve(__dirname, 'src')
    }
    return buildWebpack({
        port: env.port ?? 3000,
        mode: env.mode ?? 'development',
        paths,
        platform: env.platform ?? 'desktop'
    })
}
