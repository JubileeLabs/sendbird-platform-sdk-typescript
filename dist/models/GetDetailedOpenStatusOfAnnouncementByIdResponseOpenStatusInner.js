"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetDetailedOpenStatusOfAnnouncementByIdResponseOpenStatusInner = void 0;
var GetDetailedOpenStatusOfAnnouncementByIdResponseOpenStatusInner = (function () {
    function GetDetailedOpenStatusOfAnnouncementByIdResponseOpenStatusInner() {
    }
    GetDetailedOpenStatusOfAnnouncementByIdResponseOpenStatusInner.getAttributeTypeMap = function () {
        return GetDetailedOpenStatusOfAnnouncementByIdResponseOpenStatusInner.attributeTypeMap;
    };
    GetDetailedOpenStatusOfAnnouncementByIdResponseOpenStatusInner.discriminator = undefined;
    GetDetailedOpenStatusOfAnnouncementByIdResponseOpenStatusInner.attributeTypeMap = [
        {
            "name": "userId",
            "baseName": "user_id",
            "type": "string",
            "format": ""
        },
        {
            "name": "channelUrl",
            "baseName": "channel_url",
            "type": "string",
            "format": ""
        },
        {
            "name": "hasOpened",
            "baseName": "has_opened",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "sentAt",
            "baseName": "sent_at",
            "type": "number",
            "format": ""
        },
        {
            "name": "openAt",
            "baseName": "open_at",
            "type": "number",
            "format": ""
        }
    ];
    return GetDetailedOpenStatusOfAnnouncementByIdResponseOpenStatusInner;
}());
exports.GetDetailedOpenStatusOfAnnouncementByIdResponseOpenStatusInner = GetDetailedOpenStatusOfAnnouncementByIdResponseOpenStatusInner;
//# sourceMappingURL=GetDetailedOpenStatusOfAnnouncementByIdResponseOpenStatusInner.js.map