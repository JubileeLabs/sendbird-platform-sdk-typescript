"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ChooseWhichEventsToSubscribeToData = void 0;
var ChooseWhichEventsToSubscribeToData = (function () {
    function ChooseWhichEventsToSubscribeToData() {
    }
    ChooseWhichEventsToSubscribeToData.getAttributeTypeMap = function () {
        return ChooseWhichEventsToSubscribeToData.attributeTypeMap;
    };
    ChooseWhichEventsToSubscribeToData.discriminator = undefined;
    ChooseWhichEventsToSubscribeToData.attributeTypeMap = [
        {
            "name": "enabled",
            "baseName": "enabled",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "url",
            "baseName": "url",
            "type": "string",
            "format": ""
        },
        {
            "name": "includeMembers",
            "baseName": "include_members",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "enabledEvents",
            "baseName": "enabled_events",
            "type": "Array<string>",
            "format": ""
        }
    ];
    return ChooseWhichEventsToSubscribeToData;
}());
exports.ChooseWhichEventsToSubscribeToData = ChooseWhichEventsToSubscribeToData;
//# sourceMappingURL=ChooseWhichEventsToSubscribeToData.js.map