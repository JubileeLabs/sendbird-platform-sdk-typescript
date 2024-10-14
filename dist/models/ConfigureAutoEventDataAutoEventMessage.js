"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ConfigureAutoEventDataAutoEventMessage = void 0;
var ConfigureAutoEventDataAutoEventMessage = (function () {
    function ConfigureAutoEventDataAutoEventMessage() {
    }
    ConfigureAutoEventDataAutoEventMessage.getAttributeTypeMap = function () {
        return ConfigureAutoEventDataAutoEventMessage.attributeTypeMap;
    };
    ConfigureAutoEventDataAutoEventMessage.discriminator = undefined;
    ConfigureAutoEventDataAutoEventMessage.attributeTypeMap = [
        {
            "name": "userLeave",
            "baseName": "user_leave",
            "type": "any",
            "format": ""
        },
        {
            "name": "userJoin",
            "baseName": "user_join",
            "type": "any",
            "format": ""
        },
        {
            "name": "channelCreate",
            "baseName": "channel_create",
            "type": "any",
            "format": ""
        },
        {
            "name": "channelChange",
            "baseName": "channel_change",
            "type": "any",
            "format": ""
        }
    ];
    return ConfigureAutoEventDataAutoEventMessage;
}());
exports.ConfigureAutoEventDataAutoEventMessage = ConfigureAutoEventDataAutoEventMessage;
//# sourceMappingURL=ConfigureAutoEventDataAutoEventMessage.js.map