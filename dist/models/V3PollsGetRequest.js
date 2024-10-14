"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.V3PollsGetRequest = void 0;
var V3PollsGetRequest = (function () {
    function V3PollsGetRequest() {
    }
    V3PollsGetRequest.getAttributeTypeMap = function () {
        return V3PollsGetRequest.attributeTypeMap;
    };
    V3PollsGetRequest.discriminator = undefined;
    V3PollsGetRequest.attributeTypeMap = [
        {
            "name": "title",
            "baseName": "title",
            "type": "string",
            "format": ""
        },
        {
            "name": "options",
            "baseName": "options",
            "type": "Array<string>",
            "format": ""
        },
        {
            "name": "allowUserSuggestion",
            "baseName": "allow_user_suggestion",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "allowMultipleVotes",
            "baseName": "allow_multiple_votes",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "closeAt",
            "baseName": "close_at",
            "type": "number",
            "format": ""
        },
        {
            "name": "createdBy",
            "baseName": "created_by",
            "type": "string",
            "format": ""
        },
        {
            "name": "data",
            "baseName": "data",
            "type": "any",
            "format": ""
        }
    ];
    return V3PollsGetRequest;
}());
exports.V3PollsGetRequest = V3PollsGetRequest;
//# sourceMappingURL=V3PollsGetRequest.js.map