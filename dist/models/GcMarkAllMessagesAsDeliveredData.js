"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GcMarkAllMessagesAsDeliveredData = void 0;
var GcMarkAllMessagesAsDeliveredData = (function () {
    function GcMarkAllMessagesAsDeliveredData() {
    }
    GcMarkAllMessagesAsDeliveredData.getAttributeTypeMap = function () {
        return GcMarkAllMessagesAsDeliveredData.attributeTypeMap;
    };
    GcMarkAllMessagesAsDeliveredData.discriminator = undefined;
    GcMarkAllMessagesAsDeliveredData.attributeTypeMap = [
        {
            "name": "applicationId",
            "baseName": "application_id",
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
            "name": "userId",
            "baseName": "user_id",
            "type": "string",
            "format": ""
        }
    ];
    return GcMarkAllMessagesAsDeliveredData;
}());
exports.GcMarkAllMessagesAsDeliveredData = GcMarkAllMessagesAsDeliveredData;
//# sourceMappingURL=GcMarkAllMessagesAsDeliveredData.js.map