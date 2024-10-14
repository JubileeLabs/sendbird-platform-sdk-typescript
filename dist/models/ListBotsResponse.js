"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ListBotsResponse = void 0;
var ListBotsResponse = (function () {
    function ListBotsResponse() {
    }
    ListBotsResponse.getAttributeTypeMap = function () {
        return ListBotsResponse.attributeTypeMap;
    };
    ListBotsResponse.discriminator = undefined;
    ListBotsResponse.attributeTypeMap = [
        {
            "name": "bots",
            "baseName": "bots",
            "type": "Array<ListBotsResponseBotsInner>",
            "format": ""
        },
        {
            "name": "next",
            "baseName": "next",
            "type": "string",
            "format": ""
        }
    ];
    return ListBotsResponse;
}());
exports.ListBotsResponse = ListBotsResponse;
//# sourceMappingURL=ListBotsResponse.js.map