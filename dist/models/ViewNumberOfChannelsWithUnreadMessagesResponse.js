"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ViewNumberOfChannelsWithUnreadMessagesResponse = void 0;
var ViewNumberOfChannelsWithUnreadMessagesResponse = (function () {
    function ViewNumberOfChannelsWithUnreadMessagesResponse() {
    }
    ViewNumberOfChannelsWithUnreadMessagesResponse.getAttributeTypeMap = function () {
        return ViewNumberOfChannelsWithUnreadMessagesResponse.attributeTypeMap;
    };
    ViewNumberOfChannelsWithUnreadMessagesResponse.discriminator = undefined;
    ViewNumberOfChannelsWithUnreadMessagesResponse.attributeTypeMap = [
        {
            "name": "unreadCount",
            "baseName": "unread_count",
            "type": "number",
            "format": ""
        }
    ];
    return ViewNumberOfChannelsWithUnreadMessagesResponse;
}());
exports.ViewNumberOfChannelsWithUnreadMessagesResponse = ViewNumberOfChannelsWithUnreadMessagesResponse;
//# sourceMappingURL=ViewNumberOfChannelsWithUnreadMessagesResponse.js.map