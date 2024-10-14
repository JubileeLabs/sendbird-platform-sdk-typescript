import { ListPushNotificationContentTemplatesResponsePushMessageTemplatesInner } from './ListPushNotificationContentTemplatesResponsePushMessageTemplatesInner';
export declare class ListPushNotificationContentTemplatesResponse {
    'pushMessageTemplates'?: Array<ListPushNotificationContentTemplatesResponsePushMessageTemplatesInner>;
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
