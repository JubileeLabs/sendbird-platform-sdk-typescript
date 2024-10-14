"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SendBirdFileMessageParams = void 0;
var SendBirdFileMessageParams = (function () {
    function SendBirdFileMessageParams() {
    }
    SendBirdFileMessageParams.getAttributeTypeMap = function () {
        return SendBirdFileMessageParams.attributeTypeMap;
    };
    SendBirdFileMessageParams.discriminator = undefined;
    SendBirdFileMessageParams.attributeTypeMap = [
        {
            "name": "appleCriticalAlertOptions",
            "baseName": "apple_critical_alert_options",
            "type": "SendBirdAppleCriticalAlertOptions",
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
            "name": "file",
            "baseName": "file",
            "type": "Blob",
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
            "name": "fileUrl",
            "baseName": "file_url",
            "type": "string",
            "format": ""
        },
        {
            "name": "isReplyToChannel",
            "baseName": "is_reply_to_channel",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "mentionType",
            "baseName": "mention_type",
            "type": "SendBirdFileMessageParamsMentionTypeEnum",
            "format": ""
        },
        {
            "name": "mentionedUserIds",
            "baseName": "mentioned_user_ids",
            "type": "Array<string>",
            "format": ""
        },
        {
            "name": "mentionedUsers",
            "baseName": "mentioned_users",
            "type": "Array<SendBirdUser>",
            "format": ""
        },
        {
            "name": "metaArrayKeys",
            "baseName": "meta_array_keys",
            "type": "Array<string>",
            "format": ""
        },
        {
            "name": "metaArrays",
            "baseName": "meta_arrays",
            "type": "Array<SendBirdMessageMetaArray>",
            "format": ""
        },
        {
            "name": "mimeType",
            "baseName": "mime_type",
            "type": "string",
            "format": ""
        },
        {
            "name": "parentMessageId",
            "baseName": "parent_message_id",
            "type": "number",
            "format": ""
        },
        {
            "name": "pushNotificationDeliveryOption",
            "baseName": "push_notification_delivery_option",
            "type": "SendBirdFileMessageParamsPushNotificationDeliveryOptionEnum",
            "format": ""
        },
        {
            "name": "thumbnailSizes",
            "baseName": "thumbnail_sizes",
            "type": "Array<SendBirdThumbnailSize>",
            "format": ""
        }
    ];
    return SendBirdFileMessageParams;
}());
exports.SendBirdFileMessageParams = SendBirdFileMessageParams;
//# sourceMappingURL=SendBirdFileMessageParams.js.map