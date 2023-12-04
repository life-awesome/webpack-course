import MiniCssExtractPlugin, {Configuration} from "mini-css-extract-plugin";
import HtmlWebpackPlugin from "html-webpack-plugin";
import {BundleAnalyzerPlugin} from "webpack-bundle-analyzer";
import webpack from "webpack";
import {DefinePlugin} from "webpack";
import {BuildOptions} from "./types/types";

export function buildPlugins({mode, paths, platform}: BuildOptions): Configuration['plugins'] {
    const isDev = mode === 'development'
    const isProd = mode === 'production'
    const commonPlugins: Configuration['plugins'] = [
        new HtmlWebpackPlugin({template: paths.html}),
        new DefinePlugin({__PLATFORM__: JSON.stringify(platform)})
    ]

    if (isDev) {
        commonPlugins.push(new webpack.ProgressPlugin())
    }
    if (isProd) {
        commonPlugins.push(new MiniCssExtractPlugin({
            filename: 'css/[name].[contenthash:8].css',
            chunkFilename: 'css/[name].[contenthash:8].css'
        }))
        commonPlugins.push(new BundleAnalyzerPlugin())
    }
    return commonPlugins
}