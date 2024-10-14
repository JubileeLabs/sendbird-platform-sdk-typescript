import { ConfigureAutoEventDataAutoEventMessage } from './ConfigureAutoEventDataAutoEventMessage';
export declare class SendBirdAutoEventMessageSettings {
    'autoEventMessage'?: ConfigureAutoEventDataAutoEventMessage;
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
