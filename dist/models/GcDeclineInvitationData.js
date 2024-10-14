"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GcDeclineInvitationData = void 0;
var GcDeclineInvitationData = (function () {
    function GcDeclineInvitationData() {
    }
    GcDeclineInvitationData.getAttributeTypeMap = function () {
        return GcDeclineInvitationData.attributeTypeMap;
    };
    GcDeclineInvitationData.discriminator = undefined;
    GcDeclineInvitationData.attributeTypeMap = [
        {
            "name": "channelUrl",
            "baseName": "channel_url",
            "type": "string",
            "format": ""
        },
        {
            "name": "userId",
            "baseName": "user_id",
            "type": "string",
            "format": ""
        }
    ];
    return GcDeclineInvitationData;
}());
exports.GcDeclineInvitationData = GcDeclineInvitationData;
//# sourceMappingURL=GcDeclineInvitationData.js.map