"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.V3PollsPollIdVotePutRequest = void 0;
var V3PollsPollIdVotePutRequest = (function () {
    function V3PollsPollIdVotePutRequest() {
    }
    V3PollsPollIdVotePutRequest.getAttributeTypeMap = function () {
        return V3PollsPollIdVotePutRequest.attributeTypeMap;
    };
    V3PollsPollIdVotePutRequest.discriminator = undefined;
    V3PollsPollIdVotePutRequest.attributeTypeMap = [
        {
            "name": "userId",
            "baseName": "user_id",
            "type": "string",
            "format": ""
        },
        {
            "name": "optionIds",
            "baseName": "option_ids",
            "type": "Array<number>",
            "format": ""
        }
    ];
    return V3PollsPollIdVotePutRequest;
}());
exports.V3PollsPollIdVotePutRequest = V3PollsPollIdVotePutRequest;
//# sourceMappingURL=V3PollsPollIdVotePutRequest.js.map