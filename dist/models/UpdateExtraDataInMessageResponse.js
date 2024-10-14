"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateExtraDataInMessageResponse = void 0;
var UpdateExtraDataInMessageResponse = (function () {
    function UpdateExtraDataInMessageResponse() {
    }
    UpdateExtraDataInMessageResponse.getAttributeTypeMap = function () {
        return UpdateExtraDataInMessageResponse.attributeTypeMap;
    };
    UpdateExtraDataInMessageResponse.discriminator = undefined;
    UpdateExtraDataInMessageResponse.attributeTypeMap = [
        {
            "name": "sortedMetaarray",
            "baseName": "sorted_metaarray",
            "type": "Array<UpdateExtraDataInMessageResponseSortedMetaarrayInner>",
            "format": ""
        }
    ];
    return UpdateExtraDataInMessageResponse;
}());
exports.UpdateExtraDataInMessageResponse = UpdateExtraDataInMessageResponse;
//# sourceMappingURL=UpdateExtraDataInMessageResponse.js.map