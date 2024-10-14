"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AddFcmPushConfigurationData = void 0;
var AddFcmPushConfigurationData = (function () {
    function AddFcmPushConfigurationData() {
    }
    AddFcmPushConfigurationData.getAttributeTypeMap = function () {
        return AddFcmPushConfigurationData.attributeTypeMap;
    };
    AddFcmPushConfigurationData.discriminator = undefined;
    AddFcmPushConfigurationData.attributeTypeMap = [
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
    return AddFcmPushConfigurationData;
}());
exports.AddFcmPushConfigurationData = AddFcmPushConfigurationData;
//# sourceMappingURL=AddFcmPushConfigurationData.js.map