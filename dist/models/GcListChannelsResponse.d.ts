import { SendBirdGroupChannel } from './SendBirdGroupChannel';
export declare class GcListChannelsResponse {
    'channels'?: Array<SendBirdGroupChannel>;
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
