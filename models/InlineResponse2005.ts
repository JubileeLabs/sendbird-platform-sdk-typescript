/**
 * Sendbird Platform SDK
 * Sendbird Platform API Javascript SDK  https://sendbird.com/docs/chat/v3/platform-api/getting-started/prepare-to-use-api
 *
 * OpenAPI spec version: 1.0.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { InlineResponse2005PushMessageTemplates } from './InlineResponse2005PushMessageTemplates';
import { HttpFile } from '../http/http';

export class InlineResponse2005 {
    'pushMessageTemplates'?: Array<InlineResponse2005PushMessageTemplates>;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "pushMessageTemplates",
            "baseName": "push_message_templates",
            "type": "Array<InlineResponse2005PushMessageTemplates>",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return InlineResponse2005.attributeTypeMap;
    }

    public constructor() {
    }
}
