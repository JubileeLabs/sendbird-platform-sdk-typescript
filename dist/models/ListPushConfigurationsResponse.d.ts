import { ListPushConfigurationsResponsePushConfigurationsInner } from './ListPushConfigurationsResponsePushConfigurationsInner';
export declare class ListPushConfigurationsResponse {
    'pushConfigurations'?: Array<ListPushConfigurationsResponsePushConfigurationsInner>;
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
