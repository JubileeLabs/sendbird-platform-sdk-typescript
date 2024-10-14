"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GcListMembersResponse = void 0;
var GcListMembersResponse = (function () {
    function GcListMembersResponse() {
    }
    GcListMembersResponse.getAttributeTypeMap = function () {
        return GcListMembersResponse.attributeTypeMap;
    };
    GcListMembersResponse.discriminator = undefined;
    GcListMembersResponse.attributeTypeMap = [
        {
            "name": "members",
            "baseName": "members",
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
    return GcListMembersResponse;
}());
exports.GcListMembersResponse = GcListMembersResponse;
//# sourceMappingURL=GcListMembersResponse.js.map