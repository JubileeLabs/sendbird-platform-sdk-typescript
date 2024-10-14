import { CreateBotResponseBot } from './CreateBotResponseBot';
export declare class ListBotsResponseBotsInner {
    'bot'?: CreateBotResponseBot;
    'botCallbackUrl'?: string;
    'enableMarkAsRead'?: boolean;
    'isPrivacyMode'?: boolean;
    'showMember'?: boolean;
    'channelInvitationPreference'?: number;
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
