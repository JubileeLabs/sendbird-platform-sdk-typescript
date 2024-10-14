"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SetDomainFilterData = void 0;
var SetDomainFilterData = (function () {
    function SetDomainFilterData() {
    }
    SetDomainFilterData.getAttributeTypeMap = function () {
        return SetDomainFilterData.attributeTypeMap;
    };
    SetDomainFilterData.discriminator = undefined;
    SetDomainFilterData.attributeTypeMap = [
        {
            "name": "domainFilter",
            "baseName": "domain_filter",
            "type": "SetDomainFilterDataDomainFilter",
            "format": ""
        },
        {
            "name": "profanityFilter",
            "baseName": "profanity_filter",
            "type": "SetDomainFilterDataProfanityFilter",
            "format": ""
        },
        {
            "name": "profanityTriggeredModeration",
            "baseName": "profanity_triggered_moderation",
            "type": "SetDomainFilterDataProfanityTriggeredModeration",
            "format": ""
        },
        {
            "name": "imageModeration",
            "baseName": "image_moderation",
            "type": "SetDomainFilterDataImageModeration",
            "format": ""
        }
    ];
    return SetDomainFilterData;
}());
exports.SetDomainFilterData = SetDomainFilterData;
//# sourceMappingURL=SetDomainFilterData.js.map