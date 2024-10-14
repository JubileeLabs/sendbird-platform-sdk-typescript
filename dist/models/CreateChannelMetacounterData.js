"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateChannelMetacounterData = void 0;
var CreateChannelMetacounterData = (function () {
    function CreateChannelMetacounterData() {
    }
    CreateChannelMetacounterData.getAttributeTypeMap = function () {
        return CreateChannelMetacounterData.attributeTypeMap;
    };
    CreateChannelMetacounterData.discriminator = undefined;
    CreateChannelMetacounterData.attributeTypeMap = [
        {
            "name": "channelType",
            "baseName": "channel_type",
            "type": "string",
            "format": ""
        },
        {
            "name": "channelUrl",
            "baseName": "channel_url",
            "type": "string",
            "format": ""
        },
        {
            "name": "metacounter",
            "baseName": "metacounter",
            "type": "string",
            "format": ""
        }
    ];
    return CreateChannelMetacounterData;
}());
exports.CreateChannelMetacounterData = CreateChannelMetacounterData;
//# sourceMappingURL=CreateChannelMetacounterData.js.map