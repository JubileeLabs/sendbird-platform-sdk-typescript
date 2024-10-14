"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ViewPushNotificationContentTemplateResponse = void 0;
var ViewPushNotificationContentTemplateResponse = (function () {
    function ViewPushNotificationContentTemplateResponse() {
    }
    ViewPushNotificationContentTemplateResponse.getAttributeTypeMap = function () {
        return ViewPushNotificationContentTemplateResponse.attributeTypeMap;
    };
    ViewPushNotificationContentTemplateResponse.discriminator = undefined;
    ViewPushNotificationContentTemplateResponse.attributeTypeMap = [
        {
            "name": "pushMessageTemplates",
            "baseName": "push_message_templates",
            "type": "Array<ViewPushNotificationContentTemplateResponsePushMessageTemplatesInner>",
            "format": ""
        }
    ];
    return ViewPushNotificationContentTemplateResponse;
}());
exports.ViewPushNotificationContentTemplateResponse = ViewPushNotificationContentTemplateResponse;
//# sourceMappingURL=ViewPushNotificationContentTemplateResponse.js.map