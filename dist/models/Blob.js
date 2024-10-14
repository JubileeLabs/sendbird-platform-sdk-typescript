"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Blob = void 0;
var Blob = (function () {
    function Blob() {
    }
    Blob.getAttributeTypeMap = function () {
        return Blob.attributeTypeMap;
    };
    Blob.discriminator = undefined;
    Blob.attributeTypeMap = [
        {
            "name": "size",
            "baseName": "size",
            "type": "number",
            "format": ""
        },
        {
            "name": "type",
            "baseName": "type",
            "type": "string",
            "format": ""
        }
    ];
    return Blob;
}());
exports.Blob = Blob;
//# sourceMappingURL=Blob.js.map