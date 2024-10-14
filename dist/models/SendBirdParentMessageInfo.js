"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SendBirdParentMessageInfo = void 0;
var SendBirdParentMessageInfo = (function () {
    function SendBirdParentMessageInfo() {
    }
    SendBirdParentMessageInfo.getAttributeTypeMap = function () {
        return SendBirdParentMessageInfo.attributeTypeMap;
    };
    SendBirdParentMessageInfo.discriminator = undefined;
    SendBirdParentMessageInfo.attributeTypeMap = [
        {
            "name": "customType",
            "baseName": "custom_type",
            "type": "string",
            "format": ""
        },
        {
            "name": "message",
            "baseName": "message",
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
            "name": "ts",
            "baseName": "ts",
            "type": "number",
            "format": ""
        },
        {
            "name": "user",
            "baseName": "user",
            "type": "SendBirdUser",
            "format": ""
        },
        {
            "name": "file",
            "baseName": "file",
            "type": "SendBirdFile",
            "format": ""
        },
        {
            "name": "files",
            "baseName": "files",
            "type": "Array<SendBirdFile>",
            "format": ""
        }
    ];
    return SendBirdParentMessageInfo;
}());
exports.SendBirdParentMessageInfo = SendBirdParentMessageInfo;
//# sourceMappingURL=SendBirdParentMessageInfo.js.map