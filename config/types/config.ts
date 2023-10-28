export type BuildMode = 'production' | 'development'

export type BuildPaths = {
    entry: string
    output: string
}

export type BuildOptions = {
    mode: BuildMode
    paths: BuildPaths
}

export type BuildEnv = {
    mode: BuildMode
}
