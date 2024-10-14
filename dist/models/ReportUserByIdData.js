"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReportUserByIdData = void 0;
var ReportUserByIdData = (function () {
    function ReportUserByIdData() {
    }
    ReportUserByIdData.getAttributeTypeMap = function () {
        return ReportUserByIdData.attributeTypeMap;
    };
    ReportUserByIdData.discriminator = undefined;
    ReportUserByIdData.attributeTypeMap = [
        {
            "name": "offendingUserId",
            "baseName": "offending_user_id",
            "type": "string",
            "format": ""
        },
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
            "name": "reportCategory",
            "baseName": "report_category",
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
    return ReportUserByIdData;
}());
exports.ReportUserByIdData = ReportUserByIdData;
//# sourceMappingURL=ReportUserByIdData.js.map