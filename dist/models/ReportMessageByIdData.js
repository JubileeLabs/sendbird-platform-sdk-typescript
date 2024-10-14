"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReportMessageByIdData = void 0;
var ReportMessageByIdData = (function () {
    function ReportMessageByIdData() {
    }
    ReportMessageByIdData.getAttributeTypeMap = function () {
        return ReportMessageByIdData.attributeTypeMap;
    };
    ReportMessageByIdData.discriminator = undefined;
    ReportMessageByIdData.attributeTypeMap = [
        {
            "name": "channelType",
            "baseName": "channel_type",
            "type": "string",
            "format": ""
        },
        {
            "name": "channelUrl",
            "baseName": "channel_url",
            "type": "string",
            "format": ""
        },
        {
            "name": "messageId",
            "baseName": "message_id",
            "type": "string",
            "format": ""
        },
        {
            "name": "reportCategory",
            "baseName": "report_category",
            "type": "string",
            "format": ""
        },
        {
            "name": "offendingUserId",
            "baseName": "offending_user_id",
            "type": "string",
            "format": ""
        },
        {
            "name": "reportingUserId",
            "baseName": "reporting_user_id",
            "type": "string",
            "format": ""
        },
        {
            "name": "reportDescription",
            "baseName": "report_description",
            "type": "string",
            "format": ""
        }
    ];
    return ReportMessageByIdData;
}());
exports.ReportMessageByIdData = ReportMessageByIdData;
//# sourceMappingURL=ReportMessageByIdData.js.map