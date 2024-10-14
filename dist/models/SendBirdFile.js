"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SendBirdFile = void 0;
var SendBirdFile = (function () {
    function SendBirdFile() {
    }
    SendBirdFile.getAttributeTypeMap = function () {
        return SendBirdFile.attributeTypeMap;
    };
    SendBirdFile.discriminator = undefined;
    SendBirdFile.attributeTypeMap = [
        {
            "name": "url",
            "baseName": "url",
            "type": "string",
            "format": ""
        },
        {
            "name": "fileName",
            "baseName": "file_name",
            "type": "string",
            "format": ""
        },
        {
            "name": "fileSize",
            "baseName": "file_size",
            "type": "number",
            "format": ""
        },
        {
            "name": "fileType",
            "baseName": "file_type",
            "type": "string",
            "format": ""
        },
        {
            "name": "thumbnails",
            "baseName": "thumbnails",
            "type": "Array<SendBirdThumbnailSBObject>",
            "format": ""
        },
        {
            "name": "requireAuth",
            "baseName": "require_auth",
            "type": "boolean",
            "format": ""
        }
    ];
    return SendBirdFile;
}());
exports.SendBirdFile = SendBirdFile;
//# sourceMappingURL=SendBirdFile.js.map