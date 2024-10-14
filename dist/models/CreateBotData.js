"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateBotData = void 0;
var CreateBotData = (function () {
    function CreateBotData() {
    }
    CreateBotData.getAttributeTypeMap = function () {
        return CreateBotData.attributeTypeMap;
    };
    CreateBotData.discriminator = undefined;
    CreateBotData.attributeTypeMap = [
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
            "name": "botProfileUrl",
            "baseName": "bot_profile_url",
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
            "name": "botCallbackUrl",
            "baseName": "bot_callback_url",
            "type": "string",
            "format": ""
        },
        {
            "name": "isPrivacyMode",
            "baseName": "is_privacy_mode",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "enableMarkAsRead",
            "baseName": "enable_mark_as_read",
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
        }
    ];
    return CreateBotData;
}());
exports.CreateBotData = CreateBotData;
//# sourceMappingURL=CreateBotData.js.map