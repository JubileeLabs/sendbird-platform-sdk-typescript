export declare class CreateBotResponseBot {
    'botToken'?: string;
    'botProfileUrl'?: string;
    'botUserid'?: string;
    'botNickname'?: string;
    'botType'?: string;
    'botMetadata'?: any;
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
