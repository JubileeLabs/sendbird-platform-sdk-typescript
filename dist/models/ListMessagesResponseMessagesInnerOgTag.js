"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ListMessagesResponseMessagesInnerOgTag = void 0;
var ListMessagesResponseMessagesInnerOgTag = (function () {
    function ListMessagesResponseMessagesInnerOgTag() {
    }
    ListMessagesResponseMessagesInnerOgTag.getAttributeTypeMap = function () {
        return ListMessagesResponseMessagesInnerOgTag.attributeTypeMap;
    };
    ListMessagesResponseMessagesInnerOgTag.discriminator = undefined;
    ListMessagesResponseMessagesInnerOgTag.attributeTypeMap = [
        {
            "name": "ogurl",
            "baseName": "og:url",
            "type": "string",
            "format": ""
        },
        {
            "name": "ogtitle",
            "baseName": "og:title",
            "type": "string",
            "format": ""
        },
        {
            "name": "ogdescription",
            "baseName": "og:description",
            "type": "string",
            "format": ""
        },
        {
            "name": "ogimage",
            "baseName": "og:image",
            "type": "SendBirdOGImage",
            "format": ""
        }
    ];
    return ListMessagesResponseMessagesInnerOgTag;
}());
exports.ListMessagesResponseMessagesInnerOgTag = ListMessagesResponseMessagesInnerOgTag;
//# sourceMappingURL=ListMessagesResponseMessagesInnerOgTag.js.map