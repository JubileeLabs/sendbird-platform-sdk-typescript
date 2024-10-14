import { OcDeleteChannelByUrl200Response } from './OcDeleteChannelByUrl200Response';
import { SendBirdUser } from './SendBirdUser';
export declare class OcBanUserResponse {
    'startAt'?: number;
    'endAt'?: number;
    'description'?: string;
    'userId'?: string;
    'user'?: SendBirdUser;
    'nextUrl'?: string;
    'requireAuthForProfileImage'?: boolean;
    'nickname'?: string;
    'profileUrl'?: string;
    'metadata'?: OcDeleteChannelByUrl200Response;
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
