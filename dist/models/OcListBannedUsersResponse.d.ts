import { OcListBannedUsersResponseBannedListInner } from './OcListBannedUsersResponseBannedListInner';
export declare class OcListBannedUsersResponse {
    'bannedList'?: Array<OcListBannedUsersResponseBannedListInner>;
    'totalBanCount'?: number;
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
