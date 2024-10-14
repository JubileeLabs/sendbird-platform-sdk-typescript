"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GcBanUserData = void 0;
var GcBanUserData = (function () {
    function GcBanUserData() {
    }
    GcBanUserData.getAttributeTypeMap = function () {
        return GcBanUserData.attributeTypeMap;
    };
    GcBanUserData.discriminator = undefined;
    GcBanUserData.attributeTypeMap = [
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
            "name": "agentId",
            "baseName": "agent_id",
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
    return GcBanUserData;
}());
exports.GcBanUserData = GcBanUserData;
//# sourceMappingURL=GcBanUserData.js.map