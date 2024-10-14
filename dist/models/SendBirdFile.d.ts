import { SendBirdThumbnailSBObject } from './SendBirdThumbnailSBObject';
export declare class SendBirdFile {
    'url'?: string;
    'fileName'?: string;
    'fileSize'?: number;
    'fileType'?: string;
    'thumbnails'?: Array<SendBirdThumbnailSBObject>;
    'requireAuth'?: boolean;
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
