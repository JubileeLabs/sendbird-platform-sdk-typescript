export declare class ListPushConfigurationsResponsePushConfigurationsInner {
    'id'?: string;
    'pushType'?: string;
    'createdAt'?: number;
    'apiKey'?: string;
    'senderId'?: string;
    'pushSound'?: string;
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
