export declare class SendBirdSender {
    'connectionStatus'?: string;
    'friendDiscoveryKey'?: string;
    'friendName'?: string;
    'isActive'?: boolean;
    'isBlockedByMe'?: boolean;
    'lastSeenAt'?: number;
    'metadata'?: any;
    'nickname'?: string;
    'plainProfileUrl'?: string;
    'preferredLanguages'?: Array<string>;
    'profileUrl'?: string;
    'requireAuth'?: boolean;
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
