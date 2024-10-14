"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ListAllEmojisAndEmojiCategoriesResponseEmojiCategoriesInner = void 0;
var ListAllEmojisAndEmojiCategoriesResponseEmojiCategoriesInner = (function () {
    function ListAllEmojisAndEmojiCategoriesResponseEmojiCategoriesInner() {
    }
    ListAllEmojisAndEmojiCategoriesResponseEmojiCategoriesInner.getAttributeTypeMap = function () {
        return ListAllEmojisAndEmojiCategoriesResponseEmojiCategoriesInner.attributeTypeMap;
    };
    ListAllEmojisAndEmojiCategoriesResponseEmojiCategoriesInner.discriminator = undefined;
    ListAllEmojisAndEmojiCategoriesResponseEmojiCategoriesInner.attributeTypeMap = [
        {
            "name": "id",
            "baseName": "id",
            "type": "number",
            "format": ""
        },
        {
            "name": "name",
            "baseName": "name",
            "type": "string",
            "format": ""
        },
        {
            "name": "url",
            "baseName": "url",
            "type": "string",
            "format": ""
        },
        {
            "name": "emojis",
            "baseName": "emojis",
            "type": "Array<ListAllEmojisAndEmojiCategoriesResponseEmojiCategoriesInnerEmojisInner>",
            "format": ""
        }
    ];
    return ListAllEmojisAndEmojiCategoriesResponseEmojiCategoriesInner;
}());
exports.ListAllEmojisAndEmojiCategoriesResponseEmojiCategoriesInner = ListAllEmojisAndEmojiCategoriesResponseEmojiCategoriesInner;
//# sourceMappingURL=ListAllEmojisAndEmojiCategoriesResponseEmojiCategoriesInner.js.map