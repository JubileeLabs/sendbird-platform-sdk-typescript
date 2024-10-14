"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AddReactionToAMessageData = void 0;
var AddReactionToAMessageData = (function () {
    function AddReactionToAMessageData() {
    }
    AddReactionToAMessageData.getAttributeTypeMap = function () {
        return AddReactionToAMessageData.attributeTypeMap;
    };
    AddReactionToAMessageData.discriminator = undefined;
    AddReactionToAMessageData.attributeTypeMap = [
        {
            "name": "channelType",
            "baseName": "channel_type",
            "type": "string",
            "format": ""
        },
        {
            "name": "channelUrl",
            "baseName": "channel_url",
            "type": "string",
            "format": ""
        },
        {
            "name": "messageId",
            "baseName": "message_id",
            "type": "number",
            "format": ""
        },
        {
            "name": "userId",
            "baseName": "user_id",
            "type": "string",
            "format": ""
        },
        {
            "name": "reaction",
            "baseName": "reaction",
            "type": "string",
            "format": ""
        }
    ];
    return AddReactionToAMessageData;
}());
exports.AddReactionToAMessageData = AddReactionToAMessageData;
//# sourceMappingURL=AddReactionToAMessageData.js.map