"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GcViewMuteByIdResponse = void 0;
var GcViewMuteByIdResponse = (function () {
    function GcViewMuteByIdResponse() {
    }
    GcViewMuteByIdResponse.getAttributeTypeMap = function () {
        return GcViewMuteByIdResponse.attributeTypeMap;
    };
    GcViewMuteByIdResponse.discriminator = undefined;
    GcViewMuteByIdResponse.attributeTypeMap = [
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
    return GcViewMuteByIdResponse;
}());
exports.GcViewMuteByIdResponse = GcViewMuteByIdResponse;
//# sourceMappingURL=GcViewMuteByIdResponse.js.map