import { SendBirdChannelResponse } from './SendBirdChannelResponse';
export declare class ListMutedChannelsResponse {
    'mutedChannels'?: Array<SendBirdChannelResponse>;
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
