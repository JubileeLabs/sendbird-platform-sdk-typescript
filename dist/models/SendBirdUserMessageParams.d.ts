import { SendBirdAppleCriticalAlertOptions } from './SendBirdAppleCriticalAlertOptions';
import { SendBirdMessageMetaArray } from './SendBirdMessageMetaArray';
import { SendBirdUser } from './SendBirdUser';
export declare class SendBirdUserMessageParams {
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
export declare type SendBirdUserMessageParamsMentionTypeEnum = "channel" | "users";
export declare type SendBirdUserMessageParamsPushNotificationDeliveryOptionEnum = "default" | "suppress";
