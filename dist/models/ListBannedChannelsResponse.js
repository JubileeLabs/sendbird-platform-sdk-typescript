"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ListBannedChannelsResponse = void 0;
var ListBannedChannelsResponse = (function () {
    function ListBannedChannelsResponse() {
    }
    ListBannedChannelsResponse.getAttributeTypeMap = function () {
        return ListBannedChannelsResponse.attributeTypeMap;
    };
    ListBannedChannelsResponse.discriminator = undefined;
    ListBannedChannelsResponse.attributeTypeMap = [
        {
            "name": "bannedChannels",
            "baseName": "banned_channels",
            "type": "Array<ListBannedChannelsResponseBannedChannelsInner>",
            "format": ""
        },
        {
            "name": "next",
            "baseName": "next",
            "type": "string",
            "format": ""
        }
    ];
    return ListBannedChannelsResponse;
}());
exports.ListBannedChannelsResponse = ListBannedChannelsResponse;
//# sourceMappingURL=ListBannedChannelsResponse.js.map