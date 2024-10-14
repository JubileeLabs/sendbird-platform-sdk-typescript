"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OcListMutedUsersResponse = void 0;
var OcListMutedUsersResponse = (function () {
    function OcListMutedUsersResponse() {
    }
    OcListMutedUsersResponse.getAttributeTypeMap = function () {
        return OcListMutedUsersResponse.attributeTypeMap;
    };
    OcListMutedUsersResponse.discriminator = undefined;
    OcListMutedUsersResponse.attributeTypeMap = [
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
    return OcListMutedUsersResponse;
}());
exports.OcListMutedUsersResponse = OcListMutedUsersResponse;
//# sourceMappingURL=OcListMutedUsersResponse.js.map