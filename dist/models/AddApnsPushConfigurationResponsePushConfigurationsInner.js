"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AddApnsPushConfigurationResponsePushConfigurationsInner = void 0;
var AddApnsPushConfigurationResponsePushConfigurationsInner = (function () {
    function AddApnsPushConfigurationResponsePushConfigurationsInner() {
    }
    AddApnsPushConfigurationResponsePushConfigurationsInner.getAttributeTypeMap = function () {
        return AddApnsPushConfigurationResponsePushConfigurationsInner.attributeTypeMap;
    };
    AddApnsPushConfigurationResponsePushConfigurationsInner.discriminator = undefined;
    AddApnsPushConfigurationResponsePushConfigurationsInner.attributeTypeMap = [
        {
            "name": "id",
            "baseName": "id",
            "type": "string",
            "format": ""
        },
        {
            "name": "pushType",
            "baseName": "push_type",
            "type": "string",
            "format": ""
        },
        {
            "name": "createdAt",
            "baseName": "created_at",
            "type": "number",
            "format": ""
        },
        {
            "name": "apnsCerEnvType",
            "baseName": "apns_cer_env_type",
            "type": "string",
            "format": ""
        },
        {
            "name": "apnsExpiration",
            "baseName": "apns_expiration",
            "type": "number",
            "format": ""
        },
        {
            "name": "apnsName",
            "baseName": "apns_name",
            "type": "string",
            "format": ""
        },
        {
            "name": "hasUnreadCountBadge",
            "baseName": "has_unread_count_badge",
            "type": "number",
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
        }
    ];
    return AddApnsPushConfigurationResponsePushConfigurationsInner;
}());
exports.AddApnsPushConfigurationResponsePushConfigurationsInner = AddApnsPushConfigurationResponsePushConfigurationsInner;
//# sourceMappingURL=AddApnsPushConfigurationResponsePushConfigurationsInner.js.map