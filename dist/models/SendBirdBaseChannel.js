"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SendBirdBaseChannel = void 0;
var SendBirdBaseChannel = (function () {
    function SendBirdBaseChannel() {
    }
    SendBirdBaseChannel.getAttributeTypeMap = function () {
        return SendBirdBaseChannel.attributeTypeMap;
    };
    SendBirdBaseChannel.discriminator = undefined;
    SendBirdBaseChannel.attributeTypeMap = [
        {
            "name": "coverUrl",
            "baseName": "cover_url",
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
            "name": "creator",
            "baseName": "creator",
            "type": "SendBirdUser",
            "format": ""
        },
        {
            "name": "customType",
            "baseName": "custom_type",
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
            "name": "isEphemeral",
            "baseName": "is_ephemeral",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "name",
            "baseName": "name",
            "type": "string",
            "format": ""
        },
        {
            "name": "url",
            "baseName": "url",
            "type": "string",
            "format": ""
        }
    ];
    return SendBirdBaseChannel;
}());
exports.SendBirdBaseChannel = SendBirdBaseChannel;
//# sourceMappingURL=SendBirdBaseChannel.js.map