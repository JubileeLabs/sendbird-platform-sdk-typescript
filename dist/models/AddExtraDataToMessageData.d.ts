export declare class AddExtraDataToMessageData {
    'channelType': string;
    'channelUrl': string;
    'messageId': number;
    'sortedMetaarray': string;
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
