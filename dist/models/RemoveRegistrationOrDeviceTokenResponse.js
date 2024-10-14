"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RemoveRegistrationOrDeviceTokenResponse = void 0;
var RemoveRegistrationOrDeviceTokenResponse = (function () {
    function RemoveRegistrationOrDeviceTokenResponse() {
    }
    RemoveRegistrationOrDeviceTokenResponse.getAttributeTypeMap = function () {
        return RemoveRegistrationOrDeviceTokenResponse.attributeTypeMap;
    };
    RemoveRegistrationOrDeviceTokenResponse.discriminator = undefined;
    RemoveRegistrationOrDeviceTokenResponse.attributeTypeMap = [
        {
            "name": "token",
            "baseName": "token",
            "type": "Array<string>",
            "format": ""
        },
        {
            "name": "user",
            "baseName": "user",
            "type": "SendBirdUser",
            "format": ""
        }
    ];
    return RemoveRegistrationOrDeviceTokenResponse;
}());
exports.RemoveRegistrationOrDeviceTokenResponse = RemoveRegistrationOrDeviceTokenResponse;
//# sourceMappingURL=RemoveRegistrationOrDeviceTokenResponse.js.map