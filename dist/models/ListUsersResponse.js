"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ListUsersResponse = void 0;
var ListUsersResponse = (function () {
    function ListUsersResponse() {
    }
    ListUsersResponse.getAttributeTypeMap = function () {
        return ListUsersResponse.attributeTypeMap;
    };
    ListUsersResponse.discriminator = undefined;
    ListUsersResponse.attributeTypeMap = [
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
    return ListUsersResponse;
}());
exports.ListUsersResponse = ListUsersResponse;
//# sourceMappingURL=ListUsersResponse.js.map