export declare class GetDetailedOpenRateOfAnnouncementGroupResponse {
    'uniqueId'?: string;
    'announcementGroup'?: string;
    'openCounts'?: Array<number>;
    'openRates'?: Array<number>;
    'cumulativeOpenCounts'?: Array<number>;
    'cumulativeOpenRates'?: Array<number>;
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
