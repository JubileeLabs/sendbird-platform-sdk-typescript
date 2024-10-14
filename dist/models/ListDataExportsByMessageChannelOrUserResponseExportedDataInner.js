"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ListDataExportsByMessageChannelOrUserResponseExportedDataInner = void 0;
var ListDataExportsByMessageChannelOrUserResponseExportedDataInner = (function () {
    function ListDataExportsByMessageChannelOrUserResponseExportedDataInner() {
    }
    ListDataExportsByMessageChannelOrUserResponseExportedDataInner.getAttributeTypeMap = function () {
        return ListDataExportsByMessageChannelOrUserResponseExportedDataInner.attributeTypeMap;
    };
    ListDataExportsByMessageChannelOrUserResponseExportedDataInner.discriminator = undefined;
    ListDataExportsByMessageChannelOrUserResponseExportedDataInner.attributeTypeMap = [
        {
            "name": "requestId",
            "baseName": "request_id",
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
            "name": "format",
            "baseName": "format",
            "type": "string",
            "format": ""
        },
        {
            "name": "csvDelimiter",
            "baseName": "csv_delimiter",
            "type": "string",
            "format": ""
        },
        {
            "name": "timezone",
            "baseName": "timezone",
            "type": "string",
            "format": ""
        },
        {
            "name": "createdAt",
            "baseName": "created_at",
            "type": "number",
            "format": ""
        },
        {
            "name": "startTs",
            "baseName": "start_ts",
            "type": "number",
            "format": ""
        },
        {
            "name": "endTs",
            "baseName": "end_ts",
            "type": "number",
            "format": ""
        },
        {
            "name": "channelUrls",
            "baseName": "channel_urls",
            "type": "Array<string>",
            "format": ""
        },
        {
            "name": "senderIds",
            "baseName": "sender_ids",
            "type": "Array<string>",
            "format": ""
        },
        {
            "name": "file",
            "baseName": "file",
            "type": "ListDataExportsByMessageChannelOrUserResponseExportedDataInnerFile",
            "format": ""
        },
        {
            "name": "userIds",
            "baseName": "user_ids",
            "type": "Array<string>",
            "format": ""
        }
    ];
    return ListDataExportsByMessageChannelOrUserResponseExportedDataInner;
}());
exports.ListDataExportsByMessageChannelOrUserResponseExportedDataInner = ListDataExportsByMessageChannelOrUserResponseExportedDataInner;
//# sourceMappingURL=ListDataExportsByMessageChannelOrUserResponseExportedDataInner.js.map