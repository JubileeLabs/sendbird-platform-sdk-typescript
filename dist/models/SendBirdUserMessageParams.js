"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SendBirdUserMessageParams = void 0;
var SendBirdUserMessageParams = (function () {
    function SendBirdUserMessageParams() {
    }
    SendBirdUserMessageParams.getAttributeTypeMap = function () {
        return SendBirdUserMessageParams.attributeTypeMap;
    };
    SendBirdUserMessageParams.discriminator = undefined;
    SendBirdUserMessageParams.attributeTypeMap = [
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
            "name": "isReplyToChannel",
            "baseName": "is_reply_to_channel",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "mentionType",
            "baseName": "mention_type",
            "type": "SendBirdUserMessageParamsMentionTypeEnum",
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
            "name": "message",
            "baseName": "message",
            "type": "string",
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
            "name": "parentMessageId",
            "baseName": "parent_message_id",
            "type": "number",
            "format": ""
        },
        {
            "name": "pollId",
            "baseName": "poll_id",
            "type": "number",
            "format": ""
        },
        {
            "name": "pushNotificationDeliveryOption",
            "baseName": "push_notification_delivery_option",
            "type": "SendBirdUserMessageParamsPushNotificationDeliveryOptionEnum",
            "format": ""
        },
        {
            "name": "targetLanguages",
            "baseName": "target_languages",
            "type": "Array<string>",
            "format": ""
        },
        {
            "name": "translationTargetLanguages",
            "baseName": "translation_target_languages",
            "type": "Array<string>",
            "format": ""
        }
    ];
    return SendBirdUserMessageParams;
}());
exports.SendBirdUserMessageParams = SendBirdUserMessageParams;
//# sourceMappingURL=SendBirdUserMessageParams.js.map