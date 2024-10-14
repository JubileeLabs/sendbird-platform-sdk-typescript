import { SendBirdOGImage } from './SendBirdOGImage';
export declare class ListMessagesResponseMessagesInnerOgTag {
    'ogurl'?: string;
    'ogtitle'?: string;
    'ogdescription'?: string;
    'ogimage'?: SendBirdOGImage;
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
