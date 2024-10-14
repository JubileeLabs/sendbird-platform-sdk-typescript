import { SendBirdChannelResponse } from './SendBirdChannelResponse';
import { SendBirdMessageResponse } from './SendBirdMessageResponse';
import { SendBirdUser } from './SendBirdUser';
export declare class ListReportsResponseReportLogsInner {
    'reportingUser'?: SendBirdUser;
    'reportType'?: string;
    'reportCategory'?: string;
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
