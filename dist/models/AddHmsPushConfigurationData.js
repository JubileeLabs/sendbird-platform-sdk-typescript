"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AddHmsPushConfigurationData = void 0;
var AddHmsPushConfigurationData = (function () {
    function AddHmsPushConfigurationData() {
    }
    AddHmsPushConfigurationData.getAttributeTypeMap = function () {
        return AddHmsPushConfigurationData.attributeTypeMap;
    };
    AddHmsPushConfigurationData.discriminator = undefined;
    AddHmsPushConfigurationData.attributeTypeMap = [
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
    return AddHmsPushConfigurationData;
}());
exports.AddHmsPushConfigurationData = AddHmsPushConfigurationData;
//# sourceMappingURL=AddHmsPushConfigurationData.js.map