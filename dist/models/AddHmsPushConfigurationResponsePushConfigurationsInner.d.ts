export declare class AddHmsPushConfigurationResponsePushConfigurationsInner {
    'id'?: string;
    'pushType'?: string;
    'huaweiAppId'?: string;
    'huaweiAppSecret'?: string;
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
