import { ListAllEmojisAndEmojiCategoriesResponseEmojiCategoriesInnerEmojisInner } from './ListAllEmojisAndEmojiCategoriesResponseEmojiCategoriesInnerEmojisInner';
export declare class ListAllEmojisAndEmojiCategoriesResponseEmojiCategoriesInner {
    'id'?: number;
    'name'?: string;
    'url'?: string;
    'emojis'?: Array<ListAllEmojisAndEmojiCategoriesResponseEmojiCategoriesInnerEmojisInner>;
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
