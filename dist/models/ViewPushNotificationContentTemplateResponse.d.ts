import { ViewPushNotificationContentTemplateResponsePushMessageTemplatesInner } from './ViewPushNotificationContentTemplateResponsePushMessageTemplatesInner';
export declare class ViewPushNotificationContentTemplateResponse {
    'pushMessageTemplates'?: Array<ViewPushNotificationContentTemplateResponsePushMessageTemplatesInner>;
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
