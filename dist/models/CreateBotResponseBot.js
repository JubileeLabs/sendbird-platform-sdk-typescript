"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateBotResponseBot = void 0;
var CreateBotResponseBot = (function () {
    function CreateBotResponseBot() {
    }
    CreateBotResponseBot.getAttributeTypeMap = function () {
        return CreateBotResponseBot.attributeTypeMap;
    };
    CreateBotResponseBot.discriminator = undefined;
    CreateBotResponseBot.attributeTypeMap = [
        {
            "name": "botToken",
            "baseName": "bot_token",
            "type": "string",
            "format": ""
        },
        {
            "name": "botProfileUrl",
            "baseName": "bot_profile_url",
            "type": "string",
            "format": ""
        },
        {
            "name": "botUserid",
            "baseName": "bot_userid",
            "type": "string",
            "format": ""
        },
        {
            "name": "botNickname",
            "baseName": "bot_nickname",
            "type": "string",
            "format": ""
        },
        {
            "name": "botType",
            "baseName": "bot_type",
            "type": "string",
            "format": ""
        },
        {
            "name": "botMetadata",
            "baseName": "bot_metadata",
            "type": "any",
            "format": ""
        }
    ];
    return CreateBotResponseBot;
}());
exports.CreateBotResponseBot = CreateBotResponseBot;
//# sourceMappingURL=CreateBotResponseBot.js.map