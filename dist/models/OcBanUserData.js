"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OcBanUserData = void 0;
var OcBanUserData = (function () {
    function OcBanUserData() {
    }
    OcBanUserData.getAttributeTypeMap = function () {
        return OcBanUserData.attributeTypeMap;
    };
    OcBanUserData.discriminator = undefined;
    OcBanUserData.attributeTypeMap = [
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
    return OcBanUserData;
}());
exports.OcBanUserData = OcBanUserData;
//# sourceMappingURL=OcBanUserData.js.map