export declare class RetrieveAdvancedAnalyticsMetricsResponse {
    'segments'?: string;
    'date'?: string;
    'value'?: number;
    'channelType'?: string;
    'customChannelType'?: string;
    'customMessageType'?: string;
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
