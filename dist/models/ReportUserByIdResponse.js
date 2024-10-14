"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReportUserByIdResponse = void 0;
var ReportUserByIdResponse = (function () {
    function ReportUserByIdResponse() {
    }
    ReportUserByIdResponse.getAttributeTypeMap = function () {
        return ReportUserByIdResponse.attributeTypeMap;
    };
    ReportUserByIdResponse.discriminator = undefined;
    ReportUserByIdResponse.attributeTypeMap = [
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
    return ReportUserByIdResponse;
}());
exports.ReportUserByIdResponse = ReportUserByIdResponse;
//# sourceMappingURL=ReportUserByIdResponse.js.map