"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ListMutedChannelsResponse = void 0;
var ListMutedChannelsResponse = (function () {
    function ListMutedChannelsResponse() {
    }
    ListMutedChannelsResponse.getAttributeTypeMap = function () {
        return ListMutedChannelsResponse.attributeTypeMap;
    };
    ListMutedChannelsResponse.discriminator = undefined;
    ListMutedChannelsResponse.attributeTypeMap = [
        {
            "name": "mutedChannels",
            "baseName": "muted_channels",
            "type": "Array<SendBirdChannelResponse>",
            "format": ""
        },
        {
            "name": "next",
            "baseName": "next",
            "type": "string",
            "format": ""
        }
    ];
    return ListMutedChannelsResponse;
}());
exports.ListMutedChannelsResponse = ListMutedChannelsResponse;
//# sourceMappingURL=ListMutedChannelsResponse.js.map