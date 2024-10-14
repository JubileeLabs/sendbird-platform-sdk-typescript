import { SetDomainFilterDataDomainFilter } from './SetDomainFilterDataDomainFilter';
import { SetDomainFilterDataImageModeration } from './SetDomainFilterDataImageModeration';
import { SetDomainFilterDataProfanityFilter } from './SetDomainFilterDataProfanityFilter';
import { SetDomainFilterDataProfanityTriggeredModeration } from './SetDomainFilterDataProfanityTriggeredModeration';
export declare class SetDomainFilterData {
    'domainFilter'?: SetDomainFilterDataDomainFilter;
    'profanityFilter'?: SetDomainFilterDataProfanityFilter;
    'profanityTriggeredModeration'?: SetDomainFilterDataProfanityTriggeredModeration;
    'imageModeration'?: SetDomainFilterDataImageModeration;
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
