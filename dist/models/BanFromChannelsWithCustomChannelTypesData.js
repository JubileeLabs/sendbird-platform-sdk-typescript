"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BanFromChannelsWithCustomChannelTypesData = void 0;
var BanFromChannelsWithCustomChannelTypesData = (function () {
    function BanFromChannelsWithCustomChannelTypesData() {
    }
    BanFromChannelsWithCustomChannelTypesData.getAttributeTypeMap = function () {
        return BanFromChannelsWithCustomChannelTypesData.attributeTypeMap;
    };
    BanFromChannelsWithCustomChannelTypesData.discriminator = undefined;
    BanFromChannelsWithCustomChannelTypesData.attributeTypeMap = [
        {
            "name": "channelCustomTypes",
            "baseName": "channel_custom_types",
            "type": "Array<string>",
            "format": ""
        }
    ];
    return BanFromChannelsWithCustomChannelTypesData;
}());
exports.BanFromChannelsWithCustomChannelTypesData = BanFromChannelsWithCustomChannelTypesData;
//# sourceMappingURL=BanFromChannelsWithCustomChannelTypesData.js.map