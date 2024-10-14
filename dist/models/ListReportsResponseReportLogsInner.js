"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ListReportsResponseReportLogsInner = void 0;
var ListReportsResponseReportLogsInner = (function () {
    function ListReportsResponseReportLogsInner() {
    }
    ListReportsResponseReportLogsInner.getAttributeTypeMap = function () {
        return ListReportsResponseReportLogsInner.attributeTypeMap;
    };
    ListReportsResponseReportLogsInner.discriminator = undefined;
    ListReportsResponseReportLogsInner.attributeTypeMap = [
        {
            "name": "reportingUser",
            "baseName": "reporting_user",
            "type": "SendBirdUser",
            "format": ""
        },
        {
            "name": "reportType",
            "baseName": "report_type",
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
            "name": "offendingUser",
            "baseName": "offending_user",
            "type": "SendBirdUser",
            "format": ""
        },
        {
            "name": "reportedMessage",
            "baseName": "reported_message",
            "type": "SendBirdMessageResponse",
            "format": ""
        },
        {
            "name": "channel",
            "baseName": "channel",
            "type": "SendBirdChannelResponse",
            "format": ""
        },
        {
            "name": "reportDescription",
            "baseName": "report_description",
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
    return ListReportsResponseReportLogsInner;
}());
exports.ListReportsResponseReportLogsInner = ListReportsResponseReportLogsInner;
//# sourceMappingURL=ListReportsResponseReportLogsInner.js.map