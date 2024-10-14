"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SendBirdAdminMessage = void 0;
var SendBirdAdminMessage = (function () {
    function SendBirdAdminMessage() {
    }
    SendBirdAdminMessage.getAttributeTypeMap = function () {
        return SendBirdAdminMessage.attributeTypeMap;
    };
    SendBirdAdminMessage.discriminator = undefined;
    SendBirdAdminMessage.attributeTypeMap = [
        {
            "name": "appleCriticalAlertOptions",
            "baseName": "apple_critical_alert_options",
            "type": "SendBirdAppleCriticalAlertOptions",
            "format": ""
        },
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
            "name": "createdAt",
            "baseName": "created_at",
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
            "name": "data",
            "baseName": "data",
            "type": "string",
            "format": ""
        },
        {
            "name": "isReplyToChannel",
            "baseName": "is_reply_to_channel",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "mentionType",
            "baseName": "mention_type",
            "type": "string",
            "format": ""
        },
        {
            "name": "mentionedUsers",
            "baseName": "mentioned_users",
            "type": "Array<SendBirdUser>",
            "format": ""
        },
        {
            "name": "message",
            "baseName": "message",
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
            "type": "SendBirdAdminMessageMessageTypeEnum",
            "format": ""
        },
        {
            "name": "metaArray",
            "baseName": "meta_array",
            "type": "SBObject",
            "format": ""
        },
        {
            "name": "metaArrays",
            "baseName": "meta_arrays",
            "type": "Array<SendBirdMessageMetaArray>",
            "format": ""
        },
        {
            "name": "ogMetaData",
            "baseName": "og_meta_data",
            "type": "SendBirdOGMetaData",
            "format": ""
        },
        {
            "name": "parentMessage",
            "baseName": "parent_message",
            "type": "SendBirdMessageResponse",
            "format": ""
        },
        {
            "name": "parentMessageId",
            "baseName": "parent_message_id",
            "type": "number",
            "format": ""
        },
        {
            "name": "parentMessageText",
            "baseName": "parent_message_text",
            "type": "string",
            "format": ""
        },
        {
            "name": "reactions",
            "baseName": "reactions",
            "type": "Array<SendBirdReaction>",
            "format": ""
        },
        {
            "name": "sendingStatus",
            "baseName": "sending_status",
            "type": "SendBirdAdminMessageSendingStatusEnum",
            "format": ""
        },
        {
            "name": "silent",
            "baseName": "silent",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "threadInfo",
            "baseName": "thread_info",
            "type": "SendBirdThreadInfo",
            "format": ""
        },
        {
            "name": "translations",
            "baseName": "translations",
            "type": "SBObject",
            "format": ""
        },
        {
            "name": "updatedAt",
            "baseName": "updated_at",
            "type": "number",
            "format": ""
        }
    ];
    return SendBirdAdminMessage;
}());
exports.SendBirdAdminMessage = SendBirdAdminMessage;
//# sourceMappingURL=SendBirdAdminMessage.js.map