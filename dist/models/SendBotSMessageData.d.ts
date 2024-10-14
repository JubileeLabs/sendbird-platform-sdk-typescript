import { SendBotSMessageDataExtendedMessagePayload } from './SendBotSMessageDataExtendedMessagePayload';
export declare class SendBotSMessageData {
    'message': string;
    'channelUrl': string;
    'customType'?: string;
    'data'?: string;
    'sendPush'?: boolean;
    'mentioned'?: Array<string>;
    'markAsRead'?: boolean;
    'dedupId'?: string;
    'createdAt'?: number;
    'extendedMessagePayload'?: SendBotSMessageDataExtendedMessagePayload;
    'targetMessageId'?: number;
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
