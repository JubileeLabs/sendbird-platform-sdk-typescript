"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AddHmsPushConfigurationResponse = void 0;
var AddHmsPushConfigurationResponse = (function () {
    function AddHmsPushConfigurationResponse() {
    }
    AddHmsPushConfigurationResponse.getAttributeTypeMap = function () {
        return AddHmsPushConfigurationResponse.attributeTypeMap;
    };
    AddHmsPushConfigurationResponse.discriminator = undefined;
    AddHmsPushConfigurationResponse.attributeTypeMap = [
        {
            "name": "pushConfigurations",
            "baseName": "push_configurations",
            "type": "Array<AddHmsPushConfigurationResponsePushConfigurationsInner>",
            "format": ""
        }
    ];
    return AddHmsPushConfigurationResponse;
}());
exports.AddHmsPushConfigurationResponse = AddHmsPushConfigurationResponse;
//# sourceMappingURL=AddHmsPushConfigurationResponse.js.map