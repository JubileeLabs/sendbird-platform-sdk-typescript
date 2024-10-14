"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ListReportsOnChannelByUrlResponse = void 0;
var ListReportsOnChannelByUrlResponse = (function () {
    function ListReportsOnChannelByUrlResponse() {
    }
    ListReportsOnChannelByUrlResponse.getAttributeTypeMap = function () {
        return ListReportsOnChannelByUrlResponse.attributeTypeMap;
    };
    ListReportsOnChannelByUrlResponse.discriminator = undefined;
    ListReportsOnChannelByUrlResponse.attributeTypeMap = [
        {
            "name": "reportLogs",
            "baseName": "report_logs",
            "type": "Array<ListReportsOnMessageByIdResponseReportLogsInner>",
            "format": ""
        },
        {
            "name": "next",
            "baseName": "next",
            "type": "string",
            "format": ""
        }
    ];
    return ListReportsOnChannelByUrlResponse;
}());
exports.ListReportsOnChannelByUrlResponse = ListReportsOnChannelByUrlResponse;
//# sourceMappingURL=ListReportsOnChannelByUrlResponse.js.map