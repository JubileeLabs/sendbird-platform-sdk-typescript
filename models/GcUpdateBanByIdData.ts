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

export class GcUpdateBanByIdData {
    /**
    * Specifies the URL of the target channel.
    */
    'channelUrl': string;
    /**
    * Specifies the ID of the banned user to update.
    */
    'bannedUserId': string;
    /**
    * Specifies a new ban duration to update. If set to -1, the user will be banned permanently (10 years, technically).
    */
    'seconds': number;
    /**
    * Specifies a new reason for the banning to update. The length is limited to 250 characters.
    */
    'description': string;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "channelUrl",
            "baseName": "channel_url",
            "type": "string",
            "format": ""
        },
        {
            "name": "bannedUserId",
            "baseName": "banned_user_id",
            "type": "string",
            "format": ""
        },
        {
            "name": "seconds",
            "baseName": "seconds",
            "type": "number",
            "format": ""
        },
        {
            "name": "description",
            "baseName": "description",
            "type": "string",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return GcUpdateBanByIdData.attributeTypeMap;
    }

    public constructor() {
    }
}

