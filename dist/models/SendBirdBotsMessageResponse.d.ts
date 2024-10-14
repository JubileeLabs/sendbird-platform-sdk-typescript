import { SendBirdBotsMessageResponseMessage } from './SendBirdBotsMessageResponseMessage';
export declare class SendBirdBotsMessageResponse {
    'message'?: SendBirdBotsMessageResponseMessage;
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
