export declare class ViewNumberOfUnreadItemsResponse {
    'nonSuperGroupChannelUnreadMessageCount'?: number;
    'superGroupChannelUnreadMessageCount'?: number;
    'groupChannelUnreadMessageCount'?: number;
    'superGroupChannelInvitationCount'?: number;
    'groupChannelInvitationCount'?: number;
    'superGroupChannelUnreadMentionCount'?: number;
    'groupChannelUnreadMentionCount'?: number;
    'nonSuperGroupChannelUnreadMentionCount'?: number;
    'nonSuperGroupChannelInvitationCount'?: number;
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
