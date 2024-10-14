"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OcListBannedUsersResponse = void 0;
var OcListBannedUsersResponse = (function () {
    function OcListBannedUsersResponse() {
    }
    OcListBannedUsersResponse.getAttributeTypeMap = function () {
        return OcListBannedUsersResponse.attributeTypeMap;
    };
    OcListBannedUsersResponse.discriminator = undefined;
    OcListBannedUsersResponse.attributeTypeMap = [
        {
            "name": "bannedList",
            "baseName": "banned_list",
            "type": "Array<OcListBannedUsersResponseBannedListInner>",
            "format": ""
        },
        {
            "name": "totalBanCount",
            "baseName": "total_ban_count",
            "type": "number",
            "format": ""
        },
        {
            "name": "next",
            "baseName": "next",
            "type": "string",
            "format": ""
        }
    ];
    return OcListBannedUsersResponse;
}());
exports.OcListBannedUsersResponse = OcListBannedUsersResponse;
//# sourceMappingURL=OcListBannedUsersResponse.js.map