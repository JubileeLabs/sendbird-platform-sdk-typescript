"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateChannelMetacounterData = void 0;
var UpdateChannelMetacounterData = (function () {
    function UpdateChannelMetacounterData() {
    }
    UpdateChannelMetacounterData.getAttributeTypeMap = function () {
        return UpdateChannelMetacounterData.attributeTypeMap;
    };
    UpdateChannelMetacounterData.discriminator = undefined;
    UpdateChannelMetacounterData.attributeTypeMap = [
        {
            "name": "metacounter",
            "baseName": "metacounter",
            "type": "string",
            "format": ""
        },
        {
            "name": "mode",
            "baseName": "mode",
            "type": "string",
            "format": ""
        },
        {
            "name": "upsert",
            "baseName": "upsert",
            "type": "boolean",
            "format": ""
        }
    ];
    return UpdateChannelMetacounterData;
}());
exports.UpdateChannelMetacounterData = UpdateChannelMetacounterData;
//# sourceMappingURL=UpdateChannelMetacounterData.js.map