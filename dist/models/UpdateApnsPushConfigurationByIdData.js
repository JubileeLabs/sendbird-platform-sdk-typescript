"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateApnsPushConfigurationByIdData = void 0;
var UpdateApnsPushConfigurationByIdData = (function () {
    function UpdateApnsPushConfigurationByIdData() {
    }
    UpdateApnsPushConfigurationByIdData.getAttributeTypeMap = function () {
        return UpdateApnsPushConfigurationByIdData.attributeTypeMap;
    };
    UpdateApnsPushConfigurationByIdData.discriminator = undefined;
    UpdateApnsPushConfigurationByIdData.attributeTypeMap = [
        {
            "name": "providerId",
            "baseName": "provider_id",
            "type": "string",
            "format": ""
        },
        {
            "name": "apnsCert",
            "baseName": "apns_cert",
            "type": "HttpFile",
            "format": "binary"
        },
        {
            "name": "apnsCertEnvType",
            "baseName": "apns_cert_env_type",
            "type": "string",
            "format": ""
        },
        {
            "name": "apnsCertPassword",
            "baseName": "apns_cert_password",
            "type": "string",
            "format": ""
        },
        {
            "name": "hasUnreadCountBadge",
            "baseName": "has_unread_count_badge",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "contentAvailable",
            "baseName": "content_available",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "mutableContent",
            "baseName": "mutable_content",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "pushSound",
            "baseName": "push_sound",
            "type": "string",
            "format": ""
        },
        {
            "name": "apnsType",
            "baseName": "apns_type",
            "type": "string",
            "format": ""
        }
    ];
    return UpdateApnsPushConfigurationByIdData;
}());
exports.UpdateApnsPushConfigurationByIdData = UpdateApnsPushConfigurationByIdData;
//# sourceMappingURL=UpdateApnsPushConfigurationByIdData.js.map