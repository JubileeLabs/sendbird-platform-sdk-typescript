"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SendBirdGroupChannelCreatedBy = void 0;
var SendBirdGroupChannelCreatedBy = (function () {
    function SendBirdGroupChannelCreatedBy() {
    }
    SendBirdGroupChannelCreatedBy.getAttributeTypeMap = function () {
        return SendBirdGroupChannelCreatedBy.attributeTypeMap;
    };
    SendBirdGroupChannelCreatedBy.discriminator = undefined;
    SendBirdGroupChannelCreatedBy.attributeTypeMap = [
        {
            "name": "requireAuthForProfileImage",
            "baseName": "require_auth_for_profile_image",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "nickname",
            "baseName": "nickname",
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
            "name": "profileUrl",
            "baseName": "profile_url",
            "type": "string",
            "format": ""
        }
    ];
    return SendBirdGroupChannelCreatedBy;
}());
exports.SendBirdGroupChannelCreatedBy = SendBirdGroupChannelCreatedBy;
//# sourceMappingURL=SendBirdGroupChannelCreatedBy.js.map