export declare class ReportMessageByIdData {
    'channelType'?: string;
    'channelUrl'?: string;
    'messageId'?: string;
    'reportCategory': string;
    'offendingUserId': string;
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
