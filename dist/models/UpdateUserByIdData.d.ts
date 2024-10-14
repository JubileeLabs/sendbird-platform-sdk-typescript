import { HttpFile } from '../http/http';
export declare class UpdateUserByIdData {
    'userId': string;
    'nickname'?: string;
    'profileUrl'?: string;
    'profileFile'?: HttpFile;
    'issueAccessToken'?: boolean;
    'issueSessionToken'?: boolean;
    'sessionTokenExpiresAt'?: number;
    'isActive'?: boolean;
    'lastSeenAt'?: number;
    'discoveryKeys'?: Array<string>;
    'preferredLanguages'?: Array<string>;
    'leaveAllWhenDeactivated'?: boolean;
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
