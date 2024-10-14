export declare class AddReactionToAMessageResponse {
    'userId'?: string;
    'operation'?: string;
    'success'?: boolean;
    'reaction'?: string;
    'updatedAt'?: number;
    'msgId'?: number;
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
