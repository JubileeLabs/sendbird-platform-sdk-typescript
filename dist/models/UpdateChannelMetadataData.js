"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateChannelMetadataData = void 0;
var UpdateChannelMetadataData = (function () {
    function UpdateChannelMetadataData() {
    }
    UpdateChannelMetadataData.getAttributeTypeMap = function () {
        return UpdateChannelMetadataData.attributeTypeMap;
    };
    UpdateChannelMetadataData.discriminator = undefined;
    UpdateChannelMetadataData.attributeTypeMap = [
        {
            "name": "metadata",
            "baseName": "metadata",
            "type": "any",
            "format": ""
        },
        {
            "name": "upsert",
            "baseName": "upsert",
            "type": "boolean",
            "format": ""
        }
    ];
    return UpdateChannelMetadataData;
}());
exports.UpdateChannelMetadataData = UpdateChannelMetadataData;
//# sourceMappingURL=UpdateChannelMetadataData.js.map