"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateEmojiUrlByKeyData = void 0;
var UpdateEmojiUrlByKeyData = (function () {
    function UpdateEmojiUrlByKeyData() {
    }
    UpdateEmojiUrlByKeyData.getAttributeTypeMap = function () {
        return UpdateEmojiUrlByKeyData.attributeTypeMap;
    };
    UpdateEmojiUrlByKeyData.discriminator = undefined;
    UpdateEmojiUrlByKeyData.attributeTypeMap = [
        {
            "name": "emojiKey",
            "baseName": "emoji_key",
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
    return UpdateEmojiUrlByKeyData;
}());
exports.UpdateEmojiUrlByKeyData = UpdateEmojiUrlByKeyData;
//# sourceMappingURL=UpdateEmojiUrlByKeyData.js.map