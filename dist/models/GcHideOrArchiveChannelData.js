"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GcHideOrArchiveChannelData = void 0;
var GcHideOrArchiveChannelData = (function () {
    function GcHideOrArchiveChannelData() {
    }
    GcHideOrArchiveChannelData.getAttributeTypeMap = function () {
        return GcHideOrArchiveChannelData.attributeTypeMap;
    };
    GcHideOrArchiveChannelData.discriminator = undefined;
    GcHideOrArchiveChannelData.attributeTypeMap = [
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
            "name": "allowAutoUnhide",
            "baseName": "allow_auto_unhide",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "shouldHideAll",
            "baseName": "should_hide_all",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "hidePreviousMessages",
            "baseName": "hide_previous_messages",
            "type": "boolean",
            "format": ""
        }
    ];
    return GcHideOrArchiveChannelData;
}());
exports.GcHideOrArchiveChannelData = GcHideOrArchiveChannelData;
//# sourceMappingURL=GcHideOrArchiveChannelData.js.map