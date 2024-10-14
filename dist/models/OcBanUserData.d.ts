export declare class OcBanUserData {
    'channelUrl': string;
    'userId': string;
    'agentId': string;
    'seconds': number;
    'description': string;
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
