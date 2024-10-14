export declare class V3GroupChannelsChannelUrlScheduledMessagesScheduledMessageIdDeleteRequest {
    'messageType'?: string;
    'userId'?: string;
    'message'?: string;
    'file'?: string;
    'url'?: string;
    'scheduledAt'?: number;
    'customType'?: string;
    'data'?: string;
    'sendPush'?: boolean;
    'mentionType'?: string;
    'mentionedUserIds'?: Array<string>;
    'isSilent'?: boolean;
    'markAsRead'?: boolean;
    'sortedMetaarray'?: Array<any>;
    'dedupId'?: string;
    'apnsBundleId'?: string;
    'appleCriticalAlertOptions'?: any;
    'sound'?: string;
    'volume'?: number;
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
