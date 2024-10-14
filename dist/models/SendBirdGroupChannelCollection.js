"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SendBirdGroupChannelCollection = void 0;
var SendBirdGroupChannelCollection = (function () {
    function SendBirdGroupChannelCollection() {
    }
    SendBirdGroupChannelCollection.getAttributeTypeMap = function () {
        return SendBirdGroupChannelCollection.attributeTypeMap;
    };
    SendBirdGroupChannelCollection.discriminator = undefined;
    SendBirdGroupChannelCollection.attributeTypeMap = [
        {
            "name": "channelList",
            "baseName": "channel_list",
            "type": "Array<SendBirdGroupChannel>",
            "format": ""
        },
        {
            "name": "hasMore",
            "baseName": "has_more",
            "type": "boolean",
            "format": ""
        }
    ];
    return SendBirdGroupChannelCollection;
}());
exports.SendBirdGroupChannelCollection = SendBirdGroupChannelCollection;
//# sourceMappingURL=SendBirdGroupChannelCollection.js.map