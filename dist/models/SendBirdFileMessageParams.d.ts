import { Blob } from './Blob';
import { SendBirdAppleCriticalAlertOptions } from './SendBirdAppleCriticalAlertOptions';
import { SendBirdMessageMetaArray } from './SendBirdMessageMetaArray';
import { SendBirdThumbnailSize } from './SendBirdThumbnailSize';
import { SendBirdUser } from './SendBirdUser';
export declare class SendBirdFileMessageParams {
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
export declare type SendBirdFileMessageParamsMentionTypeEnum = "channel" | "users";
export declare type SendBirdFileMessageParamsPushNotificationDeliveryOptionEnum = "default" | "suppress";
