"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GcResetChatHistoryData = void 0;
var GcResetChatHistoryData = (function () {
    function GcResetChatHistoryData() {
    }
    GcResetChatHistoryData.getAttributeTypeMap = function () {
        return GcResetChatHistoryData.attributeTypeMap;
    };
    GcResetChatHistoryData.discriminator = undefined;
    GcResetChatHistoryData.attributeTypeMap = [
        {
            "name": "channelUrl",
            "baseName": "channel_url",
            "type": "string",
            "format": ""
        },
        {
            "name": "userId",
            "baseName": "user_id",
            "type": "string",
            "format": ""
        },
        {
            "name": "resetAll",
            "baseName": "reset_all",
            "type": "boolean",
            "format": ""
        }
    ];
    return GcResetChatHistoryData;
}());
exports.GcResetChatHistoryData = GcResetChatHistoryData;
//# sourceMappingURL=GcResetChatHistoryData.js.map