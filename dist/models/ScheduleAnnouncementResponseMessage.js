"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ScheduleAnnouncementResponseMessage = void 0;
var ScheduleAnnouncementResponseMessage = (function () {
    function ScheduleAnnouncementResponseMessage() {
    }
    ScheduleAnnouncementResponseMessage.getAttributeTypeMap = function () {
        return ScheduleAnnouncementResponseMessage.attributeTypeMap;
    };
    ScheduleAnnouncementResponseMessage.discriminator = undefined;
    ScheduleAnnouncementResponseMessage.attributeTypeMap = [
        {
            "name": "type",
            "baseName": "type",
            "type": "string",
            "format": ""
        },
        {
            "name": "customType",
            "baseName": "custom_type",
            "type": "string",
            "format": ""
        },
        {
            "name": "userId",
            "baseName": "user_id",
            "type": "string",
            "format": ""
        },
        {
            "name": "content",
            "baseName": "content",
            "type": "string",
            "format": ""
        },
        {
            "name": "data",
            "baseName": "data",
            "type": "string",
            "format": ""
        }
    ];
    return ScheduleAnnouncementResponseMessage;
}());
exports.ScheduleAnnouncementResponseMessage = ScheduleAnnouncementResponseMessage;
//# sourceMappingURL=ScheduleAnnouncementResponseMessage.js.map