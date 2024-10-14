import { SendBirdUser } from './SendBirdUser';
import { HttpFile } from '../http/http';
export declare class GcCreateChannelData {
    'userIds': Array<string>;
    'users'?: Array<SendBirdUser>;
    'name'?: string;
    'channelUrl'?: string;
    'coverUrl'?: string;
    'coverFile'?: HttpFile;
    'customType'?: string;
    'data'?: string;
    'isDistinct'?: boolean;
    'isPublic'?: boolean;
    'isSuper'?: boolean;
    'isEphemeral'?: boolean;
    'accessCode'?: string;
    'inviterId'?: string;
    'strict'?: boolean;
    'invitationStatus'?: any;
    'hiddenStatus'?: any;
    'operatorIds'?: Array<string>;
    'blockSdkUserChannelJoin'?: boolean;
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
