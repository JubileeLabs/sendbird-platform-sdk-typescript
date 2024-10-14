"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdatePushNotificationContentTemplateData = void 0;
var UpdatePushNotificationContentTemplateData = (function () {
    function UpdatePushNotificationContentTemplateData() {
    }
    UpdatePushNotificationContentTemplateData.getAttributeTypeMap = function () {
        return UpdatePushNotificationContentTemplateData.attributeTypeMap;
    };
    UpdatePushNotificationContentTemplateData.discriminator = undefined;
    UpdatePushNotificationContentTemplateData.attributeTypeMap = [
        {
            "name": "templateName",
            "baseName": "template_name",
            "type": "string",
            "format": ""
        },
        {
            "name": "template",
            "baseName": "template",
            "type": "string",
            "format": ""
        },
        {
            "name": "templateMESG",
            "baseName": "template.MESG",
            "type": "string",
            "format": ""
        },
        {
            "name": "templateFILE",
            "baseName": "template.FILE",
            "type": "string",
            "format": ""
        },
        {
            "name": "templateADMN",
            "baseName": "template.ADMN",
            "type": "string",
            "format": ""
        }
    ];
    return UpdatePushNotificationContentTemplateData;
}());
exports.UpdatePushNotificationContentTemplateData = UpdatePushNotificationContentTemplateData;
//# sourceMappingURL=UpdatePushNotificationContentTemplateData.js.map