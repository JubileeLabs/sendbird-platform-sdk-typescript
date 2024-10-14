"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RetrieveListOfSubscribedEventsResponseWebhook = void 0;
var RetrieveListOfSubscribedEventsResponseWebhook = (function () {
    function RetrieveListOfSubscribedEventsResponseWebhook() {
    }
    RetrieveListOfSubscribedEventsResponseWebhook.getAttributeTypeMap = function () {
        return RetrieveListOfSubscribedEventsResponseWebhook.attributeTypeMap;
    };
    RetrieveListOfSubscribedEventsResponseWebhook.discriminator = undefined;
    RetrieveListOfSubscribedEventsResponseWebhook.attributeTypeMap = [
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
            "name": "allWebhookCategories",
            "baseName": "all_webhook_categories",
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
    return RetrieveListOfSubscribedEventsResponseWebhook;
}());
exports.RetrieveListOfSubscribedEventsResponseWebhook = RetrieveListOfSubscribedEventsResponseWebhook;
//# sourceMappingURL=RetrieveListOfSubscribedEventsResponseWebhook.js.map