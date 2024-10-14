"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MarkAllMessagesAsReadData = void 0;
var MarkAllMessagesAsReadData = (function () {
    function MarkAllMessagesAsReadData() {
    }
    MarkAllMessagesAsReadData.getAttributeTypeMap = function () {
        return MarkAllMessagesAsReadData.attributeTypeMap;
    };
    MarkAllMessagesAsReadData.discriminator = undefined;
    MarkAllMessagesAsReadData.attributeTypeMap = [
        {
            "name": "channelUrls",
            "baseName": "channel_urls",
            "type": "Array<string>",
            "format": ""
        }
    ];
    return MarkAllMessagesAsReadData;
}());
exports.MarkAllMessagesAsReadData = MarkAllMessagesAsReadData;
//# sourceMappingURL=MarkAllMessagesAsReadData.js.map