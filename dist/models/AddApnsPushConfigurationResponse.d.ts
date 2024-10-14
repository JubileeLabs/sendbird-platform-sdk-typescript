import { AddApnsPushConfigurationResponsePushConfigurationsInner } from './AddApnsPushConfigurationResponsePushConfigurationsInner';
export declare class AddApnsPushConfigurationResponse {
    'pushConfigurations'?: Array<AddApnsPushConfigurationResponsePushConfigurationsInner>;
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
