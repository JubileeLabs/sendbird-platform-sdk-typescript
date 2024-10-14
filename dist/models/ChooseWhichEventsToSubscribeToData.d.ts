export declare class ChooseWhichEventsToSubscribeToData {
    'enabled': boolean;
    'url': string;
    'includeMembers'?: boolean;
    'enabledEvents'?: Array<string>;
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
