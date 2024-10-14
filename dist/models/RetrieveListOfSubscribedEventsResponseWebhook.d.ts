export declare class RetrieveListOfSubscribedEventsResponseWebhook {
    'enabled'?: boolean;
    'url'?: string;
    'includeMembers'?: boolean;
    'enabledEvents'?: Array<string>;
    'allWebhookCategories'?: Array<string>;
    'includeUnreadCount'?: boolean;
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
