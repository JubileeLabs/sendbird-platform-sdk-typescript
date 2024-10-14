"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateChannelMetadataResponse = void 0;
var CreateChannelMetadataResponse = (function () {
    function CreateChannelMetadataResponse() {
    }
    CreateChannelMetadataResponse.getAttributeTypeMap = function () {
        return CreateChannelMetadataResponse.attributeTypeMap;
    };
    CreateChannelMetadataResponse.discriminator = undefined;
    CreateChannelMetadataResponse.attributeTypeMap = [
        {
            "name": "metadata",
            "baseName": "metadata",
            "type": "{ [key: string]: string; }",
            "format": ""
        },
        {
            "name": "includeTs",
            "baseName": "include_ts",
            "type": "number",
            "format": ""
        }
    ];
    return CreateChannelMetadataResponse;
}());
exports.CreateChannelMetadataResponse = CreateChannelMetadataResponse;
//# sourceMappingURL=CreateChannelMetadataResponse.js.map