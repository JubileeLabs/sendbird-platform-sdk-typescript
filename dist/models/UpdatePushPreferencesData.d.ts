export declare class UpdatePushPreferencesData {
    'pushTriggerOption': string;
    'doNotDisturb': boolean;
    'startHour': number;
    'startMin': number;
    'endHour': number;
    'endMin': number;
    'snoozeEnabled': boolean;
    'snoozeStartTs': number;
    'snoozeEndTs': number;
    'blockPushFromBots'?: boolean;
    'pushBlockedBotIds'?: Array<string>;
    'timezone': string;
    'pushSound': string;
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
