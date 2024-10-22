import { SendBirdUser } from './SendBirdUser';
export declare class ListRegistrationOrDeviceTokensResponse {
    'token'?: Array<string>;
    'tokens'?: Array<string>;
    'type'?: string;
    'user'?: SendBirdUser;
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