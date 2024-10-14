"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SendBotSMessageDataExtendedMessagePayload = void 0;
var SendBotSMessageDataExtendedMessagePayload = (function () {
    function SendBotSMessageDataExtendedMessagePayload() {
    }
    SendBotSMessageDataExtendedMessagePayload.getAttributeTypeMap = function () {
        return SendBotSMessageDataExtendedMessagePayload.attributeTypeMap;
    };
    SendBotSMessageDataExtendedMessagePayload.discriminator = undefined;
    SendBotSMessageDataExtendedMessagePayload.attributeTypeMap = [
        {
            "name": "suggestedReplies",
            "baseName": "suggested_replies",
            "type": "Array<string>",
            "format": ""
        },
        {
            "name": "customView",
            "baseName": "custom_view",
            "type": "any",
            "format": ""
        }
    ];
    return SendBotSMessageDataExtendedMessagePayload;
}());
exports.SendBotSMessageDataExtendedMessagePayload = SendBotSMessageDataExtendedMessagePayload;
//# sourceMappingURL=SendBotSMessageDataExtendedMessagePayload.js.map