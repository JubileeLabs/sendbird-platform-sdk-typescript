import { AddFcmPushConfigurationResponsePushConfigurationsInner } from './AddFcmPushConfigurationResponsePushConfigurationsInner';
export declare class AddFcmPushConfigurationResponse {
    'pushConfigurations'?: Array<AddFcmPushConfigurationResponsePushConfigurationsInner>;
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
