export declare class GetDetailedOpenStatusOfAnnouncementByIdResponseOpenStatusInner {
    'userId'?: string;
    'channelUrl'?: string;
    'hasOpened'?: boolean;
    'sentAt'?: number;
    'openAt'?: number;
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
