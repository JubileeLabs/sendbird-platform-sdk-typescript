"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OcRegisterOperatorsData = void 0;
var OcRegisterOperatorsData = (function () {
    function OcRegisterOperatorsData() {
    }
    OcRegisterOperatorsData.getAttributeTypeMap = function () {
        return OcRegisterOperatorsData.attributeTypeMap;
    };
    OcRegisterOperatorsData.discriminator = undefined;
    OcRegisterOperatorsData.attributeTypeMap = [
        {
            "name": "channelUrl",
            "baseName": "channel_url",
            "type": "string",
            "format": ""
        },
        {
            "name": "operatorIds",
            "baseName": "operator_ids",
            "type": "Array<string>",
            "format": ""
        }
    ];
    return OcRegisterOperatorsData;
}());
exports.OcRegisterOperatorsData = OcRegisterOperatorsData;
//# sourceMappingURL=OcRegisterOperatorsData.js.map