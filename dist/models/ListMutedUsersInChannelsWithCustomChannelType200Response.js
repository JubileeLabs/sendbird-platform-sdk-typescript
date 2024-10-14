"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ListMutedUsersInChannelsWithCustomChannelType200Response = void 0;
var ListMutedUsersInChannelsWithCustomChannelType200Response = (function () {
    function ListMutedUsersInChannelsWithCustomChannelType200Response() {
    }
    ListMutedUsersInChannelsWithCustomChannelType200Response.getAttributeTypeMap = function () {
        return ListMutedUsersInChannelsWithCustomChannelType200Response.attributeTypeMap;
    };
    ListMutedUsersInChannelsWithCustomChannelType200Response.discriminator = undefined;
    ListMutedUsersInChannelsWithCustomChannelType200Response.attributeTypeMap = [
        {
            "name": "mutedList",
            "baseName": "muted_list",
            "type": "Array<SendBirdUser>",
            "format": ""
        },
        {
            "name": "next",
            "baseName": "next",
            "type": "string",
            "format": ""
        }
    ];
    return ListMutedUsersInChannelsWithCustomChannelType200Response;
}());
exports.ListMutedUsersInChannelsWithCustomChannelType200Response = ListMutedUsersInChannelsWithCustomChannelType200Response;
//# sourceMappingURL=ListMutedUsersInChannelsWithCustomChannelType200Response.js.map