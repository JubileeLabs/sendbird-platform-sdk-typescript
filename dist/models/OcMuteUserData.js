"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OcMuteUserData = void 0;
var OcMuteUserData = (function () {
    function OcMuteUserData() {
    }
    OcMuteUserData.getAttributeTypeMap = function () {
        return OcMuteUserData.attributeTypeMap;
    };
    OcMuteUserData.discriminator = undefined;
    OcMuteUserData.attributeTypeMap = [
        {
            "name": "userId",
            "baseName": "user_id",
            "type": "string",
            "format": ""
        },
        {
            "name": "seconds",
            "baseName": "seconds",
            "type": "number",
            "format": ""
        },
        {
            "name": "description",
            "baseName": "description",
            "type": "string",
            "format": ""
        }
    ];
    return OcMuteUserData;
}());
exports.OcMuteUserData = OcMuteUserData;
//# sourceMappingURL=OcMuteUserData.js.map