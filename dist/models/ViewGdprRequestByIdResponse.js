"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ViewGdprRequestByIdResponse = void 0;
var ViewGdprRequestByIdResponse = (function () {
    function ViewGdprRequestByIdResponse() {
    }
    ViewGdprRequestByIdResponse.getAttributeTypeMap = function () {
        return ViewGdprRequestByIdResponse.attributeTypeMap;
    };
    ViewGdprRequestByIdResponse.discriminator = undefined;
    ViewGdprRequestByIdResponse.attributeTypeMap = [
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
            "name": "files",
            "baseName": "files",
            "type": "ListDataExportsByMessageChannelOrUserResponseExportedDataInnerFile",
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
    return ViewGdprRequestByIdResponse;
}());
exports.ViewGdprRequestByIdResponse = ViewGdprRequestByIdResponse;
//# sourceMappingURL=ViewGdprRequestByIdResponse.js.map