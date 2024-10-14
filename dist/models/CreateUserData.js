"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateUserData = void 0;
var CreateUserData = (function () {
    function CreateUserData() {
    }
    CreateUserData.getAttributeTypeMap = function () {
        return CreateUserData.attributeTypeMap;
    };
    CreateUserData.discriminator = undefined;
    CreateUserData.attributeTypeMap = [
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
            "name": "discoveryKeys",
            "baseName": "discovery_keys",
            "type": "Array<string>",
            "format": ""
        },
        {
            "name": "metadata",
            "baseName": "metadata",
            "type": "any",
            "format": ""
        }
    ];
    return CreateUserData;
}());
exports.CreateUserData = CreateUserData;
//# sourceMappingURL=CreateUserData.js.map