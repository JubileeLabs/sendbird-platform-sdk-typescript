"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RegisterGdprRequestData = void 0;
var RegisterGdprRequestData = (function () {
    function RegisterGdprRequestData() {
    }
    RegisterGdprRequestData.getAttributeTypeMap = function () {
        return RegisterGdprRequestData.attributeTypeMap;
    };
    RegisterGdprRequestData.discriminator = undefined;
    RegisterGdprRequestData.attributeTypeMap = [
        {
            "name": "action",
            "baseName": "action",
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
            "name": "channelDeleteOption",
            "baseName": "channel_delete_option",
            "type": "string",
            "format": ""
        },
        {
            "name": "userId",
            "baseName": "user_id",
            "type": "string",
            "format": ""
        }
    ];
    return RegisterGdprRequestData;
}());
exports.RegisterGdprRequestData = RegisterGdprRequestData;
//# sourceMappingURL=RegisterGdprRequestData.js.map