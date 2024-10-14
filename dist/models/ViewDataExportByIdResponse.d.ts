import { ListDataExportsByMessageChannelOrUserResponseExportedDataInnerFile } from './ListDataExportsByMessageChannelOrUserResponseExportedDataInnerFile';
export declare class ViewDataExportByIdResponse {
    'requestId'?: string;
    'dataType'?: string;
    'status'?: string;
    'format'?: string;
    'csvDelimiter'?: string;
    'timezone'?: string;
    'createdAt'?: number;
    'startTs'?: number;
    'endTs'?: number;
    'channelUrls'?: Array<string>;
    'channelCustomTypes'?: Array<string>;
    'senderIds'?: Array<string>;
    'file'?: ListDataExportsByMessageChannelOrUserResponseExportedDataInnerFile;
    'userIds'?: Array<string>;
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
