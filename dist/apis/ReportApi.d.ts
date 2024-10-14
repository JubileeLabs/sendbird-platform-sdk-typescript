import { BaseAPIRequestFactory } from './baseapi';
import { Configuration } from '../configuration';
import { RequestContext, ResponseContext } from '../http/http';
import { ListReportsOnChannelByUrlResponse } from '../models/ListReportsOnChannelByUrlResponse';
import { ListReportsOnMessageByIdResponse } from '../models/ListReportsOnMessageByIdResponse';
import { ListReportsOnUserByIdResponse } from '../models/ListReportsOnUserByIdResponse';
import { ListReportsResponse } from '../models/ListReportsResponse';
import { ReportChannelByUrlData } from '../models/ReportChannelByUrlData';
import { ReportChannelByUrlResponse } from '../models/ReportChannelByUrlResponse';
import { ReportMessageByIdData } from '../models/ReportMessageByIdData';
import { ReportMessageByIdResponse } from '../models/ReportMessageByIdResponse';
import { ReportUserByIdData } from '../models/ReportUserByIdData';
import { ReportUserByIdResponse } from '../models/ReportUserByIdResponse';
export declare class ReportApiRequestFactory extends BaseAPIRequestFactory {
    listReports(apiToken?: string, token?: string, limit?: number, startTs?: number, endTs?: number, _options?: Configuration): Promise<RequestContext>;
    listReportsOnChannelByUrl(channelType: string, channelUrl: string, apiToken?: string, token?: string, limit?: number, _options?: Configuration): Promise<RequestContext>;
    listReportsOnMessageById(channelType: string, channelUrl: string, messageId: string, apiToken?: string, token?: string, limit?: number, _options?: Configuration): Promise<RequestContext>;
    listReportsOnUserById(offendingUserId: string, apiToken?: string, token?: string, limit?: number, _options?: Configuration): Promise<RequestContext>;
    reportChannelByUrl(channelType: string, channelUrl: string, apiToken?: string, reportChannelByUrlData?: ReportChannelByUrlData, _options?: Configuration): Promise<RequestContext>;
    reportMessageById(channelType: string, channelUrl: string, messageId: string, apiToken?: string, reportMessageByIdData?: ReportMessageByIdData, _options?: Configuration): Promise<RequestContext>;
    reportUserById(offendingUserId: string, apiToken?: string, reportUserByIdData?: ReportUserByIdData, _options?: Configuration): Promise<RequestContext>;
    viewModeratedMessageById(channelType: string, channelUrl: string, messageId: string, apiToken?: string, _options?: Configuration): Promise<RequestContext>;
}
export declare class ReportApiResponseProcessor {
    listReports(response: ResponseContext): Promise<ListReportsResponse>;
    listReportsOnChannelByUrl(response: ResponseContext): Promise<ListReportsOnChannelByUrlResponse>;
    listReportsOnMessageById(response: ResponseContext): Promise<ListReportsOnMessageByIdResponse>;
    listReportsOnUserById(response: ResponseContext): Promise<ListReportsOnUserByIdResponse>;
    reportChannelByUrl(response: ResponseContext): Promise<ReportChannelByUrlResponse>;
    reportMessageById(response: ResponseContext): Promise<ReportMessageByIdResponse>;
    reportUserById(response: ResponseContext): Promise<ReportUserByIdResponse>;
    viewModeratedMessageById(response: ResponseContext): Promise<any>;
}
