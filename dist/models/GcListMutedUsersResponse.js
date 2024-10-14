"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GcListMutedUsersResponse = void 0;
var GcListMutedUsersResponse = (function () {
    function GcListMutedUsersResponse() {
    }
    GcListMutedUsersResponse.getAttributeTypeMap = function () {
        return GcListMutedUsersResponse.attributeTypeMap;
    };
    GcListMutedUsersResponse.discriminator = undefined;
    GcListMutedUsersResponse.attributeTypeMap = [
        {
            "name": "mutedList",
            "baseName": "muted_list",
            "type": "Array<SendBirdUser>",
            "format": ""
        },
        {
            "name": "totalMuteCount",
            "baseName": "total_mute_count",
            "type": "number",
            "format": ""
        },
        {
            "name": "next",
            "baseName": "next",
            "type": "string",
            "format": ""
        }
    ];
    return GcListMutedUsersResponse;
}());
exports.GcListMutedUsersResponse = GcListMutedUsersResponse;
//# sourceMappingURL=GcListMutedUsersResponse.js.map