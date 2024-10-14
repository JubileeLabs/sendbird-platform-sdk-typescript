"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OcBanUserResponse = void 0;
var OcBanUserResponse = (function () {
    function OcBanUserResponse() {
    }
    OcBanUserResponse.getAttributeTypeMap = function () {
        return OcBanUserResponse.attributeTypeMap;
    };
    OcBanUserResponse.discriminator = undefined;
    OcBanUserResponse.attributeTypeMap = [
        {
            "name": "startAt",
            "baseName": "start_at",
            "type": "number",
            "format": ""
        },
        {
            "name": "endAt",
            "baseName": "end_at",
            "type": "number",
            "format": ""
        },
        {
            "name": "description",
            "baseName": "description",
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
            "name": "user",
            "baseName": "user",
            "type": "SendBirdUser",
            "format": ""
        },
        {
            "name": "nextUrl",
            "baseName": "next_url",
            "type": "string",
            "format": ""
        },
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
    return OcBanUserResponse;
}());
exports.OcBanUserResponse = OcBanUserResponse;
//# sourceMappingURL=OcBanUserResponse.js.map