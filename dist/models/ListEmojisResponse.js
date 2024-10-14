"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ListEmojisResponse = void 0;
var ListEmojisResponse = (function () {
    function ListEmojisResponse() {
    }
    ListEmojisResponse.getAttributeTypeMap = function () {
        return ListEmojisResponse.attributeTypeMap;
    };
    ListEmojisResponse.discriminator = undefined;
    ListEmojisResponse.attributeTypeMap = [
        {
            "name": "emojis",
            "baseName": "emojis",
            "type": "Array<SendBirdEmoji>",
            "format": ""
        }
    ];
    return ListEmojisResponse;
}());
exports.ListEmojisResponse = ListEmojisResponse;
//# sourceMappingURL=ListEmojisResponse.js.map