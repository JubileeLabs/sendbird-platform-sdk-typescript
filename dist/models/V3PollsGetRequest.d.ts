export declare class V3PollsGetRequest {
    'title'?: string;
    'options'?: Array<string>;
    'allowUserSuggestion'?: boolean;
    'allowMultipleVotes'?: boolean;
    'closeAt'?: number;
    'createdBy'?: string;
    'data'?: any;
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
