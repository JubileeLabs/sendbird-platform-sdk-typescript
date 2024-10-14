"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AddEmojisResponse = void 0;
var AddEmojisResponse = (function () {
    function AddEmojisResponse() {
    }
    AddEmojisResponse.getAttributeTypeMap = function () {
        return AddEmojisResponse.attributeTypeMap;
    };
    AddEmojisResponse.discriminator = undefined;
    AddEmojisResponse.attributeTypeMap = [
        {
            "name": "emojis",
            "baseName": "emojis",
            "type": "Array<ListAllEmojisAndEmojiCategoriesResponseEmojiCategoriesInnerEmojisInner>",
            "format": ""
        }
    ];
    return AddEmojisResponse;
}());
exports.AddEmojisResponse = AddEmojisResponse;
//# sourceMappingURL=AddEmojisResponse.js.map