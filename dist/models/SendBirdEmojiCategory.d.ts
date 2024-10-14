import { SendBirdEmoji } from './SendBirdEmoji';
export declare class SendBirdEmojiCategory {
    'emojis'?: Array<SendBirdEmoji>;
    'id'?: number;
    'name'?: string;
    'url'?: string;
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
