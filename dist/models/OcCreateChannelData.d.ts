import { HttpFile } from '../http/http';
export declare class OcCreateChannelData {
    'name'?: string;
    'channelUrl'?: string;
    'coverUrl'?: string;
    'coverFile'?: HttpFile;
    'customType'?: string;
    'data'?: string;
    'isEphemeral'?: boolean;
    'isDynamicPartitioned2HowDynamicPartitioningWorks'?: boolean;
    'operatorIds'?: Array<string>;
    'operators'?: Array<string>;
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
