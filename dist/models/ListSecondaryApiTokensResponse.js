"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ListSecondaryApiTokensResponse = void 0;
var ListSecondaryApiTokensResponse = (function () {
    function ListSecondaryApiTokensResponse() {
    }
    ListSecondaryApiTokensResponse.getAttributeTypeMap = function () {
        return ListSecondaryApiTokensResponse.attributeTypeMap;
    };
    ListSecondaryApiTokensResponse.discriminator = undefined;
    ListSecondaryApiTokensResponse.attributeTypeMap = [
        {
            "name": "apiTokens",
            "baseName": "api_tokens",
            "type": "Array<ListSecondaryApiTokensResponseApiTokensInner>",
            "format": ""
        }
    ];
    return ListSecondaryApiTokensResponse;
}());
exports.ListSecondaryApiTokensResponse = ListSecondaryApiTokensResponse;
//# sourceMappingURL=ListSecondaryApiTokensResponse.js.map