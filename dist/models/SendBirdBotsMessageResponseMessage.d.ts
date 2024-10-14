import { SendBirdBotsMessageResponseMessageExtendedMessagePayload } from './SendBirdBotsMessageResponseMessageExtendedMessagePayload';
import { SendBirdBotsMessageResponseMessageMessageEvents } from './SendBirdBotsMessageResponseMessageMessageEvents';
import { SendBirdMessageResponseMentionedUsersInner } from './SendBirdMessageResponseMentionedUsersInner';
import { SendBirdMessageResponseUser } from './SendBirdMessageResponseUser';
export declare class SendBirdBotsMessageResponseMessage {
    'messageSurvivalSeconds'?: number;
    'customType'?: string;
    'mentionedUsers'?: Array<SendBirdMessageResponseMentionedUsersInner>;
    'translations'?: any;
    'updatedAt'?: number;
    'isOpMsg'?: boolean;
    'isRemoved'?: boolean;
    'user'?: SendBirdMessageResponseUser;
    'file'?: any;
    'message'?: string;
    'data'?: string;
    'messageRetentionHour'?: number;
    'silent'?: boolean;
    'type'?: string;
    'createdAt'?: number;
    'channelType'?: string;
    'mentionType'?: string;
    'channelUrl'?: string;
    'messageId'?: number;
    'messageEvents'?: SendBirdBotsMessageResponseMessageMessageEvents;
    'extendedMessagePayload'?: SendBirdBotsMessageResponseMessageExtendedMessagePayload;
    static readonly discriminator: string | undefined;
    static readonly attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
        format: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
        format: string;
    }[];
    constructor();
}
