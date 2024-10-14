"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ViewNumberOfUnreadItemsResponse = void 0;
var ViewNumberOfUnreadItemsResponse = (function () {
    function ViewNumberOfUnreadItemsResponse() {
    }
    ViewNumberOfUnreadItemsResponse.getAttributeTypeMap = function () {
        return ViewNumberOfUnreadItemsResponse.attributeTypeMap;
    };
    ViewNumberOfUnreadItemsResponse.discriminator = undefined;
    ViewNumberOfUnreadItemsResponse.attributeTypeMap = [
        {
            "name": "nonSuperGroupChannelUnreadMessageCount",
            "baseName": "non_super_group_channel_unread_message_count",
            "type": "number",
            "format": ""
        },
        {
            "name": "superGroupChannelUnreadMessageCount",
            "baseName": "super_group_channel_unread_message_count",
            "type": "number",
            "format": ""
        },
        {
            "name": "groupChannelUnreadMessageCount",
            "baseName": "group_channel_unread_message_count",
            "type": "number",
            "format": ""
        },
        {
            "name": "superGroupChannelInvitationCount",
            "baseName": "super_group_channel_invitation_count",
            "type": "number",
            "format": ""
        },
        {
            "name": "groupChannelInvitationCount",
            "baseName": "group_channel_invitation_count",
            "type": "number",
            "format": ""
        },
        {
            "name": "superGroupChannelUnreadMentionCount",
            "baseName": "super_group_channel_unread_mention_count",
            "type": "number",
            "format": ""
        },
        {
            "name": "groupChannelUnreadMentionCount",
            "baseName": "group_channel_unread_mention_count",
            "type": "number",
            "format": ""
        },
        {
            "name": "nonSuperGroupChannelUnreadMentionCount",
            "baseName": "non_super_group_channel_unread_mention_count",
            "type": "number",
            "format": ""
        },
        {
            "name": "nonSuperGroupChannelInvitationCount",
            "baseName": "non_super_group_channel_invitation_count",
            "type": "number",
            "format": ""
        }
    ];
    return ViewNumberOfUnreadItemsResponse;
}());
exports.ViewNumberOfUnreadItemsResponse = ViewNumberOfUnreadItemsResponse;
//# sourceMappingURL=ViewNumberOfUnreadItemsResponse.js.map