"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateUserByIdData = void 0;
var UpdateUserByIdData = (function () {
    function UpdateUserByIdData() {
    }
    UpdateUserByIdData.getAttributeTypeMap = function () {
        return UpdateUserByIdData.attributeTypeMap;
    };
    UpdateUserByIdData.discriminator = undefined;
    UpdateUserByIdData.attributeTypeMap = [
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
            "name": "profileFile",
            "baseName": "profile_file",
            "type": "HttpFile",
            "format": "binary"
        },
        {
            "name": "issueAccessToken",
            "baseName": "issue_access_token",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "issueSessionToken",
            "baseName": "issue_session_token",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "sessionTokenExpiresAt",
            "baseName": "session_token_expires_at",
            "type": "number",
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
            "name": "discoveryKeys",
            "baseName": "discovery_keys",
            "type": "Array<string>",
            "format": ""
        },
        {
            "name": "preferredLanguages",
            "baseName": "preferred_languages",
            "type": "Array<string>",
            "format": ""
        },
        {
            "name": "leaveAllWhenDeactivated",
            "baseName": "leave_all_when_deactivated",
            "type": "boolean",
            "format": ""
        }
    ];
    return UpdateUserByIdData;
}());
exports.UpdateUserByIdData = UpdateUserByIdData;
//# sourceMappingURL=UpdateUserByIdData.js.map