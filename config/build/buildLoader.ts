import {ModuleOptions} from 'webpack'
import MiniCssExtractPlugin from "mini-css-extract-plugin";
import {BuildOptions} from "./types/types";

export function buildLoader({mode}: BuildOptions): ModuleOptions['rules'] {
    const isDev = mode === 'development'

    const cssLoaderWithModule = {
        loader: 'css-loader',
        options: {
            modules: {
                localIdentName: isDev ? '[path][name]__[local]' : '[hash:base64:8]'
            },
        }
    }

    const cssLoader = {
        test: /\.s[ac]ss$/i,
        use: [isDev ? 'style-loader' : MiniCssExtractPlugin.loader, cssLoaderWithModule, "sass-loader"],
    }


    const tsLoader = {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
    }
    return [cssLoader, tsLoader]
}