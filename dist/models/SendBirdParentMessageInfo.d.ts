import { SendBirdFile } from './SendBirdFile';
import { SendBirdUser } from './SendBirdUser';
export declare class SendBirdParentMessageInfo {
    'customType'?: string;
    'message'?: string;
    'type'?: string;
    'ts'?: number;
    'user'?: SendBirdUser;
    'file'?: SendBirdFile;
    'files'?: Array<SendBirdFile>;
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
