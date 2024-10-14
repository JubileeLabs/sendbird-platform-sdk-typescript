"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SendBotSMessageData = void 0;
var SendBotSMessageData = (function () {
    function SendBotSMessageData() {
    }
    SendBotSMessageData.getAttributeTypeMap = function () {
        return SendBotSMessageData.attributeTypeMap;
    };
    SendBotSMessageData.discriminator = undefined;
    SendBotSMessageData.attributeTypeMap = [
        {
            "name": "message",
            "baseName": "message",
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
            "name": "sendPush",
            "baseName": "send_push",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "mentioned",
            "baseName": "mentioned",
            "type": "Array<string>",
            "format": ""
        },
        {
            "name": "markAsRead",
            "baseName": "mark_as_read",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "dedupId",
            "baseName": "dedup_id",
            "type": "string",
            "format": ""
        },
        {
            "name": "createdAt",
            "baseName": "created_at",
            "type": "number",
            "format": ""
        },
        {
            "name": "extendedMessagePayload",
            "baseName": "extended_message_payload",
            "type": "SendBotSMessageDataExtendedMessagePayload",
            "format": ""
        },
        {
            "name": "targetMessageId",
            "baseName": "target_message_id",
            "type": "number",
            "format": "int64"
        }
    ];
    return SendBotSMessageData;
}());
exports.SendBotSMessageData = SendBotSMessageData;
//# sourceMappingURL=SendBotSMessageData.js.map