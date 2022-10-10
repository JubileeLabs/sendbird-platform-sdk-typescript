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

import { SendBirdRestrictionInfo } from './SendBirdRestrictionInfo';
import { HttpFile } from '../http/http';

export class SendBirdMember {
    'connectionStatus'?: string;
    'friendDiscoveryKey'?: string;
    'friendName'?: string;
    'isActive'?: boolean;
    'isMuted'?: boolean;
    'lastSeenAt'?: number;
    'nickname'?: string;
    'plainProfileUrl'?: string;
    'preferredLanguages'?: Array<string>;
    'profileUrl'?: string;
    'requireAuth'?: boolean;
    'requireAuthForProfileImage'?: boolean;
    'metadata'?: any;
    'isOnline'?: boolean;
    'mutedEndAt'?: number;
    'mutedDescription'?: string;
    'restrictionInfo'?: SendBirdRestrictionInfo;
    'role'?: SendBirdMemberRoleEnum;
    'state'?: SendBirdMemberStateEnum;
    'userId'?: string;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "connectionStatus",
            "baseName": "connection_status",
            "type": "string",
            "format": ""
        },
        {
            "name": "friendDiscoveryKey",
            "baseName": "friend_discovery_key",
            "type": "string",
            "format": ""
        },
        {
            "name": "friendName",
            "baseName": "friend_name",
            "type": "string",
            "format": ""
        },
        {
            "name": "isActive",
            "baseName": "is_active",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "isMuted",
            "baseName": "is_muted",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "lastSeenAt",
            "baseName": "last_seen_at",
            "type": "number",
            "format": ""
        },
        {
            "name": "nickname",
            "baseName": "nickname",
            "type": "string",
            "format": ""
        },
        {
            "name": "plainProfileUrl",
            "baseName": "plain_profile_url",
            "type": "string",
            "format": ""
        },
        {
            "name": "preferredLanguages",
            "baseName": "preferred_languages",
            "type": "Array<string>",
            "format": ""
        },
        {
            "name": "profileUrl",
            "baseName": "profile_url",
            "type": "string",
            "format": ""
        },
        {
            "name": "requireAuth",
            "baseName": "require_auth",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "requireAuthForProfileImage",
            "baseName": "require_auth_for_profile_image",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "metadata",
            "baseName": "metadata",
            "type": "any",
            "format": ""
        },
        {
            "name": "isOnline",
            "baseName": "is_online",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "mutedEndAt",
            "baseName": "muted_end_at",
            "type": "number",
            "format": ""
        },
        {
            "name": "mutedDescription",
            "baseName": "muted_description",
            "type": "string",
            "format": ""
        },
        {
            "name": "restrictionInfo",
            "baseName": "restriction_info",
            "type": "SendBirdRestrictionInfo",
            "format": ""
        },
        {
            "name": "role",
            "baseName": "role",
            "type": "SendBirdMemberRoleEnum",
            "format": ""
        },
        {
            "name": "state",
            "baseName": "state",
            "type": "SendBirdMemberStateEnum",
            "format": ""
        },
        {
            "name": "userId",
            "baseName": "user_id",
            "type": "string",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return SendBirdMember.attributeTypeMap;
    }

    public constructor() {
    }
}


export type SendBirdMemberRoleEnum = "" | "none" | "operator" ;
export type SendBirdMemberStateEnum = "" | "invited" | "joined" ;

