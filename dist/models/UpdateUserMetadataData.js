"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateUserMetadataData = void 0;
var UpdateUserMetadataData = (function () {
    function UpdateUserMetadataData() {
    }
    UpdateUserMetadataData.getAttributeTypeMap = function () {
        return UpdateUserMetadataData.attributeTypeMap;
    };
    UpdateUserMetadataData.discriminator = undefined;
    UpdateUserMetadataData.attributeTypeMap = [
        {
            "name": "metadata",
            "baseName": "metadata",
            "type": "any",
            "format": ""
        },
        {
            "name": "upsert",
            "baseName": "upsert",
            "type": "boolean",
            "format": ""
        }
    ];
    return UpdateUserMetadataData;
}());
exports.UpdateUserMetadataData = UpdateUserMetadataData;
//# sourceMappingURL=UpdateUserMetadataData.js.map