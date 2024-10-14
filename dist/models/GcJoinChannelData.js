"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GcJoinChannelData = void 0;
var GcJoinChannelData = (function () {
    function GcJoinChannelData() {
    }
    GcJoinChannelData.getAttributeTypeMap = function () {
        return GcJoinChannelData.attributeTypeMap;
    };
    GcJoinChannelData.discriminator = undefined;
    GcJoinChannelData.attributeTypeMap = [
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
    return GcJoinChannelData;
}());
exports.GcJoinChannelData = GcJoinChannelData;
//# sourceMappingURL=GcJoinChannelData.js.map