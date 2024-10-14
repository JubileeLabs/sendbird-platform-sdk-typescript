"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OcCreateChannelData = void 0;
var OcCreateChannelData = (function () {
    function OcCreateChannelData() {
    }
    OcCreateChannelData.getAttributeTypeMap = function () {
        return OcCreateChannelData.attributeTypeMap;
    };
    OcCreateChannelData.discriminator = undefined;
    OcCreateChannelData.attributeTypeMap = [
        {
            "name": "name",
            "baseName": "name",
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
            "name": "isEphemeral",
            "baseName": "is_ephemeral",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "isDynamicPartitioned2HowDynamicPartitioningWorks",
            "baseName": "[is_dynamic_partitioned](#2-how-dynamic-partitioning-works)",
            "type": "boolean",
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
    return OcCreateChannelData;
}());
exports.OcCreateChannelData = OcCreateChannelData;
//# sourceMappingURL=OcCreateChannelData.js.map