"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SendBirdSender = void 0;
var SendBirdSender = (function () {
    function SendBirdSender() {
    }
    SendBirdSender.getAttributeTypeMap = function () {
        return SendBirdSender.attributeTypeMap;
    };
    SendBirdSender.discriminator = undefined;
    SendBirdSender.attributeTypeMap = [
        {
            "name": "connectionStatus",
            "baseName": "connection_status",
            "type": "string",
            "format": ""
        },
        {
            "name": "friendDiscoveryKey",
            "baseName": "friend_discovery_key",
            "type": "string",
            "format": ""
        },
        {
            "name": "friendName",
            "baseName": "friend_name",
            "type": "string",
            "format": ""
        },
        {
            "name": "isActive",
            "baseName": "is_active",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "isBlockedByMe",
            "baseName": "is_blocked_by_me",
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
            "name": "metadata",
            "baseName": "metadata",
            "type": "any",
            "format": ""
        },
        {
            "name": "nickname",
            "baseName": "nickname",
            "type": "string",
            "format": ""
        },
        {
            "name": "plainProfileUrl",
            "baseName": "plain_profile_url",
            "type": "string",
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
            "name": "requireAuth",
            "baseName": "require_auth",
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
    return SendBirdSender;
}());
exports.SendBirdSender = SendBirdSender;
//# sourceMappingURL=SendBirdSender.js.map