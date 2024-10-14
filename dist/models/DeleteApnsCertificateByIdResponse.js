"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteApnsCertificateByIdResponse = void 0;
var DeleteApnsCertificateByIdResponse = (function () {
    function DeleteApnsCertificateByIdResponse() {
    }
    DeleteApnsCertificateByIdResponse.getAttributeTypeMap = function () {
        return DeleteApnsCertificateByIdResponse.attributeTypeMap;
    };
    DeleteApnsCertificateByIdResponse.discriminator = undefined;
    DeleteApnsCertificateByIdResponse.attributeTypeMap = [
        {
            "name": "pushConfigurations",
            "baseName": "push_configurations",
            "type": "Array<string>",
            "format": ""
        }
    ];
    return DeleteApnsCertificateByIdResponse;
}());
exports.DeleteApnsCertificateByIdResponse = DeleteApnsCertificateByIdResponse;
//# sourceMappingURL=DeleteApnsCertificateByIdResponse.js.map