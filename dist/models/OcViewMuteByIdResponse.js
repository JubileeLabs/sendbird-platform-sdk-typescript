"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OcViewMuteByIdResponse = void 0;
var OcViewMuteByIdResponse = (function () {
    function OcViewMuteByIdResponse() {
    }
    OcViewMuteByIdResponse.getAttributeTypeMap = function () {
        return OcViewMuteByIdResponse.attributeTypeMap;
    };
    OcViewMuteByIdResponse.discriminator = undefined;
    OcViewMuteByIdResponse.attributeTypeMap = [
        {
            "name": "isMuted",
            "baseName": "is_muted",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "remainingDuration",
            "baseName": "remaining_duration",
            "type": "number",
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
    return OcViewMuteByIdResponse;
}());
exports.OcViewMuteByIdResponse = OcViewMuteByIdResponse;
//# sourceMappingURL=OcViewMuteByIdResponse.js.map