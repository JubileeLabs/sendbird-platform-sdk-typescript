"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ScheduleAnnouncementResponseCreateChannelOptions = void 0;
var ScheduleAnnouncementResponseCreateChannelOptions = (function () {
    function ScheduleAnnouncementResponseCreateChannelOptions() {
    }
    ScheduleAnnouncementResponseCreateChannelOptions.getAttributeTypeMap = function () {
        return ScheduleAnnouncementResponseCreateChannelOptions.attributeTypeMap;
    };
    ScheduleAnnouncementResponseCreateChannelOptions.discriminator = undefined;
    ScheduleAnnouncementResponseCreateChannelOptions.attributeTypeMap = [
        {
            "name": "distinct",
            "baseName": "distinct",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "data",
            "baseName": "data",
            "type": "string",
            "format": ""
        },
        {
            "name": "name",
            "baseName": "name",
            "type": "string",
            "format": ""
        },
        {
            "name": "coverUrl",
            "baseName": "cover_url",
            "type": "string",
            "format": ""
        },
        {
            "name": "customType",
            "baseName": "custom_type",
            "type": "string",
            "format": ""
        }
    ];
    return ScheduleAnnouncementResponseCreateChannelOptions;
}());
exports.ScheduleAnnouncementResponseCreateChannelOptions = ScheduleAnnouncementResponseCreateChannelOptions;
//# sourceMappingURL=ScheduleAnnouncementResponseCreateChannelOptions.js.map