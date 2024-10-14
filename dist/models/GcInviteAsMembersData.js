"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GcInviteAsMembersData = void 0;
var GcInviteAsMembersData = (function () {
    function GcInviteAsMembersData() {
    }
    GcInviteAsMembersData.getAttributeTypeMap = function () {
        return GcInviteAsMembersData.attributeTypeMap;
    };
    GcInviteAsMembersData.discriminator = undefined;
    GcInviteAsMembersData.attributeTypeMap = [
        {
            "name": "channelUrl",
            "baseName": "channel_url",
            "type": "string",
            "format": ""
        },
        {
            "name": "userIds",
            "baseName": "user_ids",
            "type": "Array<string>",
            "format": ""
        },
        {
            "name": "users",
            "baseName": "users",
            "type": "Array<string>",
            "format": ""
        },
        {
            "name": "invitationStatus",
            "baseName": "invitation_status",
            "type": "any",
            "format": ""
        },
        {
            "name": "hiddenStatus",
            "baseName": "hidden_status",
            "type": "any",
            "format": ""
        }
    ];
    return GcInviteAsMembersData;
}());
exports.GcInviteAsMembersData = GcInviteAsMembersData;
//# sourceMappingURL=GcInviteAsMembersData.js.map