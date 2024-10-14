"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ListGdprRequestsResponse = void 0;
var ListGdprRequestsResponse = (function () {
    function ListGdprRequestsResponse() {
    }
    ListGdprRequestsResponse.getAttributeTypeMap = function () {
        return ListGdprRequestsResponse.attributeTypeMap;
    };
    ListGdprRequestsResponse.discriminator = undefined;
    ListGdprRequestsResponse.attributeTypeMap = [
        {
            "name": "requests",
            "baseName": "requests",
            "type": "Array<ListGdprRequestsResponseRequestsInner>",
            "format": ""
        },
        {
            "name": "next",
            "baseName": "next",
            "type": "string",
            "format": ""
        }
    ];
    return ListGdprRequestsResponse;
}());
exports.ListGdprRequestsResponse = ListGdprRequestsResponse;
//# sourceMappingURL=ListGdprRequestsResponse.js.map