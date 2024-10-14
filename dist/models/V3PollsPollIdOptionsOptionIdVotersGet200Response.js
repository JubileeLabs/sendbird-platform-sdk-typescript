"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.V3PollsPollIdOptionsOptionIdVotersGet200Response = void 0;
var V3PollsPollIdOptionsOptionIdVotersGet200Response = (function () {
    function V3PollsPollIdOptionsOptionIdVotersGet200Response() {
    }
    V3PollsPollIdOptionsOptionIdVotersGet200Response.getAttributeTypeMap = function () {
        return V3PollsPollIdOptionsOptionIdVotersGet200Response.attributeTypeMap;
    };
    V3PollsPollIdOptionsOptionIdVotersGet200Response.discriminator = undefined;
    V3PollsPollIdOptionsOptionIdVotersGet200Response.attributeTypeMap = [
        {
            "name": "voteCount",
            "baseName": "vote_count",
            "type": "number",
            "format": ""
        },
        {
            "name": "voters",
            "baseName": "voters",
            "type": "Array<V3PollsPollIdOptionsOptionIdVotersGet200ResponseVotersInner>",
            "format": ""
        },
        {
            "name": "next",
            "baseName": "next",
            "type": "string",
            "format": ""
        }
    ];
    return V3PollsPollIdOptionsOptionIdVotersGet200Response;
}());
exports.V3PollsPollIdOptionsOptionIdVotersGet200Response = V3PollsPollIdOptionsOptionIdVotersGet200Response;
//# sourceMappingURL=V3PollsPollIdOptionsOptionIdVotersGet200Response.js.map