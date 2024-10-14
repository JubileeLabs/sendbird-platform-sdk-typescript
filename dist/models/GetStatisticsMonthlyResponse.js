"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetStatisticsMonthlyResponse = void 0;
var GetStatisticsMonthlyResponse = (function () {
    function GetStatisticsMonthlyResponse() {
    }
    GetStatisticsMonthlyResponse.getAttributeTypeMap = function () {
        return GetStatisticsMonthlyResponse.attributeTypeMap;
    };
    GetStatisticsMonthlyResponse.discriminator = undefined;
    GetStatisticsMonthlyResponse.attributeTypeMap = [
        {
            "name": "statistics",
            "baseName": "statistics",
            "type": "Array<GetStatisticsDailyResponseStatisticsInner>",
            "format": ""
        },
        {
            "name": "week",
            "baseName": "week",
            "type": "number",
            "format": ""
        }
    ];
    return GetStatisticsMonthlyResponse;
}());
exports.GetStatisticsMonthlyResponse = GetStatisticsMonthlyResponse;
//# sourceMappingURL=GetStatisticsMonthlyResponse.js.map