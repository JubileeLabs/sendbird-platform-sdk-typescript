"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateAnnouncementByIdResponseMessage = void 0;
var UpdateAnnouncementByIdResponseMessage = (function () {
    function UpdateAnnouncementByIdResponseMessage() {
    }
    UpdateAnnouncementByIdResponseMessage.getAttributeTypeMap = function () {
        return UpdateAnnouncementByIdResponseMessage.attributeTypeMap;
    };
    UpdateAnnouncementByIdResponseMessage.discriminator = undefined;
    UpdateAnnouncementByIdResponseMessage.attributeTypeMap = [
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
        }
    ];
    return UpdateAnnouncementByIdResponseMessage;
}());
exports.UpdateAnnouncementByIdResponseMessage = UpdateAnnouncementByIdResponseMessage;
//# sourceMappingURL=UpdateAnnouncementByIdResponseMessage.js.map