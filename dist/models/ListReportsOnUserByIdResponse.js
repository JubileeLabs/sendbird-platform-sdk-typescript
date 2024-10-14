"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ListReportsOnUserByIdResponse = void 0;
var ListReportsOnUserByIdResponse = (function () {
    function ListReportsOnUserByIdResponse() {
    }
    ListReportsOnUserByIdResponse.getAttributeTypeMap = function () {
        return ListReportsOnUserByIdResponse.attributeTypeMap;
    };
    ListReportsOnUserByIdResponse.discriminator = undefined;
    ListReportsOnUserByIdResponse.attributeTypeMap = [
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
    return ListReportsOnUserByIdResponse;
}());
exports.ListReportsOnUserByIdResponse = ListReportsOnUserByIdResponse;
//# sourceMappingURL=ListReportsOnUserByIdResponse.js.map