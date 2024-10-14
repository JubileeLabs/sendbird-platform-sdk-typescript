"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SendBirdGroupChannelSmsFallback = void 0;
var SendBirdGroupChannelSmsFallback = (function () {
    function SendBirdGroupChannelSmsFallback() {
    }
    SendBirdGroupChannelSmsFallback.getAttributeTypeMap = function () {
        return SendBirdGroupChannelSmsFallback.attributeTypeMap;
    };
    SendBirdGroupChannelSmsFallback.discriminator = undefined;
    SendBirdGroupChannelSmsFallback.attributeTypeMap = [
        {
            "name": "waitSeconds",
            "baseName": "wait_seconds",
            "type": "number",
            "format": ""
        },
        {
            "name": "excludeUserIds",
            "baseName": "exclude_user_ids",
            "type": "Array<string>",
            "format": ""
        }
    ];
    return SendBirdGroupChannelSmsFallback;
}());
exports.SendBirdGroupChannelSmsFallback = SendBirdGroupChannelSmsFallback;
//# sourceMappingURL=SendBirdGroupChannelSmsFallback.js.map