"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GcListOperatorsResponse = void 0;
var GcListOperatorsResponse = (function () {
    function GcListOperatorsResponse() {
    }
    GcListOperatorsResponse.getAttributeTypeMap = function () {
        return GcListOperatorsResponse.attributeTypeMap;
    };
    GcListOperatorsResponse.discriminator = undefined;
    GcListOperatorsResponse.attributeTypeMap = [
        {
            "name": "operators",
            "baseName": "operators",
            "type": "Array<SendBirdUser>",
            "format": ""
        },
        {
            "name": "next",
            "baseName": "next",
            "type": "string",
            "format": ""
        }
    ];
    return GcListOperatorsResponse;
}());
exports.GcListOperatorsResponse = GcListOperatorsResponse;
//# sourceMappingURL=GcListOperatorsResponse.js.map