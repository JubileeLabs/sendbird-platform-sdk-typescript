"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateMessageByIdData = void 0;
var UpdateMessageByIdData = (function () {
    function UpdateMessageByIdData() {
    }
    UpdateMessageByIdData.getAttributeTypeMap = function () {
        return UpdateMessageByIdData.attributeTypeMap;
    };
    UpdateMessageByIdData.discriminator = undefined;
    UpdateMessageByIdData.attributeTypeMap = [
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
            "name": "messageType",
            "baseName": "message_type",
            "type": "string",
            "format": ""
        },
        {
            "name": "message",
            "baseName": "message",
            "type": "string",
            "format": ""
        },
        {
            "name": "customType",
            "baseName": "custom_type",
            "type": "string",
            "format": ""
        },
        {
            "name": "data",
            "baseName": "data",
            "type": "string",
            "format": ""
        },
        {
            "name": "mentionType",
            "baseName": "mention_type",
            "type": "string",
            "format": ""
        },
        {
            "name": "mentionedUserIds",
            "baseName": "mentioned_user_ids",
            "type": "Array<string>",
            "format": ""
        }
    ];
    return UpdateMessageByIdData;
}());
exports.UpdateMessageByIdData = UpdateMessageByIdData;
//# sourceMappingURL=UpdateMessageByIdData.js.map