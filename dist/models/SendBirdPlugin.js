"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SendBirdPlugin = void 0;
var SendBirdPlugin = (function () {
    function SendBirdPlugin() {
    }
    SendBirdPlugin.getAttributeTypeMap = function () {
        return SendBirdPlugin.attributeTypeMap;
    };
    SendBirdPlugin.discriminator = undefined;
    SendBirdPlugin.attributeTypeMap = [
        {
            "name": "detail",
            "baseName": "detail",
            "type": "any",
            "format": ""
        },
        {
            "name": "type",
            "baseName": "type",
            "type": "string",
            "format": ""
        },
        {
            "name": "vendor",
            "baseName": "vendor",
            "type": "string",
            "format": ""
        }
    ];
    return SendBirdPlugin;
}());
exports.SendBirdPlugin = SendBirdPlugin;
//# sourceMappingURL=SendBirdPlugin.js.map