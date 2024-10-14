import { ListReportsOnMessageByIdResponseReportLogsInner } from './ListReportsOnMessageByIdResponseReportLogsInner';
export declare class ListReportsOnUserByIdResponse {
    'reportLogs'?: Array<ListReportsOnMessageByIdResponseReportLogsInner>;
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
