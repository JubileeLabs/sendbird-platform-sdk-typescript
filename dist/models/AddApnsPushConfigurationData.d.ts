import { HttpFile } from '../http/http';
export declare class AddApnsPushConfigurationData {
    'apnsCert': HttpFile;
    'apnsCertEnvType': string;
    'apnsCertPassword': string;
    'hasUnreadCountBadge': boolean;
    'contentAvailable': boolean;
    'mutableContent': boolean;
    'pushSound': string;
    'apnsType': string;
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
