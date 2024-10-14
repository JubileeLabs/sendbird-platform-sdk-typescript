export declare class ResetPushPreferencesResponse {
    'snoozeStartTs'?: string;
    'startHour'?: number;
    'snoozeEnabled'?: boolean;
    'endMin'?: number;
    'timezone'?: string;
    'blockPushFromBots'?: boolean;
    'pushBlockedBotIds'?: Array<number>;
    'startMin'?: number;
    'snoozeEndTs'?: string;
    'doNotDisturb'?: boolean;
    'endHour'?: number;
    'enablePushForReplies'?: boolean;
    'pushSound'?: string;
    'pushTriggerOption'?: string;
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
