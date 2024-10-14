"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SBObject = void 0;
var SBObject = (function () {
    function SBObject() {
    }
    SBObject.getAttributeTypeMap = function () {
        return SBObject.attributeTypeMap;
    };
    SBObject.discriminator = undefined;
    SBObject.attributeTypeMap = [
        {
            "name": "sbConstructor",
            "baseName": "constructor",
            "type": "Function",
            "format": ""
        }
    ];
    return SBObject;
}());
exports.SBObject = SBObject;
//# sourceMappingURL=SBObject.js.map