"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SendBirdOpenChannel = void 0;
var SendBirdOpenChannel = (function () {
    function SendBirdOpenChannel() {
    }
    SendBirdOpenChannel.getAttributeTypeMap = function () {
        return SendBirdOpenChannel.attributeTypeMap;
    };
    SendBirdOpenChannel.discriminator = undefined;
    SendBirdOpenChannel.attributeTypeMap = [
        {
            "name": "name",
            "baseName": "name",
            "type": "string",
            "format": ""
        },
        {
            "name": "customType",
            "baseName": "custom_type",
            "type": "string",
            "format": ""
        },
        {
            "name": "channelUrl",
            "baseName": "channel_url",
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
            "name": "coverUrl",
            "baseName": "cover_url",
            "type": "string",
            "format": ""
        },
        {
            "name": "creator",
            "baseName": "creator",
            "type": "SendBirdUser",
            "format": ""
        },
        {
            "name": "data",
            "baseName": "data",
            "type": "string",
            "format": ""
        },
        {
            "name": "isDynamicPartitioned",
            "baseName": "is_dynamic_partitioned",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "isEphemeral",
            "baseName": "is_ephemeral",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "maxLengthMessage",
            "baseName": "max_length_message",
            "type": "number",
            "format": ""
        },
        {
            "name": "operators",
            "baseName": "operators",
            "type": "Array<SendBirdUser>",
            "format": ""
        },
        {
            "name": "participantCount",
            "baseName": "participant_count",
            "type": "number",
            "format": ""
        },
        {
            "name": "freeze",
            "baseName": "freeze",
            "type": "boolean",
            "format": ""
        }
    ];
    return SendBirdOpenChannel;
}());
exports.SendBirdOpenChannel = SendBirdOpenChannel;
//# sourceMappingURL=SendBirdOpenChannel.js.map