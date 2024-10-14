"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SendBirdPollDetails = void 0;
var SendBirdPollDetails = (function () {
    function SendBirdPollDetails() {
    }
    SendBirdPollDetails.getAttributeTypeMap = function () {
        return SendBirdPollDetails.attributeTypeMap;
    };
    SendBirdPollDetails.discriminator = undefined;
    SendBirdPollDetails.attributeTypeMap = [
        {
            "name": "allowMultipleVotes",
            "baseName": "allow_multiple_votes",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "allowUserSuggestion",
            "baseName": "allow_user_suggestion",
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
            "name": "isAnonymous",
            "baseName": "is_anonymous",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "options",
            "baseName": "options",
            "type": "Array<SendBirdPollOption>",
            "format": ""
        },
        {
            "name": "status",
            "baseName": "status",
            "type": "SendBirdPollDetailsStatusEnum",
            "format": ""
        },
        {
            "name": "updatedAt",
            "baseName": "updated_at",
            "type": "number",
            "format": ""
        },
        {
            "name": "voterCount",
            "baseName": "voter_count",
            "type": "number",
            "format": ""
        }
    ];
    return SendBirdPollDetails;
}());
exports.SendBirdPollDetails = SendBirdPollDetails;
//# sourceMappingURL=SendBirdPollDetails.js.map