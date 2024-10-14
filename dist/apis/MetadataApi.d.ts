import { BaseAPIRequestFactory } from './baseapi';
import { Configuration } from '../configuration';
import { RequestContext, ResponseContext } from '../http/http';
import { CreateChannelMetacounterData } from '../models/CreateChannelMetacounterData';
import { CreateChannelMetadataData } from '../models/CreateChannelMetadataData';
import { CreateChannelMetadataResponse } from '../models/CreateChannelMetadataResponse';
import { CreateUserMetadataData } from '../models/CreateUserMetadataData';
import { CreateUserMetadataResponse } from '../models/CreateUserMetadataResponse';
import { UpdateChannelMetacounterData } from '../models/UpdateChannelMetacounterData';
import { UpdateChannelMetadataData } from '../models/UpdateChannelMetadataData';
import { UpdateUserMetadataData } from '../models/UpdateUserMetadataData';
import { UpdateUserMetadataResponse } from '../models/UpdateUserMetadataResponse';
import { ViewUserMetadataResponse } from '../models/ViewUserMetadataResponse';
export declare class MetadataApiRequestFactory extends BaseAPIRequestFactory {
    createChannelMetacounter(channelType: string, channelUrl: string, apiToken?: string, createChannelMetacounterData?: CreateChannelMetacounterData, _options?: Configuration): Promise<RequestContext>;
    createChannelMetadata(channelType: string, channelUrl: string, apiToken?: string, createChannelMetadataData?: CreateChannelMetadataData, _options?: Configuration): Promise<RequestContext>;
    createUserMetadata(userId: string, apiToken?: string, createUserMetadataData?: CreateUserMetadataData, _options?: Configuration): Promise<RequestContext>;
    deleteChannelMetacounter(channelType: string, channelUrl: string, apiToken?: string, _options?: Configuration): Promise<RequestContext>;
    deleteChannelMetacounterByKey(channelType: string, channelUrl: string, key: string, apiToken?: string, _options?: Configuration): Promise<RequestContext>;
    deleteChannelMetadata(channelType: string, channelUrl: string, apiToken?: string, key?: string, _options?: Configuration): Promise<RequestContext>;
    deleteChannelMetadataByKey(channelType: string, channelUrl: string, key: string, apiToken?: string, _options?: Configuration): Promise<RequestContext>;
    deleteUserMetadata(userId: string, apiToken?: string, key?: string, _options?: Configuration): Promise<RequestContext>;
    deleteUserMetadataByKey(userId: string, key: string, apiToken?: string, _options?: Configuration): Promise<RequestContext>;
    updateChannelMetacounter(channelType: string, channelUrl: string, apiToken?: string, updateChannelMetacounterData?: UpdateChannelMetacounterData, _options?: Configuration): Promise<RequestContext>;
    updateChannelMetacounterByKey(channelType: string, channelUrl: string, key: string, apiToken?: string, body?: any, _options?: Configuration): Promise<RequestContext>;
    updateChannelMetadata(channelType: string, channelUrl: string, apiToken?: string, updateChannelMetadataData?: UpdateChannelMetadataData, _options?: Configuration): Promise<RequestContext>;
    updateChannelMetadataByKey(channelType: string, channelUrl: string, key: string, apiToken?: string, body?: any, _options?: Configuration): Promise<RequestContext>;
    updateUserMetadata(userId: string, apiToken?: string, updateUserMetadataData?: UpdateUserMetadataData, _options?: Configuration): Promise<RequestContext>;
    updateUserMetadataByKey(userId: string, key: string, apiToken?: string, body?: any, _options?: Configuration): Promise<RequestContext>;
    viewChannelMetacounter(channelType: string, channelUrl: string, apiToken?: string, key?: string, keys?: Array<string>, _options?: Configuration): Promise<RequestContext>;
    viewChannelMetacounterByKey(channelType: string, channelUrl: string, key: string, apiToken?: string, _options?: Configuration): Promise<RequestContext>;
    viewChannelMetadata(channelType: string, channelUrl: string, apiToken?: string, key?: string, keys?: Array<string>, _options?: Configuration): Promise<RequestContext>;
    viewChannelMetadataByKey(channelType: string, channelUrl: string, key: string, apiToken?: string, _options?: Configuration): Promise<RequestContext>;
    viewUserMetadata(userId: string, apiToken?: string, key?: string, keys?: Array<string>, _options?: Configuration): Promise<RequestContext>;
    viewUserMetadataByKey(userId: string, key: string, apiToken?: string, _options?: Configuration): Promise<RequestContext>;
}
export declare class MetadataApiResponseProcessor {
    createChannelMetacounter(response: ResponseContext): Promise<any>;
    createChannelMetadata(response: ResponseContext): Promise<CreateChannelMetadataResponse>;
    createUserMetadata(response: ResponseContext): Promise<CreateUserMetadataResponse>;
    deleteChannelMetacounter(response: ResponseContext): Promise<void>;
    deleteChannelMetacounterByKey(response: ResponseContext): Promise<void>;
    deleteChannelMetadata(response: ResponseContext): Promise<void>;
    deleteChannelMetadataByKey(response: ResponseContext): Promise<void>;
    deleteUserMetadata(response: ResponseContext): Promise<void>;
    deleteUserMetadataByKey(response: ResponseContext): Promise<void>;
    updateChannelMetacounter(response: ResponseContext): Promise<any>;
    updateChannelMetacounterByKey(response: ResponseContext): Promise<{
        [key: string]: string;
    }>;
    updateChannelMetadata(response: ResponseContext): Promise<{
        [key: string]: string;
    }>;
    updateChannelMetadataByKey(response: ResponseContext): Promise<{
        [key: string]: string;
    }>;
    updateUserMetadata(response: ResponseContext): Promise<UpdateUserMetadataResponse>;
    updateUserMetadataByKey(response: ResponseContext): Promise<{
        [key: string]: string;
    }>;
    viewChannelMetacounter(response: ResponseContext): Promise<{
        [key: string]: string;
    }>;
    viewChannelMetacounterByKey(response: ResponseContext): Promise<any>;
    viewChannelMetadata(response: ResponseContext): Promise<{
        [key: string]: string;
    }>;
    viewChannelMetadataByKey(response: ResponseContext): Promise<{
        [key: string]: string;
    }>;
    viewUserMetadata(response: ResponseContext): Promise<ViewUserMetadataResponse>;
    viewUserMetadataByKey(response: ResponseContext): Promise<{
        [key: string]: string;
    }>;
}
