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

import { SendBirdChannelResponse } from './SendBirdChannelResponse';
import { HttpFile } from '../http/http';

export class ListBannedChannelsResponseBannedChannelsInner {
    'startAt'?: number;
    'description'?: string;
    'channel'?: SendBirdChannelResponse;
    'endAt'?: number;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "startAt",
            "baseName": "start_at",
            "type": "number",
            "format": ""
        },
        {
            "name": "description",
            "baseName": "description",
            "type": "string",
            "format": ""
        },
        {
            "name": "channel",
            "baseName": "channel",
            "type": "SendBirdChannelResponse",
            "format": ""
        },
        {
            "name": "endAt",
            "baseName": "end_at",
            "type": "number",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return ListBannedChannelsResponseBannedChannelsInner.attributeTypeMap;
    }

    public constructor() {
    }
}

