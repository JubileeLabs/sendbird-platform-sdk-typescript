"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ViewNumberOfPeakConnectionsResponse = void 0;
var ViewNumberOfPeakConnectionsResponse = (function () {
    function ViewNumberOfPeakConnectionsResponse() {
    }
    ViewNumberOfPeakConnectionsResponse.getAttributeTypeMap = function () {
        return ViewNumberOfPeakConnectionsResponse.attributeTypeMap;
    };
    ViewNumberOfPeakConnectionsResponse.discriminator = undefined;
    ViewNumberOfPeakConnectionsResponse.attributeTypeMap = [
        {
            "name": "peakConnections",
            "baseName": "peak_connections",
            "type": "Array<ViewNumberOfPeakConnectionsResponsePeakConnectionsInner>",
            "format": ""
        }
    ];
    return ViewNumberOfPeakConnectionsResponse;
}());
exports.ViewNumberOfPeakConnectionsResponse = ViewNumberOfPeakConnectionsResponse;
//# sourceMappingURL=ViewNumberOfPeakConnectionsResponse.js.map