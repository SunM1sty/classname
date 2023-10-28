import path from 'path';
import webpack from 'webpack';

import {buildWebpackConfig} from "./config/build-webpack-config";
import {BuildEnv, BuildPaths} from "./config/types/config";

export default (env: BuildEnv): webpack.Configuration => {
    const paths: BuildPaths = {
        entry: path.resolve(__dirname, 'src', 'index.ts'),
        output: path.resolve(__dirname, 'build')
    }

    const MODE = env.mode || 'development'

    return buildWebpackConfig({
        mode: MODE,
        paths,
        isDev: MODE === 'development'
    })
};