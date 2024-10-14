import { SendBirdGroupChannel } from './SendBirdGroupChannel';
export declare class SendBirdGroupChannelCollection {
    'channelList'?: Array<SendBirdGroupChannel>;
    'hasMore'?: boolean;
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
