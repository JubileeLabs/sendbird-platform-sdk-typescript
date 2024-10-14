"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateUserTokenResponse = void 0;
var CreateUserTokenResponse = (function () {
    function CreateUserTokenResponse() {
    }
    CreateUserTokenResponse.getAttributeTypeMap = function () {
        return CreateUserTokenResponse.attributeTypeMap;
    };
    CreateUserTokenResponse.discriminator = undefined;
    CreateUserTokenResponse.attributeTypeMap = [
        {
            "name": "token",
            "baseName": "token",
            "type": "string",
            "format": ""
        },
        {
            "name": "expiresAt",
            "baseName": "expires_at",
            "type": "number",
            "format": ""
        }
    ];
    return CreateUserTokenResponse;
}());
exports.CreateUserTokenResponse = CreateUserTokenResponse;
//# sourceMappingURL=CreateUserTokenResponse.js.map