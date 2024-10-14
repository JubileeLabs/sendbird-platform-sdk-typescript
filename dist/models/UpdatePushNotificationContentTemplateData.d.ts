export declare class UpdatePushNotificationContentTemplateData {
    'templateName': string;
    'template': string;
    'templateMESG': string;
    'templateFILE': string;
    'templateADMN': string;
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
