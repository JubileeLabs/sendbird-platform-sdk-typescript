import { BaseAPIRequestFactory } from './baseapi';
import { Configuration } from '../configuration';
import { RequestContext, ResponseContext } from '../http/http';
import { ListGdprRequestsResponse } from '../models/ListGdprRequestsResponse';
import { RegisterGdprRequestData } from '../models/RegisterGdprRequestData';
import { RegisterGdprRequestResponse } from '../models/RegisterGdprRequestResponse';
import { ViewGdprRequestByIdResponse } from '../models/ViewGdprRequestByIdResponse';
export declare class PrivacyApiRequestFactory extends BaseAPIRequestFactory {
    cancelTheRegistrationOfGdprRequestById(requestId: string, apiToken?: string, _options?: Configuration): Promise<RequestContext>;
    listGdprRequests(apiToken?: string, token?: string, limit?: number, _options?: Configuration): Promise<RequestContext>;
    registerGdprRequest(apiToken?: string, registerGdprRequestData?: RegisterGdprRequestData, _options?: Configuration): Promise<RequestContext>;
    viewGdprRequestById(requestId: string, apiToken?: string, _options?: Configuration): Promise<RequestContext>;
}
export declare class PrivacyApiResponseProcessor {
    cancelTheRegistrationOfGdprRequestById(response: ResponseContext): Promise<void>;
    listGdprRequests(response: ResponseContext): Promise<ListGdprRequestsResponse>;
    registerGdprRequest(response: ResponseContext): Promise<RegisterGdprRequestResponse>;
    viewGdprRequestById(response: ResponseContext): Promise<ViewGdprRequestByIdResponse>;
}
