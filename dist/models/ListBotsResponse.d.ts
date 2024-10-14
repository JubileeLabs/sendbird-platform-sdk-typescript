import { ListBotsResponseBotsInner } from './ListBotsResponseBotsInner';
export declare class ListBotsResponse {
    'bots'?: Array<ListBotsResponseBotsInner>;
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
