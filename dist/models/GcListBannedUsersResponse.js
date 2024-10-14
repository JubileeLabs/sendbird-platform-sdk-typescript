"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GcListBannedUsersResponse = void 0;
var GcListBannedUsersResponse = (function () {
    function GcListBannedUsersResponse() {
    }
    GcListBannedUsersResponse.getAttributeTypeMap = function () {
        return GcListBannedUsersResponse.attributeTypeMap;
    };
    GcListBannedUsersResponse.discriminator = undefined;
    GcListBannedUsersResponse.attributeTypeMap = [
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
    return GcListBannedUsersResponse;
}());
exports.GcListBannedUsersResponse = GcListBannedUsersResponse;
//# sourceMappingURL=GcListBannedUsersResponse.js.map