"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ListGdprRequestsResponseRequestsInner = void 0;
var ListGdprRequestsResponseRequestsInner = (function () {
    function ListGdprRequestsResponseRequestsInner() {
    }
    ListGdprRequestsResponseRequestsInner.getAttributeTypeMap = function () {
        return ListGdprRequestsResponseRequestsInner.attributeTypeMap;
    };
    ListGdprRequestsResponseRequestsInner.discriminator = undefined;
    ListGdprRequestsResponseRequestsInner.attributeTypeMap = [
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
    return ListGdprRequestsResponseRequestsInner;
}());
exports.ListGdprRequestsResponseRequestsInner = ListGdprRequestsResponseRequestsInner;
//# sourceMappingURL=ListGdprRequestsResponseRequestsInner.js.map