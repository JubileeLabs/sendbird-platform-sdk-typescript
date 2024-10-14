"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ListDataExportsByMessageChannelOrUserResponse = void 0;
var ListDataExportsByMessageChannelOrUserResponse = (function () {
    function ListDataExportsByMessageChannelOrUserResponse() {
    }
    ListDataExportsByMessageChannelOrUserResponse.getAttributeTypeMap = function () {
        return ListDataExportsByMessageChannelOrUserResponse.attributeTypeMap;
    };
    ListDataExportsByMessageChannelOrUserResponse.discriminator = undefined;
    ListDataExportsByMessageChannelOrUserResponse.attributeTypeMap = [
        {
            "name": "exportedData",
            "baseName": "exported_data",
            "type": "Array<ListDataExportsByMessageChannelOrUserResponseExportedDataInner>",
            "format": ""
        },
        {
            "name": "next",
            "baseName": "next",
            "type": "string",
            "format": ""
        }
    ];
    return ListDataExportsByMessageChannelOrUserResponse;
}());
exports.ListDataExportsByMessageChannelOrUserResponse = ListDataExportsByMessageChannelOrUserResponse;
//# sourceMappingURL=ListDataExportsByMessageChannelOrUserResponse.js.map