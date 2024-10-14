export declare class GetStatisticsDailyResponseStatisticsInner {
    'dateRange'?: string;
    'canceledAnnouncementCount'?: number;
    'stoppedAnnouncementCount'?: number;
    'completedAnnouncementCount'?: number;
    'totalAnnouncementCount'?: number;
    'targetChannelCount'?: number;
    'targetUserCount'?: number;
    'sentChannelCount'?: number;
    'sentUserCount'?: number;
    'openRate'?: number;
    'openCount'?: number;
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
