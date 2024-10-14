export declare class AddReactionToAMessageData {
    'channelType': string;
    'channelUrl': string;
    'messageId': number;
    'userId': string;
    'reaction': string;
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
