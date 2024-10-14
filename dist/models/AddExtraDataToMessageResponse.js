"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AddExtraDataToMessageResponse = void 0;
var AddExtraDataToMessageResponse = (function () {
    function AddExtraDataToMessageResponse() {
    }
    AddExtraDataToMessageResponse.getAttributeTypeMap = function () {
        return AddExtraDataToMessageResponse.attributeTypeMap;
    };
    AddExtraDataToMessageResponse.discriminator = undefined;
    AddExtraDataToMessageResponse.attributeTypeMap = [
        {
            "name": "sortedMetaarray",
            "baseName": "sorted_metaarray",
            "type": "Array<ListMessagesResponseMessagesInnerSortedMetaarrayInner>",
            "format": ""
        }
    ];
    return AddExtraDataToMessageResponse;
}());
exports.AddExtraDataToMessageResponse = AddExtraDataToMessageResponse;
//# sourceMappingURL=AddExtraDataToMessageResponse.js.map