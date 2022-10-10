/**
 * Sendbird Platform SDK
 * Sendbird Platform API SDK  https://sendbird.com/docs/chat/v3/platform-api/getting-started/prepare-to-use-api
 *
 * OpenAPI spec version: 1.0.0
 * Contact: support@sendbird.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { ListPushNotificationContentTemplatesResponsePushMessageTemplatesInnerTemplate } from './ListPushNotificationContentTemplatesResponsePushMessageTemplatesInnerTemplate';
import { HttpFile } from '../http/http';

export class ViewPushNotificationContentTemplateResponsePushMessageTemplatesInner {
    'templateName'?: string;
    'template'?: ListPushNotificationContentTemplatesResponsePushMessageTemplatesInnerTemplate;
    'pushMessagePreview'?: ListPushNotificationContentTemplatesResponsePushMessageTemplatesInnerTemplate;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "templateName",
            "baseName": "template_name",
            "type": "string",
            "format": ""
        },
        {
            "name": "template",
            "baseName": "template",
            "type": "ListPushNotificationContentTemplatesResponsePushMessageTemplatesInnerTemplate",
            "format": ""
        },
        {
            "name": "pushMessagePreview",
            "baseName": "push_message_preview",
            "type": "ListPushNotificationContentTemplatesResponsePushMessageTemplatesInnerTemplate",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return ViewPushNotificationContentTemplateResponsePushMessageTemplatesInner.attributeTypeMap;
    }

    public constructor() {
    }
}

