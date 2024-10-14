"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ListPushNotificationContentTemplatesResponse = void 0;
var ListPushNotificationContentTemplatesResponse = (function () {
    function ListPushNotificationContentTemplatesResponse() {
    }
    ListPushNotificationContentTemplatesResponse.getAttributeTypeMap = function () {
        return ListPushNotificationContentTemplatesResponse.attributeTypeMap;
    };
    ListPushNotificationContentTemplatesResponse.discriminator = undefined;
    ListPushNotificationContentTemplatesResponse.attributeTypeMap = [
        {
            "name": "pushMessageTemplates",
            "baseName": "push_message_templates",
            "type": "Array<ListPushNotificationContentTemplatesResponsePushMessageTemplatesInner>",
            "format": ""
        }
    ];
    return ListPushNotificationContentTemplatesResponse;
}());
exports.ListPushNotificationContentTemplatesResponse = ListPushNotificationContentTemplatesResponse;
//# sourceMappingURL=ListPushNotificationContentTemplatesResponse.js.map