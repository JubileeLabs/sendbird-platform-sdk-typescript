"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SendBirdMessageResponseUser = void 0;
var SendBirdMessageResponseUser = (function () {
    function SendBirdMessageResponseUser() {
    }
    SendBirdMessageResponseUser.getAttributeTypeMap = function () {
        return SendBirdMessageResponseUser.attributeTypeMap;
    };
    SendBirdMessageResponseUser.discriminator = undefined;
    SendBirdMessageResponseUser.attributeTypeMap = [
        {
            "name": "requireAuthForProfileImage",
            "baseName": "require_auth_for_profile_image",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "isActive",
            "baseName": "is_active",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "role",
            "baseName": "role",
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
            "name": "nickname",
            "baseName": "nickname",
            "type": "string",
            "format": ""
        },
        {
            "name": "profileUrl",
            "baseName": "profile_url",
            "type": "string",
            "format": ""
        },
        {
            "name": "metadata",
            "baseName": "metadata",
            "type": "OcDeleteChannelByUrl200Response",
            "format": ""
        }
    ];
    return SendBirdMessageResponseUser;
}());
exports.SendBirdMessageResponseUser = SendBirdMessageResponseUser;
//# sourceMappingURL=SendBirdMessageResponseUser.js.map