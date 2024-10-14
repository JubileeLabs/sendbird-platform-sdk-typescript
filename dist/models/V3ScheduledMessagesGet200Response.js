"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.V3ScheduledMessagesGet200Response = void 0;
var V3ScheduledMessagesGet200Response = (function () {
    function V3ScheduledMessagesGet200Response() {
    }
    V3ScheduledMessagesGet200Response.getAttributeTypeMap = function () {
        return V3ScheduledMessagesGet200Response.attributeTypeMap;
    };
    V3ScheduledMessagesGet200Response.discriminator = undefined;
    V3ScheduledMessagesGet200Response.attributeTypeMap = [
        {
            "name": "scheduledMessages",
            "baseName": "scheduled_messages",
            "type": "Array<SendBirdScheduledMessage>",
            "format": ""
        },
        {
            "name": "next",
            "baseName": "next",
            "type": "string",
            "format": ""
        }
    ];
    return V3ScheduledMessagesGet200Response;
}());
exports.V3ScheduledMessagesGet200Response = V3ScheduledMessagesGet200Response;
//# sourceMappingURL=V3ScheduledMessagesGet200Response.js.map