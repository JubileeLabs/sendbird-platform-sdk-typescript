"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RetrieveAdvancedAnalyticsMetricsResponse = void 0;
var RetrieveAdvancedAnalyticsMetricsResponse = (function () {
    function RetrieveAdvancedAnalyticsMetricsResponse() {
    }
    RetrieveAdvancedAnalyticsMetricsResponse.getAttributeTypeMap = function () {
        return RetrieveAdvancedAnalyticsMetricsResponse.attributeTypeMap;
    };
    RetrieveAdvancedAnalyticsMetricsResponse.discriminator = undefined;
    RetrieveAdvancedAnalyticsMetricsResponse.attributeTypeMap = [
        {
            "name": "segments",
            "baseName": "segments",
            "type": "string",
            "format": ""
        },
        {
            "name": "date",
            "baseName": "date",
            "type": "string",
            "format": ""
        },
        {
            "name": "value",
            "baseName": "value",
            "type": "number",
            "format": ""
        },
        {
            "name": "channelType",
            "baseName": "channel_type",
            "type": "string",
            "format": ""
        },
        {
            "name": "customChannelType",
            "baseName": "custom_channel_type",
            "type": "string",
            "format": ""
        },
        {
            "name": "customMessageType",
            "baseName": "custom_message_type",
            "type": "string",
            "format": ""
        }
    ];
    return RetrieveAdvancedAnalyticsMetricsResponse;
}());
exports.RetrieveAdvancedAnalyticsMetricsResponse = RetrieveAdvancedAnalyticsMetricsResponse;
//# sourceMappingURL=RetrieveAdvancedAnalyticsMetricsResponse.js.map