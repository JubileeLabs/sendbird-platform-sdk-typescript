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

import { SendBirdSendBirdInstanceBaseMessageReplyType } from './SendBirdSendBirdInstanceBaseMessageReplyType';
import { HttpFile } from '../http/http';

export class SendBirdSendBirdInstanceBaseMessage {
    'replyType'?: SendBirdSendBirdInstanceBaseMessageReplyType;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "replyType",
            "baseName": "ReplyType",
            "type": "SendBirdSendBirdInstanceBaseMessageReplyType",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return SendBirdSendBirdInstanceBaseMessage.attributeTypeMap;
    }

    public constructor() {
    }
}
