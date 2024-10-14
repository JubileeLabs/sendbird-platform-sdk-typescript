"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ListReportsOnMessageByIdResponseReportLogsInner = void 0;
var ListReportsOnMessageByIdResponseReportLogsInner = (function () {
    function ListReportsOnMessageByIdResponseReportLogsInner() {
    }
    ListReportsOnMessageByIdResponseReportLogsInner.getAttributeTypeMap = function () {
        return ListReportsOnMessageByIdResponseReportLogsInner.attributeTypeMap;
    };
    ListReportsOnMessageByIdResponseReportLogsInner.discriminator = undefined;
    ListReportsOnMessageByIdResponseReportLogsInner.attributeTypeMap = [
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
            "name": "reportingUser",
            "baseName": "reporting_user",
            "type": "SendBirdUser",
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
    return ListReportsOnMessageByIdResponseReportLogsInner;
}());
exports.ListReportsOnMessageByIdResponseReportLogsInner = ListReportsOnMessageByIdResponseReportLogsInner;
//# sourceMappingURL=ListReportsOnMessageByIdResponseReportLogsInner.js.map