export interface CreateElementParams {
    tagname?    : string,
    classnames? : string,
    content?    : string,
    attributes? : {
        [key: string] : string,
    }
}