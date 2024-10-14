export declare class SendBirdGroupChannelChannel {
    'channelUrl'?: string;
    'name'?: string;
    'coverUrl'?: string;
    'data'?: string;
    'createdAt'?: number;
    'customType'?: string;
    'maxLengthMessage'?: number;
    'memberCount'?: number;
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
