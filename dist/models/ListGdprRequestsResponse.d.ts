import { ListGdprRequestsResponseRequestsInner } from './ListGdprRequestsResponseRequestsInner';
export declare class ListGdprRequestsResponse {
    'requests'?: Array<ListGdprRequestsResponseRequestsInner>;
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
