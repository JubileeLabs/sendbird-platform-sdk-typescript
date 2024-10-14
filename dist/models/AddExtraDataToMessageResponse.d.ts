import { ListMessagesResponseMessagesInnerSortedMetaarrayInner } from './ListMessagesResponseMessagesInnerSortedMetaarrayInner';
export declare class AddExtraDataToMessageResponse {
    'sortedMetaarray'?: Array<ListMessagesResponseMessagesInnerSortedMetaarrayInner>;
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
