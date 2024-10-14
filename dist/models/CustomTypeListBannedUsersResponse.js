"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CustomTypeListBannedUsersResponse = void 0;
var CustomTypeListBannedUsersResponse = (function () {
    function CustomTypeListBannedUsersResponse() {
    }
    CustomTypeListBannedUsersResponse.getAttributeTypeMap = function () {
        return CustomTypeListBannedUsersResponse.attributeTypeMap;
    };
    CustomTypeListBannedUsersResponse.discriminator = undefined;
    CustomTypeListBannedUsersResponse.attributeTypeMap = [
        {
            "name": "bannedList",
            "baseName": "banned_list",
            "type": "Array<OcListBannedUsersResponseBannedListInner>",
            "format": ""
        },
        {
            "name": "next",
            "baseName": "next",
            "type": "string",
            "format": ""
        }
    ];
    return CustomTypeListBannedUsersResponse;
}());
exports.CustomTypeListBannedUsersResponse = CustomTypeListBannedUsersResponse;
//# sourceMappingURL=CustomTypeListBannedUsersResponse.js.map