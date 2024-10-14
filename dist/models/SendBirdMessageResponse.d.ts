import { SendBirdFile } from './SendBirdFile';
import { SendBirdMessageResponseMentionedUsersInner } from './SendBirdMessageResponseMentionedUsersInner';
import { SendBirdMessageResponseUser } from './SendBirdMessageResponseUser';
import { SendBirdParentMessageInfo } from './SendBirdParentMessageInfo';
export declare class SendBirdMessageResponse {
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
    'files'?: Array<SendBirdFile>;
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
    'parentMessageInfo'?: SendBirdParentMessageInfo;
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
