"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SendBirdBotsMessageResponseMessageMessageEvents = void 0;
var SendBirdBotsMessageResponseMessageMessageEvents = (function () {
    function SendBirdBotsMessageResponseMessageMessageEvents() {
    }
    SendBirdBotsMessageResponseMessageMessageEvents.getAttributeTypeMap = function () {
        return SendBirdBotsMessageResponseMessageMessageEvents.attributeTypeMap;
    };
    SendBirdBotsMessageResponseMessageMessageEvents.discriminator = undefined;
    SendBirdBotsMessageResponseMessageMessageEvents.attributeTypeMap = [
        {
            "name": "sendPushNotification",
            "baseName": "send_push_notification",
            "type": "string",
            "format": ""
        },
        {
            "name": "updateUnreadCount",
            "baseName": "update_unread_count",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "updateMentionCount",
            "baseName": "update_mention_count",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "updateLastMessage",
            "baseName": "update_last_message",
            "type": "boolean",
            "format": ""
        }
    ];
    return SendBirdBotsMessageResponseMessageMessageEvents;
}());
exports.SendBirdBotsMessageResponseMessageMessageEvents = SendBirdBotsMessageResponseMessageMessageEvents;
//# sourceMappingURL=SendBirdBotsMessageResponseMessageMessageEvents.js.map