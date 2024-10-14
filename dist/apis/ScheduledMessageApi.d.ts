import { BaseAPIRequestFactory } from './baseapi';
import { Configuration } from '../configuration';
import { RequestContext, ResponseContext } from '../http/http';
import { V3GroupChannelsChannelUrlScheduledMessagesScheduledMessageIdDeleteRequest } from '../models/V3GroupChannelsChannelUrlScheduledMessagesScheduledMessageIdDeleteRequest';
import { V3ScheduledMessagesCountGet200Response } from '../models/V3ScheduledMessagesCountGet200Response';
import { V3ScheduledMessagesGet200Response } from '../models/V3ScheduledMessagesGet200Response';
export declare class ScheduledMessageApiRequestFactory extends BaseAPIRequestFactory {
    v3ChannelTypeChannelUrlScheduledMessagesScheduledMessageIdSendNowPost(channelType: string, channelUrl: string, scheduledMessageId: number, apiToken?: string, _options?: Configuration): Promise<RequestContext>;
    v3GroupChannelsChannelUrlScheduledMessagesPost(channelUrl: string, apiToken?: string, v3GroupChannelsChannelUrlScheduledMessagesScheduledMessageIdDeleteRequest?: V3GroupChannelsChannelUrlScheduledMessagesScheduledMessageIdDeleteRequest, _options?: Configuration): Promise<RequestContext>;
    v3GroupChannelsChannelUrlScheduledMessagesScheduledMessageIdDelete(channelUrl: string, scheduledMessageId: number, apiToken?: string, _options?: Configuration): Promise<RequestContext>;
    v3GroupChannelsChannelUrlScheduledMessagesScheduledMessageIdGet(channelUrl: string, scheduledMessageId: number, apiToken?: string, _options?: Configuration): Promise<RequestContext>;
    v3GroupChannelsChannelUrlScheduledMessagesScheduledMessageIdPost(channelUrl: string, scheduledMessageId: number, apiToken?: string, v3GroupChannelsChannelUrlScheduledMessagesScheduledMessageIdDeleteRequest?: V3GroupChannelsChannelUrlScheduledMessagesScheduledMessageIdDeleteRequest, _options?: Configuration): Promise<RequestContext>;
    v3ScheduledMessagesCountGet(apiToken?: string, channelType?: string, channelUrl?: string, senderId?: string, status?: Array<any>, messageType?: string, _options?: Configuration): Promise<RequestContext>;
    v3ScheduledMessagesGet(apiToken?: string, channelType?: string, channelUrl?: string, senderId?: string, token?: string, limit?: number, order?: string, reverse?: boolean, status?: Array<any>, messageType?: string, _options?: Configuration): Promise<RequestContext>;
}
export declare class ScheduledMessageApiResponseProcessor {
    v3ChannelTypeChannelUrlScheduledMessagesScheduledMessageIdSendNowPost(response: ResponseContext): Promise<any>;
    v3GroupChannelsChannelUrlScheduledMessagesPost(response: ResponseContext): Promise<V3ScheduledMessagesGet200Response>;
    v3GroupChannelsChannelUrlScheduledMessagesScheduledMessageIdDelete(response: ResponseContext): Promise<V3ScheduledMessagesGet200Response>;
    v3GroupChannelsChannelUrlScheduledMessagesScheduledMessageIdGet(response: ResponseContext): Promise<V3ScheduledMessagesGet200Response>;
    v3GroupChannelsChannelUrlScheduledMessagesScheduledMessageIdPost(response: ResponseContext): Promise<V3ScheduledMessagesGet200Response>;
    v3ScheduledMessagesCountGet(response: ResponseContext): Promise<V3ScheduledMessagesCountGet200Response>;
    v3ScheduledMessagesGet(response: ResponseContext): Promise<V3ScheduledMessagesGet200Response>;
}
