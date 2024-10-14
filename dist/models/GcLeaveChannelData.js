"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GcLeaveChannelData = void 0;
var GcLeaveChannelData = (function () {
    function GcLeaveChannelData() {
    }
    GcLeaveChannelData.getAttributeTypeMap = function () {
        return GcLeaveChannelData.attributeTypeMap;
    };
    GcLeaveChannelData.discriminator = undefined;
    GcLeaveChannelData.attributeTypeMap = [
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
            "name": "shouldLeaveAll",
            "baseName": "should_leave_all",
            "type": "boolean",
            "format": ""
        }
    ];
    return GcLeaveChannelData;
}());
exports.GcLeaveChannelData = GcLeaveChannelData;
//# sourceMappingURL=GcLeaveChannelData.js.map