import { ScheduleAnnouncementDataMessage } from './ScheduleAnnouncementDataMessage';
export declare class ScheduleAnnouncementData {
    'message': ScheduleAnnouncementDataMessage;
    'messageType'?: string;
    'userId'?: string;
    'content'?: string;
    'targetAt': string;
    'targetList': Array<string>;
    'targetChannelType': string;
    'uniqueId'?: string;
    'messageCustomType'?: string;
    'messageData'?: string;
    'createChannel'?: boolean;
    'announcementGroup'?: string;
    'createChannelOptions'?: string;
    'createChannelOptionsName'?: string;
    'createChannelOptionsCoverUrl'?: string;
    'createChannelOptionsCustomType'?: string;
    'createChannelOptionsData'?: string;
    'createChannelOptionsDistinct'?: string;
    'scheduledAt'?: number;
    'ceaseAt'?: string;
    'resumeAt'?: string;
    'endAt'?: number;
    'enablePush'?: boolean;
    'assignSenderAsChannelInviter'?: boolean;
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
