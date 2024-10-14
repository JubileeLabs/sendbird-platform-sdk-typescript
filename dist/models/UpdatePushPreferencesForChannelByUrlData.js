"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdatePushPreferencesForChannelByUrlData = void 0;
var UpdatePushPreferencesForChannelByUrlData = (function () {
    function UpdatePushPreferencesForChannelByUrlData() {
    }
    UpdatePushPreferencesForChannelByUrlData.getAttributeTypeMap = function () {
        return UpdatePushPreferencesForChannelByUrlData.attributeTypeMap;
    };
    UpdatePushPreferencesForChannelByUrlData.discriminator = undefined;
    UpdatePushPreferencesForChannelByUrlData.attributeTypeMap = [
        {
            "name": "pushTriggerOption",
            "baseName": "push_trigger_option",
            "type": "string",
            "format": ""
        },
        {
            "name": "enable",
            "baseName": "enable",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "pushSound",
            "baseName": "push_sound",
            "type": "string",
            "format": ""
        }
    ];
    return UpdatePushPreferencesForChannelByUrlData;
}());
exports.UpdatePushPreferencesForChannelByUrlData = UpdatePushPreferencesForChannelByUrlData;
//# sourceMappingURL=UpdatePushPreferencesForChannelByUrlData.js.map