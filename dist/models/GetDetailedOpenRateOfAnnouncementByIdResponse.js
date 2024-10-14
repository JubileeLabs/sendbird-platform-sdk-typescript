"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetDetailedOpenRateOfAnnouncementByIdResponse = void 0;
var GetDetailedOpenRateOfAnnouncementByIdResponse = (function () {
    function GetDetailedOpenRateOfAnnouncementByIdResponse() {
    }
    GetDetailedOpenRateOfAnnouncementByIdResponse.getAttributeTypeMap = function () {
        return GetDetailedOpenRateOfAnnouncementByIdResponse.attributeTypeMap;
    };
    GetDetailedOpenRateOfAnnouncementByIdResponse.discriminator = undefined;
    GetDetailedOpenRateOfAnnouncementByIdResponse.attributeTypeMap = [
        {
            "name": "uniqueId",
            "baseName": "unique_id",
            "type": "string",
            "format": ""
        },
        {
            "name": "openCounts",
            "baseName": "open_counts",
            "type": "Array<number>",
            "format": ""
        },
        {
            "name": "openRates",
            "baseName": "open_rates",
            "type": "Array<number>",
            "format": ""
        },
        {
            "name": "cumulativeOpenCounts",
            "baseName": "cumulative_open_counts",
            "type": "Array<number>",
            "format": ""
        },
        {
            "name": "cumulativeOpenRates",
            "baseName": "cumulative_open_rates",
            "type": "Array<number>",
            "format": ""
        }
    ];
    return GetDetailedOpenRateOfAnnouncementByIdResponse;
}());
exports.GetDetailedOpenRateOfAnnouncementByIdResponse = GetDetailedOpenRateOfAnnouncementByIdResponse;
//# sourceMappingURL=GetDetailedOpenRateOfAnnouncementByIdResponse.js.map