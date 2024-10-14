"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SendBirdEmojiCategory = void 0;
var SendBirdEmojiCategory = (function () {
    function SendBirdEmojiCategory() {
    }
    SendBirdEmojiCategory.getAttributeTypeMap = function () {
        return SendBirdEmojiCategory.attributeTypeMap;
    };
    SendBirdEmojiCategory.discriminator = undefined;
    SendBirdEmojiCategory.attributeTypeMap = [
        {
            "name": "emojis",
            "baseName": "emojis",
            "type": "Array<SendBirdEmoji>",
            "format": ""
        },
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
        }
    ];
    return SendBirdEmojiCategory;
}());
exports.SendBirdEmojiCategory = SendBirdEmojiCategory;
//# sourceMappingURL=SendBirdEmojiCategory.js.map