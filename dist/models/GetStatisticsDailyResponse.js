"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetStatisticsDailyResponse = void 0;
var GetStatisticsDailyResponse = (function () {
    function GetStatisticsDailyResponse() {
    }
    GetStatisticsDailyResponse.getAttributeTypeMap = function () {
        return GetStatisticsDailyResponse.attributeTypeMap;
    };
    GetStatisticsDailyResponse.discriminator = undefined;
    GetStatisticsDailyResponse.attributeTypeMap = [
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
    return GetStatisticsDailyResponse;
}());
exports.GetStatisticsDailyResponse = GetStatisticsDailyResponse;
//# sourceMappingURL=GetStatisticsDailyResponse.js.map