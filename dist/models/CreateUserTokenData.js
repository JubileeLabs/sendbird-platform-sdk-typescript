"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateUserTokenData = void 0;
var CreateUserTokenData = (function () {
    function CreateUserTokenData() {
    }
    CreateUserTokenData.getAttributeTypeMap = function () {
        return CreateUserTokenData.attributeTypeMap;
    };
    CreateUserTokenData.discriminator = undefined;
    CreateUserTokenData.attributeTypeMap = [
        {
            "name": "expiresAt",
            "baseName": "expires_at",
            "type": "number",
            "format": ""
        }
    ];
    return CreateUserTokenData;
}());
exports.CreateUserTokenData = CreateUserTokenData;
//# sourceMappingURL=CreateUserTokenData.js.map