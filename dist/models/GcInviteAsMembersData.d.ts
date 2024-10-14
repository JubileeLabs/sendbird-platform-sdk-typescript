export declare class GcInviteAsMembersData {
    'channelUrl': string;
    'userIds': Array<string>;
    'users'?: Array<string>;
    'invitationStatus'?: any;
    'hiddenStatus'?: any;
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
