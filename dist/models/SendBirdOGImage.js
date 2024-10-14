"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SendBirdOGImage = void 0;
var SendBirdOGImage = (function () {
    function SendBirdOGImage() {
    }
    SendBirdOGImage.getAttributeTypeMap = function () {
        return SendBirdOGImage.attributeTypeMap;
    };
    SendBirdOGImage.discriminator = undefined;
    SendBirdOGImage.attributeTypeMap = [
        {
            "name": "alt",
            "baseName": "alt",
            "type": "string",
            "format": ""
        },
        {
            "name": "height",
            "baseName": "height",
            "type": "number",
            "format": ""
        },
        {
            "name": "secureUrl",
            "baseName": "secure_url",
            "type": "string",
            "format": ""
        },
        {
            "name": "type",
            "baseName": "type",
            "type": "string",
            "format": ""
        },
        {
            "name": "url",
            "baseName": "url",
            "type": "string",
            "format": ""
        },
        {
            "name": "width",
            "baseName": "width",
            "type": "number",
            "format": ""
        }
    ];
    return SendBirdOGImage;
}());
exports.SendBirdOGImage = SendBirdOGImage;
//# sourceMappingURL=SendBirdOGImage.js.map