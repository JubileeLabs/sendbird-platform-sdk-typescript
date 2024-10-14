"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SetDomainFilterDataImageModeration = void 0;
var SetDomainFilterDataImageModeration = (function () {
    function SetDomainFilterDataImageModeration() {
    }
    SetDomainFilterDataImageModeration.getAttributeTypeMap = function () {
        return SetDomainFilterDataImageModeration.attributeTypeMap;
    };
    SetDomainFilterDataImageModeration.discriminator = undefined;
    SetDomainFilterDataImageModeration.attributeTypeMap = [
        {
            "name": "type",
            "baseName": "type",
            "type": "number",
            "format": ""
        },
        {
            "name": "softBlock",
            "baseName": "soft_block",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "limits",
            "baseName": "limits",
            "type": "SetDomainFilterDataImageModerationLimits",
            "format": ""
        },
        {
            "name": "checkUrls",
            "baseName": "check_urls",
            "type": "boolean",
            "format": ""
        }
    ];
    return SetDomainFilterDataImageModeration;
}());
exports.SetDomainFilterDataImageModeration = SetDomainFilterDataImageModeration;
//# sourceMappingURL=SetDomainFilterDataImageModeration.js.map