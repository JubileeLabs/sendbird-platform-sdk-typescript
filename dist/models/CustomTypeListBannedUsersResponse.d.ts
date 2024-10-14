import { OcListBannedUsersResponseBannedListInner } from './OcListBannedUsersResponseBannedListInner';
export declare class CustomTypeListBannedUsersResponse {
    'bannedList'?: Array<OcListBannedUsersResponseBannedListInner>;
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
