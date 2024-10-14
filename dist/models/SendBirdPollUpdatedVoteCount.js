"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SendBirdPollUpdatedVoteCount = void 0;
var SendBirdPollUpdatedVoteCount = (function () {
    function SendBirdPollUpdatedVoteCount() {
    }
    SendBirdPollUpdatedVoteCount.getAttributeTypeMap = function () {
        return SendBirdPollUpdatedVoteCount.attributeTypeMap;
    };
    SendBirdPollUpdatedVoteCount.discriminator = undefined;
    SendBirdPollUpdatedVoteCount.attributeTypeMap = [
        {
            "name": "optionId",
            "baseName": "option_id",
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
    return SendBirdPollUpdatedVoteCount;
}());
exports.SendBirdPollUpdatedVoteCount = SendBirdPollUpdatedVoteCount;
//# sourceMappingURL=SendBirdPollUpdatedVoteCount.js.map