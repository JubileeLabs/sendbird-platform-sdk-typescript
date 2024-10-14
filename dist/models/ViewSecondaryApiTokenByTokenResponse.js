"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ViewSecondaryApiTokenByTokenResponse = void 0;
var ViewSecondaryApiTokenByTokenResponse = (function () {
    function ViewSecondaryApiTokenByTokenResponse() {
    }
    ViewSecondaryApiTokenByTokenResponse.getAttributeTypeMap = function () {
        return ViewSecondaryApiTokenByTokenResponse.attributeTypeMap;
    };
    ViewSecondaryApiTokenByTokenResponse.discriminator = undefined;
    ViewSecondaryApiTokenByTokenResponse.attributeTypeMap = [
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
    return ViewSecondaryApiTokenByTokenResponse;
}());
exports.ViewSecondaryApiTokenByTokenResponse = ViewSecondaryApiTokenByTokenResponse;
//# sourceMappingURL=ViewSecondaryApiTokenByTokenResponse.js.map