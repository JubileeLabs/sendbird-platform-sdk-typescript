"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AddRegistrationOrDeviceTokenData = void 0;
var AddRegistrationOrDeviceTokenData = (function () {
    function AddRegistrationOrDeviceTokenData() {
    }
    AddRegistrationOrDeviceTokenData.getAttributeTypeMap = function () {
        return AddRegistrationOrDeviceTokenData.attributeTypeMap;
    };
    AddRegistrationOrDeviceTokenData.discriminator = undefined;
    AddRegistrationOrDeviceTokenData.attributeTypeMap = [
        {
            "name": "gcmRegToken",
            "baseName": "gcm_reg_token",
            "type": "string",
            "format": ""
        },
        {
            "name": "huaweiDeviceToken",
            "baseName": "huawei_device_token",
            "type": "string",
            "format": ""
        },
        {
            "name": "apnsDeviceToken",
            "baseName": "apns_device_token",
            "type": "string",
            "format": ""
        }
    ];
    return AddRegistrationOrDeviceTokenData;
}());
exports.AddRegistrationOrDeviceTokenData = AddRegistrationOrDeviceTokenData;
//# sourceMappingURL=AddRegistrationOrDeviceTokenData.js.map