import { SendBirdPollOption } from './SendBirdPollOption';
export declare class SendBirdPollDetails {
    'allowMultipleVotes'?: boolean;
    'allowUserSuggestion'?: boolean;
    'closeAt'?: number;
    'createdAt'?: number;
    'createdBy'?: string;
    'isAnonymous'?: boolean;
    'options'?: Array<SendBirdPollOption>;
    'status'?: SendBirdPollDetailsStatusEnum;
    'updatedAt'?: number;
    'voterCount'?: number;
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
export declare type SendBirdPollDetailsStatusEnum = "closed" | "open" | "removed";
