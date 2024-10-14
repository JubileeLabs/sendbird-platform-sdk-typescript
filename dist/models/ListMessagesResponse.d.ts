import { ListMessagesResponseMessagesInner } from './ListMessagesResponseMessagesInner';
export declare class ListMessagesResponse {
    'messages'?: Array<ListMessagesResponseMessagesInner>;
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
