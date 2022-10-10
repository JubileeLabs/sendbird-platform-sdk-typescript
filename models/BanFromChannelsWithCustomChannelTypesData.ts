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

export class BanFromChannelsWithCustomChannelTypesData {
    /**
    * Specifies an array of one or more custom channel types, in order to ban the user from channels with the channel types. The user is permanently banned unless unbanned (10 years, technically).
    */
    'channelCustomTypes': Array<string>;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "channelCustomTypes",
            "baseName": "channel_custom_types",
            "type": "Array<string>",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return BanFromChannelsWithCustomChannelTypesData.attributeTypeMap;
    }

    public constructor() {
    }
}

