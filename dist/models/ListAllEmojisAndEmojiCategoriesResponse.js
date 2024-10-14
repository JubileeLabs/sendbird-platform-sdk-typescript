"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ListAllEmojisAndEmojiCategoriesResponse = void 0;
var ListAllEmojisAndEmojiCategoriesResponse = (function () {
    function ListAllEmojisAndEmojiCategoriesResponse() {
    }
    ListAllEmojisAndEmojiCategoriesResponse.getAttributeTypeMap = function () {
        return ListAllEmojisAndEmojiCategoriesResponse.attributeTypeMap;
    };
    ListAllEmojisAndEmojiCategoriesResponse.discriminator = undefined;
    ListAllEmojisAndEmojiCategoriesResponse.attributeTypeMap = [
        {
            "name": "emojiHash",
            "baseName": "emoji_hash",
            "type": "string",
            "format": ""
        },
        {
            "name": "emojiCategories",
            "baseName": "emoji_categories",
            "type": "Array<ListAllEmojisAndEmojiCategoriesResponseEmojiCategoriesInner>",
            "format": ""
        }
    ];
    return ListAllEmojisAndEmojiCategoriesResponse;
}());
exports.ListAllEmojisAndEmojiCategoriesResponse = ListAllEmojisAndEmojiCategoriesResponse;
//# sourceMappingURL=ListAllEmojisAndEmojiCategoriesResponse.js.map