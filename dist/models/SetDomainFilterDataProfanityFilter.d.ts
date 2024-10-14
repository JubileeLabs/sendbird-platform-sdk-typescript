import { SetDomainFilterDataProfanityFilterRegexFiltersInner } from './SetDomainFilterDataProfanityFilterRegexFiltersInner';
export declare class SetDomainFilterDataProfanityFilter {
    'keywords'?: Array<string>;
    'regexFilters'?: Array<SetDomainFilterDataProfanityFilterRegexFiltersInner>;
    'type'?: number;
    'shouldCheckGlobal'?: boolean;
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
