"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AddEmojiCategoriesResponse = void 0;
var AddEmojiCategoriesResponse = (function () {
    function AddEmojiCategoriesResponse() {
    }
    AddEmojiCategoriesResponse.getAttributeTypeMap = function () {
        return AddEmojiCategoriesResponse.attributeTypeMap;
    };
    AddEmojiCategoriesResponse.discriminator = undefined;
    AddEmojiCategoriesResponse.attributeTypeMap = [
        {
            "name": "emojiCategories",
            "baseName": "emoji_categories",
            "type": "Array<AddEmojiCategoriesResponseEmojiCategoriesInner>",
            "format": ""
        }
    ];
    return AddEmojiCategoriesResponse;
}());
exports.AddEmojiCategoriesResponse = AddEmojiCategoriesResponse;
//# sourceMappingURL=AddEmojiCategoriesResponse.js.map