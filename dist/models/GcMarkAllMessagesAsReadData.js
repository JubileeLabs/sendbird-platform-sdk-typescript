"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GcMarkAllMessagesAsReadData = void 0;
var GcMarkAllMessagesAsReadData = (function () {
    function GcMarkAllMessagesAsReadData() {
    }
    GcMarkAllMessagesAsReadData.getAttributeTypeMap = function () {
        return GcMarkAllMessagesAsReadData.attributeTypeMap;
    };
    GcMarkAllMessagesAsReadData.discriminator = undefined;
    GcMarkAllMessagesAsReadData.attributeTypeMap = [
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
            "name": "timestamp",
            "baseName": "timestamp",
            "type": "number",
            "format": ""
        }
    ];
    return GcMarkAllMessagesAsReadData;
}());
exports.GcMarkAllMessagesAsReadData = GcMarkAllMessagesAsReadData;
//# sourceMappingURL=GcMarkAllMessagesAsReadData.js.map