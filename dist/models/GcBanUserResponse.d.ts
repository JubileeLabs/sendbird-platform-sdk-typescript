import { OcDeleteChannelByUrl200Response } from './OcDeleteChannelByUrl200Response';
import { SendBirdUser } from './SendBirdUser';
export declare class GcBanUserResponse {
    'user'?: SendBirdUser;
    'startAt'?: number;
    'endAt'?: number;
    'description'?: string;
    'metadata'?: OcDeleteChannelByUrl200Response;
    'nextUrl'?: string;
    'nickname'?: string;
    'profileUrl'?: string;
    'requireAuthForProfileImage'?: boolean;
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
