"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ModelFile = void 0;
var ModelFile = (function () {
    function ModelFile() {
    }
    ModelFile.getAttributeTypeMap = function () {
        return ModelFile.attributeTypeMap;
    };
    ModelFile.discriminator = undefined;
    ModelFile.attributeTypeMap = [
        {
            "name": "lastModified",
            "baseName": "last_modified",
            "type": "number",
            "format": ""
        },
        {
            "name": "name",
            "baseName": "name",
            "type": "string",
            "format": ""
        },
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
        },
        {
            "name": "webkitRelativePath",
            "baseName": "webkit_relative_path",
            "type": "string",
            "format": ""
        }
    ];
    return ModelFile;
}());
exports.ModelFile = ModelFile;
//# sourceMappingURL=ModelFile.js.map