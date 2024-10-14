"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.JoinChannelsData = void 0;
var JoinChannelsData = (function () {
    function JoinChannelsData() {
    }
    JoinChannelsData.getAttributeTypeMap = function () {
        return JoinChannelsData.attributeTypeMap;
    };
    JoinChannelsData.discriminator = undefined;
    JoinChannelsData.attributeTypeMap = [
        {
            "name": "botUserid",
            "baseName": "bot_userid",
            "type": "string",
            "format": ""
        },
        {
            "name": "channelUrls",
            "baseName": "channel_urls",
            "type": "Array<string>",
            "format": ""
        }
    ];
    return JoinChannelsData;
}());
exports.JoinChannelsData = JoinChannelsData;
//# sourceMappingURL=JoinChannelsData.js.map