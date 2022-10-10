/**
 * Sendbird Platform SDK
 * Sendbird Platform API SDK  https://sendbird.com/docs/chat/v3/platform-api/getting-started/prepare-to-use-api
 *
 * OpenAPI spec version: 1.0.0
 * Contact: support@sendbird.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { HttpFile } from '../http/http';

export class ChooseWhichEventsToSubscribeToData {
    /**
    * Determines whether webhooks are turned on in your Sendbird application or not. (Default: false)
    */
    'enabled': boolean;
    /**
    * Specifies the URL of your webhook server to receive payloads for events.
    */
    'url': string;
    /**
    * Determines whether to include the information on the members of group channels in payloads. (Default: false)
    */
    'includeMembers'?: boolean;
    /**
    * Specifies an array of one or more [events](#2-webhook-events) for your webhook server to subscribe to. If set to an asterisk () only, the server will subscribe to all supported events. If set to an empty array, the server will unsubscribe from all (which indicates turning off webhooks).
    */
    'enabledEvents'?: Array<string>;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "enabled",
            "baseName": "enabled",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "url",
            "baseName": "url",
            "type": "string",
            "format": ""
        },
        {
            "name": "includeMembers",
            "baseName": "include_members",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "enabledEvents",
            "baseName": "enabled_events",
            "type": "Array<string>",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return ChooseWhichEventsToSubscribeToData.attributeTypeMap;
    }

    public constructor() {
    }
}

