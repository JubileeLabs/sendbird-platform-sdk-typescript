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

import { SendBirdAppleCriticalAlertOptions } from './SendBirdAppleCriticalAlertOptions';
import { SendBirdMessageMetaArray } from './SendBirdMessageMetaArray';
import { SendBirdUser } from './SendBirdUser';
import { HttpFile } from '../http/http';

export class SendBirdUserMessageParams {
    'appleCriticalAlertOptions'?: SendBirdAppleCriticalAlertOptions;
    'customType'?: string;
    'data'?: string;
    'isReplyToChannel'?: boolean;
    'mentionType'?: SendBirdUserMessageParamsMentionTypeEnum;
    'mentionedUserIds'?: Array<string>;
    'mentionedUsers'?: Array<SendBirdUser>;
    'message'?: string;
    'metaArrayKeys'?: Array<string>;
    'metaArrays'?: Array<SendBirdMessageMetaArray>;
    'parentMessageId'?: number;
    'pollId'?: number;
    'pushNotificationDeliveryOption'?: SendBirdUserMessageParamsPushNotificationDeliveryOptionEnum;
    'targetLanguages'?: Array<string>;
    'translationTargetLanguages'?: Array<string>;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "appleCriticalAlertOptions",
            "baseName": "apple_critical_alert_options",
            "type": "SendBirdAppleCriticalAlertOptions",
            "format": ""
        },
        {
            "name": "customType",
            "baseName": "custom_type",
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
            "name": "isReplyToChannel",
            "baseName": "is_reply_to_channel",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "mentionType",
            "baseName": "mention_type",
            "type": "SendBirdUserMessageParamsMentionTypeEnum",
            "format": ""
        },
        {
            "name": "mentionedUserIds",
            "baseName": "mentioned_user_ids",
            "type": "Array<string>",
            "format": ""
        },
        {
            "name": "mentionedUsers",
            "baseName": "mentioned_users",
            "type": "Array<SendBirdUser>",
            "format": ""
        },
        {
            "name": "message",
            "baseName": "message",
            "type": "string",
            "format": ""
        },
        {
            "name": "metaArrayKeys",
            "baseName": "meta_array_keys",
            "type": "Array<string>",
            "format": ""
        },
        {
            "name": "metaArrays",
            "baseName": "meta_arrays",
            "type": "Array<SendBirdMessageMetaArray>",
            "format": ""
        },
        {
            "name": "parentMessageId",
            "baseName": "parent_message_id",
            "type": "number",
            "format": ""
        },
        {
            "name": "pollId",
            "baseName": "poll_id",
            "type": "number",
            "format": ""
        },
        {
            "name": "pushNotificationDeliveryOption",
            "baseName": "push_notification_delivery_option",
            "type": "SendBirdUserMessageParamsPushNotificationDeliveryOptionEnum",
            "format": ""
        },
        {
            "name": "targetLanguages",
            "baseName": "target_languages",
            "type": "Array<string>",
            "format": ""
        },
        {
            "name": "translationTargetLanguages",
            "baseName": "translation_target_languages",
            "type": "Array<string>",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return SendBirdUserMessageParams.attributeTypeMap;
    }

    public constructor() {
    }
}


export type SendBirdUserMessageParamsMentionTypeEnum = "channel" | "users" ;
export type SendBirdUserMessageParamsPushNotificationDeliveryOptionEnum = "default" | "suppress" ;

