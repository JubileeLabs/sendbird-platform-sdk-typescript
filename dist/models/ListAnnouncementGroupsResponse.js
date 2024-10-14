"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ListAnnouncementGroupsResponse = void 0;
var ListAnnouncementGroupsResponse = (function () {
    function ListAnnouncementGroupsResponse() {
    }
    ListAnnouncementGroupsResponse.getAttributeTypeMap = function () {
        return ListAnnouncementGroupsResponse.attributeTypeMap;
    };
    ListAnnouncementGroupsResponse.discriminator = undefined;
    ListAnnouncementGroupsResponse.attributeTypeMap = [
        {
            "name": "announcementGroups",
            "baseName": "announcement_groups",
            "type": "Array<string>",
            "format": ""
        },
        {
            "name": "next",
            "baseName": "next",
            "type": "string",
            "format": ""
        }
    ];
    return ListAnnouncementGroupsResponse;
}());
exports.ListAnnouncementGroupsResponse = ListAnnouncementGroupsResponse;
//# sourceMappingURL=ListAnnouncementGroupsResponse.js.map