export declare class ListMessagesResponseMessagesInnerOgTagOgImage {
    'url'?: string;
    'secureUrl'?: string;
    'width'?: number;
    'height'?: number;
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
