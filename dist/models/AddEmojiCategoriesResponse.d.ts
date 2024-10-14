import { AddEmojiCategoriesResponseEmojiCategoriesInner } from './AddEmojiCategoriesResponseEmojiCategoriesInner';
export declare class AddEmojiCategoriesResponse {
    'emojiCategories'?: Array<AddEmojiCategoriesResponseEmojiCategoriesInner>;
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
