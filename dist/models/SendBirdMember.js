"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SendBirdMember = void 0;
var SendBirdMember = (function () {
    function SendBirdMember() {
    }
    SendBirdMember.getAttributeTypeMap = function () {
        return SendBirdMember.attributeTypeMap;
    };
    SendBirdMember.discriminator = undefined;
    SendBirdMember.attributeTypeMap = [
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
            "name": "isMuted",
            "baseName": "is_muted",
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
            "name": "requireAuthForProfileImage",
            "baseName": "require_auth_for_profile_image",
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
            "name": "isOnline",
            "baseName": "is_online",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "mutedEndAt",
            "baseName": "muted_end_at",
            "type": "number",
            "format": ""
        },
        {
            "name": "mutedDescription",
            "baseName": "muted_description",
            "type": "string",
            "format": ""
        },
        {
            "name": "restrictionInfo",
            "baseName": "restriction_info",
            "type": "SendBirdRestrictionInfo",
            "format": ""
        },
        {
            "name": "role",
            "baseName": "role",
            "type": "SendBirdMemberRoleEnum",
            "format": ""
        },
        {
            "name": "state",
            "baseName": "state",
            "type": "SendBirdMemberStateEnum",
            "format": ""
        },
        {
            "name": "userId",
            "baseName": "user_id",
            "type": "string",
            "format": ""
        }
    ];
    return SendBirdMember;
}());
exports.SendBirdMember = SendBirdMember;
//# sourceMappingURL=SendBirdMember.js.map