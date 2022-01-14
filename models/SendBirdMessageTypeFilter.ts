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

export class SendBirdMessageTypeFilter {
    'ADMIN'?: SendBirdMessageTypeFilterADMINEnum;
    'ALL'?: SendBirdMessageTypeFilterALLEnum;
    'FILE'?: SendBirdMessageTypeFilterFILEEnum;
    'USER'?: SendBirdMessageTypeFilterUSEREnum;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "ADMIN",
            "baseName": "ADMIN",
            "type": "SendBirdMessageTypeFilterADMINEnum",
            "format": ""
        },
        {
            "name": "ALL",
            "baseName": "ALL",
            "type": "SendBirdMessageTypeFilterALLEnum",
            "format": ""
        },
        {
            "name": "FILE",
            "baseName": "FILE",
            "type": "SendBirdMessageTypeFilterFILEEnum",
            "format": ""
        },
        {
            "name": "USER",
            "baseName": "USER",
            "type": "SendBirdMessageTypeFilterUSEREnum",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return SendBirdMessageTypeFilter.attributeTypeMap;
    }

    public constructor() {
    }
}


export type SendBirdMessageTypeFilterADMINEnum = "ADMM" ;
export type SendBirdMessageTypeFilterALLEnum = "" ;
export type SendBirdMessageTypeFilterFILEEnum = "FILE" ;
export type SendBirdMessageTypeFilterUSEREnum = "MESG" ;
