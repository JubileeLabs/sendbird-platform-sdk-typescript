export declare class V3PollsPollIdDeleteRequest1 {
    'title'?: string;
    'allowUserSuggestion'?: boolean;
    'allowMultipleVotes'?: boolean;
    'closeAt'?: number;
    'allocreatedBywMultipleVotes'?: string;
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
