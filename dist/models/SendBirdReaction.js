"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SendBirdReaction = void 0;
var SendBirdReaction = (function () {
    function SendBirdReaction() {
    }
    SendBirdReaction.getAttributeTypeMap = function () {
        return SendBirdReaction.attributeTypeMap;
    };
    SendBirdReaction.discriminator = undefined;
    SendBirdReaction.attributeTypeMap = [
        {
            "name": "key",
            "baseName": "key",
            "type": "string",
            "format": ""
        },
        {
            "name": "updatedAt",
            "baseName": "updated_at",
            "type": "number",
            "format": ""
        },
        {
            "name": "userIds",
            "baseName": "user_ids",
            "type": "Array<string>",
            "format": ""
        }
    ];
    return SendBirdReaction;
}());
exports.SendBirdReaction = SendBirdReaction;
//# sourceMappingURL=SendBirdReaction.js.map