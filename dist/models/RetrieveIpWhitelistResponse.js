"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RetrieveIpWhitelistResponse = void 0;
var RetrieveIpWhitelistResponse = (function () {
    function RetrieveIpWhitelistResponse() {
    }
    RetrieveIpWhitelistResponse.getAttributeTypeMap = function () {
        return RetrieveIpWhitelistResponse.attributeTypeMap;
    };
    RetrieveIpWhitelistResponse.discriminator = undefined;
    RetrieveIpWhitelistResponse.attributeTypeMap = [
        {
            "name": "ipWhitelistAddresses",
            "baseName": "ip_whitelist_addresses",
            "type": "Array<string>",
            "format": ""
        }
    ];
    return RetrieveIpWhitelistResponse;
}());
exports.RetrieveIpWhitelistResponse = RetrieveIpWhitelistResponse;
//# sourceMappingURL=RetrieveIpWhitelistResponse.js.map