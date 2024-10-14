"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OcListOperatorsResponse = void 0;
var OcListOperatorsResponse = (function () {
    function OcListOperatorsResponse() {
    }
    OcListOperatorsResponse.getAttributeTypeMap = function () {
        return OcListOperatorsResponse.attributeTypeMap;
    };
    OcListOperatorsResponse.discriminator = undefined;
    OcListOperatorsResponse.attributeTypeMap = [
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
    return OcListOperatorsResponse;
}());
exports.OcListOperatorsResponse = OcListOperatorsResponse;
//# sourceMappingURL=OcListOperatorsResponse.js.map