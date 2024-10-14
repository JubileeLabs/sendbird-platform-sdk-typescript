export declare class MuteUsersInChannelsWithCustomChannelTypeData {
    'userIds': Array<string>;
    'seconds'?: number;
    'description'?: string;
    'onDemandUpsert'?: boolean;
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
