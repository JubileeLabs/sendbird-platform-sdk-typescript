import { OcDeleteChannelByUrl200Response } from './OcDeleteChannelByUrl200Response';
export declare class SendBirdMessageResponseMentionedUsersInner {
    'userId'?: string;
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
