"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SendBirdPollOption = void 0;
var SendBirdPollOption = (function () {
    function SendBirdPollOption() {
    }
    SendBirdPollOption.getAttributeTypeMap = function () {
        return SendBirdPollOption.attributeTypeMap;
    };
    SendBirdPollOption.discriminator = undefined;
    SendBirdPollOption.attributeTypeMap = [
        {
            "name": "createdAt",
            "baseName": "created_at",
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
            "name": "id",
            "baseName": "id",
            "type": "number",
            "format": ""
        },
        {
            "name": "partialVoters",
            "baseName": "partial_voters",
            "type": "Array<SendBirdUser>",
            "format": ""
        },
        {
            "name": "pollId",
            "baseName": "poll_id",
            "type": "number",
            "format": ""
        },
        {
            "name": "text",
            "baseName": "text",
            "type": "string",
            "format": ""
        },
        {
            "name": "updatedAt",
            "baseName": "updated_at",
            "type": "number",
            "format": ""
        },
        {
            "name": "voteCount",
            "baseName": "vote_count",
            "type": "number",
            "format": ""
        }
    ];
    return SendBirdPollOption;
}());
exports.SendBirdPollOption = SendBirdPollOption;
//# sourceMappingURL=SendBirdPollOption.js.map