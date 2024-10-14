import { BaseAPIRequestFactory } from './baseapi';
import { Configuration } from '../configuration';
import { RequestContext, ResponseContext } from '../http/http';
import { CreateBotData } from '../models/CreateBotData';
import { CreateBotResponse } from '../models/CreateBotResponse';
import { JoinChannelsData } from '../models/JoinChannelsData';
import { JoinChannelsResponse } from '../models/JoinChannelsResponse';
import { ListBotsResponse } from '../models/ListBotsResponse';
import { SendBirdBotsMessageResponse } from '../models/SendBirdBotsMessageResponse';
import { SendBotSMessageData } from '../models/SendBotSMessageData';
import { UpdateBotByIdData } from '../models/UpdateBotByIdData';
import { UpdateBotByIdResponse } from '../models/UpdateBotByIdResponse';
import { ViewBotByIdResponse } from '../models/ViewBotByIdResponse';
export declare class BotApiRequestFactory extends BaseAPIRequestFactory {
    createBot(apiToken?: string, createBotData?: CreateBotData, _options?: Configuration): Promise<RequestContext>;
    deleteBotById(botUserid: string, apiToken?: string, _options?: Configuration): Promise<RequestContext>;
    joinChannels(botUserid: string, apiToken?: string, joinChannelsData?: JoinChannelsData, _options?: Configuration): Promise<RequestContext>;
    leaveChannels(botUserid: string, apiToken?: string, channelUrl?: string, _options?: Configuration): Promise<RequestContext>;
    leaveChannelsByUrl(botUserid: string, channelUrl: string, apiToken?: string, _options?: Configuration): Promise<RequestContext>;
    listBots(apiToken?: string, token?: string, limit?: number, _options?: Configuration): Promise<RequestContext>;
    sendBotsMessage(botUserid: string, apiToken?: string, sendBotSMessageData?: SendBotSMessageData, _options?: Configuration): Promise<RequestContext>;
    updateBotById(botUserid: string, apiToken?: string, updateBotByIdData?: UpdateBotByIdData, _options?: Configuration): Promise<RequestContext>;
    viewBotById(botUserid: string, apiToken?: string, _options?: Configuration): Promise<RequestContext>;
}
export declare class BotApiResponseProcessor {
    createBot(response: ResponseContext): Promise<CreateBotResponse>;
    deleteBotById(response: ResponseContext): Promise<any>;
    joinChannels(response: ResponseContext): Promise<JoinChannelsResponse>;
    leaveChannels(response: ResponseContext): Promise<void>;
    leaveChannelsByUrl(response: ResponseContext): Promise<any>;
    listBots(response: ResponseContext): Promise<ListBotsResponse>;
    sendBotsMessage(response: ResponseContext): Promise<SendBirdBotsMessageResponse>;
    updateBotById(response: ResponseContext): Promise<UpdateBotByIdResponse>;
    viewBotById(response: ResponseContext): Promise<ViewBotByIdResponse>;
}
