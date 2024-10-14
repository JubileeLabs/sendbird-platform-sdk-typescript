import { HttpFile } from '../http/http';
export declare class CreateUserData {
    'userId': string;
    'nickname': string;
    'profileUrl': string;
    'profileFile'?: HttpFile;
    'issueAccessToken'?: boolean;
    'discoveryKeys'?: Array<string>;
    'metadata'?: any;
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
