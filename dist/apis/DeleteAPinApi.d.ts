import { BaseAPIRequestFactory } from './baseapi';
import { Configuration } from '../configuration';
import { RequestContext, ResponseContext } from '../http/http';
import { SendBirdChannelResponse } from '../models/SendBirdChannelResponse';
export declare class DeleteAPinApiRequestFactory extends BaseAPIRequestFactory {
    v3ChannelTypeChannelUrlMessagesMessageIdPinDelete(channelType: string, channelUrl: string, messageId: number, apiToken?: string, _options?: Configuration): Promise<RequestContext>;
}
export declare class DeleteAPinApiResponseProcessor {
    v3ChannelTypeChannelUrlMessagesMessageIdPinDelete(response: ResponseContext): Promise<SendBirdChannelResponse>;
}
