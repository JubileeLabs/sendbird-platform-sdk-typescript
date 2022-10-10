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

export class SendMessageData {
    /**
    * Specifies the user ID of the sender.
    */
    'userId': string;
    /**
    * Specifies the type of the channel. Either open_channels or group_channels.
    */
    'channelType'?: string;
    /**
    * Specifies the URL of the channel to send a message to.
    */
    'channelUrl'?: string;
    /**
    * Specifies the type of the message as MESG, FILE or ADMM
    */
    'messageType': string;
    /**
    * Specifies the content of the message.
    */
    'message': string;
    /**
    * Specifies a custom message type which is used for message grouping. The length is limited to 128 characters.<br /><br /> Custom types are also used within Sendbird's [Advanced analytics](/docs/chat/v3/platform-api/guides/advanced-analytics) to segment metrics, which enables the sub-classification of data views.
    */
    'customType'?: string;
    /**
    * Specifies additional message information such as custom font size, font type or `JSON` formatted string.
    */
    'data'?: string;
    /**
    * Determines whether to send a push notification for the message to the members of the channel (applicable to group channels only). Unlike text and file messages, a push notification for an admin message is not sent by default. (Default: true)
    */
    'sendPush'?: boolean;
    /**
    * Specifies the mentioning type which indicates the user scope who will get a notification for the message. Acceptable values are users and channel. If set to users, only the specified users with the mentioned_users property below will get notified. If set to channel, all users in the channel will get notified. (Default: users)
    */
    'mentionType'?: string;
    /**
    * Specifies an array of one or more IDs of the users who will get a notification for the message.
    */
    'mentionedUserIds'?: Array<string>;
    /**
    * Determines whether to send a message without updating some of the channel properties. If a message is sent in a channel, with this property set to true, the channel's last_message is updated only for the sender while its unread_message_count remains unchanged for all channel members. Also, the message doesn't send a push notification to message receivers. If the message is sent to a hidden channel, the channel still remains hidden. (Default: false)</br></br>  Once the value of this property is set, it can't be reverted.
    */
    'isSilent'?: boolean;
    /**
    * Specifies a `JSON` object of one or more key-values items which store additional message information. Each item consists of a key and the values in an array. Items are saved and will be returned in the exact order they've been specified.
    */
    'sortedMetaarray'?: string;
    /**
    * Specifies the time that the message was sent, in [Unix milliseconds](/docs/chat/v3/platform-api/guides/miscellaneous#2-timestamps) format. This property can be used when migrating the messages of other system to Sendbird server. If specified, the server sets the message's creation time as the property value.
    */
    'createdAt'?: number;
    /**
    * Specifies the unique message ID created by other system. In general, this property is used to prevent the same message data from getting inserted when migrating the messages of the other system to Sendbird server. If specified, the server performs a duplicate check using the property value.
    */
    'dedupId'?: string;
    /**
    * Specifies the bundle ID of the client app in order to send a push notification to iOS devices. You can find this in Settings > Chat > Notifications > Push notification services
    */
    'apnsBundleId'?: string;
    /**
    * Specifies the name of the file that sounds for critical alerts.
    */
    'sound'?: string;
    /**
    * Specifies the volume of the critical alert sound. The volume ranges from 0.0 to 1.0, which indicates silent and full volume, respectively. (Default 1.0)
    */
    'volume'?: number;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "userId",
            "baseName": "user_id",
            "type": "string",
            "format": ""
        },
        {
            "name": "channelType",
            "baseName": "channel_type",
            "type": "string",
            "format": ""
        },
        {
            "name": "channelUrl",
            "baseName": "channel_url",
            "type": "string",
            "format": ""
        },
        {
            "name": "messageType",
            "baseName": "message_type",
            "type": "string",
            "format": ""
        },
        {
            "name": "message",
            "baseName": "message",
            "type": "string",
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
            "name": "sendPush",
            "baseName": "send_push",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "mentionType",
            "baseName": "mention_type",
            "type": "string",
            "format": ""
        },
        {
            "name": "mentionedUserIds",
            "baseName": "mentioned_user_ids",
            "type": "Array<string>",
            "format": ""
        },
        {
            "name": "isSilent",
            "baseName": "is_silent",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "sortedMetaarray",
            "baseName": "sorted_metaarray",
            "type": "string",
            "format": ""
        },
        {
            "name": "createdAt",
            "baseName": "created_at",
            "type": "number",
            "format": ""
        },
        {
            "name": "dedupId",
            "baseName": "dedup_id",
            "type": "string",
            "format": ""
        },
        {
            "name": "apnsBundleId",
            "baseName": "apns_bundle_id",
            "type": "string",
            "format": ""
        },
        {
            "name": "sound",
            "baseName": "sound",
            "type": "string",
            "format": ""
        },
        {
            "name": "volume",
            "baseName": "volume",
            "type": "number",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return SendMessageData.attributeTypeMap;
    }

    public constructor() {
    }
}

