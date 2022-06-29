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

import { OcListBannedUsersResponseBannedList } from './OcListBannedUsersResponseBannedList';
import { HttpFile } from '../http/http';

export class CustomTypeListBannedUsersResponse {
    'bannedList'?: Array<OcListBannedUsersResponseBannedList>;
    'next'?: string;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "bannedList",
            "baseName": "banned_list",
            "type": "Array<OcListBannedUsersResponseBannedList>",
            "format": ""
        },
        {
            "name": "next",
            "baseName": "next",
            "type": "string",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return CustomTypeListBannedUsersResponse.attributeTypeMap;
    }

    public constructor() {
    }
}
