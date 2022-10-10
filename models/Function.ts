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

export class Function {
    'arguments'?: any;
    'caller'?: Function;
    'length'?: number;
    'prototype'?: any;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "arguments",
            "baseName": "arguments",
            "type": "any",
            "format": ""
        },
        {
            "name": "caller",
            "baseName": "caller",
            "type": "Function",
            "format": ""
        },
        {
            "name": "length",
            "baseName": "length",
            "type": "number",
            "format": ""
        },
        {
            "name": "prototype",
            "baseName": "prototype",
            "type": "any",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return Function.attributeTypeMap;
    }

    public constructor() {
    }
}

