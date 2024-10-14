export declare class RegisterGdprRequestResponse {
    'requestId'?: string;
    'action'?: string;
    'status'?: string;
    'userId'?: string;
    'userIds'?: Array<string>;
    'channelDeleteOption'?: string;
    'createdAt'?: number;
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
