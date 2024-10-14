"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateChannelMetadataData = void 0;
var CreateChannelMetadataData = (function () {
    function CreateChannelMetadataData() {
    }
    CreateChannelMetadataData.getAttributeTypeMap = function () {
        return CreateChannelMetadataData.attributeTypeMap;
    };
    CreateChannelMetadataData.discriminator = undefined;
    CreateChannelMetadataData.attributeTypeMap = [
        {
            "name": "channelType",
            "baseName": "channel_type",
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
            "name": "metadata",
            "baseName": "metadata",
            "type": "any",
            "format": ""
        },
        {
            "name": "includeTs",
            "baseName": "include_ts",
            "type": "boolean",
            "format": ""
        }
    ];
    return CreateChannelMetadataData;
}());
exports.CreateChannelMetadataData = CreateChannelMetadataData;
//# sourceMappingURL=CreateChannelMetadataData.js.map