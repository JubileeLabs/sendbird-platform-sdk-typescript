"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AddReactionToAMessageResponse = void 0;
var AddReactionToAMessageResponse = (function () {
    function AddReactionToAMessageResponse() {
    }
    AddReactionToAMessageResponse.getAttributeTypeMap = function () {
        return AddReactionToAMessageResponse.attributeTypeMap;
    };
    AddReactionToAMessageResponse.discriminator = undefined;
    AddReactionToAMessageResponse.attributeTypeMap = [
        {
            "name": "userId",
            "baseName": "user_id",
            "type": "string",
            "format": ""
        },
        {
            "name": "operation",
            "baseName": "operation",
            "type": "string",
            "format": ""
        },
        {
            "name": "success",
            "baseName": "success",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "reaction",
            "baseName": "reaction",
            "type": "string",
            "format": ""
        },
        {
            "name": "updatedAt",
            "baseName": "updated_at",
            "type": "number",
            "format": ""
        },
        {
            "name": "msgId",
            "baseName": "msg_id",
            "type": "number",
            "format": ""
        }
    ];
    return AddReactionToAMessageResponse;
}());
exports.AddReactionToAMessageResponse = AddReactionToAMessageResponse;
//# sourceMappingURL=AddReactionToAMessageResponse.js.map