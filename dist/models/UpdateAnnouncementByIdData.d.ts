export declare class UpdateAnnouncementByIdData {
    'uniqueId': string;
    'action'?: string;
    'announcementGroup'?: string;
    'createChannel'?: boolean;
    'createChannelOptionsName'?: string;
    'createChannelOptionsCoverUrl'?: string;
    'createChannelOptionsCustomType'?: string;
    'createChannelOptionsData'?: string;
    'createChannelOptionsDistinct'?: string;
    'messageUserId'?: string;
    'messageContent'?: string;
    'messageData'?: string;
    'enablePush'?: boolean;
    'scheduledAt'?: number;
    'endAt'?: number;
    'ceaseAt'?: string;
    'resumeAt'?: string;
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
