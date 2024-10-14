"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdatePushPreferencesForChannelByUrlResponse = void 0;
var UpdatePushPreferencesForChannelByUrlResponse = (function () {
    function UpdatePushPreferencesForChannelByUrlResponse() {
    }
    UpdatePushPreferencesForChannelByUrlResponse.getAttributeTypeMap = function () {
        return UpdatePushPreferencesForChannelByUrlResponse.attributeTypeMap;
    };
    UpdatePushPreferencesForChannelByUrlResponse.discriminator = undefined;
    UpdatePushPreferencesForChannelByUrlResponse.attributeTypeMap = [
        {
            "name": "pushTriggerOption",
            "baseName": "push_trigger_option",
            "type": "string",
            "format": ""
        },
        {
            "name": "doNotDisturb",
            "baseName": "do_not_disturb",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "startHour",
            "baseName": "start_hour",
            "type": "number",
            "format": ""
        },
        {
            "name": "startMin",
            "baseName": "start_min",
            "type": "number",
            "format": ""
        },
        {
            "name": "endHour",
            "baseName": "end_hour",
            "type": "number",
            "format": ""
        },
        {
            "name": "endMin",
            "baseName": "end_min",
            "type": "number",
            "format": ""
        },
        {
            "name": "snoozeEnabled",
            "baseName": "snooze_enabled",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "snoozeStartTs",
            "baseName": "snooze_start_ts",
            "type": "number",
            "format": ""
        },
        {
            "name": "snoozeEndTs",
            "baseName": "snooze_end_ts",
            "type": "number",
            "format": ""
        },
        {
            "name": "timezone",
            "baseName": "timezone",
            "type": "string",
            "format": ""
        },
        {
            "name": "pushSound",
            "baseName": "push_sound",
            "type": "string",
            "format": ""
        },
        {
            "name": "enable",
            "baseName": "enable",
            "type": "boolean",
            "format": ""
        }
    ];
    return UpdatePushPreferencesForChannelByUrlResponse;
}());
exports.UpdatePushPreferencesForChannelByUrlResponse = UpdatePushPreferencesForChannelByUrlResponse;
//# sourceMappingURL=UpdatePushPreferencesForChannelByUrlResponse.js.map