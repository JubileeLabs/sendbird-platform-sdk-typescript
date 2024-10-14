"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GenerateSecondaryApiTokenResponse = void 0;
var GenerateSecondaryApiTokenResponse = (function () {
    function GenerateSecondaryApiTokenResponse() {
    }
    GenerateSecondaryApiTokenResponse.getAttributeTypeMap = function () {
        return GenerateSecondaryApiTokenResponse.attributeTypeMap;
    };
    GenerateSecondaryApiTokenResponse.discriminator = undefined;
    GenerateSecondaryApiTokenResponse.attributeTypeMap = [
        {
            "name": "token",
            "baseName": "token",
            "type": "string",
            "format": ""
        },
        {
            "name": "createdAt",
            "baseName": "created_at",
            "type": "number",
            "format": ""
        }
    ];
    return GenerateSecondaryApiTokenResponse;
}());
exports.GenerateSecondaryApiTokenResponse = GenerateSecondaryApiTokenResponse;
//# sourceMappingURL=GenerateSecondaryApiTokenResponse.js.map