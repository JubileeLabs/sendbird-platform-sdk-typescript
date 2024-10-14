"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AddFcmPushConfigurationResponse = void 0;
var AddFcmPushConfigurationResponse = (function () {
    function AddFcmPushConfigurationResponse() {
    }
    AddFcmPushConfigurationResponse.getAttributeTypeMap = function () {
        return AddFcmPushConfigurationResponse.attributeTypeMap;
    };
    AddFcmPushConfigurationResponse.discriminator = undefined;
    AddFcmPushConfigurationResponse.attributeTypeMap = [
        {
            "name": "pushConfigurations",
            "baseName": "push_configurations",
            "type": "Array<AddFcmPushConfigurationResponsePushConfigurationsInner>",
            "format": ""
        }
    ];
    return AddFcmPushConfigurationResponse;
}());
exports.AddFcmPushConfigurationResponse = AddFcmPushConfigurationResponse;
//# sourceMappingURL=AddFcmPushConfigurationResponse.js.map