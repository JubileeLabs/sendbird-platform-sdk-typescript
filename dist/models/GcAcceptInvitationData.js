"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GcAcceptInvitationData = void 0;
var GcAcceptInvitationData = (function () {
    function GcAcceptInvitationData() {
    }
    GcAcceptInvitationData.getAttributeTypeMap = function () {
        return GcAcceptInvitationData.attributeTypeMap;
    };
    GcAcceptInvitationData.discriminator = undefined;
    GcAcceptInvitationData.attributeTypeMap = [
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
        },
        {
            "name": "accessCode",
            "baseName": "access_code",
            "type": "string",
            "format": ""
        }
    ];
    return GcAcceptInvitationData;
}());
exports.GcAcceptInvitationData = GcAcceptInvitationData;
//# sourceMappingURL=GcAcceptInvitationData.js.map