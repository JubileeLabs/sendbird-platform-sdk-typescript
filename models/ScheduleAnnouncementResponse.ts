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

import { ScheduleAnnouncementResponseCreateChannelOptions } from './ScheduleAnnouncementResponseCreateChannelOptions';
import { ScheduleAnnouncementResponseMessage } from './ScheduleAnnouncementResponseMessage';
import { HttpFile } from '../http/http';

export class ScheduleAnnouncementResponse {
    'uniqueId'?: string;
    'announcementGroup'?: string;
    'message'?: ScheduleAnnouncementResponseMessage;
    'enablePush'?: boolean;
    'targetAt'?: string;
    'targetUserCount'?: number;
    'targetChannelCount'?: number;
    'targetChannelType'?: string;
    'createChannelOptions'?: ScheduleAnnouncementResponseCreateChannelOptions;
    'status'?: string;
    'scheduledAt'?: number;
    'ceaseAt'?: string;
    'resumeAt'?: string;
    'completedAt'?: number;
    'sentUserCount'?: number;
    'sentChannelCount'?: number;
    'openCount'?: number;
    'openRate'?: number;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "uniqueId",
            "baseName": "unique_id",
            "type": "string",
            "format": ""
        },
        {
            "name": "announcementGroup",
            "baseName": "announcement_group",
            "type": "string",
            "format": ""
        },
        {
            "name": "message",
            "baseName": "message",
            "type": "ScheduleAnnouncementResponseMessage",
            "format": ""
        },
        {
            "name": "enablePush",
            "baseName": "enable_push",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "targetAt",
            "baseName": "target_at",
            "type": "string",
            "format": ""
        },
        {
            "name": "targetUserCount",
            "baseName": "target_user_count",
            "type": "number",
            "format": ""
        },
        {
            "name": "targetChannelCount",
            "baseName": "target_channel_count",
            "type": "number",
            "format": ""
        },
        {
            "name": "targetChannelType",
            "baseName": "target_channel_type",
            "type": "string",
            "format": ""
        },
        {
            "name": "createChannelOptions",
            "baseName": "create_channel_options",
            "type": "ScheduleAnnouncementResponseCreateChannelOptions",
            "format": ""
        },
        {
            "name": "status",
            "baseName": "status",
            "type": "string",
            "format": ""
        },
        {
            "name": "scheduledAt",
            "baseName": "scheduled_at",
            "type": "number",
            "format": ""
        },
        {
            "name": "ceaseAt",
            "baseName": "cease_at",
            "type": "string",
            "format": ""
        },
        {
            "name": "resumeAt",
            "baseName": "resume_at",
            "type": "string",
            "format": ""
        },
        {
            "name": "completedAt",
            "baseName": "completed_at",
            "type": "number",
            "format": ""
        },
        {
            "name": "sentUserCount",
            "baseName": "sent_user_count",
            "type": "number",
            "format": ""
        },
        {
            "name": "sentChannelCount",
            "baseName": "sent_channel_count",
            "type": "number",
            "format": ""
        },
        {
            "name": "openCount",
            "baseName": "open_count",
            "type": "number",
            "format": ""
        },
        {
            "name": "openRate",
            "baseName": "open_rate",
            "type": "number",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return ScheduleAnnouncementResponse.attributeTypeMap;
    }

    public constructor() {
    }
}

