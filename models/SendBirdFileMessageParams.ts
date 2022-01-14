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

import { Blob } from './Blob';
import { SendBirdAppleCriticalAlertOptions } from './SendBirdAppleCriticalAlertOptions';
import { SendBirdMessageMetaArray } from './SendBirdMessageMetaArray';
import { SendBirdThumbnailSize } from './SendBirdThumbnailSize';
import { SendBirdUser } from './SendBirdUser';
import { HttpFile } from '../http/http';

export class SendBirdFileMessageParams {
    'appleCriticalAlertOptions'?: SendBirdAppleCriticalAlertOptions;
    'customType'?: string;
    'data'?: string;
    'file'?: Blob;
    'fileName'?: string;
    'fileSize'?: number;
    'fileUrl'?: string;
    'isReplyToChannel'?: boolean;
    'mentionType'?: SendBirdFileMessageParamsMentionTypeEnum;
    'mentionedUserIds'?: Array<string>;
    'mentionedUsers'?: Array<SendBirdUser>;
    'metaArrayKeys'?: Array<string>;
    'metaArrays'?: Array<SendBirdMessageMetaArray>;
    'mimeType'?: string;
    'parentMessageId'?: number;
    'pushNotificationDeliveryOption'?: SendBirdFileMessageParamsPushNotificationDeliveryOptionEnum;
    'thumbnailSizes'?: Array<SendBirdThumbnailSize>;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "appleCriticalAlertOptions",
            "baseName": "appleCriticalAlertOptions",
            "type": "SendBirdAppleCriticalAlertOptions",
            "format": ""
        },
        {
            "name": "customType",
            "baseName": "customType",
            "type": "string",
            "format": ""
        },
        {
            "name": "data",
            "baseName": "data",
            "type": "string",
            "format": ""
        },
        {
            "name": "file",
            "baseName": "file",
            "type": "Blob",
            "format": ""
        },
        {
            "name": "fileName",
            "baseName": "fileName",
            "type": "string",
            "format": ""
        },
        {
            "name": "fileSize",
            "baseName": "fileSize",
            "type": "number",
            "format": ""
        },
        {
            "name": "fileUrl",
            "baseName": "fileUrl",
            "type": "string",
            "format": ""
        },
        {
            "name": "isReplyToChannel",
            "baseName": "isReplyToChannel",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "mentionType",
            "baseName": "mentionType",
            "type": "SendBirdFileMessageParamsMentionTypeEnum",
            "format": ""
        },
        {
            "name": "mentionedUserIds",
            "baseName": "mentionedUserIds",
            "type": "Array<string>",
            "format": ""
        },
        {
            "name": "mentionedUsers",
            "baseName": "mentionedUsers",
            "type": "Array<SendBirdUser>",
            "format": ""
        },
        {
            "name": "metaArrayKeys",
            "baseName": "metaArrayKeys",
            "type": "Array<string>",
            "format": ""
        },
        {
            "name": "metaArrays",
            "baseName": "metaArrays",
            "type": "Array<SendBirdMessageMetaArray>",
            "format": ""
        },
        {
            "name": "mimeType",
            "baseName": "mimeType",
            "type": "string",
            "format": ""
        },
        {
            "name": "parentMessageId",
            "baseName": "parentMessageId",
            "type": "number",
            "format": ""
        },
        {
            "name": "pushNotificationDeliveryOption",
            "baseName": "pushNotificationDeliveryOption",
            "type": "SendBirdFileMessageParamsPushNotificationDeliveryOptionEnum",
            "format": ""
        },
        {
            "name": "thumbnailSizes",
            "baseName": "thumbnailSizes",
            "type": "Array<SendBirdThumbnailSize>",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return SendBirdFileMessageParams.attributeTypeMap;
    }

    public constructor() {
    }
}


export type SendBirdFileMessageParamsMentionTypeEnum = "channel" | "users" ;
export type SendBirdFileMessageParamsPushNotificationDeliveryOptionEnum = "default" | "suppress" ;
