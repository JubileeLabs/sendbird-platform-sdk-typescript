"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AddIpToWhitelistData = void 0;
var AddIpToWhitelistData = (function () {
    function AddIpToWhitelistData() {
    }
    AddIpToWhitelistData.getAttributeTypeMap = function () {
        return AddIpToWhitelistData.attributeTypeMap;
    };
    AddIpToWhitelistData.discriminator = undefined;
    AddIpToWhitelistData.attributeTypeMap = [
        {
            "name": "ipWhitelistAddresses",
            "baseName": "ip_whitelist_addresses",
            "type": "Array<string>",
            "format": ""
        }
    ];
    return AddIpToWhitelistData;
}());
exports.AddIpToWhitelistData = AddIpToWhitelistData;
//# sourceMappingURL=AddIpToWhitelistData.js.map