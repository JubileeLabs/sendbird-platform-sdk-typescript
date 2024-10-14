export declare class SendBirdThumbnailSBObject {
    'height'?: number;
    'plainUrl'?: string;
    'realHeight'?: number;
    'realWidth'?: number;
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
