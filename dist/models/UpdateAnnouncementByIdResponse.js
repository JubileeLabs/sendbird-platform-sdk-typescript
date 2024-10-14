"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateAnnouncementByIdResponse = void 0;
var UpdateAnnouncementByIdResponse = (function () {
    function UpdateAnnouncementByIdResponse() {
    }
    UpdateAnnouncementByIdResponse.getAttributeTypeMap = function () {
        return UpdateAnnouncementByIdResponse.attributeTypeMap;
    };
    UpdateAnnouncementByIdResponse.discriminator = undefined;
    UpdateAnnouncementByIdResponse.attributeTypeMap = [
        {
            "name": "uniqueId",
            "baseName": "unique_id",
            "type": "string",
            "format": ""
        },
        {
            "name": "announcementGroup",
            "baseName": "announcement_group",
            "type": "string",
            "format": ""
        },
        {
            "name": "message",
            "baseName": "message",
            "type": "UpdateAnnouncementByIdResponseMessage",
            "format": ""
        }
    ];
    return UpdateAnnouncementByIdResponse;
}());
exports.UpdateAnnouncementByIdResponse = UpdateAnnouncementByIdResponse;
//# sourceMappingURL=UpdateAnnouncementByIdResponse.js.map