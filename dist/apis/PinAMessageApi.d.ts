import { BaseAPIRequestFactory } from './baseapi';
import { Configuration } from '../configuration';
import { RequestContext, ResponseContext } from '../http/http';
import { SendBirdChannelResponse } from '../models/SendBirdChannelResponse';
export declare class PinAMessageApiRequestFactory extends BaseAPIRequestFactory {
    v3ChannelTypeChannelUrlMessagesMessageIdPinPost(channelType: string, channelUrl: string, messageId: number, apiToken?: string, _options?: Configuration): Promise<RequestContext>;
}
export declare class PinAMessageApiResponseProcessor {
    v3ChannelTypeChannelUrlMessagesMessageIdPinPost(response: ResponseContext): Promise<SendBirdChannelResponse>;
}
