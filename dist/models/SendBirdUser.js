"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SendBirdUser = void 0;
var SendBirdUser = (function () {
    function SendBirdUser() {
    }
    SendBirdUser.getAttributeTypeMap = function () {
        return SendBirdUser.attributeTypeMap;
    };
    SendBirdUser.discriminator = undefined;
    SendBirdUser.attributeTypeMap = [
        {
            "name": "requireAuthForProfileImage",
            "baseName": "require_auth_for_profile_image",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "isOnline",
            "baseName": "is_online",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "userId",
            "baseName": "user_id",
            "type": "string",
            "format": ""
        },
        {
            "name": "accessToken",
            "baseName": "access_token",
            "type": "string",
            "format": ""
        },
        {
            "name": "hasEverLoggedIn",
            "baseName": "has_ever_logged_in",
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
            "name": "lastSeenAt",
            "baseName": "last_seen_at",
            "type": "number",
            "format": "int64"
        },
        {
            "name": "nickname",
            "baseName": "nickname",
            "type": "string",
            "format": ""
        },
        {
            "name": "discoveryKeys",
            "baseName": "discovery_keys",
            "type": "Array<string>",
            "format": ""
        },
        {
            "name": "sessionTokens",
            "baseName": "session_tokens",
            "type": "Array<any>",
            "format": ""
        },
        {
            "name": "preferredLanguages",
            "baseName": "preferred_languages",
            "type": "Array<string>",
            "format": ""
        },
        {
            "name": "profileUrl",
            "baseName": "profile_url",
            "type": "string",
            "format": ""
        },
        {
            "name": "createdAt",
            "baseName": "created_at",
            "type": "number",
            "format": ""
        },
        {
            "name": "phoneNumber",
            "baseName": "phone_number",
            "type": "string",
            "format": ""
        },
        {
            "name": "local",
            "baseName": "local",
            "type": "string",
            "format": ""
        },
        {
            "name": "locale",
            "baseName": "locale",
            "type": "string",
            "format": ""
        },
        {
            "name": "isHideMeFromFriends",
            "baseName": "is_hide_me_from_friends",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "isShadowBlocked",
            "baseName": "is_shadow_blocked",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "isCreated",
            "baseName": "is_created",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "metadata",
            "baseName": "metadata",
            "type": "any",
            "format": ""
        },
        {
            "name": "description",
            "baseName": "description",
            "type": "string",
            "format": ""
        },
        {
            "name": "endAt",
            "baseName": "end_at",
            "type": "number",
            "format": ""
        },
        {
            "name": "startAt",
            "baseName": "start_at",
            "type": "number",
            "format": ""
        }
    ];
    return SendBirdUser;
}());
exports.SendBirdUser = SendBirdUser;
//# sourceMappingURL=SendBirdUser.js.map