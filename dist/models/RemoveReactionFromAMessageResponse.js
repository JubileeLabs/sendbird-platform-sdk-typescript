"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RemoveReactionFromAMessageResponse = void 0;
var RemoveReactionFromAMessageResponse = (function () {
    function RemoveReactionFromAMessageResponse() {
    }
    RemoveReactionFromAMessageResponse.getAttributeTypeMap = function () {
        return RemoveReactionFromAMessageResponse.attributeTypeMap;
    };
    RemoveReactionFromAMessageResponse.discriminator = undefined;
    RemoveReactionFromAMessageResponse.attributeTypeMap = [
        {
            "name": "reaction",
            "baseName": "reaction",
            "type": "string",
            "format": ""
        },
        {
            "name": "userId",
            "baseName": "user_id",
            "type": "number",
            "format": ""
        },
        {
            "name": "success",
            "baseName": "success",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "msgId",
            "baseName": "msg_id",
            "type": "number",
            "format": ""
        },
        {
            "name": "updatedAt",
            "baseName": "updated_at",
            "type": "number",
            "format": ""
        },
        {
            "name": "operation",
            "baseName": "operation",
            "type": "string",
            "format": ""
        }
    ];
    return RemoveReactionFromAMessageResponse;
}());
exports.RemoveReactionFromAMessageResponse = RemoveReactionFromAMessageResponse;
//# sourceMappingURL=RemoveReactionFromAMessageResponse.js.map