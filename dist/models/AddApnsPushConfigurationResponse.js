"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AddApnsPushConfigurationResponse = void 0;
var AddApnsPushConfigurationResponse = (function () {
    function AddApnsPushConfigurationResponse() {
    }
    AddApnsPushConfigurationResponse.getAttributeTypeMap = function () {
        return AddApnsPushConfigurationResponse.attributeTypeMap;
    };
    AddApnsPushConfigurationResponse.discriminator = undefined;
    AddApnsPushConfigurationResponse.attributeTypeMap = [
        {
            "name": "pushConfigurations",
            "baseName": "push_configurations",
            "type": "Array<AddApnsPushConfigurationResponsePushConfigurationsInner>",
            "format": ""
        }
    ];
    return AddApnsPushConfigurationResponse;
}());
exports.AddApnsPushConfigurationResponse = AddApnsPushConfigurationResponse;
//# sourceMappingURL=AddApnsPushConfigurationResponse.js.map