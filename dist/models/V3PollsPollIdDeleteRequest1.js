"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.V3PollsPollIdDeleteRequest1 = void 0;
var V3PollsPollIdDeleteRequest1 = (function () {
    function V3PollsPollIdDeleteRequest1() {
    }
    V3PollsPollIdDeleteRequest1.getAttributeTypeMap = function () {
        return V3PollsPollIdDeleteRequest1.attributeTypeMap;
    };
    V3PollsPollIdDeleteRequest1.discriminator = undefined;
    V3PollsPollIdDeleteRequest1.attributeTypeMap = [
        {
            "name": "title",
            "baseName": "title",
            "type": "string",
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
            "name": "allocreatedBywMultipleVotes",
            "baseName": "allocreated_byw_multiple_votes",
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
    return V3PollsPollIdDeleteRequest1;
}());
exports.V3PollsPollIdDeleteRequest1 = V3PollsPollIdDeleteRequest1;
//# sourceMappingURL=V3PollsPollIdDeleteRequest1.js.map