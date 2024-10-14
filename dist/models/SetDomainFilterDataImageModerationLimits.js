"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SetDomainFilterDataImageModerationLimits = void 0;
var SetDomainFilterDataImageModerationLimits = (function () {
    function SetDomainFilterDataImageModerationLimits() {
    }
    SetDomainFilterDataImageModerationLimits.getAttributeTypeMap = function () {
        return SetDomainFilterDataImageModerationLimits.attributeTypeMap;
    };
    SetDomainFilterDataImageModerationLimits.discriminator = undefined;
    SetDomainFilterDataImageModerationLimits.attributeTypeMap = [
        {
            "name": "adult",
            "baseName": "adult",
            "type": "number",
            "format": ""
        },
        {
            "name": "spoof",
            "baseName": "spoof",
            "type": "number",
            "format": ""
        },
        {
            "name": "medical",
            "baseName": "medical",
            "type": "number",
            "format": ""
        },
        {
            "name": "violence",
            "baseName": "violence",
            "type": "number",
            "format": ""
        },
        {
            "name": "racy",
            "baseName": "racy",
            "type": "number",
            "format": ""
        }
    ];
    return SetDomainFilterDataImageModerationLimits;
}());
exports.SetDomainFilterDataImageModerationLimits = SetDomainFilterDataImageModerationLimits;
//# sourceMappingURL=SetDomainFilterDataImageModerationLimits.js.map