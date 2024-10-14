import { V3PollsPollIdOptionsOptionIdVotersGet200ResponseVotersInner } from './V3PollsPollIdOptionsOptionIdVotersGet200ResponseVotersInner';
export declare class V3PollsPollIdOptionsOptionIdVotersGet200Response {
    'voteCount'?: number;
    'voters'?: Array<V3PollsPollIdOptionsOptionIdVotersGet200ResponseVotersInner>;
    'next'?: string;
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
