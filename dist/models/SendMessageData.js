"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SendMessageData = void 0;
var SendMessageData = (function () {
    function SendMessageData() {
    }
    SendMessageData.getAttributeTypeMap = function () {
        return SendMessageData.attributeTypeMap;
    };
    SendMessageData.discriminator = undefined;
    SendMessageData.attributeTypeMap = [
        {
            "name": "userId",
            "baseName": "user_id",
            "type": "string",
            "format": ""
        },
        {
            "name": "channelType",
            "baseName": "channel_type",
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
            "name": "messageType",
            "baseName": "message_type",
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
            "baseName": "mentioned_user_ids",
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
            "name": "sortedMetaarray",
            "baseName": "sorted_metaarray",
            "type": "string",
            "format": ""
        },
        {
            "name": "createdAt",
            "baseName": "created_at",
            "type": "number",
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
        },
        {
            "name": "url",
            "baseName": "url",
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
            "name": "fileName",
            "baseName": "file_name",
            "type": "string",
            "format": ""
        },
        {
            "name": "fileSize",
            "baseName": "file_size",
            "type": "number",
            "format": ""
        },
        {
            "name": "fileType",
            "baseName": "file_type",
            "type": "string",
            "format": ""
        },
        {
            "name": "thumbnails",
            "baseName": "thumbnails",
            "type": "Array<string>",
            "format": ""
        },
        {
            "name": "thumbnail1",
            "baseName": "thumbnail1",
            "type": "string",
            "format": ""
        },
        {
            "name": "thumbnail2",
            "baseName": "thumbnail2",
            "type": "string",
            "format": ""
        },
        {
            "name": "thumbnail3",
            "baseName": "thumbnail3",
            "type": "string",
            "format": ""
        }
    ];
    return SendMessageData;
}());
exports.SendMessageData = SendMessageData;
//# sourceMappingURL=SendMessageData.js.map