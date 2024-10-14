import { SendBirdUser } from './SendBirdUser';
export declare class SendBirdOpenChannel {
    'name'?: string;
    'customType'?: string;
    'channelUrl'?: string;
    'createdAt'?: number;
    'coverUrl'?: string;
    'creator'?: SendBirdUser;
    'data'?: string;
    'isDynamicPartitioned'?: boolean;
    'isEphemeral'?: boolean;
    'maxLengthMessage'?: number;
    'operators'?: Array<SendBirdUser>;
    'participantCount'?: number;
    'freeze'?: boolean;
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
