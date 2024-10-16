import { SBObject } from './SBObject';
import { SendBirdAppleCriticalAlertOptions } from './SendBirdAppleCriticalAlertOptions';
import { SendBirdMessageMetaArray } from './SendBirdMessageMetaArray';
import { SendBirdMessageResponse } from './SendBirdMessageResponse';
import { SendBirdOGMetaData } from './SendBirdOGMetaData';
import { SendBirdReaction } from './SendBirdReaction';
import { SendBirdThreadInfo } from './SendBirdThreadInfo';
import { SendBirdUser } from './SendBirdUser';
export declare class SendBirdAdminMessage {
    'appleCriticalAlertOptions'?: SendBirdAppleCriticalAlertOptions;
    'channelType'?: string;
    'channelUrl'?: string;
    'createdAt'?: number;
    'customType'?: string;
    'data'?: string;
    'isReplyToChannel'?: boolean;
    'mentionType'?: string;
    'mentionedUsers'?: Array<SendBirdUser>;
    'message'?: string;
    'messageId'?: number;
    'messageType'?: SendBirdAdminMessageMessageTypeEnum;
    'metaArray'?: SBObject;
    'metaArrays'?: Array<SendBirdMessageMetaArray>;
    'ogMetaData'?: SendBirdOGMetaData;
    'parentMessage'?: SendBirdMessageResponse;
    'parentMessageId'?: number;
    'parentMessageText'?: string;
    'reactions'?: Array<SendBirdReaction>;
    'sendingStatus'?: SendBirdAdminMessageSendingStatusEnum;
    'silent'?: boolean;
    'threadInfo'?: SendBirdThreadInfo;
    'translations'?: SBObject;
    'updatedAt'?: number;
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
export declare type SendBirdAdminMessageMessageTypeEnum = "MESG" | "ADMM" | "FILE";
export declare type SendBirdAdminMessageSendingStatusEnum = "canceled" | "failed" | "none" | "pending" | "succeeded";
