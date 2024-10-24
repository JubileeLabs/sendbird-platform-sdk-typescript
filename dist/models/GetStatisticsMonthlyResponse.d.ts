import { GetStatisticsDailyResponseStatisticsInner } from './GetStatisticsDailyResponseStatisticsInner';
export declare class GetStatisticsMonthlyResponse {
    'statistics'?: Array<GetStatisticsDailyResponseStatisticsInner>;
    'week'?: number;
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
