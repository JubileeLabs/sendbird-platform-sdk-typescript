"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SetDomainFilterDataDomainFilter = void 0;
var SetDomainFilterDataDomainFilter = (function () {
    function SetDomainFilterDataDomainFilter() {
    }
    SetDomainFilterDataDomainFilter.getAttributeTypeMap = function () {
        return SetDomainFilterDataDomainFilter.attributeTypeMap;
    };
    SetDomainFilterDataDomainFilter.discriminator = undefined;
    SetDomainFilterDataDomainFilter.attributeTypeMap = [
        {
            "name": "domains",
            "baseName": "domains",
            "type": "Array<string>",
            "format": ""
        },
        {
            "name": "type",
            "baseName": "type",
            "type": "number",
            "format": ""
        },
        {
            "name": "shouldCheckGlobal",
            "baseName": "should_check_global",
            "type": "boolean",
            "format": ""
        }
    ];
    return SetDomainFilterDataDomainFilter;
}());
exports.SetDomainFilterDataDomainFilter = SetDomainFilterDataDomainFilter;
//# sourceMappingURL=SetDomainFilterDataDomainFilter.js.map