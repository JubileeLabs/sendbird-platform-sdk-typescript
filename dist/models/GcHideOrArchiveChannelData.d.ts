export declare class GcHideOrArchiveChannelData {
    'channelUrl': string;
    'userId': string;
    'allowAutoUnhide': boolean;
    'shouldHideAll': boolean;
    'hidePreviousMessages': boolean;
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
