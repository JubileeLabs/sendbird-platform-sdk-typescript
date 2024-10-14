"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OcListParticipantsResponse = void 0;
var OcListParticipantsResponse = (function () {
    function OcListParticipantsResponse() {
    }
    OcListParticipantsResponse.getAttributeTypeMap = function () {
        return OcListParticipantsResponse.attributeTypeMap;
    };
    OcListParticipantsResponse.discriminator = undefined;
    OcListParticipantsResponse.attributeTypeMap = [
        {
            "name": "participants",
            "baseName": "participants",
            "type": "Array<SendBirdUser>",
            "format": ""
        },
        {
            "name": "next",
            "baseName": "next",
            "type": "string",
            "format": ""
        }
    ];
    return OcListParticipantsResponse;
}());
exports.OcListParticipantsResponse = OcListParticipantsResponse;
//# sourceMappingURL=OcListParticipantsResponse.js.map