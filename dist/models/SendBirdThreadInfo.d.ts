import { SendBirdUser } from './SendBirdUser';
export declare class SendBirdThreadInfo {
    'lastRepliedAt'?: number;
    'mostRepliedUsers'?: Array<SendBirdUser>;
    'replyCount'?: number;
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
