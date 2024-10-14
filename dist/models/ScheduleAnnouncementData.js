"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ScheduleAnnouncementData = void 0;
var ScheduleAnnouncementData = (function () {
    function ScheduleAnnouncementData() {
    }
    ScheduleAnnouncementData.getAttributeTypeMap = function () {
        return ScheduleAnnouncementData.attributeTypeMap;
    };
    ScheduleAnnouncementData.discriminator = undefined;
    ScheduleAnnouncementData.attributeTypeMap = [
        {
            "name": "message",
            "baseName": "message",
            "type": "ScheduleAnnouncementDataMessage",
            "format": ""
        },
        {
            "name": "messageType",
            "baseName": "message_type",
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
            "name": "targetAt",
            "baseName": "target_at",
            "type": "string",
            "format": ""
        },
        {
            "name": "targetList",
            "baseName": "target_list",
            "type": "Array<string>",
            "format": ""
        },
        {
            "name": "targetChannelType",
            "baseName": "target_channel_type",
            "type": "string",
            "format": ""
        },
        {
            "name": "uniqueId",
            "baseName": "unique_id",
            "type": "string",
            "format": ""
        },
        {
            "name": "messageCustomType",
            "baseName": "message.custom_type",
            "type": "string",
            "format": ""
        },
        {
            "name": "messageData",
            "baseName": "message.data",
            "type": "string",
            "format": ""
        },
        {
            "name": "createChannel",
            "baseName": "create_channel",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "announcementGroup",
            "baseName": "announcement_group",
            "type": "string",
            "format": ""
        },
        {
            "name": "createChannelOptions",
            "baseName": "create_channel_options",
            "type": "string",
            "format": ""
        },
        {
            "name": "createChannelOptionsName",
            "baseName": "create_channel_options.name",
            "type": "string",
            "format": ""
        },
        {
            "name": "createChannelOptionsCoverUrl",
            "baseName": "create_channel_options.cover_url",
            "type": "string",
            "format": ""
        },
        {
            "name": "createChannelOptionsCustomType",
            "baseName": "create_channel_options.custom_type",
            "type": "string",
            "format": ""
        },
        {
            "name": "createChannelOptionsData",
            "baseName": "create_channel_options.data",
            "type": "string",
            "format": ""
        },
        {
            "name": "createChannelOptionsDistinct",
            "baseName": "create_channel_options.distinct",
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
            "name": "endAt",
            "baseName": "end_at",
            "type": "number",
            "format": ""
        },
        {
            "name": "enablePush",
            "baseName": "enable_push",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "assignSenderAsChannelInviter",
            "baseName": "assign_sender_as_channel_inviter",
            "type": "boolean",
            "format": ""
        }
    ];
    return ScheduleAnnouncementData;
}());
exports.ScheduleAnnouncementData = ScheduleAnnouncementData;
//# sourceMappingURL=ScheduleAnnouncementData.js.map