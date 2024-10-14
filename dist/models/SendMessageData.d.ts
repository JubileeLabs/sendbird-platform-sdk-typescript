export declare class SendMessageData {
    'userId': string;
    'channelType'?: string;
    'channelUrl'?: string;
    'messageType': string;
    'message': string;
    'customType'?: string;
    'data'?: string;
    'sendPush'?: boolean;
    'mentionType'?: string;
    'mentionedUserIds'?: Array<string>;
    'isSilent'?: boolean;
    'sortedMetaarray'?: string;
    'createdAt'?: number;
    'dedupId'?: string;
    'apnsBundleId'?: string;
    'sound'?: string;
    'volume'?: number;
    'url'?: string;
    'file'?: string;
    'fileName'?: string;
    'fileSize'?: number;
    'fileType'?: string;
    'thumbnails'?: Array<string>;
    'thumbnail1'?: string;
    'thumbnail2'?: string;
    'thumbnail3'?: string;
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
