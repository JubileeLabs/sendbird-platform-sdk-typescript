"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OcViewBanByIdResponse = void 0;
var OcViewBanByIdResponse = (function () {
    function OcViewBanByIdResponse() {
    }
    OcViewBanByIdResponse.getAttributeTypeMap = function () {
        return OcViewBanByIdResponse.attributeTypeMap;
    };
    OcViewBanByIdResponse.discriminator = undefined;
    OcViewBanByIdResponse.attributeTypeMap = [
        {
            "name": "user",
            "baseName": "user",
            "type": "SendBirdUser",
            "format": ""
        },
        {
            "name": "description",
            "baseName": "description",
            "type": "string",
            "format": ""
        },
        {
            "name": "endAt",
            "baseName": "end_at",
            "type": "number",
            "format": ""
        },
        {
            "name": "startAt",
            "baseName": "start_at",
            "type": "number",
            "format": ""
        }
    ];
    return OcViewBanByIdResponse;
}());
exports.OcViewBanByIdResponse = OcViewBanByIdResponse;
//# sourceMappingURL=OcViewBanByIdResponse.js.map