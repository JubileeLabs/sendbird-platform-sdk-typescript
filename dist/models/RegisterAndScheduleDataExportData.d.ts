export declare class RegisterAndScheduleDataExportData {
    'startTs': number;
    'endTs': number;
    'format'?: string;
    'csvDelimiter'?: string;
    'timezone'?: string;
    'senderIds'?: Array<string>;
    'excludeSenderIds'?: Array<string>;
    'channelUrls'?: Array<string>;
    'excludeChannelUrls'?: Array<string>;
    'userIds'?: Array<string>;
    'showReadReceipt'?: boolean;
    'showChannelMetadata'?: boolean;
    'neighboringMessageLimit'?: number;
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
