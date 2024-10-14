export declare class SendBirdBotsMessageResponseMessageMessageEvents {
    'sendPushNotification'?: string;
    'updateUnreadCount'?: boolean;
    'updateMentionCount'?: boolean;
    'updateLastMessage'?: boolean;
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
