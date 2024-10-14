import { BaseAPIRequestFactory } from './baseapi';
import { Configuration } from '../configuration';
import { RequestContext, ResponseContext } from '../http/http';
import { ChooseWhichEventsToSubscribeToData } from '../models/ChooseWhichEventsToSubscribeToData';
import { ChooseWhichEventsToSubscribeToResponse } from '../models/ChooseWhichEventsToSubscribeToResponse';
import { RetrieveListOfSubscribedEventsResponse } from '../models/RetrieveListOfSubscribedEventsResponse';
export declare class WebhookApiRequestFactory extends BaseAPIRequestFactory {
    chooseWhichEventsToSubscribeTo(apiToken?: string, chooseWhichEventsToSubscribeToData?: ChooseWhichEventsToSubscribeToData, _options?: Configuration): Promise<RequestContext>;
    retrieveListOfSubscribedEvents(apiToken?: string, displayAllWebhookCategories?: boolean, _options?: Configuration): Promise<RequestContext>;
}
export declare class WebhookApiResponseProcessor {
    chooseWhichEventsToSubscribeTo(response: ResponseContext): Promise<ChooseWhichEventsToSubscribeToResponse>;
    retrieveListOfSubscribedEvents(response: ResponseContext): Promise<RetrieveListOfSubscribedEventsResponse>;
}
