import { ListDataExportsByMessageChannelOrUserResponseExportedDataInner } from './ListDataExportsByMessageChannelOrUserResponseExportedDataInner';
export declare class ListDataExportsByMessageChannelOrUserResponse {
    'exportedData'?: Array<ListDataExportsByMessageChannelOrUserResponseExportedDataInner>;
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
