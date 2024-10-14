"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GcRegisterOperatorsData = void 0;
var GcRegisterOperatorsData = (function () {
    function GcRegisterOperatorsData() {
    }
    GcRegisterOperatorsData.getAttributeTypeMap = function () {
        return GcRegisterOperatorsData.attributeTypeMap;
    };
    GcRegisterOperatorsData.discriminator = undefined;
    GcRegisterOperatorsData.attributeTypeMap = [
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
    return GcRegisterOperatorsData;
}());
exports.GcRegisterOperatorsData = GcRegisterOperatorsData;
//# sourceMappingURL=GcRegisterOperatorsData.js.map