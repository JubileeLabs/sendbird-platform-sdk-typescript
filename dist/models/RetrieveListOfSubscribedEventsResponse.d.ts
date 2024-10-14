import { RetrieveListOfSubscribedEventsResponseWebhook } from './RetrieveListOfSubscribedEventsResponseWebhook';
export declare class RetrieveListOfSubscribedEventsResponse {
    'webhook'?: RetrieveListOfSubscribedEventsResponseWebhook;
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
