"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.V3GroupChannelsChannelUrlScheduledMessagesScheduledMessageIdDeleteRequest = void 0;
var V3GroupChannelsChannelUrlScheduledMessagesScheduledMessageIdDeleteRequest = (function () {
    function V3GroupChannelsChannelUrlScheduledMessagesScheduledMessageIdDeleteRequest() {
    }
    V3GroupChannelsChannelUrlScheduledMessagesScheduledMessageIdDeleteRequest.getAttributeTypeMap = function () {
        return V3GroupChannelsChannelUrlScheduledMessagesScheduledMessageIdDeleteRequest.attributeTypeMap;
    };
    V3GroupChannelsChannelUrlScheduledMessagesScheduledMessageIdDeleteRequest.discriminator = undefined;
    V3GroupChannelsChannelUrlScheduledMessagesScheduledMessageIdDeleteRequest.attributeTypeMap = [
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
            "name": "message",
            "baseName": "message",
            "type": "string",
            "format": ""
        },
        {
            "name": "file",
            "baseName": "file",
            "type": "string",
            "format": ""
        },
        {
            "name": "url",
            "baseName": "url",
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
            "name": "customType",
            "baseName": "custom_type",
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
            "name": "sendPush",
            "baseName": "send_push",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "mentionType",
            "baseName": "mention_type",
            "type": "string",
            "format": ""
        },
        {
            "name": "mentionedUserIds",
            "baseName": "mentioned_user_ids[]",
            "type": "Array<string>",
            "format": ""
        },
        {
            "name": "isSilent",
            "baseName": "is_silent",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "markAsRead",
            "baseName": "mark_as_read",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "sortedMetaarray",
            "baseName": "sorted_metaarray",
            "type": "Array<any>",
            "format": ""
        },
        {
            "name": "dedupId",
            "baseName": "dedup_id",
            "type": "string",
            "format": ""
        },
        {
            "name": "apnsBundleId",
            "baseName": "apns_bundle_id",
            "type": "string",
            "format": ""
        },
        {
            "name": "appleCriticalAlertOptions",
            "baseName": "apple_critical_alert_options",
            "type": "any",
            "format": ""
        },
        {
            "name": "sound",
            "baseName": "sound",
            "type": "string",
            "format": ""
        },
        {
            "name": "volume",
            "baseName": "volume",
            "type": "number",
            "format": ""
        }
    ];
    return V3GroupChannelsChannelUrlScheduledMessagesScheduledMessageIdDeleteRequest;
}());
exports.V3GroupChannelsChannelUrlScheduledMessagesScheduledMessageIdDeleteRequest = V3GroupChannelsChannelUrlScheduledMessagesScheduledMessageIdDeleteRequest;
//# sourceMappingURL=V3GroupChannelsChannelUrlScheduledMessagesScheduledMessageIdDeleteRequest.js.map