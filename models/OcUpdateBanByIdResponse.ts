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

import { SendBirdUser } from './SendBirdUser';
import { HttpFile } from '../http/http';

export class OcUpdateBanByIdResponse {
    'user'?: SendBirdUser;
    'description'?: string;
    'endAt'?: number;
    'startAt'?: number;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "user",
            "baseName": "user",
            "type": "SendBirdUser",
            "format": ""
        },
        {
            "name": "description",
            "baseName": "description",
            "type": "string",
            "format": ""
        },
        {
            "name": "endAt",
            "baseName": "end_at",
            "type": "number",
            "format": ""
        },
        {
            "name": "startAt",
            "baseName": "start_at",
            "type": "number",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return OcUpdateBanByIdResponse.attributeTypeMap;
    }

    public constructor() {
    }
}

