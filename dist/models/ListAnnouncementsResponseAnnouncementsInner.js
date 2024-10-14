"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ListAnnouncementsResponseAnnouncementsInner = void 0;
var ListAnnouncementsResponseAnnouncementsInner = (function () {
    function ListAnnouncementsResponseAnnouncementsInner() {
    }
    ListAnnouncementsResponseAnnouncementsInner.getAttributeTypeMap = function () {
        return ListAnnouncementsResponseAnnouncementsInner.attributeTypeMap;
    };
    ListAnnouncementsResponseAnnouncementsInner.discriminator = undefined;
    ListAnnouncementsResponseAnnouncementsInner.attributeTypeMap = [
        {
            "name": "uniqueId",
            "baseName": "unique_id",
            "type": "string",
            "format": ""
        },
        {
            "name": "announcementGroup",
            "baseName": "announcement_group",
            "type": "string",
            "format": ""
        },
        {
            "name": "message",
            "baseName": "message",
            "type": "ScheduleAnnouncementResponseMessage",
            "format": ""
        },
        {
            "name": "enablePush",
            "baseName": "enable_push",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "targetAt",
            "baseName": "target_at",
            "type": "string",
            "format": ""
        },
        {
            "name": "targetUserCount",
            "baseName": "target_user_count",
            "type": "number",
            "format": ""
        },
        {
            "name": "targetChannelCount",
            "baseName": "target_channel_count",
            "type": "number",
            "format": ""
        },
        {
            "name": "status",
            "baseName": "status",
            "type": "string",
            "format": ""
        },
        {
            "name": "scheduledAt",
            "baseName": "scheduled_at",
            "type": "number",
            "format": ""
        },
        {
            "name": "ceaseAt",
            "baseName": "cease_at",
            "type": "string",
            "format": ""
        },
        {
            "name": "resumeAt",
            "baseName": "resume_at",
            "type": "string",
            "format": ""
        },
        {
            "name": "completedAt",
            "baseName": "completed_at",
            "type": "number",
            "format": ""
        },
        {
            "name": "sentUserCount",
            "baseName": "sent_user_count",
            "type": "number",
            "format": ""
        },
        {
            "name": "openCount",
            "baseName": "open_count",
            "type": "number",
            "format": ""
        },
        {
            "name": "openRate",
            "baseName": "open_rate",
            "type": "number",
            "format": ""
        },
        {
            "name": "createChannel",
            "baseName": "create_channel",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "createChannelOptions",
            "baseName": "create_channel_options",
            "type": "ScheduleAnnouncementResponseCreateChannelOptions",
            "format": ""
        },
        {
            "name": "endAt",
            "baseName": "end_at",
            "type": "number",
            "format": ""
        },
        {
            "name": "markAsRead",
            "baseName": "mark_as_read",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "sentChannelCount",
            "baseName": "sent_channel_count",
            "type": "number",
            "format": ""
        },
        {
            "name": "targetChannelType",
            "baseName": "target_channel_type",
            "type": "string",
            "format": ""
        },
        {
            "name": "targetCustomType",
            "baseName": "target_custom_type",
            "type": "string",
            "format": ""
        }
    ];
    return ListAnnouncementsResponseAnnouncementsInner;
}());
exports.ListAnnouncementsResponseAnnouncementsInner = ListAnnouncementsResponseAnnouncementsInner;
//# sourceMappingURL=ListAnnouncementsResponseAnnouncementsInner.js.map