export declare class UpdateExtraDataInMessageData {
    'channelType': string;
    'channelUrl': string;
    'messageId': number;
    'sortedMetaarray': string;
    'mode': string;
    'upsert': boolean;
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
