"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ListPushConfigurationsResponse = void 0;
var ListPushConfigurationsResponse = (function () {
    function ListPushConfigurationsResponse() {
    }
    ListPushConfigurationsResponse.getAttributeTypeMap = function () {
        return ListPushConfigurationsResponse.attributeTypeMap;
    };
    ListPushConfigurationsResponse.discriminator = undefined;
    ListPushConfigurationsResponse.attributeTypeMap = [
        {
            "name": "pushConfigurations",
            "baseName": "push_configurations",
            "type": "Array<ListPushConfigurationsResponsePushConfigurationsInner>",
            "format": ""
        }
    ];
    return ListPushConfigurationsResponse;
}());
exports.ListPushConfigurationsResponse = ListPushConfigurationsResponse;
//# sourceMappingURL=ListPushConfigurationsResponse.js.map