"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ListAnnouncementsResponse = void 0;
var ListAnnouncementsResponse = (function () {
    function ListAnnouncementsResponse() {
    }
    ListAnnouncementsResponse.getAttributeTypeMap = function () {
        return ListAnnouncementsResponse.attributeTypeMap;
    };
    ListAnnouncementsResponse.discriminator = undefined;
    ListAnnouncementsResponse.attributeTypeMap = [
        {
            "name": "announcements",
            "baseName": "announcements",
            "type": "Array<ListAnnouncementsResponseAnnouncementsInner>",
            "format": ""
        },
        {
            "name": "next",
            "baseName": "next",
            "type": "string",
            "format": ""
        }
    ];
    return ListAnnouncementsResponse;
}());
exports.ListAnnouncementsResponse = ListAnnouncementsResponse;
//# sourceMappingURL=ListAnnouncementsResponse.js.map