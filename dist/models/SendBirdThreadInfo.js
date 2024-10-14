"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SendBirdThreadInfo = void 0;
var SendBirdThreadInfo = (function () {
    function SendBirdThreadInfo() {
    }
    SendBirdThreadInfo.getAttributeTypeMap = function () {
        return SendBirdThreadInfo.attributeTypeMap;
    };
    SendBirdThreadInfo.discriminator = undefined;
    SendBirdThreadInfo.attributeTypeMap = [
        {
            "name": "lastRepliedAt",
            "baseName": "last_replied_at",
            "type": "number",
            "format": ""
        },
        {
            "name": "mostRepliedUsers",
            "baseName": "most_replied_users",
            "type": "Array<SendBirdUser>",
            "format": ""
        },
        {
            "name": "replyCount",
            "baseName": "reply_count",
            "type": "number",
            "format": ""
        },
        {
            "name": "updatedAt",
            "baseName": "updated_at",
            "type": "number",
            "format": ""
        }
    ];
    return SendBirdThreadInfo;
}());
exports.SendBirdThreadInfo = SendBirdThreadInfo;
//# sourceMappingURL=SendBirdThreadInfo.js.map