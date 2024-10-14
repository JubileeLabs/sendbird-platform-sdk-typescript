"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RevokeSecondaryApiTokenByTokenResponse = void 0;
var RevokeSecondaryApiTokenByTokenResponse = (function () {
    function RevokeSecondaryApiTokenByTokenResponse() {
    }
    RevokeSecondaryApiTokenByTokenResponse.getAttributeTypeMap = function () {
        return RevokeSecondaryApiTokenByTokenResponse.attributeTypeMap;
    };
    RevokeSecondaryApiTokenByTokenResponse.discriminator = undefined;
    RevokeSecondaryApiTokenByTokenResponse.attributeTypeMap = [
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
    return RevokeSecondaryApiTokenByTokenResponse;
}());
exports.RevokeSecondaryApiTokenByTokenResponse = RevokeSecondaryApiTokenByTokenResponse;
//# sourceMappingURL=RevokeSecondaryApiTokenByTokenResponse.js.map