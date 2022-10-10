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

export class CreateBotResponseBot {
    'botToken'?: string;
    'botProfileUrl'?: string;
    'botUserid'?: string;
    'botNickname'?: string;
    'botType'?: string;
    'botMetadata'?: any;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "botToken",
            "baseName": "bot_token",
            "type": "string",
            "format": ""
        },
        {
            "name": "botProfileUrl",
            "baseName": "bot_profile_url",
            "type": "string",
            "format": ""
        },
        {
            "name": "botUserid",
            "baseName": "bot_userid",
            "type": "string",
            "format": ""
        },
        {
            "name": "botNickname",
            "baseName": "bot_nickname",
            "type": "string",
            "format": ""
        },
        {
            "name": "botType",
            "baseName": "bot_type",
            "type": "string",
            "format": ""
        },
        {
            "name": "botMetadata",
            "baseName": "bot_metadata",
            "type": "any",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return CreateBotResponseBot.attributeTypeMap;
    }

    public constructor() {
    }
}

