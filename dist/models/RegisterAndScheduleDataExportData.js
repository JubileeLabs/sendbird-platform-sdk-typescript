"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RegisterAndScheduleDataExportData = void 0;
var RegisterAndScheduleDataExportData = (function () {
    function RegisterAndScheduleDataExportData() {
    }
    RegisterAndScheduleDataExportData.getAttributeTypeMap = function () {
        return RegisterAndScheduleDataExportData.attributeTypeMap;
    };
    RegisterAndScheduleDataExportData.discriminator = undefined;
    RegisterAndScheduleDataExportData.attributeTypeMap = [
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
            "name": "senderIds",
            "baseName": "sender_ids",
            "type": "Array<string>",
            "format": ""
        },
        {
            "name": "excludeSenderIds",
            "baseName": "exclude_sender_ids",
            "type": "Array<string>",
            "format": ""
        },
        {
            "name": "channelUrls",
            "baseName": "channel_urls",
            "type": "Array<string>",
            "format": ""
        },
        {
            "name": "excludeChannelUrls",
            "baseName": "exclude_channel_urls",
            "type": "Array<string>",
            "format": ""
        },
        {
            "name": "userIds",
            "baseName": "user_ids",
            "type": "Array<string>",
            "format": ""
        },
        {
            "name": "showReadReceipt",
            "baseName": "show_read_receipt",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "showChannelMetadata",
            "baseName": "show_channel_metadata",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "neighboringMessageLimit",
            "baseName": "neighboring_message_limit",
            "type": "number",
            "format": ""
        }
    ];
    return RegisterAndScheduleDataExportData;
}());
exports.RegisterAndScheduleDataExportData = RegisterAndScheduleDataExportData;
//# sourceMappingURL=RegisterAndScheduleDataExportData.js.map