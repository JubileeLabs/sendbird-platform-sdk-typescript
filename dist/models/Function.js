"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Function = void 0;
var Function = (function () {
    function Function() {
    }
    Function.getAttributeTypeMap = function () {
        return Function.attributeTypeMap;
    };
    Function.discriminator = undefined;
    Function.attributeTypeMap = [
        {
            "name": "arguments",
            "baseName": "arguments",
            "type": "any",
            "format": ""
        },
        {
            "name": "caller",
            "baseName": "caller",
            "type": "Function",
            "format": ""
        },
        {
            "name": "length",
            "baseName": "length",
            "type": "number",
            "format": ""
        },
        {
            "name": "prototype",
            "baseName": "prototype",
            "type": "any",
            "format": ""
        }
    ];
    return Function;
}());
exports.Function = Function;
//# sourceMappingURL=Function.js.map