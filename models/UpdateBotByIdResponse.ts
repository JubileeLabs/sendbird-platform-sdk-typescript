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

import { CreateBotResponseBot } from './CreateBotResponseBot';
import { HttpFile } from '../http/http';

export class UpdateBotByIdResponse {
    'bot'?: CreateBotResponseBot;
    'botCallbackUrl'?: string;
    'enableMarkAsRead'?: boolean;
    'isPrivacyMode'?: boolean;
    'showMember'?: boolean;
    'channelInvitationPreference'?: number;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "bot",
            "baseName": "bot",
            "type": "CreateBotResponseBot",
            "format": ""
        },
        {
            "name": "botCallbackUrl",
            "baseName": "bot_callback_url",
            "type": "string",
            "format": ""
        },
        {
            "name": "enableMarkAsRead",
            "baseName": "enable_mark_as_read",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "isPrivacyMode",
            "baseName": "is_privacy_mode",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "showMember",
            "baseName": "show_member",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "channelInvitationPreference",
            "baseName": "channel_invitation_preference",
            "type": "number",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return UpdateBotByIdResponse.attributeTypeMap;
    }

    public constructor() {
    }
}

