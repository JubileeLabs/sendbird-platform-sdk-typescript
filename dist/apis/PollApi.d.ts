import { BaseAPIRequestFactory } from './baseapi';
import { Configuration } from '../configuration';
import { RequestContext, ResponseContext } from '../http/http';
import { SendBirdPoll } from '../models/SendBirdPoll';
import { SendBirdPollOption } from '../models/SendBirdPollOption';
import { V3PollsGetRequest } from '../models/V3PollsGetRequest';
import { V3PollsPollIdDeleteRequest } from '../models/V3PollsPollIdDeleteRequest';
import { V3PollsPollIdDeleteRequest1 } from '../models/V3PollsPollIdDeleteRequest1';
import { V3PollsPollIdOptionsOptionIdDeleteRequest } from '../models/V3PollsPollIdOptionsOptionIdDeleteRequest';
import { V3PollsPollIdOptionsOptionIdVotersGet200Response } from '../models/V3PollsPollIdOptionsOptionIdVotersGet200Response';
import { V3PollsPollIdOptionsOptionIdVotersGetRequest } from '../models/V3PollsPollIdOptionsOptionIdVotersGetRequest';
import { V3PollsPollIdVotePutRequest } from '../models/V3PollsPollIdVotePutRequest';
export declare class PollApiRequestFactory extends BaseAPIRequestFactory {
    v3PollsGet(apiToken?: string, channelUrl?: string, channelType?: string, token?: string, limit?: number, _options?: Configuration): Promise<RequestContext>;
    v3PollsPollIdClosePut(pollId: number, apiToken?: string, _options?: Configuration): Promise<RequestContext>;
    v3PollsPollIdDelete(pollId: number, apiToken?: string, _options?: Configuration): Promise<RequestContext>;
    v3PollsPollIdGet(pollId: number, apiToken?: string, v3PollsPollIdDeleteRequest?: V3PollsPollIdDeleteRequest, _options?: Configuration): Promise<RequestContext>;
    v3PollsPollIdOptionsOptionIdDelete(pollId: number, optionId: number, apiToken?: string, _options?: Configuration): Promise<RequestContext>;
    v3PollsPollIdOptionsOptionIdGet(pollId: number, optionId: number, apiToken?: string, _options?: Configuration): Promise<RequestContext>;
    v3PollsPollIdOptionsOptionIdPut(pollId: number, optionId: number, apiToken?: string, v3PollsPollIdOptionsOptionIdDeleteRequest?: V3PollsPollIdOptionsOptionIdDeleteRequest, _options?: Configuration): Promise<RequestContext>;
    v3PollsPollIdOptionsOptionIdVotersGet(pollId: number, optionId: number, apiToken?: string, v3PollsPollIdOptionsOptionIdVotersGetRequest?: V3PollsPollIdOptionsOptionIdVotersGetRequest, _options?: Configuration): Promise<RequestContext>;
    v3PollsPollIdOptionsPost(pollId: number, apiToken?: string, v3PollsPollIdOptionsOptionIdDeleteRequest?: V3PollsPollIdOptionsOptionIdDeleteRequest, _options?: Configuration): Promise<RequestContext>;
    v3PollsPollIdPut(pollId: number, apiToken?: string, v3PollsPollIdDeleteRequest1?: V3PollsPollIdDeleteRequest1, _options?: Configuration): Promise<RequestContext>;
    v3PollsPollIdVotePut(pollId: number, apiToken?: string, v3PollsPollIdVotePutRequest?: V3PollsPollIdVotePutRequest, _options?: Configuration): Promise<RequestContext>;
    v3PollsPost(title: string, options: Array<string>, apiToken?: string, v3PollsGetRequest?: V3PollsGetRequest, _options?: Configuration): Promise<RequestContext>;
}
export declare class PollApiResponseProcessor {
    v3PollsGet(response: ResponseContext): Promise<SendBirdPoll>;
    v3PollsPollIdClosePut(response: ResponseContext): Promise<SendBirdPoll>;
    v3PollsPollIdDelete(response: ResponseContext): Promise<any>;
    v3PollsPollIdGet(response: ResponseContext): Promise<SendBirdPoll>;
    v3PollsPollIdOptionsOptionIdDelete(response: ResponseContext): Promise<any>;
    v3PollsPollIdOptionsOptionIdGet(response: ResponseContext): Promise<SendBirdPollOption>;
    v3PollsPollIdOptionsOptionIdPut(response: ResponseContext): Promise<SendBirdPoll>;
    v3PollsPollIdOptionsOptionIdVotersGet(response: ResponseContext): Promise<V3PollsPollIdOptionsOptionIdVotersGet200Response>;
    v3PollsPollIdOptionsPost(response: ResponseContext): Promise<SendBirdPoll>;
    v3PollsPollIdPut(response: ResponseContext): Promise<SendBirdPoll>;
    v3PollsPollIdVotePut(response: ResponseContext): Promise<SendBirdPoll>;
    v3PollsPost(response: ResponseContext): Promise<SendBirdPoll>;
}
