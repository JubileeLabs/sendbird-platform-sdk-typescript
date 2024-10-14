"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ListReportsResponse = void 0;
var ListReportsResponse = (function () {
    function ListReportsResponse() {
    }
    ListReportsResponse.getAttributeTypeMap = function () {
        return ListReportsResponse.attributeTypeMap;
    };
    ListReportsResponse.discriminator = undefined;
    ListReportsResponse.attributeTypeMap = [
        {
            "name": "reportLogs",
            "baseName": "report_logs",
            "type": "Array<ListReportsResponseReportLogsInner>",
            "format": ""
        },
        {
            "name": "next",
            "baseName": "next",
            "type": "string",
            "format": ""
        }
    ];
    return ListReportsResponse;
}());
exports.ListReportsResponse = ListReportsResponse;
//# sourceMappingURL=ListReportsResponse.js.map