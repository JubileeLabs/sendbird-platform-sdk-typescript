"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ListBannedChannelsResponseBannedChannelsInner = void 0;
var ListBannedChannelsResponseBannedChannelsInner = (function () {
    function ListBannedChannelsResponseBannedChannelsInner() {
    }
    ListBannedChannelsResponseBannedChannelsInner.getAttributeTypeMap = function () {
        return ListBannedChannelsResponseBannedChannelsInner.attributeTypeMap;
    };
    ListBannedChannelsResponseBannedChannelsInner.discriminator = undefined;
    ListBannedChannelsResponseBannedChannelsInner.attributeTypeMap = [
        {
            "name": "startAt",
            "baseName": "start_at",
            "type": "number",
            "format": ""
        },
        {
            "name": "description",
            "baseName": "description",
            "type": "string",
            "format": ""
        },
        {
            "name": "channel",
            "baseName": "channel",
            "type": "SendBirdChannelResponse",
            "format": ""
        },
        {
            "name": "endAt",
            "baseName": "end_at",
            "type": "number",
            "format": ""
        }
    ];
    return ListBannedChannelsResponseBannedChannelsInner;
}());
exports.ListBannedChannelsResponseBannedChannelsInner = ListBannedChannelsResponseBannedChannelsInner;
//# sourceMappingURL=ListBannedChannelsResponseBannedChannelsInner.js.map