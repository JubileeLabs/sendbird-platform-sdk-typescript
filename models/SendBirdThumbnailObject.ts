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

export class SendBirdThumbnailObject {
    'height'?: number;
    'plainUrl'?: string;
    'realHeight'?: number;
    'realWidth'?: number;
    'url'?: string;
    'width'?: number;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "height",
            "baseName": "height",
            "type": "number",
            "format": ""
        },
        {
            "name": "plainUrl",
            "baseName": "plain_url",
            "type": "string",
            "format": ""
        },
        {
            "name": "realHeight",
            "baseName": "real_height",
            "type": "number",
            "format": ""
        },
        {
            "name": "realWidth",
            "baseName": "real_width",
            "type": "number",
            "format": ""
        },
        {
            "name": "url",
            "baseName": "url",
            "type": "string",
            "format": ""
        },
        {
            "name": "width",
            "baseName": "width",
            "type": "number",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return SendBirdThumbnailObject.attributeTypeMap;
    }

    public constructor() {
    }
}

