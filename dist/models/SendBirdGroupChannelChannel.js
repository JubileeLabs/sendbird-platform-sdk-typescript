"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SendBirdGroupChannelChannel = void 0;
var SendBirdGroupChannelChannel = (function () {
    function SendBirdGroupChannelChannel() {
    }
    SendBirdGroupChannelChannel.getAttributeTypeMap = function () {
        return SendBirdGroupChannelChannel.attributeTypeMap;
    };
    SendBirdGroupChannelChannel.discriminator = undefined;
    SendBirdGroupChannelChannel.attributeTypeMap = [
        {
            "name": "channelUrl",
            "baseName": "channel_url",
            "type": "string",
            "format": ""
        },
        {
            "name": "name",
            "baseName": "name",
            "type": "string",
            "format": ""
        },
        {
            "name": "coverUrl",
            "baseName": "cover_url",
            "type": "string",
            "format": ""
        },
        {
            "name": "data",
            "baseName": "data",
            "type": "string",
            "format": ""
        },
        {
            "name": "createdAt",
            "baseName": "created_at",
            "type": "number",
            "format": ""
        },
        {
            "name": "customType",
            "baseName": "custom_type",
            "type": "string",
            "format": ""
        },
        {
            "name": "maxLengthMessage",
            "baseName": "max_length_message",
            "type": "number",
            "format": ""
        },
        {
            "name": "memberCount",
            "baseName": "member_count",
            "type": "number",
            "format": ""
        }
    ];
    return SendBirdGroupChannelChannel;
}());
exports.SendBirdGroupChannelChannel = SendBirdGroupChannelChannel;
//# sourceMappingURL=SendBirdGroupChannelChannel.js.map