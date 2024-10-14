"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetStatisticsResponse = void 0;
var GetStatisticsResponse = (function () {
    function GetStatisticsResponse() {
    }
    GetStatisticsResponse.getAttributeTypeMap = function () {
        return GetStatisticsResponse.attributeTypeMap;
    };
    GetStatisticsResponse.discriminator = undefined;
    GetStatisticsResponse.attributeTypeMap = [
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
    return GetStatisticsResponse;
}());
exports.GetStatisticsResponse = GetStatisticsResponse;
//# sourceMappingURL=GetStatisticsResponse.js.map