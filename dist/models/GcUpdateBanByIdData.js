"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GcUpdateBanByIdData = void 0;
var GcUpdateBanByIdData = (function () {
    function GcUpdateBanByIdData() {
    }
    GcUpdateBanByIdData.getAttributeTypeMap = function () {
        return GcUpdateBanByIdData.attributeTypeMap;
    };
    GcUpdateBanByIdData.discriminator = undefined;
    GcUpdateBanByIdData.attributeTypeMap = [
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
    return GcUpdateBanByIdData;
}());
exports.GcUpdateBanByIdData = GcUpdateBanByIdData;
//# sourceMappingURL=GcUpdateBanByIdData.js.map