"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SendBirdGroupChannelDisappearingMessage = void 0;
var SendBirdGroupChannelDisappearingMessage = (function () {
    function SendBirdGroupChannelDisappearingMessage() {
    }
    SendBirdGroupChannelDisappearingMessage.getAttributeTypeMap = function () {
        return SendBirdGroupChannelDisappearingMessage.attributeTypeMap;
    };
    SendBirdGroupChannelDisappearingMessage.discriminator = undefined;
    SendBirdGroupChannelDisappearingMessage.attributeTypeMap = [
        {
            "name": "messageSurvivalSeconds",
            "baseName": "message_survival_seconds",
            "type": "number",
            "format": ""
        },
        {
            "name": "isTriggeredByMessageRead",
            "baseName": "is_triggered_by_message_read",
            "type": "boolean",
            "format": ""
        }
    ];
    return SendBirdGroupChannelDisappearingMessage;
}());
exports.SendBirdGroupChannelDisappearingMessage = SendBirdGroupChannelDisappearingMessage;
//# sourceMappingURL=SendBirdGroupChannelDisappearingMessage.js.map