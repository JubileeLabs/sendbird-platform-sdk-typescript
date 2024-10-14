import { SendBirdScheduledMessage } from './SendBirdScheduledMessage';
export declare class V3ScheduledMessagesGet200Response {
    'scheduledMessages'?: Array<SendBirdScheduledMessage>;
    'next'?: string;
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
