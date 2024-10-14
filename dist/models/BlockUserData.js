"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BlockUserData = void 0;
var BlockUserData = (function () {
    function BlockUserData() {
    }
    BlockUserData.getAttributeTypeMap = function () {
        return BlockUserData.attributeTypeMap;
    };
    BlockUserData.discriminator = undefined;
    BlockUserData.attributeTypeMap = [
        {
            "name": "userId",
            "baseName": "user_id",
            "type": "string",
            "format": ""
        },
        {
            "name": "targetId",
            "baseName": "target_id",
            "type": "string",
            "format": ""
        },
        {
            "name": "userIds",
            "baseName": "user_ids",
            "type": "Array<string>",
            "format": ""
        },
        {
            "name": "users",
            "baseName": "users",
            "type": "Array<string>",
            "format": ""
        }
    ];
    return BlockUserData;
}());
exports.BlockUserData = BlockUserData;
//# sourceMappingURL=BlockUserData.js.map