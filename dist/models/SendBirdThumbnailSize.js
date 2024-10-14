"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SendBirdThumbnailSize = void 0;
var SendBirdThumbnailSize = (function () {
    function SendBirdThumbnailSize() {
    }
    SendBirdThumbnailSize.getAttributeTypeMap = function () {
        return SendBirdThumbnailSize.attributeTypeMap;
    };
    SendBirdThumbnailSize.discriminator = undefined;
    SendBirdThumbnailSize.attributeTypeMap = [
        {
            "name": "maxHeight",
            "baseName": "max_height",
            "type": "number",
            "format": ""
        },
        {
            "name": "maxWidth",
            "baseName": "max_width",
            "type": "number",
            "format": ""
        }
    ];
    return SendBirdThumbnailSize;
}());
exports.SendBirdThumbnailSize = SendBirdThumbnailSize;
//# sourceMappingURL=SendBirdThumbnailSize.js.map