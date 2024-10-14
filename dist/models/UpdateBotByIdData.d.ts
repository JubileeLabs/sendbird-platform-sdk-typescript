export declare class UpdateBotByIdData {
    'botUserid': string;
    'botNickname': string;
    'botProfileUrl': string;
    'botCallbackUrl': string;
    'isPrivacyMode': boolean;
    'enableMarkAsRead': boolean;
    'showMember': boolean;
    'channelInvitationPreference': number;
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
