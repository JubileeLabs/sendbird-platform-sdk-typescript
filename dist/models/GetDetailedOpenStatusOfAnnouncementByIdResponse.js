"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetDetailedOpenStatusOfAnnouncementByIdResponse = void 0;
var GetDetailedOpenStatusOfAnnouncementByIdResponse = (function () {
    function GetDetailedOpenStatusOfAnnouncementByIdResponse() {
    }
    GetDetailedOpenStatusOfAnnouncementByIdResponse.getAttributeTypeMap = function () {
        return GetDetailedOpenStatusOfAnnouncementByIdResponse.attributeTypeMap;
    };
    GetDetailedOpenStatusOfAnnouncementByIdResponse.discriminator = undefined;
    GetDetailedOpenStatusOfAnnouncementByIdResponse.attributeTypeMap = [
        {
            "name": "openStatus",
            "baseName": "open_status",
            "type": "Array<GetDetailedOpenStatusOfAnnouncementByIdResponseOpenStatusInner>",
            "format": ""
        },
        {
            "name": "next",
            "baseName": "next",
            "type": "string",
            "format": ""
        }
    ];
    return GetDetailedOpenStatusOfAnnouncementByIdResponse;
}());
exports.GetDetailedOpenStatusOfAnnouncementByIdResponse = GetDetailedOpenStatusOfAnnouncementByIdResponse;
//# sourceMappingURL=GetDetailedOpenStatusOfAnnouncementByIdResponse.js.map