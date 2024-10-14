"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ListMessagesResponse = void 0;
var ListMessagesResponse = (function () {
    function ListMessagesResponse() {
    }
    ListMessagesResponse.getAttributeTypeMap = function () {
        return ListMessagesResponse.attributeTypeMap;
    };
    ListMessagesResponse.discriminator = undefined;
    ListMessagesResponse.attributeTypeMap = [
        {
            "name": "messages",
            "baseName": "messages",
            "type": "Array<ListMessagesResponseMessagesInner>",
            "format": ""
        }
    ];
    return ListMessagesResponse;
}());
exports.ListMessagesResponse = ListMessagesResponse;
//# sourceMappingURL=ListMessagesResponse.js.map