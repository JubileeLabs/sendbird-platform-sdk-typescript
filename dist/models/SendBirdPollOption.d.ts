import { SendBirdUser } from './SendBirdUser';
export declare class SendBirdPollOption {
    'createdAt'?: number;
    'createdBy'?: string;
    'id'?: number;
    'partialVoters'?: Array<SendBirdUser>;
    'pollId'?: number;
    'text'?: string;
    'updatedAt'?: number;
    'voteCount'?: number;
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
