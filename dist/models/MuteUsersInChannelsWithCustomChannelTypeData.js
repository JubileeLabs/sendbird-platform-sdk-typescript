"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MuteUsersInChannelsWithCustomChannelTypeData = void 0;
var MuteUsersInChannelsWithCustomChannelTypeData = (function () {
    function MuteUsersInChannelsWithCustomChannelTypeData() {
    }
    MuteUsersInChannelsWithCustomChannelTypeData.getAttributeTypeMap = function () {
        return MuteUsersInChannelsWithCustomChannelTypeData.attributeTypeMap;
    };
    MuteUsersInChannelsWithCustomChannelTypeData.discriminator = undefined;
    MuteUsersInChannelsWithCustomChannelTypeData.attributeTypeMap = [
        {
            "name": "userIds",
            "baseName": "user_ids",
            "type": "Array<string>",
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
        },
        {
            "name": "onDemandUpsert",
            "baseName": "on_demand_upsert",
            "type": "boolean",
            "format": ""
        }
    ];
    return MuteUsersInChannelsWithCustomChannelTypeData;
}());
exports.MuteUsersInChannelsWithCustomChannelTypeData = MuteUsersInChannelsWithCustomChannelTypeData;
//# sourceMappingURL=MuteUsersInChannelsWithCustomChannelTypeData.js.map