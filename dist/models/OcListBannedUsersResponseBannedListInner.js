"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OcListBannedUsersResponseBannedListInner = void 0;
var OcListBannedUsersResponseBannedListInner = (function () {
    function OcListBannedUsersResponseBannedListInner() {
    }
    OcListBannedUsersResponseBannedListInner.getAttributeTypeMap = function () {
        return OcListBannedUsersResponseBannedListInner.attributeTypeMap;
    };
    OcListBannedUsersResponseBannedListInner.discriminator = undefined;
    OcListBannedUsersResponseBannedListInner.attributeTypeMap = [
        {
            "name": "user",
            "baseName": "user",
            "type": "SendBirdUser",
            "format": ""
        },
        {
            "name": "startAt",
            "baseName": "start_at",
            "type": "number",
            "format": ""
        },
        {
            "name": "endAt",
            "baseName": "end_at",
            "type": "number",
            "format": ""
        },
        {
            "name": "description",
            "baseName": "description",
            "type": "string",
            "format": ""
        }
    ];
    return OcListBannedUsersResponseBannedListInner;
}());
exports.OcListBannedUsersResponseBannedListInner = OcListBannedUsersResponseBannedListInner;
//# sourceMappingURL=OcListBannedUsersResponseBannedListInner.js.map