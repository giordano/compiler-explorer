export declare class BaseCompiler {
    constructor(compilerInfo, env);
    public compiler;
    public lang;
    public outputFilebase: string;
    protected mtime;
    protected env;
    protected compileFilename;
    protected asm;
    protected getSharedLibraryPathsAsArguments(libraries: object[], libDownloadPath: string);
    protected getSharedLibraryPathsAsLdLibraryPaths(libraries: object[]);
    protected getCompilerCacheKey(compiler: string, args: string[], options: object);
    protected async execCompilerCached(compiler, args, options);
    protected async newTempDir();
    protected filename(fn: string): string;
    protected optionsForFilter(filters: object, outputFilename: string): string[];
    protected getExtraFilepath(dirPath: string, filename: string): string;
    protected async writeAllFiles(dirPath: string, source: string, files: any[], filters: object);
    protected async writeMultipleFiles(files: any[], dirPath: string): Promise<any[]>;
    public compilerProps: (key: string) => string;
    public getOutputFilename(dirPath: string, outputFilebase: string, key?: object): string;
    public async exec(filepath: string, args: string[], execOptions);
    public parseCompilationOutput(result, filename: string);
    public getDefaultExecOptions();
    public async runCompiler(compiler: string, args: string[], filename: string, execOptions);
    public async getVersion();
    protected getArgumentParser(): class;
}
