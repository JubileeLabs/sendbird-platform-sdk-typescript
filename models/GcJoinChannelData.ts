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

export class GcJoinChannelData {
    /**
    * Specifies the URL of the channel to join.
    */
    'channelUrl': string;
    /**
    * Specifies the unique ID of the user to join the public group channel.
    */
    'userId': string;
    /**
    * This property should be specified if the public group channel to join requires an access code to users, which means that the is_access_code_required property of the channel resource is true.
    */
    'accessCode': string;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "channelUrl",
            "baseName": "channel_url",
            "type": "string",
            "format": ""
        },
        {
            "name": "userId",
            "baseName": "user_id",
            "type": "string",
            "format": ""
        },
        {
            "name": "accessCode",
            "baseName": "access_code",
            "type": "string",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return GcJoinChannelData.attributeTypeMap;
    }

    public constructor() {
    }
}

