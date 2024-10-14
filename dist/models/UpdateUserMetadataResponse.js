"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateUserMetadataResponse = void 0;
var UpdateUserMetadataResponse = (function () {
    function UpdateUserMetadataResponse() {
    }
    UpdateUserMetadataResponse.getAttributeTypeMap = function () {
        return UpdateUserMetadataResponse.attributeTypeMap;
    };
    UpdateUserMetadataResponse.discriminator = undefined;
    UpdateUserMetadataResponse.attributeTypeMap = [
        {
            "name": "metadata",
            "baseName": "metadata",
            "type": "{ [key: string]: string; }",
            "format": ""
        },
        {
            "name": "upsert",
            "baseName": "upsert",
            "type": "boolean",
            "format": ""
        }
    ];
    return UpdateUserMetadataResponse;
}());
exports.UpdateUserMetadataResponse = UpdateUserMetadataResponse;
//# sourceMappingURL=UpdateUserMetadataResponse.js.map