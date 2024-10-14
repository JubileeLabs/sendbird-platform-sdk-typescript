"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ListSecondaryApiTokensResponseApiTokensInner = void 0;
var ListSecondaryApiTokensResponseApiTokensInner = (function () {
    function ListSecondaryApiTokensResponseApiTokensInner() {
    }
    ListSecondaryApiTokensResponseApiTokensInner.getAttributeTypeMap = function () {
        return ListSecondaryApiTokensResponseApiTokensInner.attributeTypeMap;
    };
    ListSecondaryApiTokensResponseApiTokensInner.discriminator = undefined;
    ListSecondaryApiTokensResponseApiTokensInner.attributeTypeMap = [
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
    return ListSecondaryApiTokensResponseApiTokensInner;
}());
exports.ListSecondaryApiTokensResponseApiTokensInner = ListSecondaryApiTokensResponseApiTokensInner;
//# sourceMappingURL=ListSecondaryApiTokensResponseApiTokensInner.js.map