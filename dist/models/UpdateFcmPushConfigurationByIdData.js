"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateFcmPushConfigurationByIdData = void 0;
var UpdateFcmPushConfigurationByIdData = (function () {
    function UpdateFcmPushConfigurationByIdData() {
    }
    UpdateFcmPushConfigurationByIdData.getAttributeTypeMap = function () {
        return UpdateFcmPushConfigurationByIdData.attributeTypeMap;
    };
    UpdateFcmPushConfigurationByIdData.discriminator = undefined;
    UpdateFcmPushConfigurationByIdData.attributeTypeMap = [
        {
            "name": "providerId",
            "baseName": "provider_id",
            "type": "string",
            "format": ""
        },
        {
            "name": "apiKey",
            "baseName": "api_key",
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
    return UpdateFcmPushConfigurationByIdData;
}());
exports.UpdateFcmPushConfigurationByIdData = UpdateFcmPushConfigurationByIdData;
//# sourceMappingURL=UpdateFcmPushConfigurationByIdData.js.map