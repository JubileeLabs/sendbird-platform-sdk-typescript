"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ScheduleAnnouncementDataMessage = void 0;
var ScheduleAnnouncementDataMessage = (function () {
    function ScheduleAnnouncementDataMessage() {
    }
    ScheduleAnnouncementDataMessage.getAttributeTypeMap = function () {
        return ScheduleAnnouncementDataMessage.attributeTypeMap;
    };
    ScheduleAnnouncementDataMessage.discriminator = undefined;
    ScheduleAnnouncementDataMessage.attributeTypeMap = [
        {
            "name": "type",
            "baseName": "type",
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
        }
    ];
    return ScheduleAnnouncementDataMessage;
}());
exports.ScheduleAnnouncementDataMessage = ScheduleAnnouncementDataMessage;
//# sourceMappingURL=ScheduleAnnouncementDataMessage.js.map