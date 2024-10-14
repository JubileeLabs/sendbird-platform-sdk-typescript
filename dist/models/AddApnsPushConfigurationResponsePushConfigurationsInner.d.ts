export declare class AddApnsPushConfigurationResponsePushConfigurationsInner {
    'id'?: string;
    'pushType'?: string;
    'createdAt'?: number;
    'apnsCerEnvType'?: string;
    'apnsExpiration'?: number;
    'apnsName'?: string;
    'hasUnreadCountBadge'?: number;
    'contentAvailable'?: boolean;
    'mutableContent'?: boolean;
    'pushSound'?: string;
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
