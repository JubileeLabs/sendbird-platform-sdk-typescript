"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OcListChannelsResponse = void 0;
var OcListChannelsResponse = (function () {
    function OcListChannelsResponse() {
    }
    OcListChannelsResponse.getAttributeTypeMap = function () {
        return OcListChannelsResponse.attributeTypeMap;
    };
    OcListChannelsResponse.discriminator = undefined;
    OcListChannelsResponse.attributeTypeMap = [
        {
            "name": "channels",
            "baseName": "channels",
            "type": "Array<SendBirdOpenChannel>",
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
    return OcListChannelsResponse;
}());
exports.OcListChannelsResponse = OcListChannelsResponse;
//# sourceMappingURL=OcListChannelsResponse.js.map