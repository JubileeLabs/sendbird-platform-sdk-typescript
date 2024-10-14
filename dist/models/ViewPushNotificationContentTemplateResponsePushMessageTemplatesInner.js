"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ViewPushNotificationContentTemplateResponsePushMessageTemplatesInner = void 0;
var ViewPushNotificationContentTemplateResponsePushMessageTemplatesInner = (function () {
    function ViewPushNotificationContentTemplateResponsePushMessageTemplatesInner() {
    }
    ViewPushNotificationContentTemplateResponsePushMessageTemplatesInner.getAttributeTypeMap = function () {
        return ViewPushNotificationContentTemplateResponsePushMessageTemplatesInner.attributeTypeMap;
    };
    ViewPushNotificationContentTemplateResponsePushMessageTemplatesInner.discriminator = undefined;
    ViewPushNotificationContentTemplateResponsePushMessageTemplatesInner.attributeTypeMap = [
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
        },
        {
            "name": "pushMessagePreview",
            "baseName": "push_message_preview",
            "type": "ListPushNotificationContentTemplatesResponsePushMessageTemplatesInnerTemplate",
            "format": ""
        }
    ];
    return ViewPushNotificationContentTemplateResponsePushMessageTemplatesInner;
}());
exports.ViewPushNotificationContentTemplateResponsePushMessageTemplatesInner = ViewPushNotificationContentTemplateResponsePushMessageTemplatesInner;
//# sourceMappingURL=ViewPushNotificationContentTemplateResponsePushMessageTemplatesInner.js.map