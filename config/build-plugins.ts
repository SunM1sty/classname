import webpack from 'webpack';
import {BuildOptions} from "./types/config";

export function buildPlugins({paths}: BuildOptions): webpack.WebpackPluginInstance[] {
    return [
        new webpack.ProgressPlugin()
    ]
}