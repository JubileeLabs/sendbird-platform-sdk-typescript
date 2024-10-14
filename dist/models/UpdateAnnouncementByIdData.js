"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateAnnouncementByIdData = void 0;
var UpdateAnnouncementByIdData = (function () {
    function UpdateAnnouncementByIdData() {
    }
    UpdateAnnouncementByIdData.getAttributeTypeMap = function () {
        return UpdateAnnouncementByIdData.attributeTypeMap;
    };
    UpdateAnnouncementByIdData.discriminator = undefined;
    UpdateAnnouncementByIdData.attributeTypeMap = [
        {
            "name": "uniqueId",
            "baseName": "unique_id",
            "type": "string",
            "format": ""
        },
        {
            "name": "action",
            "baseName": "action",
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
            "name": "createChannel",
            "baseName": "create_channel",
            "type": "boolean",
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
            "name": "messageUserId",
            "baseName": "message.user_id",
            "type": "string",
            "format": ""
        },
        {
            "name": "messageContent",
            "baseName": "message.content",
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
            "name": "enablePush",
            "baseName": "enable_push",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "scheduledAt",
            "baseName": "scheduled_at",
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
        }
    ];
    return UpdateAnnouncementByIdData;
}());
exports.UpdateAnnouncementByIdData = UpdateAnnouncementByIdData;
//# sourceMappingURL=UpdateAnnouncementByIdData.js.map