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

import { SendBirdPollStaticStatus } from './SendBirdPollStaticStatus';
import { HttpFile } from '../http/http';

export class SendBirdPollStatic {
    'status'?: SendBirdPollStaticStatus;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "status",
            "baseName": "Status",
            "type": "SendBirdPollStaticStatus",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return SendBirdPollStatic.attributeTypeMap;
    }

    public constructor() {
    }
}
