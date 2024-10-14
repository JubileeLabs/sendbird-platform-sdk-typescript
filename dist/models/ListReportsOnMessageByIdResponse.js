"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ListReportsOnMessageByIdResponse = void 0;
var ListReportsOnMessageByIdResponse = (function () {
    function ListReportsOnMessageByIdResponse() {
    }
    ListReportsOnMessageByIdResponse.getAttributeTypeMap = function () {
        return ListReportsOnMessageByIdResponse.attributeTypeMap;
    };
    ListReportsOnMessageByIdResponse.discriminator = undefined;
    ListReportsOnMessageByIdResponse.attributeTypeMap = [
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
    return ListReportsOnMessageByIdResponse;
}());
exports.ListReportsOnMessageByIdResponse = ListReportsOnMessageByIdResponse;
//# sourceMappingURL=ListReportsOnMessageByIdResponse.js.map