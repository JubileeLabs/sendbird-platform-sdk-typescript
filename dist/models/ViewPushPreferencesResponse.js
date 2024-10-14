"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ViewPushPreferencesResponse = void 0;
var ViewPushPreferencesResponse = (function () {
    function ViewPushPreferencesResponse() {
    }
    ViewPushPreferencesResponse.getAttributeTypeMap = function () {
        return ViewPushPreferencesResponse.attributeTypeMap;
    };
    ViewPushPreferencesResponse.discriminator = undefined;
    ViewPushPreferencesResponse.attributeTypeMap = [
        {
            "name": "snoozeStartTs",
            "baseName": "snooze_start_ts",
            "type": "string",
            "format": ""
        },
        {
            "name": "startHour",
            "baseName": "start_hour",
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
            "name": "endMin",
            "baseName": "end_min",
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
            "name": "blockPushFromBots",
            "baseName": "block_push_from_bots",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "pushBlockedBotIds",
            "baseName": "push_blocked_bot_ids",
            "type": "Array<string>",
            "format": ""
        },
        {
            "name": "startMin",
            "baseName": "start_min",
            "type": "number",
            "format": ""
        },
        {
            "name": "snoozeEndTs",
            "baseName": "snooze_end_ts",
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
            "name": "endHour",
            "baseName": "end_hour",
            "type": "number",
            "format": ""
        },
        {
            "name": "enablePushForReplies",
            "baseName": "enable_push_for_replies",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "pushSound",
            "baseName": "push_sound",
            "type": "string",
            "format": ""
        },
        {
            "name": "pushTriggerOption",
            "baseName": "push_trigger_option",
            "type": "string",
            "format": ""
        }
    ];
    return ViewPushPreferencesResponse;
}());
exports.ViewPushPreferencesResponse = ViewPushPreferencesResponse;
//# sourceMappingURL=ViewPushPreferencesResponse.js.map