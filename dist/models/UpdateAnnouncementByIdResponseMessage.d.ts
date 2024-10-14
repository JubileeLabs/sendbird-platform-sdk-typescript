export declare class UpdateAnnouncementByIdResponseMessage {
    'type'?: string;
    'customType'?: string;
    'userId'?: string;
    'content'?: string;
    'data'?: string;
    'enablePush'?: boolean;
    'targetAt'?: string;
    'targetUserCount'?: number;
    'targetChannelCount'?: number;
    'status'?: string;
    'scheduledAt'?: number;
    'completedAt'?: number;
    'sentUserCount'?: number;
    'openCount'?: number;
    'openRate'?: number;
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
