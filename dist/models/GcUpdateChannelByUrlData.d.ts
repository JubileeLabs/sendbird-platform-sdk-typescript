import { HttpFile } from '../http/http';
export declare class GcUpdateChannelByUrlData {
    'channelUrl': string;
    'name'?: string;
    'coverUrl'?: string;
    'coverFile'?: HttpFile;
    'customType'?: string;
    'data'?: string;
    'isDistinct'?: boolean;
    'isPublic'?: boolean;
    'accessCode'?: string;
    'operatorIds'?: Array<string>;
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
