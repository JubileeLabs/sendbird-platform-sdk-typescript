import { SendBirdRestrictionInfo } from './SendBirdRestrictionInfo';
export declare class SendBirdMember {
    'connectionStatus'?: string;
    'friendDiscoveryKey'?: string;
    'friendName'?: string;
    'isActive'?: boolean;
    'isMuted'?: boolean;
    'lastSeenAt'?: number;
    'nickname'?: string;
    'plainProfileUrl'?: string;
    'preferredLanguages'?: Array<string>;
    'profileUrl'?: string;
    'requireAuth'?: boolean;
    'requireAuthForProfileImage'?: boolean;
    'metadata'?: any;
    'isOnline'?: boolean;
    'mutedEndAt'?: number;
    'mutedDescription'?: string;
    'restrictionInfo'?: SendBirdRestrictionInfo;
    'role'?: SendBirdMemberRoleEnum;
    'state'?: SendBirdMemberStateEnum;
    'userId'?: string;
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
export declare type SendBirdMemberRoleEnum = "" | "none" | "operator";
export declare type SendBirdMemberStateEnum = "" | "invited" | "joined";
