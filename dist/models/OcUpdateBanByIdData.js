"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OcUpdateBanByIdData = void 0;
var OcUpdateBanByIdData = (function () {
    function OcUpdateBanByIdData() {
    }
    OcUpdateBanByIdData.getAttributeTypeMap = function () {
        return OcUpdateBanByIdData.attributeTypeMap;
    };
    OcUpdateBanByIdData.discriminator = undefined;
    OcUpdateBanByIdData.attributeTypeMap = [
        {
            "name": "channelUrl",
            "baseName": "channel_url",
            "type": "string",
            "format": ""
        },
        {
            "name": "bannedUserId",
            "baseName": "banned_user_id",
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
    return OcUpdateBanByIdData;
}());
exports.OcUpdateBanByIdData = OcUpdateBanByIdData;
//# sourceMappingURL=OcUpdateBanByIdData.js.map