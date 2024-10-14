"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.JoinChannelsResponse = void 0;
var JoinChannelsResponse = (function () {
    function JoinChannelsResponse() {
    }
    JoinChannelsResponse.getAttributeTypeMap = function () {
        return JoinChannelsResponse.attributeTypeMap;
    };
    JoinChannelsResponse.discriminator = undefined;
    JoinChannelsResponse.attributeTypeMap = [
        {
            "name": "channels",
            "baseName": "channels",
            "type": "Array<SendBirdGroupChannel>",
            "format": ""
        }
    ];
    return JoinChannelsResponse;
}());
exports.JoinChannelsResponse = JoinChannelsResponse;
//# sourceMappingURL=JoinChannelsResponse.js.map