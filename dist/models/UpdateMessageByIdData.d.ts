export declare class UpdateMessageByIdData {
    'channelType'?: string;
    'channelUrl'?: string;
    'messageId': number;
    'messageType'?: string;
    'message'?: string;
    'customType'?: string;
    'data'?: string;
    'mentionType'?: string;
    'mentionedUserIds'?: Array<string>;
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
