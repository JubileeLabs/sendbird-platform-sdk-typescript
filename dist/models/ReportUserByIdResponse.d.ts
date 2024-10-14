import { SendBirdChannelResponse } from './SendBirdChannelResponse';
import { SendBirdMessageResponse } from './SendBirdMessageResponse';
import { SendBirdUser } from './SendBirdUser';
export declare class ReportUserByIdResponse {
    'reportType'?: string;
    'reportCategory'?: string;
    'reportingUser'?: SendBirdUser;
    'offendingUser'?: SendBirdUser;
    'reportedMessage'?: SendBirdMessageResponse;
    'channel'?: SendBirdChannelResponse;
    'reportDescription'?: string;
    'createdAt'?: number;
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
