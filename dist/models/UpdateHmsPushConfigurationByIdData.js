"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateHmsPushConfigurationByIdData = void 0;
var UpdateHmsPushConfigurationByIdData = (function () {
    function UpdateHmsPushConfigurationByIdData() {
    }
    UpdateHmsPushConfigurationByIdData.getAttributeTypeMap = function () {
        return UpdateHmsPushConfigurationByIdData.attributeTypeMap;
    };
    UpdateHmsPushConfigurationByIdData.discriminator = undefined;
    UpdateHmsPushConfigurationByIdData.attributeTypeMap = [
        {
            "name": "providerId",
            "baseName": "provider_id",
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
    return UpdateHmsPushConfigurationByIdData;
}());
exports.UpdateHmsPushConfigurationByIdData = UpdateHmsPushConfigurationByIdData;
//# sourceMappingURL=UpdateHmsPushConfigurationByIdData.js.map