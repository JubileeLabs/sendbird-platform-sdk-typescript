"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AddHmsPushConfigurationResponsePushConfigurationsInner = void 0;
var AddHmsPushConfigurationResponsePushConfigurationsInner = (function () {
    function AddHmsPushConfigurationResponsePushConfigurationsInner() {
    }
    AddHmsPushConfigurationResponsePushConfigurationsInner.getAttributeTypeMap = function () {
        return AddHmsPushConfigurationResponsePushConfigurationsInner.attributeTypeMap;
    };
    AddHmsPushConfigurationResponsePushConfigurationsInner.discriminator = undefined;
    AddHmsPushConfigurationResponsePushConfigurationsInner.attributeTypeMap = [
        {
            "name": "id",
            "baseName": "id",
            "type": "string",
            "format": ""
        },
        {
            "name": "pushType",
            "baseName": "push_type",
            "type": "string",
            "format": ""
        },
        {
            "name": "huaweiAppId",
            "baseName": "huawei_app_id",
            "type": "string",
            "format": ""
        },
        {
            "name": "huaweiAppSecret",
            "baseName": "huawei_app_secret",
            "type": "string",
            "format": ""
        },
        {
            "name": "pushSound",
            "baseName": "push_sound",
            "type": "string",
            "format": ""
        }
    ];
    return AddHmsPushConfigurationResponsePushConfigurationsInner;
}());
exports.AddHmsPushConfigurationResponsePushConfigurationsInner = AddHmsPushConfigurationResponsePushConfigurationsInner;
//# sourceMappingURL=AddHmsPushConfigurationResponsePushConfigurationsInner.js.map