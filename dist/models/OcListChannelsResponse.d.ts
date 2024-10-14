import { SendBirdOpenChannel } from './SendBirdOpenChannel';
export declare class OcListChannelsResponse {
    'channels'?: Array<SendBirdOpenChannel>;
    'next'?: string;
    'ts'?: number;
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
