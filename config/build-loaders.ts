import webpack from "webpack";
import {BuildOptions} from "./types/config";

export function buildLoaders(options: BuildOptions): webpack.RuleSetRule[] {
    const typescriptLoader=  {
        test: /\.ts?$/,
        use: 'ts-loader',
        exclude: /node_modules/
    }

    return [
        typescriptLoader
    ]
}