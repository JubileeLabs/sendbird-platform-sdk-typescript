export declare class V3PollsPollIdDeleteRequest {
    'channelUrl'?: string;
    'channelType'?: string;
    'showPartialVoterList'?: boolean;
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
