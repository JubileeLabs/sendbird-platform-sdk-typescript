"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SendBirdPoll = void 0;
var SendBirdPoll = (function () {
    function SendBirdPoll() {
    }
    SendBirdPoll.getAttributeTypeMap = function () {
        return SendBirdPoll.attributeTypeMap;
    };
    SendBirdPoll.discriminator = undefined;
    SendBirdPoll.attributeTypeMap = [
        {
            "name": "details",
            "baseName": "details",
            "type": "SendBirdPollDetails",
            "format": ""
        },
        {
            "name": "id",
            "baseName": "id",
            "type": "number",
            "format": ""
        },
        {
            "name": "title",
            "baseName": "title",
            "type": "string",
            "format": ""
        }
    ];
    return SendBirdPoll;
}());
exports.SendBirdPoll = SendBirdPoll;
//# sourceMappingURL=SendBirdPoll.js.map