"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SendBirdOGMetaData = void 0;
var SendBirdOGMetaData = (function () {
    function SendBirdOGMetaData() {
    }
    SendBirdOGMetaData.getAttributeTypeMap = function () {
        return SendBirdOGMetaData.attributeTypeMap;
    };
    SendBirdOGMetaData.discriminator = undefined;
    SendBirdOGMetaData.attributeTypeMap = [
        {
            "name": "defaultImage",
            "baseName": "default_image",
            "type": "SendBirdOGImage",
            "format": ""
        },
        {
            "name": "description",
            "baseName": "description",
            "type": "string",
            "format": ""
        },
        {
            "name": "title",
            "baseName": "title",
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
    return SendBirdOGMetaData;
}());
exports.SendBirdOGMetaData = SendBirdOGMetaData;
//# sourceMappingURL=SendBirdOGMetaData.js.map