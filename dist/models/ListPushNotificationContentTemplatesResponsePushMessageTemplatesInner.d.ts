import { ListPushNotificationContentTemplatesResponsePushMessageTemplatesInnerTemplate } from './ListPushNotificationContentTemplatesResponsePushMessageTemplatesInnerTemplate';
export declare class ListPushNotificationContentTemplatesResponsePushMessageTemplatesInner {
    'templateName'?: string;
    'template'?: ListPushNotificationContentTemplatesResponsePushMessageTemplatesInnerTemplate;
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
