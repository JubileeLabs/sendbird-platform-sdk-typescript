"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BanUsersInChannelsWithCustomChannelTypeData = void 0;
var BanUsersInChannelsWithCustomChannelTypeData = (function () {
    function BanUsersInChannelsWithCustomChannelTypeData() {
    }
    BanUsersInChannelsWithCustomChannelTypeData.getAttributeTypeMap = function () {
        return BanUsersInChannelsWithCustomChannelTypeData.attributeTypeMap;
    };
    BanUsersInChannelsWithCustomChannelTypeData.discriminator = undefined;
    BanUsersInChannelsWithCustomChannelTypeData.attributeTypeMap = [
        {
            "name": "bannedList",
            "baseName": "banned_list",
            "type": "Array<BanUsersInChannelsWithCustomChannelTypeDataBannedListInner>",
            "format": ""
        },
        {
            "name": "onDemandUpsert",
            "baseName": "on_demand_upsert",
            "type": "boolean",
            "format": ""
        }
    ];
    return BanUsersInChannelsWithCustomChannelTypeData;
}());
exports.BanUsersInChannelsWithCustomChannelTypeData = BanUsersInChannelsWithCustomChannelTypeData;
//# sourceMappingURL=BanUsersInChannelsWithCustomChannelTypeData.js.map