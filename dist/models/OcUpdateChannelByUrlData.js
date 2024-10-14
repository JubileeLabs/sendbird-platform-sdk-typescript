"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OcUpdateChannelByUrlData = void 0;
var OcUpdateChannelByUrlData = (function () {
    function OcUpdateChannelByUrlData() {
    }
    OcUpdateChannelByUrlData.getAttributeTypeMap = function () {
        return OcUpdateChannelByUrlData.attributeTypeMap;
    };
    OcUpdateChannelByUrlData.discriminator = undefined;
    OcUpdateChannelByUrlData.attributeTypeMap = [
        {
            "name": "channelUrl",
            "baseName": "channel_url",
            "type": "string",
            "format": ""
        },
        {
            "name": "name",
            "baseName": "name",
            "type": "string",
            "format": ""
        },
        {
            "name": "coverUrl",
            "baseName": "cover_url",
            "type": "string",
            "format": ""
        },
        {
            "name": "coverFile",
            "baseName": "cover_file",
            "type": "HttpFile",
            "format": "binary"
        },
        {
            "name": "customType",
            "baseName": "custom_type",
            "type": "string",
            "format": ""
        },
        {
            "name": "data",
            "baseName": "data",
            "type": "string",
            "format": ""
        },
        {
            "name": "operatorIds",
            "baseName": "operator_ids",
            "type": "Array<string>",
            "format": ""
        },
        {
            "name": "operators",
            "baseName": "operators",
            "type": "Array<string>",
            "format": ""
        }
    ];
    return OcUpdateChannelByUrlData;
}());
exports.OcUpdateChannelByUrlData = OcUpdateChannelByUrlData;
//# sourceMappingURL=OcUpdateChannelByUrlData.js.map