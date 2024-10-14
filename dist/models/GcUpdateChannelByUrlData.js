"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GcUpdateChannelByUrlData = void 0;
var GcUpdateChannelByUrlData = (function () {
    function GcUpdateChannelByUrlData() {
    }
    GcUpdateChannelByUrlData.getAttributeTypeMap = function () {
        return GcUpdateChannelByUrlData.attributeTypeMap;
    };
    GcUpdateChannelByUrlData.discriminator = undefined;
    GcUpdateChannelByUrlData.attributeTypeMap = [
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
            "name": "isDistinct",
            "baseName": "is_distinct",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "isPublic",
            "baseName": "is_public",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "accessCode",
            "baseName": "access_code",
            "type": "string",
            "format": ""
        },
        {
            "name": "operatorIds",
            "baseName": "operator_ids",
            "type": "Array<string>",
            "format": ""
        }
    ];
    return GcUpdateChannelByUrlData;
}());
exports.GcUpdateChannelByUrlData = GcUpdateChannelByUrlData;
//# sourceMappingURL=GcUpdateChannelByUrlData.js.map