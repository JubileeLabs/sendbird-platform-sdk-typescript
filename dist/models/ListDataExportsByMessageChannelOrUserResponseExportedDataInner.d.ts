import { ListDataExportsByMessageChannelOrUserResponseExportedDataInnerFile } from './ListDataExportsByMessageChannelOrUserResponseExportedDataInnerFile';
export declare class ListDataExportsByMessageChannelOrUserResponseExportedDataInner {
    'requestId'?: string;
    'status'?: string;
    'format'?: string;
    'csvDelimiter'?: string;
    'timezone'?: string;
    'createdAt'?: number;
    'startTs'?: number;
    'endTs'?: number;
    'channelUrls'?: Array<string>;
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
