"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SendBirdGroupChannel = void 0;
var SendBirdGroupChannel = (function () {
    function SendBirdGroupChannel() {
    }
    SendBirdGroupChannel.getAttributeTypeMap = function () {
        return SendBirdGroupChannel.attributeTypeMap;
    };
    SendBirdGroupChannel.discriminator = undefined;
    SendBirdGroupChannel.attributeTypeMap = [
        {
            "name": "channelUrl",
            "baseName": "channel_url",
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
            "name": "createdAt",
            "baseName": "created_at",
            "type": "number",
            "format": ""
        },
        {
            "name": "createdBy",
            "baseName": "created_by",
            "type": "SendBirdGroupChannelCreatedBy",
            "format": ""
        },
        {
            "name": "creator",
            "baseName": "creator",
            "type": "SendBirdUser",
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
            "name": "disappearingMessage",
            "baseName": "disappearing_message",
            "type": "SendBirdGroupChannelDisappearingMessage",
            "format": ""
        },
        {
            "name": "freeze",
            "baseName": "freeze",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "ignoreProfanityFilter",
            "baseName": "ignore_profanity_filter",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "hiddenState",
            "baseName": "hidden_state",
            "type": "SendBirdGroupChannelHiddenStateEnum",
            "format": ""
        },
        {
            "name": "invitedAt",
            "baseName": "invited_at",
            "type": "number",
            "format": ""
        },
        {
            "name": "inviter",
            "baseName": "inviter",
            "type": "SendBirdUser",
            "format": ""
        },
        {
            "name": "isAccessCodeRequired",
            "baseName": "is_access_code_required",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "isBroadcast",
            "baseName": "is_broadcast",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "isCreated",
            "baseName": "is_created",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "isDiscoverable",
            "baseName": "is_discoverable",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "isDistinct",
            "baseName": "is_distinct",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "isEphemeral",
            "baseName": "is_ephemeral",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "isHidden",
            "baseName": "is_hidden",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "isPublic",
            "baseName": "is_public",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "isPushEnabled",
            "baseName": "is_push_enabled",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "isSuper",
            "baseName": "is_super",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "joinedAt",
            "baseName": "joined_at",
            "type": "number",
            "format": ""
        },
        {
            "name": "joinedMemberCount",
            "baseName": "joined_member_count",
            "type": "number",
            "format": ""
        },
        {
            "name": "lastMessage",
            "baseName": "last_message",
            "type": "SendBirdMessageResponse",
            "format": ""
        },
        {
            "name": "maxLengthMessage",
            "baseName": "max_length_message",
            "type": "number",
            "format": ""
        },
        {
            "name": "memberCount",
            "baseName": "member_count",
            "type": "number",
            "format": ""
        },
        {
            "name": "members",
            "baseName": "members",
            "type": "Array<SendBirdMember>",
            "format": ""
        },
        {
            "name": "messageOffsetTimestamp",
            "baseName": "message_offset_timestamp",
            "type": "number",
            "format": ""
        },
        {
            "name": "messageSurvivalSeconds",
            "baseName": "message_survival_seconds",
            "type": "number",
            "format": ""
        },
        {
            "name": "myCountPreference",
            "baseName": "my_count_preference",
            "type": "string",
            "format": ""
        },
        {
            "name": "myLastRead",
            "baseName": "my_last_read",
            "type": "number",
            "format": ""
        },
        {
            "name": "myMemberState",
            "baseName": "my_member_state",
            "type": "SendBirdGroupChannelMyMemberStateEnum",
            "format": ""
        },
        {
            "name": "myMutedState",
            "baseName": "my_muted_state",
            "type": "SendBirdGroupChannelMyMutedStateEnum",
            "format": ""
        },
        {
            "name": "myPushTriggerOption",
            "baseName": "my_push_trigger_option",
            "type": "SendBirdGroupChannelMyPushTriggerOptionEnum",
            "format": ""
        },
        {
            "name": "myRole",
            "baseName": "my_role",
            "type": "SendBirdGroupChannelMyRoleEnum",
            "format": ""
        },
        {
            "name": "name",
            "baseName": "name",
            "type": "string",
            "format": ""
        },
        {
            "name": "operators",
            "baseName": "operators",
            "type": "Array<any>",
            "format": ""
        },
        {
            "name": "smsFallback",
            "baseName": "sms_fallback",
            "type": "SendBirdGroupChannelSmsFallback",
            "format": ""
        },
        {
            "name": "unreadMentionCount",
            "baseName": "unread_mention_count",
            "type": "number",
            "format": ""
        },
        {
            "name": "unreadMessageCount",
            "baseName": "unread_message_count",
            "type": "number",
            "format": ""
        },
        {
            "name": "channel",
            "baseName": "channel",
            "type": "SendBirdGroupChannelChannel",
            "format": ""
        },
        {
            "name": "readReceipt",
            "baseName": "read_receipt",
            "type": "{ [key: string]: number; }",
            "format": "int64"
        }
    ];
    return SendBirdGroupChannel;
}());
exports.SendBirdGroupChannel = SendBirdGroupChannel;
//# sourceMappingURL=SendBirdGroupChannel.js.map