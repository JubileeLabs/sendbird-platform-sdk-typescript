import { SendBirdChannelResponse } from './SendBirdChannelResponse';
export declare class ListBannedChannelsResponseBannedChannelsInner {
    'startAt'?: number;
    'description'?: string;
    'channel'?: SendBirdChannelResponse;
    'endAt'?: number;
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
