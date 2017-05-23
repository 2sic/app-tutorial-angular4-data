// type definition of an sxc-instance
// to help typescript use typed variables

export interface SxcInstance {
    resolveServiceUrl(path: string) : string,
    id: number,
    cbid: number,
    isEditMode(): boolean,
}