"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SendBirdMessageMetaArray = void 0;
var SendBirdMessageMetaArray = (function () {
    function SendBirdMessageMetaArray() {
    }
    SendBirdMessageMetaArray.getAttributeTypeMap = function () {
        return SendBirdMessageMetaArray.attributeTypeMap;
    };
    SendBirdMessageMetaArray.discriminator = undefined;
    SendBirdMessageMetaArray.attributeTypeMap = [
        {
            "name": "key",
            "baseName": "key",
            "type": "string",
            "format": ""
        },
        {
            "name": "value",
            "baseName": "value",
            "type": "Array<string>",
            "format": ""
        }
    ];
    return SendBirdMessageMetaArray;
}());
exports.SendBirdMessageMetaArray = SendBirdMessageMetaArray;
//# sourceMappingURL=SendBirdMessageMetaArray.js.map