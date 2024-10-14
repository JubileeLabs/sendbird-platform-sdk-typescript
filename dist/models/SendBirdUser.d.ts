export declare class SendBirdUser {
    'requireAuthForProfileImage'?: boolean;
    'isOnline'?: boolean;
    'userId'?: string;
    'accessToken'?: string;
    'hasEverLoggedIn'?: boolean;
    'isActive'?: boolean;
    'lastSeenAt'?: number;
    'nickname'?: string;
    'discoveryKeys'?: Array<string>;
    'sessionTokens'?: Array<any>;
    'preferredLanguages'?: Array<string>;
    'profileUrl'?: string;
    'createdAt'?: number;
    'phoneNumber'?: string;
    'local'?: string;
    'locale'?: string;
    'isHideMeFromFriends'?: boolean;
    'isShadowBlocked'?: boolean;
    'isCreated'?: boolean;
    'metadata'?: any;
    'description'?: string;
    'endAt'?: number;
    'startAt'?: number;
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
