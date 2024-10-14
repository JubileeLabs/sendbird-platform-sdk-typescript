"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetStatisticsDailyResponseStatisticsInner = void 0;
var GetStatisticsDailyResponseStatisticsInner = (function () {
    function GetStatisticsDailyResponseStatisticsInner() {
    }
    GetStatisticsDailyResponseStatisticsInner.getAttributeTypeMap = function () {
        return GetStatisticsDailyResponseStatisticsInner.attributeTypeMap;
    };
    GetStatisticsDailyResponseStatisticsInner.discriminator = undefined;
    GetStatisticsDailyResponseStatisticsInner.attributeTypeMap = [
        {
            "name": "dateRange",
            "baseName": "date_range",
            "type": "string",
            "format": ""
        },
        {
            "name": "canceledAnnouncementCount",
            "baseName": "canceled_announcement_count",
            "type": "number",
            "format": ""
        },
        {
            "name": "stoppedAnnouncementCount",
            "baseName": "stopped_announcement_count",
            "type": "number",
            "format": ""
        },
        {
            "name": "completedAnnouncementCount",
            "baseName": "completed_announcement_count",
            "type": "number",
            "format": ""
        },
        {
            "name": "totalAnnouncementCount",
            "baseName": "total_announcement_count",
            "type": "number",
            "format": ""
        },
        {
            "name": "targetChannelCount",
            "baseName": "target_channel_count",
            "type": "number",
            "format": ""
        },
        {
            "name": "targetUserCount",
            "baseName": "target_user_count",
            "type": "number",
            "format": ""
        },
        {
            "name": "sentChannelCount",
            "baseName": "sent_channel_count",
            "type": "number",
            "format": ""
        },
        {
            "name": "sentUserCount",
            "baseName": "sent_user_count",
            "type": "number",
            "format": ""
        },
        {
            "name": "openRate",
            "baseName": "open_rate",
            "type": "number",
            "format": ""
        },
        {
            "name": "openCount",
            "baseName": "open_count",
            "type": "number",
            "format": ""
        }
    ];
    return GetStatisticsDailyResponseStatisticsInner;
}());
exports.GetStatisticsDailyResponseStatisticsInner = GetStatisticsDailyResponseStatisticsInner;
//# sourceMappingURL=GetStatisticsDailyResponseStatisticsInner.js.map