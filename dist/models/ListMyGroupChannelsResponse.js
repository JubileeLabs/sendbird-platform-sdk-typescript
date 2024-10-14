"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ListMyGroupChannelsResponse = void 0;
var ListMyGroupChannelsResponse = (function () {
    function ListMyGroupChannelsResponse() {
    }
    ListMyGroupChannelsResponse.getAttributeTypeMap = function () {
        return ListMyGroupChannelsResponse.attributeTypeMap;
    };
    ListMyGroupChannelsResponse.discriminator = undefined;
    ListMyGroupChannelsResponse.attributeTypeMap = [
        {
            "name": "channels",
            "baseName": "channels",
            "type": "Array<SendBirdGroupChannel>",
            "format": ""
        },
        {
            "name": "next",
            "baseName": "next",
            "type": "string",
            "format": ""
        },
        {
            "name": "ts",
            "baseName": "ts",
            "type": "number",
            "format": ""
        }
    ];
    return ListMyGroupChannelsResponse;
}());
exports.ListMyGroupChannelsResponse = ListMyGroupChannelsResponse;
//# sourceMappingURL=ListMyGroupChannelsResponse.js.map