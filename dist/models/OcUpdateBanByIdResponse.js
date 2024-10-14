"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OcUpdateBanByIdResponse = void 0;
var OcUpdateBanByIdResponse = (function () {
    function OcUpdateBanByIdResponse() {
    }
    OcUpdateBanByIdResponse.getAttributeTypeMap = function () {
        return OcUpdateBanByIdResponse.attributeTypeMap;
    };
    OcUpdateBanByIdResponse.discriminator = undefined;
    OcUpdateBanByIdResponse.attributeTypeMap = [
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
    return OcUpdateBanByIdResponse;
}());
exports.OcUpdateBanByIdResponse = OcUpdateBanByIdResponse;
//# sourceMappingURL=OcUpdateBanByIdResponse.js.map