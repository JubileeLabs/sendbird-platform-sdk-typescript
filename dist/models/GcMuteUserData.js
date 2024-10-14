"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GcMuteUserData = void 0;
var GcMuteUserData = (function () {
    function GcMuteUserData() {
    }
    GcMuteUserData.getAttributeTypeMap = function () {
        return GcMuteUserData.attributeTypeMap;
    };
    GcMuteUserData.discriminator = undefined;
    GcMuteUserData.attributeTypeMap = [
        {
            "name": "channelUrl",
            "baseName": "channel_url",
            "type": "string",
            "format": ""
        },
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
    return GcMuteUserData;
}());
exports.GcMuteUserData = GcMuteUserData;
//# sourceMappingURL=GcMuteUserData.js.map