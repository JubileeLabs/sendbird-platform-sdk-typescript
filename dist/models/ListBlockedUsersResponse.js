"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ListBlockedUsersResponse = void 0;
var ListBlockedUsersResponse = (function () {
    function ListBlockedUsersResponse() {
    }
    ListBlockedUsersResponse.getAttributeTypeMap = function () {
        return ListBlockedUsersResponse.attributeTypeMap;
    };
    ListBlockedUsersResponse.discriminator = undefined;
    ListBlockedUsersResponse.attributeTypeMap = [
        {
            "name": "users",
            "baseName": "users",
            "type": "Array<SendBirdUser>",
            "format": ""
        },
        {
            "name": "next",
            "baseName": "next",
            "type": "string",
            "format": ""
        }
    ];
    return ListBlockedUsersResponse;
}());
exports.ListBlockedUsersResponse = ListBlockedUsersResponse;
//# sourceMappingURL=ListBlockedUsersResponse.js.map