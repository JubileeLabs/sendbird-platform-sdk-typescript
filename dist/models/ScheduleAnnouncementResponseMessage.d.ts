export declare class ScheduleAnnouncementResponseMessage {
    'type'?: string;
    'customType'?: string;
    'userId'?: string;
    'content'?: string;
    'data'?: string;
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
