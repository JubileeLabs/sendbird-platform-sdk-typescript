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

export class BlockUserData {
    /**
    * Specifies the unique ID of the user to block.
    */
    'userId': string;
    /**
    * Specifies the ID of the user to be blocked.
    */
    'targetId': string;
    /**
    * Specifies an array of the IDs of the users to be blocked at a time. (for bulk mode)
    */
    'userIds': Array<number>;
    /**
    * Specifies an array of the IDs of the users to be blocked at a time. The user_ids above and this property can be used interchangeably. (for bulk mode)
    */
    'users': Array<number>;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "userId",
            "baseName": "user_id",
            "type": "string",
            "format": ""
        },
        {
            "name": "targetId",
            "baseName": "target_id",
            "type": "string",
            "format": ""
        },
        {
            "name": "userIds",
            "baseName": "user_ids",
            "type": "Array<number>",
            "format": ""
        },
        {
            "name": "users",
            "baseName": "users",
            "type": "Array<number>",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return BlockUserData.attributeTypeMap;
    }

    public constructor() {
    }
}
