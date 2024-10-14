"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OcFreezeChannelData = void 0;
var OcFreezeChannelData = (function () {
    function OcFreezeChannelData() {
    }
    OcFreezeChannelData.getAttributeTypeMap = function () {
        return OcFreezeChannelData.attributeTypeMap;
    };
    OcFreezeChannelData.discriminator = undefined;
    OcFreezeChannelData.attributeTypeMap = [
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
    return OcFreezeChannelData;
}());
exports.OcFreezeChannelData = OcFreezeChannelData;
//# sourceMappingURL=OcFreezeChannelData.js.map