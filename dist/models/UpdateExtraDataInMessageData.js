"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateExtraDataInMessageData = void 0;
var UpdateExtraDataInMessageData = (function () {
    function UpdateExtraDataInMessageData() {
    }
    UpdateExtraDataInMessageData.getAttributeTypeMap = function () {
        return UpdateExtraDataInMessageData.attributeTypeMap;
    };
    UpdateExtraDataInMessageData.discriminator = undefined;
    UpdateExtraDataInMessageData.attributeTypeMap = [
        {
            "name": "channelType",
            "baseName": "channel_type",
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
            "name": "messageId",
            "baseName": "message_id",
            "type": "number",
            "format": ""
        },
        {
            "name": "sortedMetaarray",
            "baseName": "sorted_metaarray",
            "type": "string",
            "format": ""
        },
        {
            "name": "mode",
            "baseName": "mode",
            "type": "string",
            "format": ""
        },
        {
            "name": "upsert",
            "baseName": "upsert",
            "type": "boolean",
            "format": ""
        }
    ];
    return UpdateExtraDataInMessageData;
}());
exports.UpdateExtraDataInMessageData = UpdateExtraDataInMessageData;
//# sourceMappingURL=UpdateExtraDataInMessageData.js.map