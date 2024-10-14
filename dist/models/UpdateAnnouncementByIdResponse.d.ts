import { UpdateAnnouncementByIdResponseMessage } from './UpdateAnnouncementByIdResponseMessage';
export declare class UpdateAnnouncementByIdResponse {
    'uniqueId'?: string;
    'announcementGroup'?: string;
    'message'?: UpdateAnnouncementByIdResponseMessage;
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
