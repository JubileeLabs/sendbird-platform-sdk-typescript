import { SendBirdUser } from './SendBirdUser';
export declare class OcViewBanByIdResponse {
    'user'?: SendBirdUser;
    'description'?: string;
    'endAt'?: number;
    'startAt'?: number;
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
