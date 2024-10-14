export declare class UpdateHmsPushConfigurationByIdData {
    'providerId': string;
    'huaweiAppId': string;
    'huaweiAppSecret': string;
    'pushSound': string;
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
