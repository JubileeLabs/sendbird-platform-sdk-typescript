"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SetDomainFilterDataProfanityFilter = void 0;
var SetDomainFilterDataProfanityFilter = (function () {
    function SetDomainFilterDataProfanityFilter() {
    }
    SetDomainFilterDataProfanityFilter.getAttributeTypeMap = function () {
        return SetDomainFilterDataProfanityFilter.attributeTypeMap;
    };
    SetDomainFilterDataProfanityFilter.discriminator = undefined;
    SetDomainFilterDataProfanityFilter.attributeTypeMap = [
        {
            "name": "keywords",
            "baseName": "keywords",
            "type": "Array<string>",
            "format": ""
        },
        {
            "name": "regexFilters",
            "baseName": "regex_filters",
            "type": "Array<SetDomainFilterDataProfanityFilterRegexFiltersInner>",
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
    return SetDomainFilterDataProfanityFilter;
}());
exports.SetDomainFilterDataProfanityFilter = SetDomainFilterDataProfanityFilter;
//# sourceMappingURL=SetDomainFilterDataProfanityFilter.js.map