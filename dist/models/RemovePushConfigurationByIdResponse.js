"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RemovePushConfigurationByIdResponse = void 0;
var RemovePushConfigurationByIdResponse = (function () {
    function RemovePushConfigurationByIdResponse() {
    }
    RemovePushConfigurationByIdResponse.getAttributeTypeMap = function () {
        return RemovePushConfigurationByIdResponse.attributeTypeMap;
    };
    RemovePushConfigurationByIdResponse.discriminator = undefined;
    RemovePushConfigurationByIdResponse.attributeTypeMap = [
        {
            "name": "pushConfigurations",
            "baseName": "push_configurations",
            "type": "Array<string>",
            "format": ""
        }
    ];
    return RemovePushConfigurationByIdResponse;
}());
exports.RemovePushConfigurationByIdResponse = RemovePushConfigurationByIdResponse;
//# sourceMappingURL=RemovePushConfigurationByIdResponse.js.map