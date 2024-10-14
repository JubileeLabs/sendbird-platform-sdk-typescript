import { ListAnnouncementsResponseAnnouncementsInner } from './ListAnnouncementsResponseAnnouncementsInner';
export declare class ListAnnouncementsResponse {
    'announcements'?: Array<ListAnnouncementsResponseAnnouncementsInner>;
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
