export declare class RemoveReactionFromAMessageResponse {
    'reaction'?: string;
    'userId'?: number;
    'success'?: boolean;
    'msgId'?: number;
    'updatedAt'?: number;
    'operation'?: string;
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
