"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ChooseWhichEventsToSubscribeToResponseWebhook = void 0;
var ChooseWhichEventsToSubscribeToResponseWebhook = (function () {
    function ChooseWhichEventsToSubscribeToResponseWebhook() {
    }
    ChooseWhichEventsToSubscribeToResponseWebhook.getAttributeTypeMap = function () {
        return ChooseWhichEventsToSubscribeToResponseWebhook.attributeTypeMap;
    };
    ChooseWhichEventsToSubscribeToResponseWebhook.discriminator = undefined;
    ChooseWhichEventsToSubscribeToResponseWebhook.attributeTypeMap = [
        {
            "name": "enabled",
            "baseName": "enabled",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "url",
            "baseName": "url",
            "type": "string",
            "format": ""
        },
        {
            "name": "includeMembers",
            "baseName": "include_members",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "enabledEvents",
            "baseName": "enabled_events",
            "type": "Array<string>",
            "format": ""
        },
        {
            "name": "includeUnreadCount",
            "baseName": "include_unread_count",
            "type": "boolean",
            "format": ""
        }
    ];
    return ChooseWhichEventsToSubscribeToResponseWebhook;
}());
exports.ChooseWhichEventsToSubscribeToResponseWebhook = ChooseWhichEventsToSubscribeToResponseWebhook;
//# sourceMappingURL=ChooseWhichEventsToSubscribeToResponseWebhook.js.map