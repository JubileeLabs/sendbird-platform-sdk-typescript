import { BaseAPIRequestFactory } from './baseapi';
import { Configuration } from '../configuration';
import { RequestContext, ResponseContext } from '../http/http';
import { ListDataExportsByMessageChannelOrUserResponse } from '../models/ListDataExportsByMessageChannelOrUserResponse';
import { RegisterAndScheduleDataExportData } from '../models/RegisterAndScheduleDataExportData';
import { RegisterAndScheduleDataExportResponse } from '../models/RegisterAndScheduleDataExportResponse';
import { ViewDataExportByIdResponse } from '../models/ViewDataExportByIdResponse';
export declare class DataExportApiRequestFactory extends BaseAPIRequestFactory {
    listDataExportsByMessageChannelOrUser(dataType: string, apiToken?: string, token?: string, limit?: number, _options?: Configuration): Promise<RequestContext>;
    registerAndScheduleDataExport(dataType: string, apiToken?: string, registerAndScheduleDataExportData?: RegisterAndScheduleDataExportData, _options?: Configuration): Promise<RequestContext>;
    viewDataExportById(dataType: string, requestId: string, apiToken?: string, _options?: Configuration): Promise<RequestContext>;
}
export declare class DataExportApiResponseProcessor {
    listDataExportsByMessageChannelOrUser(response: ResponseContext): Promise<ListDataExportsByMessageChannelOrUserResponse>;
    registerAndScheduleDataExport(response: ResponseContext): Promise<RegisterAndScheduleDataExportResponse>;
    viewDataExportById(response: ResponseContext): Promise<ViewDataExportByIdResponse>;
}
