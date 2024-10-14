"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SendBirdMessageResponseMentionedUsersInner = void 0;
var SendBirdMessageResponseMentionedUsersInner = (function () {
    function SendBirdMessageResponseMentionedUsersInner() {
    }
    SendBirdMessageResponseMentionedUsersInner.getAttributeTypeMap = function () {
        return SendBirdMessageResponseMentionedUsersInner.attributeTypeMap;
    };
    SendBirdMessageResponseMentionedUsersInner.discriminator = undefined;
    SendBirdMessageResponseMentionedUsersInner.attributeTypeMap = [
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
    return SendBirdMessageResponseMentionedUsersInner;
}());
exports.SendBirdMessageResponseMentionedUsersInner = SendBirdMessageResponseMentionedUsersInner;
//# sourceMappingURL=SendBirdMessageResponseMentionedUsersInner.js.map