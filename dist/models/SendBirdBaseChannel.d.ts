import { SendBirdUser } from './SendBirdUser';
export declare class SendBirdBaseChannel {
    'coverUrl'?: string;
    'createdAt'?: number;
    'creator'?: SendBirdUser;
    'customType'?: string;
    'data'?: string;
    'isEphemeral'?: boolean;
    'name'?: string;
    'url'?: string;
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
