import { ChooseWhichEventsToSubscribeToResponseWebhook } from './ChooseWhichEventsToSubscribeToResponseWebhook';
export declare class ChooseWhichEventsToSubscribeToResponse {
    'webhook'?: ChooseWhichEventsToSubscribeToResponseWebhook;
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
