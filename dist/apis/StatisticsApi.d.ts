import { BaseAPIRequestFactory } from './baseapi';
import { Configuration } from '../configuration';
import { RequestContext, ResponseContext } from '../http/http';
import { GetDetailedOpenRateOfAnnouncementByIdResponse } from '../models/GetDetailedOpenRateOfAnnouncementByIdResponse';
import { GetDetailedOpenStatusOfAnnouncementByIdResponse } from '../models/GetDetailedOpenStatusOfAnnouncementByIdResponse';
import { RetrieveAdvancedAnalyticsMetricsResponse } from '../models/RetrieveAdvancedAnalyticsMetricsResponse';
import { ViewNumberOfConcurrentConnectionsResponse } from '../models/ViewNumberOfConcurrentConnectionsResponse';
import { ViewNumberOfDailyActiveUsersResponse } from '../models/ViewNumberOfDailyActiveUsersResponse';
import { ViewNumberOfMonthlyActiveUsersResponse } from '../models/ViewNumberOfMonthlyActiveUsersResponse';
import { ViewNumberOfPeakConnectionsResponse } from '../models/ViewNumberOfPeakConnectionsResponse';
export declare class StatisticsApiRequestFactory extends BaseAPIRequestFactory {
    getDetailedOpenRateOfAnnouncementById(uniqueId: string, apiToken?: string, _options?: Configuration): Promise<RequestContext>;
    getDetailedOpenStatusOfAnnouncementById(uniqueId: string, apiToken?: string, limit?: number, next?: string, uniqueIds?: Array<string>, channelUrls?: Array<string>, hasOpened?: boolean, _options?: Configuration): Promise<RequestContext>;
    retrieveAdvancedAnalyticsMetrics(apiToken?: string, _options?: Configuration): Promise<RequestContext>;
    viewNumberOfConcurrentConnections(apiToken?: string, _options?: Configuration): Promise<RequestContext>;
    viewNumberOfDailyActiveUsers(apiToken?: string, date?: string, _options?: Configuration): Promise<RequestContext>;
    viewNumberOfMonthlyActiveUsers(apiToken?: string, date?: string, _options?: Configuration): Promise<RequestContext>;
    viewNumberOfPeakConnections(timeDimension: string, startYear: number, startMonth: number, endYear: number, endMonth: number, apiToken?: string, startDay?: number, endDay?: number, _options?: Configuration): Promise<RequestContext>;
}
export declare class StatisticsApiResponseProcessor {
    getDetailedOpenRateOfAnnouncementById(response: ResponseContext): Promise<GetDetailedOpenRateOfAnnouncementByIdResponse>;
    getDetailedOpenStatusOfAnnouncementById(response: ResponseContext): Promise<GetDetailedOpenStatusOfAnnouncementByIdResponse>;
    retrieveAdvancedAnalyticsMetrics(response: ResponseContext): Promise<RetrieveAdvancedAnalyticsMetricsResponse>;
    viewNumberOfConcurrentConnections(response: ResponseContext): Promise<ViewNumberOfConcurrentConnectionsResponse>;
    viewNumberOfDailyActiveUsers(response: ResponseContext): Promise<ViewNumberOfDailyActiveUsersResponse>;
    viewNumberOfMonthlyActiveUsers(response: ResponseContext): Promise<ViewNumberOfMonthlyActiveUsersResponse>;
    viewNumberOfPeakConnections(response: ResponseContext): Promise<ViewNumberOfPeakConnectionsResponse>;
}
