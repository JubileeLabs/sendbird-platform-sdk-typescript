"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GcListChannelsResponse = void 0;
var GcListChannelsResponse = (function () {
    function GcListChannelsResponse() {
    }
    GcListChannelsResponse.getAttributeTypeMap = function () {
        return GcListChannelsResponse.attributeTypeMap;
    };
    GcListChannelsResponse.discriminator = undefined;
    GcListChannelsResponse.attributeTypeMap = [
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
    return GcListChannelsResponse;
}());
exports.GcListChannelsResponse = GcListChannelsResponse;
//# sourceMappingURL=GcListChannelsResponse.js.map