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

export class SendBirdPollStatus {
    'CLOSED'?: SendBirdPollStatusCLOSEDEnum;
    'OPEN'?: SendBirdPollStatusOPENEnum;
    'REMOVED'?: SendBirdPollStatusREMOVEDEnum;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "CLOSED",
            "baseName": "CLOSED",
            "type": "SendBirdPollStatusCLOSEDEnum",
            "format": ""
        },
        {
            "name": "OPEN",
            "baseName": "OPEN",
            "type": "SendBirdPollStatusOPENEnum",
            "format": ""
        },
        {
            "name": "REMOVED",
            "baseName": "REMOVED",
            "type": "SendBirdPollStatusREMOVEDEnum",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return SendBirdPollStatus.attributeTypeMap;
    }

    public constructor() {
    }
}


export type SendBirdPollStatusCLOSEDEnum = "closed" ;
export type SendBirdPollStatusOPENEnum = "open" ;
export type SendBirdPollStatusREMOVEDEnum = "removed" ;
