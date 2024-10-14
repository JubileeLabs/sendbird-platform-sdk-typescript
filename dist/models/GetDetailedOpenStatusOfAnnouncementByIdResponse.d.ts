import { GetDetailedOpenStatusOfAnnouncementByIdResponseOpenStatusInner } from './GetDetailedOpenStatusOfAnnouncementByIdResponseOpenStatusInner';
export declare class GetDetailedOpenStatusOfAnnouncementByIdResponse {
    'openStatus'?: Array<GetDetailedOpenStatusOfAnnouncementByIdResponseOpenStatusInner>;
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
