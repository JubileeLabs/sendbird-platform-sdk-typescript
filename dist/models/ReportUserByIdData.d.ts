export declare class ReportUserByIdData {
    'offendingUserId': string;
    'channelType'?: string;
    'channelUrl'?: string;
    'reportCategory': string;
    'reportingUserId'?: string;
    'reportDescription'?: string;
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
