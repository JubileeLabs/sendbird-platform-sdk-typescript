"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AddEmojisData = void 0;
var AddEmojisData = (function () {
    function AddEmojisData() {
    }
    AddEmojisData.getAttributeTypeMap = function () {
        return AddEmojisData.attributeTypeMap;
    };
    AddEmojisData.discriminator = undefined;
    AddEmojisData.attributeTypeMap = [
        {
            "name": "emojiCategoryId",
            "baseName": "emoji_category_id",
            "type": "number",
            "format": ""
        },
        {
            "name": "emojis",
            "baseName": "emojis",
            "type": "Array<any>",
            "format": ""
        }
    ];
    return AddEmojisData;
}());
exports.AddEmojisData = AddEmojisData;
//# sourceMappingURL=AddEmojisData.js.map