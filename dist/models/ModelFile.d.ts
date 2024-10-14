export declare class ModelFile {
    'lastModified'?: number;
    'name'?: string;
    'size'?: number;
    'type'?: string;
    'webkitRelativePath'?: string;
    static readonly discriminator: string | undefined;
    static readonly attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
        format: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
        format: string;
    }[];
    constructor();
}
