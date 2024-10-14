"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ListPushConfigurationsResponsePushConfigurationsInner = void 0;
var ListPushConfigurationsResponsePushConfigurationsInner = (function () {
    function ListPushConfigurationsResponsePushConfigurationsInner() {
    }
    ListPushConfigurationsResponsePushConfigurationsInner.getAttributeTypeMap = function () {
        return ListPushConfigurationsResponsePushConfigurationsInner.attributeTypeMap;
    };
    ListPushConfigurationsResponsePushConfigurationsInner.discriminator = undefined;
    ListPushConfigurationsResponsePushConfigurationsInner.attributeTypeMap = [
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
            "name": "apiKey",
            "baseName": "api_key",
            "type": "string",
            "format": ""
        },
        {
            "name": "senderId",
            "baseName": "sender_id",
            "type": "string",
            "format": ""
        },
        {
            "name": "pushSound",
            "baseName": "push_sound",
            "type": "string",
            "format": ""
        }
    ];
    return ListPushConfigurationsResponsePushConfigurationsInner;
}());
exports.ListPushConfigurationsResponsePushConfigurationsInner = ListPushConfigurationsResponsePushConfigurationsInner;
//# sourceMappingURL=ListPushConfigurationsResponsePushConfigurationsInner.js.map