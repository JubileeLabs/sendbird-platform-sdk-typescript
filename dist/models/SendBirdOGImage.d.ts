export declare class SendBirdOGImage {
    'alt'?: string;
    'height'?: number;
    'secureUrl'?: string;
    'type'?: string;
    'url'?: string;
    'width'?: number;
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
