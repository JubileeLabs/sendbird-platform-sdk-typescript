import { BaseAPIRequestFactory } from './baseapi';
import { Configuration } from '../configuration';
import { RequestContext, ResponseContext } from '../http/http';
import { ListPushConfigurationsResponse } from '../models/ListPushConfigurationsResponse';
import { V3ApplicationsPushSettingsGet200Response } from '../models/V3ApplicationsPushSettingsGet200Response';
import { V3ApplicationsPushSettingsGetRequest } from '../models/V3ApplicationsPushSettingsGetRequest';
export declare class PushNotificationsApiRequestFactory extends BaseAPIRequestFactory {
    v3ApplicationsPushSettingsGet(apiToken?: string, _options?: Configuration): Promise<RequestContext>;
    v3ApplicationsPushSettingsPut(apiToken?: string, v3ApplicationsPushSettingsGetRequest?: V3ApplicationsPushSettingsGetRequest, _options?: Configuration): Promise<RequestContext>;
}
export declare class PushNotificationsApiResponseProcessor {
    v3ApplicationsPushSettingsGet(response: ResponseContext): Promise<V3ApplicationsPushSettingsGet200Response>;
    v3ApplicationsPushSettingsPut(response: ResponseContext): Promise<ListPushConfigurationsResponse>;
}
