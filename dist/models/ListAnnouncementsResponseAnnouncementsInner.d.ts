import { ScheduleAnnouncementResponseCreateChannelOptions } from './ScheduleAnnouncementResponseCreateChannelOptions';
import { ScheduleAnnouncementResponseMessage } from './ScheduleAnnouncementResponseMessage';
export declare class ListAnnouncementsResponseAnnouncementsInner {
    'uniqueId'?: string;
    'announcementGroup'?: string;
    'message'?: ScheduleAnnouncementResponseMessage;
    'enablePush'?: boolean;
    'targetAt'?: string;
    'targetUserCount'?: number;
    'targetChannelCount'?: number;
    'status'?: string;
    'scheduledAt'?: number;
    'ceaseAt'?: string;
    'resumeAt'?: string;
    'completedAt'?: number;
    'sentUserCount'?: number;
    'openCount'?: number;
    'openRate'?: number;
    'createChannel'?: boolean;
    'createChannelOptions'?: ScheduleAnnouncementResponseCreateChannelOptions;
    'endAt'?: number;
    'markAsRead'?: boolean;
    'sentChannelCount'?: number;
    'targetChannelType'?: string;
    'targetCustomType'?: string;
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
