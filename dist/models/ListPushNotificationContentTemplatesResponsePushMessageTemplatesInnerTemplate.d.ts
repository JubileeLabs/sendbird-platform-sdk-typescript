export declare class ListPushNotificationContentTemplatesResponsePushMessageTemplatesInnerTemplate {
    'MESG'?: string;
    'FILE'?: string;
    'ADMM'?: string;
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
