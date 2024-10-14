"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SendBirdRestrictionInfo = void 0;
var SendBirdRestrictionInfo = (function () {
    function SendBirdRestrictionInfo() {
    }
    SendBirdRestrictionInfo.getAttributeTypeMap = function () {
        return SendBirdRestrictionInfo.attributeTypeMap;
    };
    SendBirdRestrictionInfo.discriminator = undefined;
    SendBirdRestrictionInfo.attributeTypeMap = [
        {
            "name": "description",
            "baseName": "description",
            "type": "string",
            "format": ""
        },
        {
            "name": "endAt",
            "baseName": "end_at",
            "type": "number",
            "format": ""
        },
        {
            "name": "restrictionType",
            "baseName": "restriction_type",
            "type": "SendBirdRestrictionInfoRestrictionTypeEnum",
            "format": ""
        }
    ];
    return SendBirdRestrictionInfo;
}());
exports.SendBirdRestrictionInfo = SendBirdRestrictionInfo;
//# sourceMappingURL=SendBirdRestrictionInfo.js.map