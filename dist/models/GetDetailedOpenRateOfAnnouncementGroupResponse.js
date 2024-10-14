"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetDetailedOpenRateOfAnnouncementGroupResponse = void 0;
var GetDetailedOpenRateOfAnnouncementGroupResponse = (function () {
    function GetDetailedOpenRateOfAnnouncementGroupResponse() {
    }
    GetDetailedOpenRateOfAnnouncementGroupResponse.getAttributeTypeMap = function () {
        return GetDetailedOpenRateOfAnnouncementGroupResponse.attributeTypeMap;
    };
    GetDetailedOpenRateOfAnnouncementGroupResponse.discriminator = undefined;
    GetDetailedOpenRateOfAnnouncementGroupResponse.attributeTypeMap = [
        {
            "name": "uniqueId",
            "baseName": "unique_id",
            "type": "string",
            "format": ""
        },
        {
            "name": "announcementGroup",
            "baseName": "announcement_group",
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
    return GetDetailedOpenRateOfAnnouncementGroupResponse;
}());
exports.GetDetailedOpenRateOfAnnouncementGroupResponse = GetDetailedOpenRateOfAnnouncementGroupResponse;
//# sourceMappingURL=GetDetailedOpenRateOfAnnouncementGroupResponse.js.map