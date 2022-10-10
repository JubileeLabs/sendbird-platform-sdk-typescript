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

import { HttpFile } from '../http/http';

export class RetrieveAdvancedAnalyticsMetricsResponse {
    'segments'?: string;
    'date'?: string;
    'value'?: number;
    'channelType'?: string;
    'customChannelType'?: string;
    'customMessageType'?: string;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "segments",
            "baseName": "segments",
            "type": "string",
            "format": ""
        },
        {
            "name": "date",
            "baseName": "date",
            "type": "string",
            "format": ""
        },
        {
            "name": "value",
            "baseName": "value",
            "type": "number",
            "format": ""
        },
        {
            "name": "channelType",
            "baseName": "channel_type",
            "type": "string",
            "format": ""
        },
        {
            "name": "customChannelType",
            "baseName": "custom_channel_type",
            "type": "string",
            "format": ""
        },
        {
            "name": "customMessageType",
            "baseName": "custom_message_type",
            "type": "string",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return RetrieveAdvancedAnalyticsMetricsResponse.attributeTypeMap;
    }

    public constructor() {
    }
}

