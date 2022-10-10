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

export class ViewCountPreferenceOfChannelByUrlResponse {
    'countPreference'?: string;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "countPreference",
            "baseName": "count_preference",
            "type": "string",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return ViewCountPreferenceOfChannelByUrlResponse.attributeTypeMap;
    }

    public constructor() {
    }
}

