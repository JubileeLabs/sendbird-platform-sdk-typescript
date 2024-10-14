"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RetrieveListOfSubscribedEventsResponse = void 0;
var RetrieveListOfSubscribedEventsResponse = (function () {
    function RetrieveListOfSubscribedEventsResponse() {
    }
    RetrieveListOfSubscribedEventsResponse.getAttributeTypeMap = function () {
        return RetrieveListOfSubscribedEventsResponse.attributeTypeMap;
    };
    RetrieveListOfSubscribedEventsResponse.discriminator = undefined;
    RetrieveListOfSubscribedEventsResponse.attributeTypeMap = [
        {
            "name": "webhook",
            "baseName": "webhook",
            "type": "RetrieveListOfSubscribedEventsResponseWebhook",
            "format": ""
        }
    ];
    return RetrieveListOfSubscribedEventsResponse;
}());
exports.RetrieveListOfSubscribedEventsResponse = RetrieveListOfSubscribedEventsResponse;
//# sourceMappingURL=RetrieveListOfSubscribedEventsResponse.js.map