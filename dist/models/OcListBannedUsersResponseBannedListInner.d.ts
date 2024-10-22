import { SendBirdUser } from './SendBirdUser';
export declare class OcListBannedUsersResponseBannedListInner {
    'user'?: SendBirdUser;
    'startAt'?: number;
    'endAt'?: number;
    'description'?: string;
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