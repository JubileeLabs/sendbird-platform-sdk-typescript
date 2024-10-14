"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReportChannelByUrlData = void 0;
var ReportChannelByUrlData = (function () {
    function ReportChannelByUrlData() {
    }
    ReportChannelByUrlData.getAttributeTypeMap = function () {
        return ReportChannelByUrlData.attributeTypeMap;
    };
    ReportChannelByUrlData.discriminator = undefined;
    ReportChannelByUrlData.attributeTypeMap = [
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
    return ReportChannelByUrlData;
}());
exports.ReportChannelByUrlData = ReportChannelByUrlData;
//# sourceMappingURL=ReportChannelByUrlData.js.map