"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AddApnsPushConfigurationData = void 0;
var AddApnsPushConfigurationData = (function () {
    function AddApnsPushConfigurationData() {
    }
    AddApnsPushConfigurationData.getAttributeTypeMap = function () {
        return AddApnsPushConfigurationData.attributeTypeMap;
    };
    AddApnsPushConfigurationData.discriminator = undefined;
    AddApnsPushConfigurationData.attributeTypeMap = [
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
    return AddApnsPushConfigurationData;
}());
exports.AddApnsPushConfigurationData = AddApnsPushConfigurationData;
//# sourceMappingURL=AddApnsPushConfigurationData.js.map