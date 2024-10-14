"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GcUpdateBanByIdResponse = void 0;
var GcUpdateBanByIdResponse = (function () {
    function GcUpdateBanByIdResponse() {
    }
    GcUpdateBanByIdResponse.getAttributeTypeMap = function () {
        return GcUpdateBanByIdResponse.attributeTypeMap;
    };
    GcUpdateBanByIdResponse.discriminator = undefined;
    GcUpdateBanByIdResponse.attributeTypeMap = [
        {
            "name": "user",
            "baseName": "user",
            "type": "SendBirdUser",
            "format": ""
        },
        {
            "name": "startAt",
            "baseName": "start_at",
            "type": "number",
            "format": ""
        },
        {
            "name": "endAt",
            "baseName": "end_at",
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
    return GcUpdateBanByIdResponse;
}());
exports.GcUpdateBanByIdResponse = GcUpdateBanByIdResponse;
//# sourceMappingURL=GcUpdateBanByIdResponse.js.map