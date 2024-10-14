"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SendBirdBotsMessageResponseMessageExtendedMessagePayload = void 0;
var SendBirdBotsMessageResponseMessageExtendedMessagePayload = (function () {
    function SendBirdBotsMessageResponseMessageExtendedMessagePayload() {
    }
    SendBirdBotsMessageResponseMessageExtendedMessagePayload.getAttributeTypeMap = function () {
        return SendBirdBotsMessageResponseMessageExtendedMessagePayload.attributeTypeMap;
    };
    SendBirdBotsMessageResponseMessageExtendedMessagePayload.discriminator = undefined;
    SendBirdBotsMessageResponseMessageExtendedMessagePayload.attributeTypeMap = [
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
    return SendBirdBotsMessageResponseMessageExtendedMessagePayload;
}());
exports.SendBirdBotsMessageResponseMessageExtendedMessagePayload = SendBirdBotsMessageResponseMessageExtendedMessagePayload;
//# sourceMappingURL=SendBirdBotsMessageResponseMessageExtendedMessagePayload.js.map