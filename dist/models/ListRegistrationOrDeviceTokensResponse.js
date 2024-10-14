"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ListRegistrationOrDeviceTokensResponse = void 0;
var ListRegistrationOrDeviceTokensResponse = (function () {
    function ListRegistrationOrDeviceTokensResponse() {
    }
    ListRegistrationOrDeviceTokensResponse.getAttributeTypeMap = function () {
        return ListRegistrationOrDeviceTokensResponse.attributeTypeMap;
    };
    ListRegistrationOrDeviceTokensResponse.discriminator = undefined;
    ListRegistrationOrDeviceTokensResponse.attributeTypeMap = [
        {
            "name": "token",
            "baseName": "token",
            "type": "Array<string>",
            "format": ""
        },
        {
            "name": "tokens",
            "baseName": "tokens",
            "type": "Array<string>",
            "format": ""
        },
        {
            "name": "type",
            "baseName": "type",
            "type": "string",
            "format": ""
        },
        {
            "name": "user",
            "baseName": "user",
            "type": "SendBirdUser",
            "format": ""
        }
    ];
    return ListRegistrationOrDeviceTokensResponse;
}());
exports.ListRegistrationOrDeviceTokensResponse = ListRegistrationOrDeviceTokensResponse;
//# sourceMappingURL=ListRegistrationOrDeviceTokensResponse.js.map