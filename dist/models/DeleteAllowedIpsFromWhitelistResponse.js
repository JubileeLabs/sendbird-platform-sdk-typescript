"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteAllowedIpsFromWhitelistResponse = void 0;
var DeleteAllowedIpsFromWhitelistResponse = (function () {
    function DeleteAllowedIpsFromWhitelistResponse() {
    }
    DeleteAllowedIpsFromWhitelistResponse.getAttributeTypeMap = function () {
        return DeleteAllowedIpsFromWhitelistResponse.attributeTypeMap;
    };
    DeleteAllowedIpsFromWhitelistResponse.discriminator = undefined;
    DeleteAllowedIpsFromWhitelistResponse.attributeTypeMap = [
        {
            "name": "ipWhitelistAddresses",
            "baseName": "ip_whitelist_addresses",
            "type": "Array<string>",
            "format": ""
        }
    ];
    return DeleteAllowedIpsFromWhitelistResponse;
}());
exports.DeleteAllowedIpsFromWhitelistResponse = DeleteAllowedIpsFromWhitelistResponse;
//# sourceMappingURL=DeleteAllowedIpsFromWhitelistResponse.js.map