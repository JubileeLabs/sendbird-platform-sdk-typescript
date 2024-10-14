import { BaseAPIRequestFactory } from './baseapi';
import { Configuration } from '../configuration';
import { RequestContext, ResponseContext } from '../http/http';
import { OcCreateChannelData } from '../models/OcCreateChannelData';
import { OcDeleteChannelByUrl200Response } from '../models/OcDeleteChannelByUrl200Response';
import { OcListChannelsResponse } from '../models/OcListChannelsResponse';
import { OcListOperatorsResponse } from '../models/OcListOperatorsResponse';
import { OcListParticipantsResponse } from '../models/OcListParticipantsResponse';
import { OcRegisterOperatorsData } from '../models/OcRegisterOperatorsData';
import { OcUpdateChannelByUrlData } from '../models/OcUpdateChannelByUrlData';
import { SendBirdOpenChannel } from '../models/SendBirdOpenChannel';
export declare class OpenChannelApiRequestFactory extends BaseAPIRequestFactory {
    ocCancelTheRegistrationOfOperators(channelUrl: string, operatorIds: Array<string>, apiToken?: string, deleteAll?: boolean, _options?: Configuration): Promise<RequestContext>;
    ocCreateChannel(apiToken?: string, ocCreateChannelData?: OcCreateChannelData, _options?: Configuration): Promise<RequestContext>;
    ocDeleteChannelByUrl(channelUrl: string, apiToken?: string, _options?: Configuration): Promise<RequestContext>;
    ocListChannels(apiToken?: string, token?: string, limit?: number, customTypes?: string, nameContains?: string, urlContains?: string, showFrozen?: boolean, showMetadata?: boolean, customType?: string, _options?: Configuration): Promise<RequestContext>;
    ocListOperators(channelUrl: string, apiToken?: string, token?: string, limit?: number, _options?: Configuration): Promise<RequestContext>;
    ocListParticipants(channelUrl: string, apiToken?: string, token?: string, limit?: number, _options?: Configuration): Promise<RequestContext>;
    ocRegisterOperators(channelUrl: string, apiToken?: string, ocRegisterOperatorsData?: OcRegisterOperatorsData, _options?: Configuration): Promise<RequestContext>;
    ocUpdateChannelByUrl(channelUrl: string, apiToken?: string, ocUpdateChannelByUrlData?: OcUpdateChannelByUrlData, _options?: Configuration): Promise<RequestContext>;
    ocViewChannelByUrl(channelUrl: string, apiToken?: string, _options?: Configuration): Promise<RequestContext>;
}
export declare class OpenChannelApiResponseProcessor {
    ocCancelTheRegistrationOfOperators(response: ResponseContext): Promise<void>;
    ocCreateChannel(response: ResponseContext): Promise<SendBirdOpenChannel>;
    ocDeleteChannelByUrl(response: ResponseContext): Promise<OcDeleteChannelByUrl200Response>;
    ocListChannels(response: ResponseContext): Promise<OcListChannelsResponse>;
    ocListOperators(response: ResponseContext): Promise<OcListOperatorsResponse>;
    ocListParticipants(response: ResponseContext): Promise<OcListParticipantsResponse>;
    ocRegisterOperators(response: ResponseContext): Promise<OcDeleteChannelByUrl200Response>;
    ocUpdateChannelByUrl(response: ResponseContext): Promise<SendBirdOpenChannel>;
    ocViewChannelByUrl(response: ResponseContext): Promise<SendBirdOpenChannel>;
}
