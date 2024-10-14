"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GcBanUserResponse = void 0;
var GcBanUserResponse = (function () {
    function GcBanUserResponse() {
    }
    GcBanUserResponse.getAttributeTypeMap = function () {
        return GcBanUserResponse.attributeTypeMap;
    };
    GcBanUserResponse.discriminator = undefined;
    GcBanUserResponse.attributeTypeMap = [
        {
            "name": "user",
            "baseName": "user",
            "type": "SendBirdUser",
            "format": ""
        },
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
            "name": "metadata",
            "baseName": "metadata",
            "type": "OcDeleteChannelByUrl200Response",
            "format": ""
        },
        {
            "name": "nextUrl",
            "baseName": "next_url",
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
            "name": "requireAuthForProfileImage",
            "baseName": "require_auth_for_profile_image",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "userId",
            "baseName": "user_id",
            "type": "string",
            "format": ""
        }
    ];
    return GcBanUserResponse;
}());
exports.GcBanUserResponse = GcBanUserResponse;
//# sourceMappingURL=GcBanUserResponse.js.map