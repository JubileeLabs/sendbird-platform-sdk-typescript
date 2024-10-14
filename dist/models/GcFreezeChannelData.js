"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GcFreezeChannelData = void 0;
var GcFreezeChannelData = (function () {
    function GcFreezeChannelData() {
    }
    GcFreezeChannelData.getAttributeTypeMap = function () {
        return GcFreezeChannelData.attributeTypeMap;
    };
    GcFreezeChannelData.discriminator = undefined;
    GcFreezeChannelData.attributeTypeMap = [
        {
            "name": "channelUrl",
            "baseName": "channel_url",
            "type": "string",
            "format": ""
        },
        {
            "name": "freeze",
            "baseName": "freeze",
            "type": "boolean",
            "format": ""
        }
    ];
    return GcFreezeChannelData;
}());
exports.GcFreezeChannelData = GcFreezeChannelData;
//# sourceMappingURL=GcFreezeChannelData.js.map