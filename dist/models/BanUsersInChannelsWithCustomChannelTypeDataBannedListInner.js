"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BanUsersInChannelsWithCustomChannelTypeDataBannedListInner = void 0;
var BanUsersInChannelsWithCustomChannelTypeDataBannedListInner = (function () {
    function BanUsersInChannelsWithCustomChannelTypeDataBannedListInner() {
    }
    BanUsersInChannelsWithCustomChannelTypeDataBannedListInner.getAttributeTypeMap = function () {
        return BanUsersInChannelsWithCustomChannelTypeDataBannedListInner.attributeTypeMap;
    };
    BanUsersInChannelsWithCustomChannelTypeDataBannedListInner.discriminator = undefined;
    BanUsersInChannelsWithCustomChannelTypeDataBannedListInner.attributeTypeMap = [
        {
            "name": "userId",
            "baseName": "user_id",
            "type": "string",
            "format": ""
        },
        {
            "name": "seconds",
            "baseName": "seconds",
            "type": "number",
            "format": ""
        },
        {
            "name": "description",
            "baseName": "description",
            "type": "string",
            "format": ""
        }
    ];
    return BanUsersInChannelsWithCustomChannelTypeDataBannedListInner;
}());
exports.BanUsersInChannelsWithCustomChannelTypeDataBannedListInner = BanUsersInChannelsWithCustomChannelTypeDataBannedListInner;
//# sourceMappingURL=BanUsersInChannelsWithCustomChannelTypeDataBannedListInner.js.map