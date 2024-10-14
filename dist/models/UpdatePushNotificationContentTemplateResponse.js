"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdatePushNotificationContentTemplateResponse = void 0;
var UpdatePushNotificationContentTemplateResponse = (function () {
    function UpdatePushNotificationContentTemplateResponse() {
    }
    UpdatePushNotificationContentTemplateResponse.getAttributeTypeMap = function () {
        return UpdatePushNotificationContentTemplateResponse.attributeTypeMap;
    };
    UpdatePushNotificationContentTemplateResponse.discriminator = undefined;
    UpdatePushNotificationContentTemplateResponse.attributeTypeMap = [
        {
            "name": "pushMessageTemplates",
            "baseName": "push_message_templates",
            "type": "Array<ViewPushNotificationContentTemplateResponsePushMessageTemplatesInner>",
            "format": ""
        }
    ];
    return UpdatePushNotificationContentTemplateResponse;
}());
exports.UpdatePushNotificationContentTemplateResponse = UpdatePushNotificationContentTemplateResponse;
//# sourceMappingURL=UpdatePushNotificationContentTemplateResponse.js.map