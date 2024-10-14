import { BaseAPIRequestFactory } from './baseapi';
import { Configuration } from '../configuration';
import { RequestContext, ResponseContext } from '../http/http';
import { GetDetailedOpenRateOfAnnouncementGroupResponse } from '../models/GetDetailedOpenRateOfAnnouncementGroupResponse';
import { GetStatisticsDailyResponse } from '../models/GetStatisticsDailyResponse';
import { GetStatisticsMonthlyResponse } from '../models/GetStatisticsMonthlyResponse';
import { GetStatisticsResponse } from '../models/GetStatisticsResponse';
import { ListAnnouncementGroupsResponse } from '../models/ListAnnouncementGroupsResponse';
import { ScheduleAnnouncementData } from '../models/ScheduleAnnouncementData';
import { ScheduleAnnouncementResponse } from '../models/ScheduleAnnouncementResponse';
import { UpdateAnnouncementByIdData } from '../models/UpdateAnnouncementByIdData';
import { UpdateAnnouncementByIdResponse } from '../models/UpdateAnnouncementByIdResponse';
import { ViewAnnouncementByIdResponse } from '../models/ViewAnnouncementByIdResponse';
export declare class AnnouncementApiRequestFactory extends BaseAPIRequestFactory {
    getDetailedOpenRateOfAnnouncementGroup(announcementGroup: string, apiToken?: string, _options?: Configuration): Promise<RequestContext>;
    getStatistics(apiToken?: string, _options?: Configuration): Promise<RequestContext>;
    getStatisticsDaily(startDate: string, endDate: string, startWeek: string, endWeek: string, startMonth: string, endMonth: string, apiToken?: string, announcementGroup?: string, _options?: Configuration): Promise<RequestContext>;
    getStatisticsMonthly(apiToken?: string, _options?: Configuration): Promise<RequestContext>;
    listAnnouncementGroups(apiToken?: string, token?: string, limit?: number, _options?: Configuration): Promise<RequestContext>;
    scheduleAnnouncement(apiToken?: string, scheduleAnnouncementData?: ScheduleAnnouncementData, _options?: Configuration): Promise<RequestContext>;
    updateAnnouncementById(uniqueId: string, apiToken?: string, updateAnnouncementByIdData?: UpdateAnnouncementByIdData, _options?: Configuration): Promise<RequestContext>;
    viewAnnouncementById(uniqueId: string, apiToken?: string, _options?: Configuration): Promise<RequestContext>;
}
export declare class AnnouncementApiResponseProcessor {
    getDetailedOpenRateOfAnnouncementGroup(response: ResponseContext): Promise<GetDetailedOpenRateOfAnnouncementGroupResponse>;
    getStatistics(response: ResponseContext): Promise<GetStatisticsResponse>;
    getStatisticsDaily(response: ResponseContext): Promise<GetStatisticsDailyResponse>;
    getStatisticsMonthly(response: ResponseContext): Promise<GetStatisticsMonthlyResponse>;
    listAnnouncementGroups(response: ResponseContext): Promise<ListAnnouncementGroupsResponse>;
    scheduleAnnouncement(response: ResponseContext): Promise<ScheduleAnnouncementResponse>;
    updateAnnouncementById(response: ResponseContext): Promise<UpdateAnnouncementByIdResponse>;
    viewAnnouncementById(response: ResponseContext): Promise<ViewAnnouncementByIdResponse>;
}
