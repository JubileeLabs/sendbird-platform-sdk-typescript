"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SendBirdScheduledMessage = void 0;
var SendBirdScheduledMessage = (function () {
    function SendBirdScheduledMessage() {
    }
    SendBirdScheduledMessage.getAttributeTypeMap = function () {
        return SendBirdScheduledMessage.attributeTypeMap;
    };
    SendBirdScheduledMessage.discriminator = undefined;
    SendBirdScheduledMessage.attributeTypeMap = [
        {
            "name": "scheduledMessageId",
            "baseName": "scheduled_message_id",
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
        }
    ];
    return SendBirdScheduledMessage;
}());
exports.SendBirdScheduledMessage = SendBirdScheduledMessage;
//# sourceMappingURL=SendBirdScheduledMessage.js.map