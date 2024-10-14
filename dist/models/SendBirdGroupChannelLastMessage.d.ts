import { SendBirdMessageResponseMentionedUsersInner } from './SendBirdMessageResponseMentionedUsersInner';
import { SendBirdMessageResponseUser } from './SendBirdMessageResponseUser';
export declare class SendBirdGroupChannelLastMessage {
    'requireAuth'?: boolean;
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
    'reqId'?: string;
    'mentionType'?: string;
    'channelUrl'?: string;
    'messageId'?: number;
    'size'?: number;
    'sortedMetaarray'?: Array<any>;
    'threadInfo'?: any;
    'parentMessageId'?: number;
    'parentMessageInfo'?: any;
    'isReplyToChannel'?: boolean;
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
