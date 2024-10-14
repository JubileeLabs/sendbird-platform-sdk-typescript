"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RemoveRegistrationOrDeviceTokenByTokenResponse = void 0;
var RemoveRegistrationOrDeviceTokenByTokenResponse = (function () {
    function RemoveRegistrationOrDeviceTokenByTokenResponse() {
    }
    RemoveRegistrationOrDeviceTokenByTokenResponse.getAttributeTypeMap = function () {
        return RemoveRegistrationOrDeviceTokenByTokenResponse.attributeTypeMap;
    };
    RemoveRegistrationOrDeviceTokenByTokenResponse.discriminator = undefined;
    RemoveRegistrationOrDeviceTokenByTokenResponse.attributeTypeMap = [
        {
            "name": "token",
            "baseName": "token",
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
    return RemoveRegistrationOrDeviceTokenByTokenResponse;
}());
exports.RemoveRegistrationOrDeviceTokenByTokenResponse = RemoveRegistrationOrDeviceTokenByTokenResponse;
//# sourceMappingURL=RemoveRegistrationOrDeviceTokenByTokenResponse.js.map