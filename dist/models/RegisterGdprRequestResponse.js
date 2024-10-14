"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RegisterGdprRequestResponse = void 0;
var RegisterGdprRequestResponse = (function () {
    function RegisterGdprRequestResponse() {
    }
    RegisterGdprRequestResponse.getAttributeTypeMap = function () {
        return RegisterGdprRequestResponse.attributeTypeMap;
    };
    RegisterGdprRequestResponse.discriminator = undefined;
    RegisterGdprRequestResponse.attributeTypeMap = [
        {
            "name": "requestId",
            "baseName": "request_id",
            "type": "string",
            "format": ""
        },
        {
            "name": "action",
            "baseName": "action",
            "type": "string",
            "format": ""
        },
        {
            "name": "status",
            "baseName": "status",
            "type": "string",
            "format": ""
        },
        {
            "name": "userId",
            "baseName": "user_id",
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
            "name": "createdAt",
            "baseName": "created_at",
            "type": "number",
            "format": ""
        }
    ];
    return RegisterGdprRequestResponse;
}());
exports.RegisterGdprRequestResponse = RegisterGdprRequestResponse;
//# sourceMappingURL=RegisterGdprRequestResponse.js.map