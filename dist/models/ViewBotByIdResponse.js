"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ViewBotByIdResponse = void 0;
var ViewBotByIdResponse = (function () {
    function ViewBotByIdResponse() {
    }
    ViewBotByIdResponse.getAttributeTypeMap = function () {
        return ViewBotByIdResponse.attributeTypeMap;
    };
    ViewBotByIdResponse.discriminator = undefined;
    ViewBotByIdResponse.attributeTypeMap = [
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
        }
    ];
    return ViewBotByIdResponse;
}());
exports.ViewBotByIdResponse = ViewBotByIdResponse;
//# sourceMappingURL=ViewBotByIdResponse.js.map