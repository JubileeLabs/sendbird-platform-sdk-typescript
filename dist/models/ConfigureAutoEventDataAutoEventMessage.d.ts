export declare class ConfigureAutoEventDataAutoEventMessage {
    'userLeave'?: any;
    'userJoin'?: any;
    'channelCreate'?: any;
    'channelChange'?: any;
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
