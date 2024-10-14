"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BlockUserResponse = void 0;
var BlockUserResponse = (function () {
    function BlockUserResponse() {
    }
    BlockUserResponse.getAttributeTypeMap = function () {
        return BlockUserResponse.attributeTypeMap;
    };
    BlockUserResponse.discriminator = undefined;
    BlockUserResponse.attributeTypeMap = [
        {
            "name": "users",
            "baseName": "users",
            "type": "Array<string>",
            "format": ""
        },
        {
            "name": "next",
            "baseName": "next",
            "type": "string",
            "format": ""
        }
    ];
    return BlockUserResponse;
}());
exports.BlockUserResponse = BlockUserResponse;
//# sourceMappingURL=BlockUserResponse.js.map