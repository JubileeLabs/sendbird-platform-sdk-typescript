"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GcViewBanByIdResponse = void 0;
var GcViewBanByIdResponse = (function () {
    function GcViewBanByIdResponse() {
    }
    GcViewBanByIdResponse.getAttributeTypeMap = function () {
        return GcViewBanByIdResponse.attributeTypeMap;
    };
    GcViewBanByIdResponse.discriminator = undefined;
    GcViewBanByIdResponse.attributeTypeMap = [
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
    return GcViewBanByIdResponse;
}());
exports.GcViewBanByIdResponse = GcViewBanByIdResponse;
//# sourceMappingURL=GcViewBanByIdResponse.js.map