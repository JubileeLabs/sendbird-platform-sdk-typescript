"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ViewPushConfigurationByIdResponse = void 0;
var ViewPushConfigurationByIdResponse = (function () {
    function ViewPushConfigurationByIdResponse() {
    }
    ViewPushConfigurationByIdResponse.getAttributeTypeMap = function () {
        return ViewPushConfigurationByIdResponse.attributeTypeMap;
    };
    ViewPushConfigurationByIdResponse.discriminator = undefined;
    ViewPushConfigurationByIdResponse.attributeTypeMap = [
        {
            "name": "pushConfigurations",
            "baseName": "push_configurations",
            "type": "Array<ListPushConfigurationsResponsePushConfigurationsInner>",
            "format": ""
        }
    ];
    return ViewPushConfigurationByIdResponse;
}());
exports.ViewPushConfigurationByIdResponse = ViewPushConfigurationByIdResponse;
//# sourceMappingURL=ViewPushConfigurationByIdResponse.js.map