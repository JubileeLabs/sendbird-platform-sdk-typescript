"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AddIpToWhitelistResponse = void 0;
var AddIpToWhitelistResponse = (function () {
    function AddIpToWhitelistResponse() {
    }
    AddIpToWhitelistResponse.getAttributeTypeMap = function () {
        return AddIpToWhitelistResponse.attributeTypeMap;
    };
    AddIpToWhitelistResponse.discriminator = undefined;
    AddIpToWhitelistResponse.attributeTypeMap = [
        {
            "name": "ipWhitelistAddresses",
            "baseName": "ip_whitelist_addresses",
            "type": "Array<string>",
            "format": ""
        }
    ];
    return AddIpToWhitelistResponse;
}());
exports.AddIpToWhitelistResponse = AddIpToWhitelistResponse;
//# sourceMappingURL=AddIpToWhitelistResponse.js.map