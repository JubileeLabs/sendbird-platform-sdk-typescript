"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AddExtraDataToMessageData = void 0;
var AddExtraDataToMessageData = (function () {
    function AddExtraDataToMessageData() {
    }
    AddExtraDataToMessageData.getAttributeTypeMap = function () {
        return AddExtraDataToMessageData.attributeTypeMap;
    };
    AddExtraDataToMessageData.discriminator = undefined;
    AddExtraDataToMessageData.attributeTypeMap = [
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
        }
    ];
    return AddExtraDataToMessageData;
}());
exports.AddExtraDataToMessageData = AddExtraDataToMessageData;
//# sourceMappingURL=AddExtraDataToMessageData.js.map