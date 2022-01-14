/**
 * Sendbird Platform SDK
 * Sendbird Platform API Javascript SDK  https://sendbird.com/docs/chat/v3/platform-api/getting-started/prepare-to-use-api
 *
 * OpenAPI spec version: 1.0.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { HttpFile } from '../http/http';

export class SendBirdSearchFilterParams {
    'searchFields'?: Array<SendBirdSearchFilterParamsSearchFieldsEnum>;
    'searchQuery'?: string;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "searchFields",
            "baseName": "searchFields",
            "type": "Array<SendBirdSearchFilterParamsSearchFieldsEnum>",
            "format": ""
        },
        {
            "name": "searchQuery",
            "baseName": "searchQuery",
            "type": "string",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return SendBirdSearchFilterParams.attributeTypeMap;
    }

    public constructor() {
    }
}


export type SendBirdSearchFilterParamsSearchFieldsEnum = "channel_name" | "member_nickname" ;
