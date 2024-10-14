"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GcCreateChannelData = void 0;
var GcCreateChannelData = (function () {
    function GcCreateChannelData() {
    }
    GcCreateChannelData.getAttributeTypeMap = function () {
        return GcCreateChannelData.attributeTypeMap;
    };
    GcCreateChannelData.discriminator = undefined;
    GcCreateChannelData.attributeTypeMap = [
        {
            "name": "userIds",
            "baseName": "user_ids",
            "type": "Array<string>",
            "format": ""
        },
        {
            "name": "users",
            "baseName": "users",
            "type": "Array<SendBirdUser>",
            "format": ""
        },
        {
            "name": "name",
            "baseName": "name",
            "type": "string",
            "format": ""
        },
        {
            "name": "channelUrl",
            "baseName": "channel_url",
            "type": "string",
            "format": ""
        },
        {
            "name": "coverUrl",
            "baseName": "cover_url",
            "type": "string",
            "format": ""
        },
        {
            "name": "coverFile",
            "baseName": "cover_file",
            "type": "HttpFile",
            "format": "binary"
        },
        {
            "name": "customType",
            "baseName": "custom_type",
            "type": "string",
            "format": ""
        },
        {
            "name": "data",
            "baseName": "data",
            "type": "string",
            "format": ""
        },
        {
            "name": "isDistinct",
            "baseName": "is_distinct",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "isPublic",
            "baseName": "is_public",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "isSuper",
            "baseName": "is_super",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "isEphemeral",
            "baseName": "is_ephemeral",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "accessCode",
            "baseName": "access_code",
            "type": "string",
            "format": ""
        },
        {
            "name": "inviterId",
            "baseName": "inviter_id",
            "type": "string",
            "format": ""
        },
        {
            "name": "strict",
            "baseName": "strict",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "invitationStatus",
            "baseName": "invitation_status",
            "type": "any",
            "format": ""
        },
        {
            "name": "hiddenStatus",
            "baseName": "hidden_status",
            "type": "any",
            "format": ""
        },
        {
            "name": "operatorIds",
            "baseName": "operator_ids",
            "type": "Array<string>",
            "format": ""
        },
        {
            "name": "blockSdkUserChannelJoin",
            "baseName": "block_sdk_user_channel_join",
            "type": "boolean",
            "format": ""
        }
    ];
    return GcCreateChannelData;
}());
exports.GcCreateChannelData = GcCreateChannelData;
//# sourceMappingURL=GcCreateChannelData.js.map