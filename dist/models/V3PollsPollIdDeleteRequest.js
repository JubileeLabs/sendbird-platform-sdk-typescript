"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.V3PollsPollIdDeleteRequest = void 0;
var V3PollsPollIdDeleteRequest = (function () {
    function V3PollsPollIdDeleteRequest() {
    }
    V3PollsPollIdDeleteRequest.getAttributeTypeMap = function () {
        return V3PollsPollIdDeleteRequest.attributeTypeMap;
    };
    V3PollsPollIdDeleteRequest.discriminator = undefined;
    V3PollsPollIdDeleteRequest.attributeTypeMap = [
        {
            "name": "channelUrl",
            "baseName": "channel_url",
            "type": "string",
            "format": ""
        },
        {
            "name": "channelType",
            "baseName": "channel_type",
            "type": "string",
            "format": ""
        },
        {
            "name": "showPartialVoterList",
            "baseName": "show_partial_voter_list",
            "type": "boolean",
            "format": ""
        }
    ];
    return V3PollsPollIdDeleteRequest;
}());
exports.V3PollsPollIdDeleteRequest = V3PollsPollIdDeleteRequest;
//# sourceMappingURL=V3PollsPollIdDeleteRequest.js.map