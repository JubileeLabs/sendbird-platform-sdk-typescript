"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AddRegistrationOrDeviceTokenResponse = void 0;
var AddRegistrationOrDeviceTokenResponse = (function () {
    function AddRegistrationOrDeviceTokenResponse() {
    }
    AddRegistrationOrDeviceTokenResponse.getAttributeTypeMap = function () {
        return AddRegistrationOrDeviceTokenResponse.attributeTypeMap;
    };
    AddRegistrationOrDeviceTokenResponse.discriminator = undefined;
    AddRegistrationOrDeviceTokenResponse.attributeTypeMap = [
        {
            "name": "token",
            "baseName": "token",
            "type": "string",
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
    return AddRegistrationOrDeviceTokenResponse;
}());
exports.AddRegistrationOrDeviceTokenResponse = AddRegistrationOrDeviceTokenResponse;
//# sourceMappingURL=AddRegistrationOrDeviceTokenResponse.js.map