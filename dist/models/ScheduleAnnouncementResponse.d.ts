import { ScheduleAnnouncementResponseCreateChannelOptions } from './ScheduleAnnouncementResponseCreateChannelOptions';
import { ScheduleAnnouncementResponseMessage } from './ScheduleAnnouncementResponseMessage';
export declare class ScheduleAnnouncementResponse {
    'uniqueId'?: string;
    'announcementGroup'?: string;
    'message'?: ScheduleAnnouncementResponseMessage;
    'enablePush'?: boolean;
    'targetAt'?: string;
    'targetUserCount'?: number;
    'targetChannelCount'?: number;
    'targetChannelType'?: string;
    'createChannelOptions'?: ScheduleAnnouncementResponseCreateChannelOptions;
    'status'?: string;
    'scheduledAt'?: number;
    'ceaseAt'?: string;
    'resumeAt'?: string;
    'completedAt'?: number;
    'sentUserCount'?: number;
    'sentChannelCount'?: number;
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
