"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SendBirdBotsMessageResponseMessage = void 0;
var SendBirdBotsMessageResponseMessage = (function () {
    function SendBirdBotsMessageResponseMessage() {
    }
    SendBirdBotsMessageResponseMessage.getAttributeTypeMap = function () {
        return SendBirdBotsMessageResponseMessage.attributeTypeMap;
    };
    SendBirdBotsMessageResponseMessage.discriminator = undefined;
    SendBirdBotsMessageResponseMessage.attributeTypeMap = [
        {
            "name": "messageSurvivalSeconds",
            "baseName": "message_survival_seconds",
            "type": "number",
            "format": ""
        },
        {
            "name": "customType",
            "baseName": "custom_type",
            "type": "string",
            "format": ""
        },
        {
            "name": "mentionedUsers",
            "baseName": "mentioned_users",
            "type": "Array<SendBirdMessageResponseMentionedUsersInner>",
            "format": ""
        },
        {
            "name": "translations",
            "baseName": "translations",
            "type": "any",
            "format": ""
        },
        {
            "name": "updatedAt",
            "baseName": "updated_at",
            "type": "number",
            "format": ""
        },
        {
            "name": "isOpMsg",
            "baseName": "is_op_msg",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "isRemoved",
            "baseName": "is_removed",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "user",
            "baseName": "user",
            "type": "SendBirdMessageResponseUser",
            "format": ""
        },
        {
            "name": "file",
            "baseName": "file",
            "type": "any",
            "format": ""
        },
        {
            "name": "message",
            "baseName": "message",
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
            "name": "messageRetentionHour",
            "baseName": "message_retention_hour",
            "type": "number",
            "format": ""
        },
        {
            "name": "silent",
            "baseName": "silent",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "type",
            "baseName": "type",
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
            "name": "channelType",
            "baseName": "channel_type",
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
            "name": "messageEvents",
            "baseName": "message_events",
            "type": "SendBirdBotsMessageResponseMessageMessageEvents",
            "format": ""
        },
        {
            "name": "extendedMessagePayload",
            "baseName": "extended_message_payload",
            "type": "SendBirdBotsMessageResponseMessageExtendedMessagePayload",
            "format": ""
        }
    ];
    return SendBirdBotsMessageResponseMessage;
}());
exports.SendBirdBotsMessageResponseMessage = SendBirdBotsMessageResponseMessage;
//# sourceMappingURL=SendBirdBotsMessageResponseMessage.js.map