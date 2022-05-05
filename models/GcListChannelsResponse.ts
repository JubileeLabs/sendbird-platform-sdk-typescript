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

import { SendBirdGroupChannel } from './SendBirdGroupChannel';
import { HttpFile } from '../http/http';

export class GcListChannelsResponse {
    'channels'?: Array<SendBirdGroupChannel>;
    'next'?: string;
    'ts'?: number;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "channels",
            "baseName": "channels",
            "type": "Array<SendBirdGroupChannel>",
            "format": ""
        },
        {
            "name": "next",
            "baseName": "next",
            "type": "string",
            "format": ""
        },
        {
            "name": "ts",
            "baseName": "ts",
            "type": "number",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return GcListChannelsResponse.attributeTypeMap;
    }

    public constructor() {
    }
}
