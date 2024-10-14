"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ListPushNotificationContentTemplatesResponsePushMessageTemplatesInner = void 0;
var ListPushNotificationContentTemplatesResponsePushMessageTemplatesInner = (function () {
    function ListPushNotificationContentTemplatesResponsePushMessageTemplatesInner() {
    }
    ListPushNotificationContentTemplatesResponsePushMessageTemplatesInner.getAttributeTypeMap = function () {
        return ListPushNotificationContentTemplatesResponsePushMessageTemplatesInner.attributeTypeMap;
    };
    ListPushNotificationContentTemplatesResponsePushMessageTemplatesInner.discriminator = undefined;
    ListPushNotificationContentTemplatesResponsePushMessageTemplatesInner.attributeTypeMap = [
        {
            "name": "templateName",
            "baseName": "template_name",
            "type": "string",
            "format": ""
        },
        {
            "name": "template",
            "baseName": "template",
            "type": "ListPushNotificationContentTemplatesResponsePushMessageTemplatesInnerTemplate",
            "format": ""
        }
    ];
    return ListPushNotificationContentTemplatesResponsePushMessageTemplatesInner;
}());
exports.ListPushNotificationContentTemplatesResponsePushMessageTemplatesInner = ListPushNotificationContentTemplatesResponsePushMessageTemplatesInner;
//# sourceMappingURL=ListPushNotificationContentTemplatesResponsePushMessageTemplatesInner.js.map