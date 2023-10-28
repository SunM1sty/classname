import webpack from "webpack";

import {buildLoaders} from "./build-loaders";
import {buildResolvers} from "./build-resolvers";
import {buildPlugins} from "./build-plugins";

import {BuildOptions} from "./types/config";

export function buildWebpackConfig(options: BuildOptions): webpack.Configuration {
    const {paths, mode, isDev} = options
    return {
        mode: mode,
        entry: paths.entry,
        output: {
            filename: "index.js",
            path: paths.output,
            clean: true,
            libraryTarget: 'umd',
            library: '@m1sty/classname',
            umdNamedDefine: true
        },
        module: {
            rules: buildLoaders(options)
        },
        resolve: buildResolvers(),
        plugins: buildPlugins(options)
    }
}