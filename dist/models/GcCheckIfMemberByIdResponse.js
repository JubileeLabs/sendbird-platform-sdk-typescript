"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GcCheckIfMemberByIdResponse = void 0;
var GcCheckIfMemberByIdResponse = (function () {
    function GcCheckIfMemberByIdResponse() {
    }
    GcCheckIfMemberByIdResponse.getAttributeTypeMap = function () {
        return GcCheckIfMemberByIdResponse.attributeTypeMap;
    };
    GcCheckIfMemberByIdResponse.discriminator = undefined;
    GcCheckIfMemberByIdResponse.attributeTypeMap = [
        {
            "name": "isMember",
            "baseName": "is_member",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "state",
            "baseName": "state",
            "type": "string",
            "format": ""
        }
    ];
    return GcCheckIfMemberByIdResponse;
}());
exports.GcCheckIfMemberByIdResponse = GcCheckIfMemberByIdResponse;
//# sourceMappingURL=GcCheckIfMemberByIdResponse.js.map