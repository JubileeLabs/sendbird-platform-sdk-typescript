import { Configuration } from '../configuration';
import { AddApnsPushConfigurationData } from '../models/AddApnsPushConfigurationData';
import { AddApnsPushConfigurationResponse } from '../models/AddApnsPushConfigurationResponse';
import { AddEmojiCategoriesResponse } from '../models/AddEmojiCategoriesResponse';
import { AddEmojisData } from '../models/AddEmojisData';
import { AddEmojisResponse } from '../models/AddEmojisResponse';
import { AddExtraDataToMessageData } from '../models/AddExtraDataToMessageData';
import { AddExtraDataToMessageResponse } from '../models/AddExtraDataToMessageResponse';
import { AddFcmPushConfigurationData } from '../models/AddFcmPushConfigurationData';
import { AddFcmPushConfigurationResponse } from '../models/AddFcmPushConfigurationResponse';
import { AddHmsPushConfigurationData } from '../models/AddHmsPushConfigurationData';
import { AddHmsPushConfigurationResponse } from '../models/AddHmsPushConfigurationResponse';
import { AddIpToWhitelistData } from '../models/AddIpToWhitelistData';
import { AddIpToWhitelistResponse } from '../models/AddIpToWhitelistResponse';
import { AddReactionToAMessageData } from '../models/AddReactionToAMessageData';
import { AddReactionToAMessageResponse } from '../models/AddReactionToAMessageResponse';
import { AddRegistrationOrDeviceTokenData } from '../models/AddRegistrationOrDeviceTokenData';
import { AddRegistrationOrDeviceTokenResponse } from '../models/AddRegistrationOrDeviceTokenResponse';
import { BanFromChannelsWithCustomChannelTypesData } from '../models/BanFromChannelsWithCustomChannelTypesData';
import { BanUsersInChannelsWithCustomChannelTypeData } from '../models/BanUsersInChannelsWithCustomChannelTypeData';
import { BlockUserData } from '../models/BlockUserData';
import { BlockUserResponse } from '../models/BlockUserResponse';
import { ChoosePushNotificationContentTemplateResponse } from '../models/ChoosePushNotificationContentTemplateResponse';
import { ChooseWhichEventsToSubscribeToData } from '../models/ChooseWhichEventsToSubscribeToData';
import { ChooseWhichEventsToSubscribeToResponse } from '../models/ChooseWhichEventsToSubscribeToResponse';
import { ConfigureAutoEventData } from '../models/ConfigureAutoEventData';
import { CreateBotData } from '../models/CreateBotData';
import { CreateBotResponse } from '../models/CreateBotResponse';
import { CreateChannelMetacounterData } from '../models/CreateChannelMetacounterData';
import { CreateChannelMetadataData } from '../models/CreateChannelMetadataData';
import { CreateChannelMetadataResponse } from '../models/CreateChannelMetadataResponse';
import { CreateUserData } from '../models/CreateUserData';
import { CreateUserMetadataData } from '../models/CreateUserMetadataData';
import { CreateUserMetadataResponse } from '../models/CreateUserMetadataResponse';
import { CreateUserTokenData } from '../models/CreateUserTokenData';
import { CreateUserTokenResponse } from '../models/CreateUserTokenResponse';
import { CustomTypeListBannedUsersResponse } from '../models/CustomTypeListBannedUsersResponse';
import { DeleteAllowedIpsFromWhitelistResponse } from '../models/DeleteAllowedIpsFromWhitelistResponse';
import { DeleteApnsCertificateByIdResponse } from '../models/DeleteApnsCertificateByIdResponse';
import { EnableReactionsData } from '../models/EnableReactionsData';
import { EnableReactionsResponse } from '../models/EnableReactionsResponse';
import { GcAcceptInvitationData } from '../models/GcAcceptInvitationData';
import { GcBanUserData } from '../models/GcBanUserData';
import { GcBanUserResponse } from '../models/GcBanUserResponse';
import { GcCheckIfMemberByIdResponse } from '../models/GcCheckIfMemberByIdResponse';
import { GcCreateChannelData } from '../models/GcCreateChannelData';
import { GcDeclineInvitationData } from '../models/GcDeclineInvitationData';
import { GcFreezeChannelData } from '../models/GcFreezeChannelData';
import { GcHideOrArchiveChannelData } from '../models/GcHideOrArchiveChannelData';
import { GcInviteAsMembersData } from '../models/GcInviteAsMembersData';
import { GcJoinChannelData } from '../models/GcJoinChannelData';
import { GcLeaveChannelData } from '../models/GcLeaveChannelData';
import { GcListBannedUsersResponse } from '../models/GcListBannedUsersResponse';
import { GcListChannelsResponse } from '../models/GcListChannelsResponse';
import { GcListMembersResponse } from '../models/GcListMembersResponse';
import { GcListMutedUsersResponse } from '../models/GcListMutedUsersResponse';
import { GcListOperatorsResponse } from '../models/GcListOperatorsResponse';
import { GcMarkAllMessagesAsDeliveredData } from '../models/GcMarkAllMessagesAsDeliveredData';
import { GcMarkAllMessagesAsDeliveredResponse } from '../models/GcMarkAllMessagesAsDeliveredResponse';
import { GcMarkAllMessagesAsReadData } from '../models/GcMarkAllMessagesAsReadData';
import { GcMuteUserData } from '../models/GcMuteUserData';
import { GcRegisterOperatorsData } from '../models/GcRegisterOperatorsData';
import { GcRegisterOperatorsResponse } from '../models/GcRegisterOperatorsResponse';
import { GcResetChatHistoryData } from '../models/GcResetChatHistoryData';
import { GcResetChatHistoryResponse } from '../models/GcResetChatHistoryResponse';
import { GcTypingIndicatorsData } from '../models/GcTypingIndicatorsData';
import { GcUpdateBanByIdData } from '../models/GcUpdateBanByIdData';
import { GcUpdateBanByIdResponse } from '../models/GcUpdateBanByIdResponse';
import { GcUpdateChannelByUrlData } from '../models/GcUpdateChannelByUrlData';
import { GcViewBanByIdResponse } from '../models/GcViewBanByIdResponse';
import { GcViewMuteByIdResponse } from '../models/GcViewMuteByIdResponse';
import { GcViewNumberOfEachMembersUnreadMessagesResponse } from '../models/GcViewNumberOfEachMembersUnreadMessagesResponse';
import { GenerateSecondaryApiTokenData } from '../models/GenerateSecondaryApiTokenData';
import { GenerateSecondaryApiTokenResponse } from '../models/GenerateSecondaryApiTokenResponse';
import { GetDetailedOpenRateOfAnnouncementByIdResponse } from '../models/GetDetailedOpenRateOfAnnouncementByIdResponse';
import { GetDetailedOpenRateOfAnnouncementGroupResponse } from '../models/GetDetailedOpenRateOfAnnouncementGroupResponse';
import { GetDetailedOpenStatusOfAnnouncementByIdResponse } from '../models/GetDetailedOpenStatusOfAnnouncementByIdResponse';
import { GetStatisticsDailyResponse } from '../models/GetStatisticsDailyResponse';
import { GetStatisticsMonthlyResponse } from '../models/GetStatisticsMonthlyResponse';
import { GetStatisticsResponse } from '../models/GetStatisticsResponse';
import { JoinChannelsData } from '../models/JoinChannelsData';
import { JoinChannelsResponse } from '../models/JoinChannelsResponse';
import { LeaveMyGroupChannelsData } from '../models/LeaveMyGroupChannelsData';
import { ListAllEmojisAndEmojiCategoriesResponse } from '../models/ListAllEmojisAndEmojiCategoriesResponse';
import { ListAnnouncementGroupsResponse } from '../models/ListAnnouncementGroupsResponse';
import { ListAnnouncementsResponse } from '../models/ListAnnouncementsResponse';
import { ListBannedChannelsResponse } from '../models/ListBannedChannelsResponse';
import { ListBlockedUsersResponse } from '../models/ListBlockedUsersResponse';
import { ListBotsResponse } from '../models/ListBotsResponse';
import { ListDataExportsByMessageChannelOrUserResponse } from '../models/ListDataExportsByMessageChannelOrUserResponse';
import { ListEmojisResponse } from '../models/ListEmojisResponse';
import { ListGdprRequestsResponse } from '../models/ListGdprRequestsResponse';
import { ListMessagesResponse } from '../models/ListMessagesResponse';
import { ListMutedChannelsResponse } from '../models/ListMutedChannelsResponse';
import { ListMutedUsersInChannelsWithCustomChannelType200Response } from '../models/ListMutedUsersInChannelsWithCustomChannelType200Response';
import { ListMyGroupChannelsResponse } from '../models/ListMyGroupChannelsResponse';
import { ListPushConfigurationsResponse } from '../models/ListPushConfigurationsResponse';
import { ListPushNotificationContentTemplatesResponse } from '../models/ListPushNotificationContentTemplatesResponse';
import { ListReactionsOfMessageResponse } from '../models/ListReactionsOfMessageResponse';
import { ListRegistrationOrDeviceTokensResponse } from '../models/ListRegistrationOrDeviceTokensResponse';
import { ListReportsOnChannelByUrlResponse } from '../models/ListReportsOnChannelByUrlResponse';
import { ListReportsOnMessageByIdResponse } from '../models/ListReportsOnMessageByIdResponse';
import { ListReportsOnUserByIdResponse } from '../models/ListReportsOnUserByIdResponse';
import { ListReportsResponse } from '../models/ListReportsResponse';
import { ListSecondaryApiTokensResponse } from '../models/ListSecondaryApiTokensResponse';
import { ListUsersResponse } from '../models/ListUsersResponse';
import { MarkAllMessagesAsReadData } from '../models/MarkAllMessagesAsReadData';
import { MuteInChannelsWithCustomChannelTypesData } from '../models/MuteInChannelsWithCustomChannelTypesData';
import { MuteUsersInChannelsWithCustomChannelTypeData } from '../models/MuteUsersInChannelsWithCustomChannelTypeData';
import { OcBanUserData } from '../models/OcBanUserData';
import { OcBanUserResponse } from '../models/OcBanUserResponse';
import { OcCreateChannelData } from '../models/OcCreateChannelData';
import { OcDeleteChannelByUrl200Response } from '../models/OcDeleteChannelByUrl200Response';
import { OcFreezeChannelData } from '../models/OcFreezeChannelData';
import { OcListBannedUsersResponse } from '../models/OcListBannedUsersResponse';
import { OcListChannelsResponse } from '../models/OcListChannelsResponse';
import { OcListMutedUsersResponse } from '../models/OcListMutedUsersResponse';
import { OcListOperatorsResponse } from '../models/OcListOperatorsResponse';
import { OcListParticipantsResponse } from '../models/OcListParticipantsResponse';
import { OcMuteUserData } from '../models/OcMuteUserData';
import { OcRegisterOperatorsData } from '../models/OcRegisterOperatorsData';
import { OcUpdateBanByIdData } from '../models/OcUpdateBanByIdData';
import { OcUpdateBanByIdResponse } from '../models/OcUpdateBanByIdResponse';
import { OcUpdateChannelByUrlData } from '../models/OcUpdateChannelByUrlData';
import { OcViewBanByIdResponse } from '../models/OcViewBanByIdResponse';
import { OcViewMuteByIdResponse } from '../models/OcViewMuteByIdResponse';
import { RegisterAndScheduleDataExportData } from '../models/RegisterAndScheduleDataExportData';
import { RegisterAndScheduleDataExportResponse } from '../models/RegisterAndScheduleDataExportResponse';
import { RegisterAsOperatorToChannelsWithCustomChannelTypesData } from '../models/RegisterAsOperatorToChannelsWithCustomChannelTypesData';
import { RegisterGdprRequestData } from '../models/RegisterGdprRequestData';
import { RegisterGdprRequestResponse } from '../models/RegisterGdprRequestResponse';
import { RemovePushConfigurationByIdResponse } from '../models/RemovePushConfigurationByIdResponse';
import { RemoveReactionFromAMessageResponse } from '../models/RemoveReactionFromAMessageResponse';
import { RemoveRegistrationOrDeviceTokenByTokenResponse } from '../models/RemoveRegistrationOrDeviceTokenByTokenResponse';
import { RemoveRegistrationOrDeviceTokenFromOwnerByTokenResponse } from '../models/RemoveRegistrationOrDeviceTokenFromOwnerByTokenResponse';
import { RemoveRegistrationOrDeviceTokenResponse } from '../models/RemoveRegistrationOrDeviceTokenResponse';
import { ReportChannelByUrlData } from '../models/ReportChannelByUrlData';
import { ReportChannelByUrlResponse } from '../models/ReportChannelByUrlResponse';
import { ReportMessageByIdData } from '../models/ReportMessageByIdData';
import { ReportMessageByIdResponse } from '../models/ReportMessageByIdResponse';
import { ReportUserByIdData } from '../models/ReportUserByIdData';
import { ReportUserByIdResponse } from '../models/ReportUserByIdResponse';
import { ResetPushPreferencesResponse } from '../models/ResetPushPreferencesResponse';
import { RetrieveAdvancedAnalyticsMetricsResponse } from '../models/RetrieveAdvancedAnalyticsMetricsResponse';
import { RetrieveIpWhitelistResponse } from '../models/RetrieveIpWhitelistResponse';
import { RetrieveListOfSubscribedEventsResponse } from '../models/RetrieveListOfSubscribedEventsResponse';
import { RevokeSecondaryApiTokenByTokenResponse } from '../models/RevokeSecondaryApiTokenByTokenResponse';
import { ScheduleAnnouncementData } from '../models/ScheduleAnnouncementData';
import { ScheduleAnnouncementResponse } from '../models/ScheduleAnnouncementResponse';
import { SendBirdAutoEventMessageSettings } from '../models/SendBirdAutoEventMessageSettings';
import { SendBirdBotsMessageResponse } from '../models/SendBirdBotsMessageResponse';
import { SendBirdChannelResponse } from '../models/SendBirdChannelResponse';
import { SendBirdEmoji } from '../models/SendBirdEmoji';
import { SendBirdEmojiCategory } from '../models/SendBirdEmojiCategory';
import { SendBirdGroupChannel } from '../models/SendBirdGroupChannel';
import { SendBirdMessageResponse } from '../models/SendBirdMessageResponse';
import { SendBirdOpenChannel } from '../models/SendBirdOpenChannel';
import { SendBirdPoll } from '../models/SendBirdPoll';
import { SendBirdPollOption } from '../models/SendBirdPollOption';
import { SendBirdUser } from '../models/SendBirdUser';
import { SendBotSMessageData } from '../models/SendBotSMessageData';
import { SendMessageData } from '../models/SendMessageData';
import { SetDomainFilterData } from '../models/SetDomainFilterData';
import { TranslateMessageIntoOtherLanguagesData } from '../models/TranslateMessageIntoOtherLanguagesData';
import { UpdateAnnouncementByIdData } from '../models/UpdateAnnouncementByIdData';
import { UpdateAnnouncementByIdResponse } from '../models/UpdateAnnouncementByIdResponse';
import { UpdateApnsPushConfigurationByIdData } from '../models/UpdateApnsPushConfigurationByIdData';
import { UpdateApnsPushConfigurationByIdResponse } from '../models/UpdateApnsPushConfigurationByIdResponse';
import { UpdateBotByIdData } from '../models/UpdateBotByIdData';
import { UpdateBotByIdResponse } from '../models/UpdateBotByIdResponse';
import { UpdateChannelInvitationPreferenceData } from '../models/UpdateChannelInvitationPreferenceData';
import { UpdateChannelInvitationPreferenceResponse } from '../models/UpdateChannelInvitationPreferenceResponse';
import { UpdateChannelMetacounterData } from '../models/UpdateChannelMetacounterData';
import { UpdateChannelMetadataData } from '../models/UpdateChannelMetadataData';
import { UpdateCountPreferenceOfChannelByUrlData } from '../models/UpdateCountPreferenceOfChannelByUrlData';
import { UpdateCountPreferenceOfChannelByUrlResponse } from '../models/UpdateCountPreferenceOfChannelByUrlResponse';
import { UpdateDefaultChannelInvitationPreferenceData } from '../models/UpdateDefaultChannelInvitationPreferenceData';
import { UpdateDefaultChannelInvitationPreferenceResponse } from '../models/UpdateDefaultChannelInvitationPreferenceResponse';
import { UpdateEmojiCategoryUrlByIdData } from '../models/UpdateEmojiCategoryUrlByIdData';
import { UpdateEmojiUrlByKeyData } from '../models/UpdateEmojiUrlByKeyData';
import { UpdateExtraDataInMessageData } from '../models/UpdateExtraDataInMessageData';
import { UpdateExtraDataInMessageResponse } from '../models/UpdateExtraDataInMessageResponse';
import { UpdateFcmPushConfigurationByIdData } from '../models/UpdateFcmPushConfigurationByIdData';
import { UpdateFcmPushConfigurationByIdResponse } from '../models/UpdateFcmPushConfigurationByIdResponse';
import { UpdateHmsPushConfigurationByIdData } from '../models/UpdateHmsPushConfigurationByIdData';
import { UpdateHmsPushConfigurationByIdResponse } from '../models/UpdateHmsPushConfigurationByIdResponse';
import { UpdateMessageByIdData } from '../models/UpdateMessageByIdData';
import { UpdatePushNotificationContentTemplateData } from '../models/UpdatePushNotificationContentTemplateData';
import { UpdatePushNotificationContentTemplateResponse } from '../models/UpdatePushNotificationContentTemplateResponse';
import { UpdatePushPreferencesData } from '../models/UpdatePushPreferencesData';
import { UpdatePushPreferencesForChannelByUrlData } from '../models/UpdatePushPreferencesForChannelByUrlData';
import { UpdatePushPreferencesForChannelByUrlResponse } from '../models/UpdatePushPreferencesForChannelByUrlResponse';
import { UpdatePushPreferencesResponse } from '../models/UpdatePushPreferencesResponse';
import { UpdateUserByIdData } from '../models/UpdateUserByIdData';
import { UpdateUserMetadataData } from '../models/UpdateUserMetadataData';
import { UpdateUserMetadataResponse } from '../models/UpdateUserMetadataResponse';
import { UseDefaultEmojisData } from '../models/UseDefaultEmojisData';
import { UseDefaultEmojisResponse } from '../models/UseDefaultEmojisResponse';
import { V3ApplicationsPushSettingsGet200Response } from '../models/V3ApplicationsPushSettingsGet200Response';
import { V3ApplicationsPushSettingsGetRequest } from '../models/V3ApplicationsPushSettingsGetRequest';
import { V3GroupChannelsChannelUrlScheduledMessagesScheduledMessageIdDeleteRequest } from '../models/V3GroupChannelsChannelUrlScheduledMessagesScheduledMessageIdDeleteRequest';
import { V3PollsGetRequest } from '../models/V3PollsGetRequest';
import { V3PollsPollIdDeleteRequest } from '../models/V3PollsPollIdDeleteRequest';
import { V3PollsPollIdDeleteRequest1 } from '../models/V3PollsPollIdDeleteRequest1';
import { V3PollsPollIdOptionsOptionIdDeleteRequest } from '../models/V3PollsPollIdOptionsOptionIdDeleteRequest';
import { V3PollsPollIdOptionsOptionIdVotersGet200Response } from '../models/V3PollsPollIdOptionsOptionIdVotersGet200Response';
import { V3PollsPollIdOptionsOptionIdVotersGetRequest } from '../models/V3PollsPollIdOptionsOptionIdVotersGetRequest';
import { V3PollsPollIdVotePutRequest } from '../models/V3PollsPollIdVotePutRequest';
import { V3ScheduledMessagesCountGet200Response } from '../models/V3ScheduledMessagesCountGet200Response';
import { V3ScheduledMessagesGet200Response } from '../models/V3ScheduledMessagesGet200Response';
import { ViewAnnouncementByIdResponse } from '../models/ViewAnnouncementByIdResponse';
import { ViewBotByIdResponse } from '../models/ViewBotByIdResponse';
import { ViewChannelInvitationPreferenceResponse } from '../models/ViewChannelInvitationPreferenceResponse';
import { ViewCountPreferenceOfChannelByUrlResponse } from '../models/ViewCountPreferenceOfChannelByUrlResponse';
import { ViewDataExportByIdResponse } from '../models/ViewDataExportByIdResponse';
import { ViewDefaultChannelInvitationPreferenceResponse } from '../models/ViewDefaultChannelInvitationPreferenceResponse';
import { ViewGdprRequestByIdResponse } from '../models/ViewGdprRequestByIdResponse';
import { ViewNumberOfChannelsByJoinStatusResponse } from '../models/ViewNumberOfChannelsByJoinStatusResponse';
import { ViewNumberOfChannelsWithUnreadMessagesResponse } from '../models/ViewNumberOfChannelsWithUnreadMessagesResponse';
import { ViewNumberOfConcurrentConnectionsResponse } from '../models/ViewNumberOfConcurrentConnectionsResponse';
import { ViewNumberOfDailyActiveUsersResponse } from '../models/ViewNumberOfDailyActiveUsersResponse';
import { ViewNumberOfMonthlyActiveUsersResponse } from '../models/ViewNumberOfMonthlyActiveUsersResponse';
import { ViewNumberOfPeakConnectionsResponse } from '../models/ViewNumberOfPeakConnectionsResponse';
import { ViewNumberOfUnreadItemsResponse } from '../models/ViewNumberOfUnreadItemsResponse';
import { ViewNumberOfUnreadMessagesResponse } from '../models/ViewNumberOfUnreadMessagesResponse';
import { ViewPushConfigurationByIdResponse } from '../models/ViewPushConfigurationByIdResponse';
import { ViewPushNotificationContentTemplateResponse } from '../models/ViewPushNotificationContentTemplateResponse';
import { ViewPushPreferencesForChannelByUrlResponse } from '../models/ViewPushPreferencesForChannelByUrlResponse';
import { ViewPushPreferencesResponse } from '../models/ViewPushPreferencesResponse';
import { ViewSecondaryApiTokenByTokenResponse } from '../models/ViewSecondaryApiTokenByTokenResponse';
import { ViewTotalNumberOfMessagesInChannelResponse } from '../models/ViewTotalNumberOfMessagesInChannelResponse';
import { ViewUserMetadataResponse } from '../models/ViewUserMetadataResponse';
import { ViewWhoOwnsRegistrationOrDeviceTokenByTokenResponseInner } from '../models/ViewWhoOwnsRegistrationOrDeviceTokenByTokenResponseInner';
import { AnnouncementApiRequestFactory, AnnouncementApiResponseProcessor } from "../apis/AnnouncementApi";
export interface AnnouncementApiGetDetailedOpenRateOfAnnouncementGroupRequest {
    announcementGroup: string;
    apiToken?: string;
}
export interface AnnouncementApiGetStatisticsRequest {
    apiToken?: string;
}
export interface AnnouncementApiGetStatisticsDailyRequest {
    startDate: string;
    endDate: string;
    startWeek: string;
    endWeek: string;
    startMonth: string;
    endMonth: string;
    apiToken?: string;
    announcementGroup?: string;
}
export interface AnnouncementApiGetStatisticsMonthlyRequest {
    apiToken?: string;
}
export interface AnnouncementApiListAnnouncementGroupsRequest {
    apiToken?: string;
    token?: string;
    limit?: number;
}
export interface AnnouncementApiScheduleAnnouncementRequest {
    apiToken?: string;
    scheduleAnnouncementData?: ScheduleAnnouncementData;
}
export interface AnnouncementApiUpdateAnnouncementByIdRequest {
    uniqueId: string;
    apiToken?: string;
    updateAnnouncementByIdData?: UpdateAnnouncementByIdData;
}
export interface AnnouncementApiViewAnnouncementByIdRequest {
    uniqueId: string;
    apiToken?: string;
}
export declare class ObjectAnnouncementApi {
    private api;
    constructor(configuration: Configuration, requestFactory?: AnnouncementApiRequestFactory, responseProcessor?: AnnouncementApiResponseProcessor);
    getDetailedOpenRateOfAnnouncementGroup(param: AnnouncementApiGetDetailedOpenRateOfAnnouncementGroupRequest, options?: Configuration): Promise<GetDetailedOpenRateOfAnnouncementGroupResponse>;
    getStatistics(param?: AnnouncementApiGetStatisticsRequest, options?: Configuration): Promise<GetStatisticsResponse>;
    getStatisticsDaily(param: AnnouncementApiGetStatisticsDailyRequest, options?: Configuration): Promise<GetStatisticsDailyResponse>;
    getStatisticsMonthly(param?: AnnouncementApiGetStatisticsMonthlyRequest, options?: Configuration): Promise<GetStatisticsMonthlyResponse>;
    listAnnouncementGroups(param?: AnnouncementApiListAnnouncementGroupsRequest, options?: Configuration): Promise<ListAnnouncementGroupsResponse>;
    scheduleAnnouncement(param?: AnnouncementApiScheduleAnnouncementRequest, options?: Configuration): Promise<ScheduleAnnouncementResponse>;
    updateAnnouncementById(param: AnnouncementApiUpdateAnnouncementByIdRequest, options?: Configuration): Promise<UpdateAnnouncementByIdResponse>;
    viewAnnouncementById(param: AnnouncementApiViewAnnouncementByIdRequest, options?: Configuration): Promise<ViewAnnouncementByIdResponse>;
}
import { ApplicationApiRequestFactory, ApplicationApiResponseProcessor } from "../apis/ApplicationApi";
export interface ApplicationApiAddApnsPushConfigurationRequest {
    apiToken?: string;
    addApnsPushConfigurationData?: AddApnsPushConfigurationData;
}
export interface ApplicationApiAddFcmPushConfigurationRequest {
    apiToken?: string;
    addFcmPushConfigurationData?: AddFcmPushConfigurationData;
}
export interface ApplicationApiAddHmsPushConfigurationRequest {
    apiToken?: string;
    addHmsPushConfigurationData?: AddHmsPushConfigurationData;
}
export interface ApplicationApiAddIpToWhitelistRequest {
    apiToken?: string;
    addIpToWhitelistData?: AddIpToWhitelistData;
}
export interface ApplicationApiBanUsersInChannelsWithCustomChannelTypeRequest {
    customType: string;
    apiToken?: string;
    banUsersInChannelsWithCustomChannelTypeData?: BanUsersInChannelsWithCustomChannelTypeData;
}
export interface ApplicationApiConfigureAutoEventMessagesRequest {
    apiToken?: string;
    configureAutoEventData?: ConfigureAutoEventData;
}
export interface ApplicationApiDeleteAllowedIpsFromWhitelistRequest {
    ipWhitelistAddresses: Array<string>;
    apiToken?: string;
}
export interface ApplicationApiDeleteApnsCertificateByIdRequest {
    providerId: string;
    apiToken?: string;
}
export interface ApplicationApiGenerateSecondaryApiTokenRequest {
    apiToken?: string;
    generateSecondaryApiTokenData?: GenerateSecondaryApiTokenData;
}
export interface ApplicationApiListAutoEventMessagesRequest {
    apiToken?: string;
}
export interface ApplicationApiListBannedUsersInChannelsWithCustomChannelTypeRequest {
    customType: string;
    apiToken?: string;
    token?: string;
    limit?: number;
}
export interface ApplicationApiListMutedUsersInChannelsWithCustomChannelTypeRequest {
    customType: string;
    apiToken?: string;
    token?: string;
    limit?: number;
}
export interface ApplicationApiListPushConfigurationsRequest {
    pushType: string;
    apiToken?: string;
}
export interface ApplicationApiListPushNotificationContentTemplatesRequest {
    apiToken?: string;
}
export interface ApplicationApiListSecondaryApiTokensRequest {
    apiToken?: string;
}
export interface ApplicationApiMuteUsersInChannelsWithCustomChannelTypeRequest {
    customType: string;
    apiToken?: string;
    muteUsersInChannelsWithCustomChannelTypeData?: MuteUsersInChannelsWithCustomChannelTypeData;
}
export interface ApplicationApiRemovePushConfigurationByIdRequest {
    pushType: string;
    providerId: string;
    apiToken?: string;
}
export interface ApplicationApiRetrieveIpWhitelistRequest {
    apiToken?: string;
}
export interface ApplicationApiRevokeSecondaryApiTokenByTokenRequest {
    apiToken2: string;
    apiToken?: string;
}
export interface ApplicationApiSetDomainFilterRequest {
    customType: string;
    apiToken?: string;
    setDomainFilterData?: SetDomainFilterData;
}
export interface ApplicationApiUnbanUsersInChannelsWithCustomChannelTypeRequest {
    customType: string;
    userIds: Array<string>;
    apiToken?: string;
}
export interface ApplicationApiUnmuteUsersInChannelsWithCustomChannelTypeRequest {
    customType: string;
    userIds: Array<string>;
    apiToken?: string;
}
export interface ApplicationApiUpdateApnsPushConfigurationByIdRequest {
    providerId: string;
    apiToken?: string;
    updateApnsPushConfigurationByIdData?: UpdateApnsPushConfigurationByIdData;
}
export interface ApplicationApiUpdateDefaultChannelInvitationPreferenceRequest {
    apiToken?: string;
    updateDefaultChannelInvitationPreferenceData?: UpdateDefaultChannelInvitationPreferenceData;
}
export interface ApplicationApiUpdateFcmPushConfigurationByIdRequest {
    providerId: string;
    apiToken?: string;
    updateFcmPushConfigurationByIdData?: UpdateFcmPushConfigurationByIdData;
}
export interface ApplicationApiUpdateHmsPushConfigurationByIdRequest {
    providerId: string;
    apiToken?: string;
    updateHmsPushConfigurationByIdData?: UpdateHmsPushConfigurationByIdData;
}
export interface ApplicationApiUpdatePushNotificationContentTemplateRequest {
    templateName: string;
    apiToken?: string;
    updatePushNotificationContentTemplateData?: UpdatePushNotificationContentTemplateData;
}
export interface ApplicationApiViewDefaultChannelInvitationPreferenceRequest {
    apiToken?: string;
}
export interface ApplicationApiViewPushConfigurationByIdRequest {
    pushType: string;
    providerId: string;
    apiToken?: string;
}
export interface ApplicationApiViewPushNotificationContentTemplateRequest {
    templateName: string;
    apiToken?: string;
}
export interface ApplicationApiViewSecondaryApiTokenByTokenRequest {
    apiToken2: string;
    apiToken?: string;
}
export declare class ObjectApplicationApi {
    private api;
    constructor(configuration: Configuration, requestFactory?: ApplicationApiRequestFactory, responseProcessor?: ApplicationApiResponseProcessor);
    addApnsPushConfiguration(param?: ApplicationApiAddApnsPushConfigurationRequest, options?: Configuration): Promise<AddApnsPushConfigurationResponse>;
    addFcmPushConfiguration(param?: ApplicationApiAddFcmPushConfigurationRequest, options?: Configuration): Promise<AddFcmPushConfigurationResponse>;
    addHmsPushConfiguration(param?: ApplicationApiAddHmsPushConfigurationRequest, options?: Configuration): Promise<AddHmsPushConfigurationResponse>;
    addIpToWhitelist(param?: ApplicationApiAddIpToWhitelistRequest, options?: Configuration): Promise<AddIpToWhitelistResponse>;
    banUsersInChannelsWithCustomChannelType(param: ApplicationApiBanUsersInChannelsWithCustomChannelTypeRequest, options?: Configuration): Promise<any>;
    configureAutoEventMessages(param?: ApplicationApiConfigureAutoEventMessagesRequest, options?: Configuration): Promise<SendBirdAutoEventMessageSettings>;
    deleteAllowedIpsFromWhitelist(param: ApplicationApiDeleteAllowedIpsFromWhitelistRequest, options?: Configuration): Promise<DeleteAllowedIpsFromWhitelistResponse>;
    deleteApnsCertificateById(param: ApplicationApiDeleteApnsCertificateByIdRequest, options?: Configuration): Promise<DeleteApnsCertificateByIdResponse>;
    generateSecondaryApiToken(param?: ApplicationApiGenerateSecondaryApiTokenRequest, options?: Configuration): Promise<GenerateSecondaryApiTokenResponse>;
    listAutoEventMessages(param?: ApplicationApiListAutoEventMessagesRequest, options?: Configuration): Promise<SendBirdAutoEventMessageSettings>;
    listBannedUsersInChannelsWithCustomChannelType(param: ApplicationApiListBannedUsersInChannelsWithCustomChannelTypeRequest, options?: Configuration): Promise<CustomTypeListBannedUsersResponse>;
    listMutedUsersInChannelsWithCustomChannelType(param: ApplicationApiListMutedUsersInChannelsWithCustomChannelTypeRequest, options?: Configuration): Promise<ListMutedUsersInChannelsWithCustomChannelType200Response>;
    listPushConfigurations(param: ApplicationApiListPushConfigurationsRequest, options?: Configuration): Promise<ListPushConfigurationsResponse>;
    listPushNotificationContentTemplates(param?: ApplicationApiListPushNotificationContentTemplatesRequest, options?: Configuration): Promise<ListPushNotificationContentTemplatesResponse>;
    listSecondaryApiTokens(param?: ApplicationApiListSecondaryApiTokensRequest, options?: Configuration): Promise<ListSecondaryApiTokensResponse>;
    muteUsersInChannelsWithCustomChannelType(param: ApplicationApiMuteUsersInChannelsWithCustomChannelTypeRequest, options?: Configuration): Promise<any>;
    removePushConfigurationById(param: ApplicationApiRemovePushConfigurationByIdRequest, options?: Configuration): Promise<RemovePushConfigurationByIdResponse>;
    retrieveIpWhitelist(param?: ApplicationApiRetrieveIpWhitelistRequest, options?: Configuration): Promise<RetrieveIpWhitelistResponse>;
    revokeSecondaryApiTokenByToken(param: ApplicationApiRevokeSecondaryApiTokenByTokenRequest, options?: Configuration): Promise<RevokeSecondaryApiTokenByTokenResponse>;
    setDomainFilter(param: ApplicationApiSetDomainFilterRequest, options?: Configuration): Promise<SendBirdChannelResponse>;
    unbanUsersInChannelsWithCustomChannelType(param: ApplicationApiUnbanUsersInChannelsWithCustomChannelTypeRequest, options?: Configuration): Promise<any>;
    unmuteUsersInChannelsWithCustomChannelType(param: ApplicationApiUnmuteUsersInChannelsWithCustomChannelTypeRequest, options?: Configuration): Promise<any>;
    updateApnsPushConfigurationById(param: ApplicationApiUpdateApnsPushConfigurationByIdRequest, options?: Configuration): Promise<UpdateApnsPushConfigurationByIdResponse>;
    updateDefaultChannelInvitationPreference(param?: ApplicationApiUpdateDefaultChannelInvitationPreferenceRequest, options?: Configuration): Promise<UpdateDefaultChannelInvitationPreferenceResponse>;
    updateFcmPushConfigurationById(param: ApplicationApiUpdateFcmPushConfigurationByIdRequest, options?: Configuration): Promise<UpdateFcmPushConfigurationByIdResponse>;
    updateHmsPushConfigurationById(param: ApplicationApiUpdateHmsPushConfigurationByIdRequest, options?: Configuration): Promise<UpdateHmsPushConfigurationByIdResponse>;
    updatePushNotificationContentTemplate(param: ApplicationApiUpdatePushNotificationContentTemplateRequest, options?: Configuration): Promise<UpdatePushNotificationContentTemplateResponse>;
    viewDefaultChannelInvitationPreference(param?: ApplicationApiViewDefaultChannelInvitationPreferenceRequest, options?: Configuration): Promise<ViewDefaultChannelInvitationPreferenceResponse>;
    viewPushConfigurationById(param: ApplicationApiViewPushConfigurationByIdRequest, options?: Configuration): Promise<ViewPushConfigurationByIdResponse>;
    viewPushNotificationContentTemplate(param: ApplicationApiViewPushNotificationContentTemplateRequest, options?: Configuration): Promise<ViewPushNotificationContentTemplateResponse>;
    viewSecondaryApiTokenByToken(param: ApplicationApiViewSecondaryApiTokenByTokenRequest, options?: Configuration): Promise<ViewSecondaryApiTokenByTokenResponse>;
}
import { BotApiRequestFactory, BotApiResponseProcessor } from "../apis/BotApi";
export interface BotApiCreateBotRequest {
    apiToken?: string;
    createBotData?: CreateBotData;
}
export interface BotApiDeleteBotByIdRequest {
    botUserid: string;
    apiToken?: string;
}
export interface BotApiJoinChannelsRequest {
    botUserid: string;
    apiToken?: string;
    joinChannelsData?: JoinChannelsData;
}
export interface BotApiLeaveChannelsRequest {
    botUserid: string;
    apiToken?: string;
    channelUrl?: string;
}
export interface BotApiLeaveChannelsByUrlRequest {
    botUserid: string;
    channelUrl: string;
    apiToken?: string;
}
export interface BotApiListBotsRequest {
    apiToken?: string;
    token?: string;
    limit?: number;
}
export interface BotApiSendBotsMessageRequest {
    botUserid: string;
    apiToken?: string;
    sendBotSMessageData?: SendBotSMessageData;
}
export interface BotApiUpdateBotByIdRequest {
    botUserid: string;
    apiToken?: string;
    updateBotByIdData?: UpdateBotByIdData;
}
export interface BotApiViewBotByIdRequest {
    botUserid: string;
    apiToken?: string;
}
export declare class ObjectBotApi {
    private api;
    constructor(configuration: Configuration, requestFactory?: BotApiRequestFactory, responseProcessor?: BotApiResponseProcessor);
    createBot(param?: BotApiCreateBotRequest, options?: Configuration): Promise<CreateBotResponse>;
    deleteBotById(param: BotApiDeleteBotByIdRequest, options?: Configuration): Promise<any>;
    joinChannels(param: BotApiJoinChannelsRequest, options?: Configuration): Promise<JoinChannelsResponse>;
    leaveChannels(param: BotApiLeaveChannelsRequest, options?: Configuration): Promise<void>;
    leaveChannelsByUrl(param: BotApiLeaveChannelsByUrlRequest, options?: Configuration): Promise<any>;
    listBots(param?: BotApiListBotsRequest, options?: Configuration): Promise<ListBotsResponse>;
    sendBotsMessage(param: BotApiSendBotsMessageRequest, options?: Configuration): Promise<SendBirdBotsMessageResponse>;
    updateBotById(param: BotApiUpdateBotByIdRequest, options?: Configuration): Promise<UpdateBotByIdResponse>;
    viewBotById(param: BotApiViewBotByIdRequest, options?: Configuration): Promise<ViewBotByIdResponse>;
}
import { DataExportApiRequestFactory, DataExportApiResponseProcessor } from "../apis/DataExportApi";
export interface DataExportApiListDataExportsByMessageChannelOrUserRequest {
    dataType: string;
    apiToken?: string;
    token?: string;
    limit?: number;
}
export interface DataExportApiRegisterAndScheduleDataExportRequest {
    dataType: string;
    apiToken?: string;
    registerAndScheduleDataExportData?: RegisterAndScheduleDataExportData;
}
export interface DataExportApiViewDataExportByIdRequest {
    dataType: string;
    requestId: string;
    apiToken?: string;
}
export declare class ObjectDataExportApi {
    private api;
    constructor(configuration: Configuration, requestFactory?: DataExportApiRequestFactory, responseProcessor?: DataExportApiResponseProcessor);
    listDataExportsByMessageChannelOrUser(param: DataExportApiListDataExportsByMessageChannelOrUserRequest, options?: Configuration): Promise<ListDataExportsByMessageChannelOrUserResponse>;
    registerAndScheduleDataExport(param: DataExportApiRegisterAndScheduleDataExportRequest, options?: Configuration): Promise<RegisterAndScheduleDataExportResponse>;
    viewDataExportById(param: DataExportApiViewDataExportByIdRequest, options?: Configuration): Promise<ViewDataExportByIdResponse>;
}
import { DeleteAPinApiRequestFactory, DeleteAPinApiResponseProcessor } from "../apis/DeleteAPinApi";
export interface DeleteAPinApiV3ChannelTypeChannelUrlMessagesMessageIdPinDeleteRequest {
    channelType: string;
    channelUrl: string;
    messageId: number;
    apiToken?: string;
}
export declare class ObjectDeleteAPinApi {
    private api;
    constructor(configuration: Configuration, requestFactory?: DeleteAPinApiRequestFactory, responseProcessor?: DeleteAPinApiResponseProcessor);
    v3ChannelTypeChannelUrlMessagesMessageIdPinDelete(param: DeleteAPinApiV3ChannelTypeChannelUrlMessagesMessageIdPinDeleteRequest, options?: Configuration): Promise<SendBirdChannelResponse>;
}
import { GroupChannelApiRequestFactory, GroupChannelApiResponseProcessor } from "../apis/GroupChannelApi";
export interface GroupChannelApiGcAcceptInvitationRequest {
    channelUrl: string;
    apiToken?: string;
    gcAcceptInvitationData?: GcAcceptInvitationData;
}
export interface GroupChannelApiGcCancelTheRegistrationOfOperatorsRequest {
    channelUrl: string;
    operatorIds: Array<string>;
    apiToken?: string;
    deleteAll?: boolean;
}
export interface GroupChannelApiGcCheckIfMemberByIdRequest {
    channelUrl: string;
    userId: string;
    apiToken?: string;
}
export interface GroupChannelApiGcCreateChannelRequest {
    apiToken?: string;
    gcCreateChannelData?: GcCreateChannelData;
}
export interface GroupChannelApiGcDeclineInvitationRequest {
    channelUrl: string;
    apiToken?: string;
    gcDeclineInvitationData?: GcDeclineInvitationData;
}
export interface GroupChannelApiGcDeleteChannelByUrlRequest {
    channelUrl: string;
    apiToken?: string;
}
export interface GroupChannelApiGcHideOrArchiveChannelRequest {
    channelUrl: string;
    apiToken?: string;
    gcHideOrArchiveChannelData?: GcHideOrArchiveChannelData;
}
export interface GroupChannelApiGcInviteAsMembersRequest {
    channelUrl: string;
    apiToken?: string;
    gcInviteAsMembersData?: GcInviteAsMembersData;
}
export interface GroupChannelApiGcJoinChannelRequest {
    channelUrl: string;
    apiToken?: string;
    gcJoinChannelData?: GcJoinChannelData;
}
export interface GroupChannelApiGcLeaveChannelRequest {
    channelUrl: string;
    apiToken?: string;
    gcLeaveChannelData?: GcLeaveChannelData;
}
export interface GroupChannelApiGcListChannelsRequest {
    apiToken?: string;
    token?: string;
    limit?: number;
    distinctMode?: string;
    publicMode?: string;
    superMode?: string;
    createdAfter?: number;
    createdBefore?: number;
    showEmpty?: boolean;
    showMember?: boolean;
    showDeliveryReceipt?: boolean;
    showReadReceipt?: boolean;
    showMetadata?: boolean;
    showFrozen?: boolean;
    order?: string;
    metadataOrderKey?: string;
    customTypes?: string;
    customTypeStartswith?: string;
    channelUrls?: string;
    name?: string;
    nameContains?: string;
    nameStartswith?: string;
    membersExactlyIn?: string;
    membersIncludeIn?: string;
    queryType?: string;
    membersNickname?: string;
    membersNicknameContains?: string;
    metadataKey?: string;
    metadataValues?: string;
    metadataValueStartswith?: string;
    metacounterKey?: string;
    metacounterValues?: string;
    metacounterValueGt?: string;
    metacounterValueGte?: string;
    metacounterValueLt?: string;
    metacounterValueLte?: string;
    includeSortedMetaarrayInLastMessage?: boolean;
    customType?: string;
    readReceipt?: boolean;
    member?: boolean;
    isDistinct?: boolean;
    membersIn?: string;
    userId?: string;
}
export interface GroupChannelApiGcListMembersRequest {
    channelUrl: string;
    apiToken?: string;
    token?: string;
    limit?: number;
    showDeliveryReceipt?: boolean;
    showReadReceipt?: boolean;
    order?: string;
    operatorFilter?: string;
    memberStateFilter?: string;
    mutedMemberFilter?: string;
    nicknameStartswith?: string;
}
export interface GroupChannelApiGcListOperatorsRequest {
    channelUrl: string;
    apiToken?: string;
    token?: string;
    limit?: number;
}
export interface GroupChannelApiGcRegisterOperatorsRequest {
    channelUrl: string;
    apiToken?: string;
    gcRegisterOperatorsData?: GcRegisterOperatorsData;
}
export interface GroupChannelApiGcResetChatHistoryRequest {
    channelUrl: string;
    apiToken?: string;
    gcResetChatHistoryData?: GcResetChatHistoryData;
}
export interface GroupChannelApiGcStartTypingIndicatorsRequest {
    channelUrl: string;
    apiToken?: string;
    gcTypingIndicatorsData?: GcTypingIndicatorsData;
}
export interface GroupChannelApiGcStopTypingIndicatorsRequest {
    channelUrl: string;
    apiToken?: string;
    gcTypingIndicatorsData?: GcTypingIndicatorsData;
}
export interface GroupChannelApiGcUnhideOrUnarchiveChannelRequest {
    channelUrl: string;
    userId: string;
    apiToken?: string;
    shouldUnhideAll?: boolean;
}
export interface GroupChannelApiGcUpdateChannelByUrlRequest {
    channelUrl: string;
    apiToken?: string;
    gcUpdateChannelByUrlData?: GcUpdateChannelByUrlData;
}
export interface GroupChannelApiGcViewChannelByUrlRequest {
    channelUrl: string;
    apiToken?: string;
    showDeliveryReceipt?: boolean;
    showReadReceipt?: boolean;
    showMember?: boolean;
    readReceipt?: boolean;
    member?: boolean;
}
export declare class ObjectGroupChannelApi {
    private api;
    constructor(configuration: Configuration, requestFactory?: GroupChannelApiRequestFactory, responseProcessor?: GroupChannelApiResponseProcessor);
    gcAcceptInvitation(param: GroupChannelApiGcAcceptInvitationRequest, options?: Configuration): Promise<SendBirdGroupChannel>;
    gcCancelTheRegistrationOfOperators(param: GroupChannelApiGcCancelTheRegistrationOfOperatorsRequest, options?: Configuration): Promise<OcDeleteChannelByUrl200Response>;
    gcCheckIfMemberById(param: GroupChannelApiGcCheckIfMemberByIdRequest, options?: Configuration): Promise<GcCheckIfMemberByIdResponse>;
    gcCreateChannel(param?: GroupChannelApiGcCreateChannelRequest, options?: Configuration): Promise<SendBirdGroupChannel>;
    gcDeclineInvitation(param: GroupChannelApiGcDeclineInvitationRequest, options?: Configuration): Promise<OcDeleteChannelByUrl200Response>;
    gcDeleteChannelByUrl(param: GroupChannelApiGcDeleteChannelByUrlRequest, options?: Configuration): Promise<OcDeleteChannelByUrl200Response>;
    gcHideOrArchiveChannel(param: GroupChannelApiGcHideOrArchiveChannelRequest, options?: Configuration): Promise<OcDeleteChannelByUrl200Response>;
    gcInviteAsMembers(param: GroupChannelApiGcInviteAsMembersRequest, options?: Configuration): Promise<SendBirdGroupChannel>;
    gcJoinChannel(param: GroupChannelApiGcJoinChannelRequest, options?: Configuration): Promise<void>;
    gcLeaveChannel(param: GroupChannelApiGcLeaveChannelRequest, options?: Configuration): Promise<OcDeleteChannelByUrl200Response>;
    gcListChannels(param?: GroupChannelApiGcListChannelsRequest, options?: Configuration): Promise<GcListChannelsResponse>;
    gcListMembers(param: GroupChannelApiGcListMembersRequest, options?: Configuration): Promise<GcListMembersResponse>;
    gcListOperators(param: GroupChannelApiGcListOperatorsRequest, options?: Configuration): Promise<GcListOperatorsResponse>;
    gcRegisterOperators(param: GroupChannelApiGcRegisterOperatorsRequest, options?: Configuration): Promise<GcRegisterOperatorsResponse>;
    gcResetChatHistory(param: GroupChannelApiGcResetChatHistoryRequest, options?: Configuration): Promise<GcResetChatHistoryResponse>;
    gcStartTypingIndicators(param: GroupChannelApiGcStartTypingIndicatorsRequest, options?: Configuration): Promise<OcDeleteChannelByUrl200Response>;
    gcStopTypingIndicators(param: GroupChannelApiGcStopTypingIndicatorsRequest, options?: Configuration): Promise<OcDeleteChannelByUrl200Response>;
    gcUnhideOrUnarchiveChannel(param: GroupChannelApiGcUnhideOrUnarchiveChannelRequest, options?: Configuration): Promise<OcDeleteChannelByUrl200Response>;
    gcUpdateChannelByUrl(param: GroupChannelApiGcUpdateChannelByUrlRequest, options?: Configuration): Promise<SendBirdGroupChannel>;
    gcViewChannelByUrl(param: GroupChannelApiGcViewChannelByUrlRequest, options?: Configuration): Promise<SendBirdGroupChannel>;
}
import { MessageApiRequestFactory, MessageApiResponseProcessor } from "../apis/MessageApi";
export interface MessageApiAddEmojiCategoriesRequest {
    apiToken?: string;
    body?: any;
}
export interface MessageApiAddEmojisRequest {
    apiToken?: string;
    addEmojisData?: AddEmojisData;
}
export interface MessageApiAddExtraDataToMessageRequest {
    channelType: string;
    channelUrl: string;
    messageId: string;
    apiToken?: string;
    addExtraDataToMessageData?: AddExtraDataToMessageData;
}
export interface MessageApiAddReactionToAMessageRequest {
    channelType: string;
    channelUrl: string;
    messageId: string;
    apiToken?: string;
    addReactionToAMessageData?: AddReactionToAMessageData;
}
export interface MessageApiDeleteEmojiByKeyRequest {
    emojiKey: string;
    apiToken?: string;
}
export interface MessageApiDeleteEmojiCategoryByIdRequest {
    emojiCategoryId: string;
    apiToken?: string;
}
export interface MessageApiDeleteMessageByIdRequest {
    channelType: string;
    channelUrl: string;
    messageId: string;
    apiToken?: string;
}
export interface MessageApiEnableReactionsRequest {
    apiToken?: string;
    enableReactionsData?: EnableReactionsData;
}
export interface MessageApiGcMarkAllMessagesAsDeliveredRequest {
    channelUrl: string;
    apiToken?: string;
    gcMarkAllMessagesAsDeliveredData?: GcMarkAllMessagesAsDeliveredData;
}
export interface MessageApiGcMarkAllMessagesAsReadRequest {
    channelUrl: string;
    apiToken?: string;
    gcMarkAllMessagesAsReadData?: GcMarkAllMessagesAsReadData;
}
export interface MessageApiGcViewNumberOfEachMembersUnreadMessagesRequest {
    channelUrl: string;
    apiToken?: string;
    userIds?: Array<string>;
}
export interface MessageApiGetEmojiByKeyRequest {
    emojiKey: string;
    apiToken?: string;
}
export interface MessageApiGetEmojiCategoryByIdRequest {
    emojiCategoryId: string;
    apiToken?: string;
}
export interface MessageApiListAllEmojisAndEmojiCategoriesRequest {
    apiToken?: string;
}
export interface MessageApiListAnnouncementsRequest {
    apiToken?: string;
    token?: string;
    limit?: number;
    order?: string;
    status?: string;
    announcementGroup?: string;
}
export interface MessageApiListEmojisRequest {
    apiToken?: string;
}
export interface MessageApiListMessagesRequest {
    channelType: string;
    channelUrl: string;
    apiToken?: string;
    messageTs?: string;
    messageId?: number;
    prevLimit?: number;
    nextLimit?: number;
    include?: boolean;
    reverse?: boolean;
    senderId?: string;
    senderIds?: string;
    operatorFilter?: string;
    customTypes?: string;
    messageType?: string;
    includingRemoved?: boolean;
    includeReactions?: boolean;
    includeReplyType?: 'NONE' | 'ALL' | 'ONLY_REPLY_TO_CHANNEL';
    includeParentMessageInfo?: boolean;
    withSortedMetaArray?: boolean;
    showSubchannelMessagesOnly?: boolean;
    userId?: string;
    customType?: string;
    withMetaArray?: boolean;
}
export interface MessageApiListReactionsOfMessageRequest {
    channelType: string;
    channelUrl: string;
    messageId: string;
    apiToken?: string;
    listUsers?: boolean;
}
export interface MessageApiMigrateMessagesByUrlRequest {
    targetChannelUrl: string;
    apiToken?: string;
    body?: any;
}
export interface MessageApiRemoveExtraDataFromMessageRequest {
    channelType: string;
    channelUrl: string;
    messageId: string;
    apiToken?: string;
    keys?: Array<string>;
}
export interface MessageApiRemoveReactionFromAMessageRequest {
    channelType: string;
    channelUrl: string;
    messageId: string;
    apiToken?: string;
    userId?: string;
    reaction?: string;
}
export interface MessageApiSendMessageRequest {
    channelType: string;
    channelUrl: string;
    apiToken?: string;
    sendMessageData?: SendMessageData;
}
export interface MessageApiTranslateMessageIntoOtherLanguagesRequest {
    channelType: string;
    channelUrl: string;
    messageId: string;
    apiToken?: string;
    translateMessageIntoOtherLanguagesData?: TranslateMessageIntoOtherLanguagesData;
}
export interface MessageApiUpdateEmojiCategoryUrlByIdRequest {
    emojiCategoryId: string;
    apiToken?: string;
    updateEmojiCategoryUrlByIdData?: UpdateEmojiCategoryUrlByIdData;
}
export interface MessageApiUpdateEmojiUrlByKeyRequest {
    emojiKey: string;
    apiToken?: string;
    updateEmojiUrlByKeyData?: UpdateEmojiUrlByKeyData;
}
export interface MessageApiUpdateExtraDataInMessageRequest {
    channelType: string;
    channelUrl: string;
    messageId: string;
    apiToken?: string;
    updateExtraDataInMessageData?: UpdateExtraDataInMessageData;
}
export interface MessageApiUpdateMessageByIdRequest {
    channelType: string;
    channelUrl: string;
    messageId: string;
    apiToken?: string;
    updateMessageByIdData?: UpdateMessageByIdData;
}
export interface MessageApiUseDefaultEmojisRequest {
    apiToken?: string;
    useDefaultEmojisData?: UseDefaultEmojisData;
}
export interface MessageApiViewMessageByIdRequest {
    channelType: string;
    channelUrl: string;
    messageId: string;
    apiToken?: string;
    withSortedMetaArray?: boolean;
    withMetaArray?: boolean;
    includeParentMessageInfo?: boolean;
}
export interface MessageApiViewTotalNumberOfMessagesInChannelRequest {
    channelType: string;
    channelUrl: string;
    apiToken?: string;
}
export declare class ObjectMessageApi {
    private api;
    constructor(configuration: Configuration, requestFactory?: MessageApiRequestFactory, responseProcessor?: MessageApiResponseProcessor);
    addEmojiCategories(param?: MessageApiAddEmojiCategoriesRequest, options?: Configuration): Promise<AddEmojiCategoriesResponse>;
    addEmojis(param?: MessageApiAddEmojisRequest, options?: Configuration): Promise<AddEmojisResponse>;
    addExtraDataToMessage(param: MessageApiAddExtraDataToMessageRequest, options?: Configuration): Promise<AddExtraDataToMessageResponse>;
    addReactionToAMessage(param: MessageApiAddReactionToAMessageRequest, options?: Configuration): Promise<AddReactionToAMessageResponse>;
    deleteEmojiByKey(param: MessageApiDeleteEmojiByKeyRequest, options?: Configuration): Promise<void>;
    deleteEmojiCategoryById(param: MessageApiDeleteEmojiCategoryByIdRequest, options?: Configuration): Promise<any>;
    deleteMessageById(param: MessageApiDeleteMessageByIdRequest, options?: Configuration): Promise<any>;
    enableReactions(param?: MessageApiEnableReactionsRequest, options?: Configuration): Promise<EnableReactionsResponse>;
    gcMarkAllMessagesAsDelivered(param: MessageApiGcMarkAllMessagesAsDeliveredRequest, options?: Configuration): Promise<GcMarkAllMessagesAsDeliveredResponse>;
    gcMarkAllMessagesAsRead(param: MessageApiGcMarkAllMessagesAsReadRequest, options?: Configuration): Promise<any>;
    gcViewNumberOfEachMembersUnreadMessages(param: MessageApiGcViewNumberOfEachMembersUnreadMessagesRequest, options?: Configuration): Promise<GcViewNumberOfEachMembersUnreadMessagesResponse>;
    getEmojiByKey(param: MessageApiGetEmojiByKeyRequest, options?: Configuration): Promise<SendBirdEmoji>;
    getEmojiCategoryById(param: MessageApiGetEmojiCategoryByIdRequest, options?: Configuration): Promise<SendBirdEmojiCategory>;
    listAllEmojisAndEmojiCategories(param?: MessageApiListAllEmojisAndEmojiCategoriesRequest, options?: Configuration): Promise<ListAllEmojisAndEmojiCategoriesResponse>;
    listAnnouncements(param?: MessageApiListAnnouncementsRequest, options?: Configuration): Promise<ListAnnouncementsResponse>;
    listEmojis(param?: MessageApiListEmojisRequest, options?: Configuration): Promise<ListEmojisResponse>;
    listMessages(param: MessageApiListMessagesRequest, options?: Configuration): Promise<ListMessagesResponse>;
    listReactionsOfMessage(param: MessageApiListReactionsOfMessageRequest, options?: Configuration): Promise<ListReactionsOfMessageResponse>;
    migrateMessagesByUrl(param: MessageApiMigrateMessagesByUrlRequest, options?: Configuration): Promise<void>;
    removeExtraDataFromMessage(param: MessageApiRemoveExtraDataFromMessageRequest, options?: Configuration): Promise<any>;
    removeReactionFromAMessage(param: MessageApiRemoveReactionFromAMessageRequest, options?: Configuration): Promise<RemoveReactionFromAMessageResponse>;
    sendMessage(param: MessageApiSendMessageRequest, options?: Configuration): Promise<SendBirdMessageResponse>;
    translateMessageIntoOtherLanguages(param: MessageApiTranslateMessageIntoOtherLanguagesRequest, options?: Configuration): Promise<SendBirdMessageResponse>;
    updateEmojiCategoryUrlById(param: MessageApiUpdateEmojiCategoryUrlByIdRequest, options?: Configuration): Promise<SendBirdEmojiCategory>;
    updateEmojiUrlByKey(param: MessageApiUpdateEmojiUrlByKeyRequest, options?: Configuration): Promise<SendBirdEmoji>;
    updateExtraDataInMessage(param: MessageApiUpdateExtraDataInMessageRequest, options?: Configuration): Promise<UpdateExtraDataInMessageResponse>;
    updateMessageById(param: MessageApiUpdateMessageByIdRequest, options?: Configuration): Promise<SendBirdMessageResponse>;
    useDefaultEmojis(param?: MessageApiUseDefaultEmojisRequest, options?: Configuration): Promise<UseDefaultEmojisResponse>;
    viewMessageById(param: MessageApiViewMessageByIdRequest, options?: Configuration): Promise<SendBirdMessageResponse>;
    viewTotalNumberOfMessagesInChannel(param: MessageApiViewTotalNumberOfMessagesInChannelRequest, options?: Configuration): Promise<ViewTotalNumberOfMessagesInChannelResponse>;
}
import { MetadataApiRequestFactory, MetadataApiResponseProcessor } from "../apis/MetadataApi";
export interface MetadataApiCreateChannelMetacounterRequest {
    channelType: string;
    channelUrl: string;
    apiToken?: string;
    createChannelMetacounterData?: CreateChannelMetacounterData;
}
export interface MetadataApiCreateChannelMetadataRequest {
    channelType: string;
    channelUrl: string;
    apiToken?: string;
    createChannelMetadataData?: CreateChannelMetadataData;
}
export interface MetadataApiCreateUserMetadataRequest {
    userId: string;
    apiToken?: string;
    createUserMetadataData?: CreateUserMetadataData;
}
export interface MetadataApiDeleteChannelMetacounterRequest {
    channelType: string;
    channelUrl: string;
    apiToken?: string;
}
export interface MetadataApiDeleteChannelMetacounterByKeyRequest {
    channelType: string;
    channelUrl: string;
    key: string;
    apiToken?: string;
}
export interface MetadataApiDeleteChannelMetadataRequest {
    channelType: string;
    channelUrl: string;
    apiToken?: string;
    key?: string;
}
export interface MetadataApiDeleteChannelMetadataByKeyRequest {
    channelType: string;
    channelUrl: string;
    key: string;
    apiToken?: string;
}
export interface MetadataApiDeleteUserMetadataRequest {
    userId: string;
    apiToken?: string;
    key?: string;
}
export interface MetadataApiDeleteUserMetadataByKeyRequest {
    userId: string;
    key: string;
    apiToken?: string;
}
export interface MetadataApiUpdateChannelMetacounterRequest {
    channelType: string;
    channelUrl: string;
    apiToken?: string;
    updateChannelMetacounterData?: UpdateChannelMetacounterData;
}
export interface MetadataApiUpdateChannelMetacounterByKeyRequest {
    channelType: string;
    channelUrl: string;
    key: string;
    apiToken?: string;
    body?: any;
}
export interface MetadataApiUpdateChannelMetadataRequest {
    channelType: string;
    channelUrl: string;
    apiToken?: string;
    updateChannelMetadataData?: UpdateChannelMetadataData;
}
export interface MetadataApiUpdateChannelMetadataByKeyRequest {
    channelType: string;
    channelUrl: string;
    key: string;
    apiToken?: string;
    body?: any;
}
export interface MetadataApiUpdateUserMetadataRequest {
    userId: string;
    apiToken?: string;
    updateUserMetadataData?: UpdateUserMetadataData;
}
export interface MetadataApiUpdateUserMetadataByKeyRequest {
    userId: string;
    key: string;
    apiToken?: string;
    body?: any;
}
export interface MetadataApiViewChannelMetacounterRequest {
    channelType: string;
    channelUrl: string;
    apiToken?: string;
    key?: string;
    keys?: Array<string>;
}
export interface MetadataApiViewChannelMetacounterByKeyRequest {
    channelType: string;
    channelUrl: string;
    key: string;
    apiToken?: string;
}
export interface MetadataApiViewChannelMetadataRequest {
    channelType: string;
    channelUrl: string;
    apiToken?: string;
    key?: string;
    keys?: Array<string>;
}
export interface MetadataApiViewChannelMetadataByKeyRequest {
    channelType: string;
    channelUrl: string;
    key: string;
    apiToken?: string;
}
export interface MetadataApiViewUserMetadataRequest {
    userId: string;
    apiToken?: string;
    key?: string;
    keys?: Array<string>;
}
export interface MetadataApiViewUserMetadataByKeyRequest {
    userId: string;
    key: string;
    apiToken?: string;
}
export declare class ObjectMetadataApi {
    private api;
    constructor(configuration: Configuration, requestFactory?: MetadataApiRequestFactory, responseProcessor?: MetadataApiResponseProcessor);
    createChannelMetacounter(param: MetadataApiCreateChannelMetacounterRequest, options?: Configuration): Promise<any>;
    createChannelMetadata(param: MetadataApiCreateChannelMetadataRequest, options?: Configuration): Promise<CreateChannelMetadataResponse>;
    createUserMetadata(param: MetadataApiCreateUserMetadataRequest, options?: Configuration): Promise<CreateUserMetadataResponse>;
    deleteChannelMetacounter(param: MetadataApiDeleteChannelMetacounterRequest, options?: Configuration): Promise<void>;
    deleteChannelMetacounterByKey(param: MetadataApiDeleteChannelMetacounterByKeyRequest, options?: Configuration): Promise<void>;
    deleteChannelMetadata(param: MetadataApiDeleteChannelMetadataRequest, options?: Configuration): Promise<void>;
    deleteChannelMetadataByKey(param: MetadataApiDeleteChannelMetadataByKeyRequest, options?: Configuration): Promise<void>;
    deleteUserMetadata(param: MetadataApiDeleteUserMetadataRequest, options?: Configuration): Promise<void>;
    deleteUserMetadataByKey(param: MetadataApiDeleteUserMetadataByKeyRequest, options?: Configuration): Promise<void>;
    updateChannelMetacounter(param: MetadataApiUpdateChannelMetacounterRequest, options?: Configuration): Promise<any>;
    updateChannelMetacounterByKey(param: MetadataApiUpdateChannelMetacounterByKeyRequest, options?: Configuration): Promise<{
        [key: string]: string;
    }>;
    updateChannelMetadata(param: MetadataApiUpdateChannelMetadataRequest, options?: Configuration): Promise<{
        [key: string]: string;
    }>;
    updateChannelMetadataByKey(param: MetadataApiUpdateChannelMetadataByKeyRequest, options?: Configuration): Promise<{
        [key: string]: string;
    }>;
    updateUserMetadata(param: MetadataApiUpdateUserMetadataRequest, options?: Configuration): Promise<UpdateUserMetadataResponse>;
    updateUserMetadataByKey(param: MetadataApiUpdateUserMetadataByKeyRequest, options?: Configuration): Promise<{
        [key: string]: string;
    }>;
    viewChannelMetacounter(param: MetadataApiViewChannelMetacounterRequest, options?: Configuration): Promise<{
        [key: string]: string;
    }>;
    viewChannelMetacounterByKey(param: MetadataApiViewChannelMetacounterByKeyRequest, options?: Configuration): Promise<any>;
    viewChannelMetadata(param: MetadataApiViewChannelMetadataRequest, options?: Configuration): Promise<{
        [key: string]: string;
    }>;
    viewChannelMetadataByKey(param: MetadataApiViewChannelMetadataByKeyRequest, options?: Configuration): Promise<{
        [key: string]: string;
    }>;
    viewUserMetadata(param: MetadataApiViewUserMetadataRequest, options?: Configuration): Promise<ViewUserMetadataResponse>;
    viewUserMetadataByKey(param: MetadataApiViewUserMetadataByKeyRequest, options?: Configuration): Promise<{
        [key: string]: string;
    }>;
}
import { ModerationApiRequestFactory, ModerationApiResponseProcessor } from "../apis/ModerationApi";
export interface ModerationApiBanFromChannelsWithCustomChannelTypesRequest {
    userId: string;
    apiToken?: string;
    banFromChannelsWithCustomChannelTypesData?: BanFromChannelsWithCustomChannelTypesData;
}
export interface ModerationApiBlockUserRequest {
    userId: string;
    apiToken?: string;
    blockUserData?: BlockUserData;
}
export interface ModerationApiGcBanUserRequest {
    channelUrl: string;
    apiToken?: string;
    gcBanUserData?: GcBanUserData;
}
export interface ModerationApiGcFreezeChannelRequest {
    channelUrl: string;
    apiToken?: string;
    gcFreezeChannelData?: GcFreezeChannelData;
}
export interface ModerationApiGcListBannedUsersRequest {
    channelUrl: string;
    apiToken?: string;
    token?: string;
    limit?: number;
}
export interface ModerationApiGcListMutedUsersRequest {
    channelUrl: string;
    apiToken?: string;
    token?: string;
    limit?: number;
}
export interface ModerationApiGcMuteUserRequest {
    channelUrl: string;
    apiToken?: string;
    gcMuteUserData?: GcMuteUserData;
}
export interface ModerationApiGcUnbanUserByIdRequest {
    channelUrl: string;
    bannedUserId: string;
    apiToken?: string;
}
export interface ModerationApiGcUnmuteUserByIdRequest {
    channelUrl: string;
    mutedUserId: string;
    apiToken?: string;
}
export interface ModerationApiGcUpdateBanByIdRequest {
    channelUrl: string;
    bannedUserId: string;
    apiToken?: string;
    gcUpdateBanByIdData?: GcUpdateBanByIdData;
}
export interface ModerationApiGcViewBanByIdRequest {
    channelUrl: string;
    bannedUserId: string;
    apiToken?: string;
}
export interface ModerationApiGcViewMuteByIdRequest {
    channelUrl: string;
    mutedUserId: string;
    apiToken?: string;
}
export interface ModerationApiListBannedChannelsRequest {
    userId: string;
    apiToken?: string;
    token?: string;
    limit?: number;
}
export interface ModerationApiListBlockedUsersRequest {
    userId: string;
    apiToken?: string;
    token?: string;
    limit?: number;
    userIds?: string;
    metadatakey?: string;
    metadatavaluesIn?: string;
}
export interface ModerationApiListMutedChannelsRequest {
    userId: string;
    apiToken?: string;
    token?: string;
    limit?: number;
}
export interface ModerationApiMuteInChannelsWithCustomChannelTypesRequest {
    userId: string;
    apiToken?: string;
    muteInChannelsWithCustomChannelTypesData?: MuteInChannelsWithCustomChannelTypesData;
}
export interface ModerationApiOcBanUserRequest {
    channelUrl: string;
    apiToken?: string;
    ocBanUserData?: OcBanUserData;
}
export interface ModerationApiOcFreezeChannelRequest {
    channelUrl: string;
    apiToken?: string;
    ocFreezeChannelData?: OcFreezeChannelData;
}
export interface ModerationApiOcListBannedUsersRequest {
    channelUrl: string;
    apiToken?: string;
    token?: string;
    limit?: number;
}
export interface ModerationApiOcListMutedUsersRequest {
    channelUrl: string;
    apiToken?: string;
    token?: string;
    limit?: number;
}
export interface ModerationApiOcMuteUserRequest {
    channelUrl: string;
    apiToken?: string;
    ocMuteUserData?: OcMuteUserData;
}
export interface ModerationApiOcUnbanUserByIdRequest {
    channelUrl: string;
    bannedUserId: string;
    apiToken?: string;
}
export interface ModerationApiOcUnmuteUserByIdRequest {
    channelUrl: string;
    mutedUserId: string;
    apiToken?: string;
}
export interface ModerationApiOcUpdateBanByIdRequest {
    channelUrl: string;
    bannedUserId: string;
    apiToken?: string;
    ocUpdateBanByIdData?: OcUpdateBanByIdData;
}
export interface ModerationApiOcViewBanByIdRequest {
    channelUrl: string;
    bannedUserId: string;
    apiToken?: string;
}
export interface ModerationApiOcViewMuteByIdRequest {
    channelUrl: string;
    mutedUserId: string;
    apiToken?: string;
}
export interface ModerationApiUnblockUserByIdRequest {
    userId: string;
    targetId: string;
    apiToken?: string;
}
export declare class ObjectModerationApi {
    private api;
    constructor(configuration: Configuration, requestFactory?: ModerationApiRequestFactory, responseProcessor?: ModerationApiResponseProcessor);
    banFromChannelsWithCustomChannelTypes(param: ModerationApiBanFromChannelsWithCustomChannelTypesRequest, options?: Configuration): Promise<any>;
    blockUser(param: ModerationApiBlockUserRequest, options?: Configuration): Promise<BlockUserResponse>;
    gcBanUser(param: ModerationApiGcBanUserRequest, options?: Configuration): Promise<GcBanUserResponse>;
    gcFreezeChannel(param: ModerationApiGcFreezeChannelRequest, options?: Configuration): Promise<SendBirdGroupChannel>;
    gcListBannedUsers(param: ModerationApiGcListBannedUsersRequest, options?: Configuration): Promise<GcListBannedUsersResponse>;
    gcListMutedUsers(param: ModerationApiGcListMutedUsersRequest, options?: Configuration): Promise<GcListMutedUsersResponse>;
    gcMuteUser(param: ModerationApiGcMuteUserRequest, options?: Configuration): Promise<SendBirdGroupChannel>;
    gcUnbanUserById(param: ModerationApiGcUnbanUserByIdRequest, options?: Configuration): Promise<OcDeleteChannelByUrl200Response>;
    gcUnmuteUserById(param: ModerationApiGcUnmuteUserByIdRequest, options?: Configuration): Promise<OcDeleteChannelByUrl200Response>;
    gcUpdateBanById(param: ModerationApiGcUpdateBanByIdRequest, options?: Configuration): Promise<GcUpdateBanByIdResponse>;
    gcViewBanById(param: ModerationApiGcViewBanByIdRequest, options?: Configuration): Promise<GcViewBanByIdResponse>;
    gcViewMuteById(param: ModerationApiGcViewMuteByIdRequest, options?: Configuration): Promise<GcViewMuteByIdResponse>;
    listBannedChannels(param: ModerationApiListBannedChannelsRequest, options?: Configuration): Promise<ListBannedChannelsResponse>;
    listBlockedUsers(param: ModerationApiListBlockedUsersRequest, options?: Configuration): Promise<ListBlockedUsersResponse>;
    listMutedChannels(param: ModerationApiListMutedChannelsRequest, options?: Configuration): Promise<ListMutedChannelsResponse>;
    muteInChannelsWithCustomChannelTypes(param: ModerationApiMuteInChannelsWithCustomChannelTypesRequest, options?: Configuration): Promise<any>;
    ocBanUser(param: ModerationApiOcBanUserRequest, options?: Configuration): Promise<OcBanUserResponse>;
    ocFreezeChannel(param: ModerationApiOcFreezeChannelRequest, options?: Configuration): Promise<SendBirdOpenChannel>;
    ocListBannedUsers(param: ModerationApiOcListBannedUsersRequest, options?: Configuration): Promise<OcListBannedUsersResponse>;
    ocListMutedUsers(param: ModerationApiOcListMutedUsersRequest, options?: Configuration): Promise<OcListMutedUsersResponse>;
    ocMuteUser(param: ModerationApiOcMuteUserRequest, options?: Configuration): Promise<SendBirdOpenChannel>;
    ocUnbanUserById(param: ModerationApiOcUnbanUserByIdRequest, options?: Configuration): Promise<OcDeleteChannelByUrl200Response>;
    ocUnmuteUserById(param: ModerationApiOcUnmuteUserByIdRequest, options?: Configuration): Promise<OcDeleteChannelByUrl200Response>;
    ocUpdateBanById(param: ModerationApiOcUpdateBanByIdRequest, options?: Configuration): Promise<OcUpdateBanByIdResponse>;
    ocViewBanById(param: ModerationApiOcViewBanByIdRequest, options?: Configuration): Promise<OcViewBanByIdResponse>;
    ocViewMuteById(param: ModerationApiOcViewMuteByIdRequest, options?: Configuration): Promise<OcViewMuteByIdResponse>;
    unblockUserById(param: ModerationApiUnblockUserByIdRequest, options?: Configuration): Promise<any>;
}
import { OpenChannelApiRequestFactory, OpenChannelApiResponseProcessor } from "../apis/OpenChannelApi";
export interface OpenChannelApiOcCancelTheRegistrationOfOperatorsRequest {
    channelUrl: string;
    operatorIds: Array<string>;
    apiToken?: string;
    deleteAll?: boolean;
}
export interface OpenChannelApiOcCreateChannelRequest {
    apiToken?: string;
    ocCreateChannelData?: OcCreateChannelData;
}
export interface OpenChannelApiOcDeleteChannelByUrlRequest {
    channelUrl: string;
    apiToken?: string;
}
export interface OpenChannelApiOcListChannelsRequest {
    apiToken?: string;
    token?: string;
    limit?: number;
    customTypes?: string;
    nameContains?: string;
    urlContains?: string;
    showFrozen?: boolean;
    showMetadata?: boolean;
    customType?: string;
}
export interface OpenChannelApiOcListOperatorsRequest {
    channelUrl: string;
    apiToken?: string;
    token?: string;
    limit?: number;
}
export interface OpenChannelApiOcListParticipantsRequest {
    channelUrl: string;
    apiToken?: string;
    token?: string;
    limit?: number;
}
export interface OpenChannelApiOcRegisterOperatorsRequest {
    channelUrl: string;
    apiToken?: string;
    ocRegisterOperatorsData?: OcRegisterOperatorsData;
}
export interface OpenChannelApiOcUpdateChannelByUrlRequest {
    channelUrl: string;
    apiToken?: string;
    ocUpdateChannelByUrlData?: OcUpdateChannelByUrlData;
}
export interface OpenChannelApiOcViewChannelByUrlRequest {
    channelUrl: string;
    apiToken?: string;
}
export declare class ObjectOpenChannelApi {
    private api;
    constructor(configuration: Configuration, requestFactory?: OpenChannelApiRequestFactory, responseProcessor?: OpenChannelApiResponseProcessor);
    ocCancelTheRegistrationOfOperators(param: OpenChannelApiOcCancelTheRegistrationOfOperatorsRequest, options?: Configuration): Promise<void>;
    ocCreateChannel(param?: OpenChannelApiOcCreateChannelRequest, options?: Configuration): Promise<SendBirdOpenChannel>;
    ocDeleteChannelByUrl(param: OpenChannelApiOcDeleteChannelByUrlRequest, options?: Configuration): Promise<OcDeleteChannelByUrl200Response>;
    ocListChannels(param?: OpenChannelApiOcListChannelsRequest, options?: Configuration): Promise<OcListChannelsResponse>;
    ocListOperators(param: OpenChannelApiOcListOperatorsRequest, options?: Configuration): Promise<OcListOperatorsResponse>;
    ocListParticipants(param: OpenChannelApiOcListParticipantsRequest, options?: Configuration): Promise<OcListParticipantsResponse>;
    ocRegisterOperators(param: OpenChannelApiOcRegisterOperatorsRequest, options?: Configuration): Promise<OcDeleteChannelByUrl200Response>;
    ocUpdateChannelByUrl(param: OpenChannelApiOcUpdateChannelByUrlRequest, options?: Configuration): Promise<SendBirdOpenChannel>;
    ocViewChannelByUrl(param: OpenChannelApiOcViewChannelByUrlRequest, options?: Configuration): Promise<SendBirdOpenChannel>;
}
import { PinAMessageApiRequestFactory, PinAMessageApiResponseProcessor } from "../apis/PinAMessageApi";
export interface PinAMessageApiV3ChannelTypeChannelUrlMessagesMessageIdPinPostRequest {
    channelType: string;
    channelUrl: string;
    messageId: number;
    apiToken?: string;
}
export declare class ObjectPinAMessageApi {
    private api;
    constructor(configuration: Configuration, requestFactory?: PinAMessageApiRequestFactory, responseProcessor?: PinAMessageApiResponseProcessor);
    v3ChannelTypeChannelUrlMessagesMessageIdPinPost(param: PinAMessageApiV3ChannelTypeChannelUrlMessagesMessageIdPinPostRequest, options?: Configuration): Promise<SendBirdChannelResponse>;
}
import { PollApiRequestFactory, PollApiResponseProcessor } from "../apis/PollApi";
export interface PollApiV3PollsGetRequest {
    apiToken?: string;
    channelUrl?: string;
    channelType?: string;
    token?: string;
    limit?: number;
}
export interface PollApiV3PollsPollIdClosePutRequest {
    pollId: number;
    apiToken?: string;
}
export interface PollApiV3PollsPollIdDeleteRequest {
    pollId: number;
    apiToken?: string;
}
export interface PollApiV3PollsPollIdGetRequest {
    pollId: number;
    apiToken?: string;
    v3PollsPollIdDeleteRequest?: V3PollsPollIdDeleteRequest;
}
export interface PollApiV3PollsPollIdOptionsOptionIdDeleteRequest {
    pollId: number;
    optionId: number;
    apiToken?: string;
}
export interface PollApiV3PollsPollIdOptionsOptionIdGetRequest {
    pollId: number;
    optionId: number;
    apiToken?: string;
}
export interface PollApiV3PollsPollIdOptionsOptionIdPutRequest {
    pollId: number;
    optionId: number;
    apiToken?: string;
    v3PollsPollIdOptionsOptionIdDeleteRequest?: V3PollsPollIdOptionsOptionIdDeleteRequest;
}
export interface PollApiV3PollsPollIdOptionsOptionIdVotersGetRequest {
    pollId: number;
    optionId: number;
    apiToken?: string;
    v3PollsPollIdOptionsOptionIdVotersGetRequest?: V3PollsPollIdOptionsOptionIdVotersGetRequest;
}
export interface PollApiV3PollsPollIdOptionsPostRequest {
    pollId: number;
    apiToken?: string;
    v3PollsPollIdOptionsOptionIdDeleteRequest?: V3PollsPollIdOptionsOptionIdDeleteRequest;
}
export interface PollApiV3PollsPollIdPutRequest {
    pollId: number;
    apiToken?: string;
    v3PollsPollIdDeleteRequest1?: V3PollsPollIdDeleteRequest1;
}
export interface PollApiV3PollsPollIdVotePutRequest {
    pollId: number;
    apiToken?: string;
    v3PollsPollIdVotePutRequest?: V3PollsPollIdVotePutRequest;
}
export interface PollApiV3PollsPostRequest {
    title: string;
    options: Array<string>;
    apiToken?: string;
    v3PollsGetRequest?: V3PollsGetRequest;
}
export declare class ObjectPollApi {
    private api;
    constructor(configuration: Configuration, requestFactory?: PollApiRequestFactory, responseProcessor?: PollApiResponseProcessor);
    v3PollsGet(param?: PollApiV3PollsGetRequest, options?: Configuration): Promise<SendBirdPoll>;
    v3PollsPollIdClosePut(param: PollApiV3PollsPollIdClosePutRequest, options?: Configuration): Promise<SendBirdPoll>;
    v3PollsPollIdDelete(param: PollApiV3PollsPollIdDeleteRequest, options?: Configuration): Promise<any>;
    v3PollsPollIdGet(param: PollApiV3PollsPollIdGetRequest, options?: Configuration): Promise<SendBirdPoll>;
    v3PollsPollIdOptionsOptionIdDelete(param: PollApiV3PollsPollIdOptionsOptionIdDeleteRequest, options?: Configuration): Promise<any>;
    v3PollsPollIdOptionsOptionIdGet(param: PollApiV3PollsPollIdOptionsOptionIdGetRequest, options?: Configuration): Promise<SendBirdPollOption>;
    v3PollsPollIdOptionsOptionIdPut(param: PollApiV3PollsPollIdOptionsOptionIdPutRequest, options?: Configuration): Promise<SendBirdPoll>;
    v3PollsPollIdOptionsOptionIdVotersGet(param: PollApiV3PollsPollIdOptionsOptionIdVotersGetRequest, options?: Configuration): Promise<V3PollsPollIdOptionsOptionIdVotersGet200Response>;
    v3PollsPollIdOptionsPost(param: PollApiV3PollsPollIdOptionsPostRequest, options?: Configuration): Promise<SendBirdPoll>;
    v3PollsPollIdPut(param: PollApiV3PollsPollIdPutRequest, options?: Configuration): Promise<SendBirdPoll>;
    v3PollsPollIdVotePut(param: PollApiV3PollsPollIdVotePutRequest, options?: Configuration): Promise<SendBirdPoll>;
    v3PollsPost(param: PollApiV3PollsPostRequest, options?: Configuration): Promise<SendBirdPoll>;
}
import { PrivacyApiRequestFactory, PrivacyApiResponseProcessor } from "../apis/PrivacyApi";
export interface PrivacyApiCancelTheRegistrationOfGdprRequestByIdRequest {
    requestId: string;
    apiToken?: string;
}
export interface PrivacyApiListGdprRequestsRequest {
    apiToken?: string;
    token?: string;
    limit?: number;
}
export interface PrivacyApiRegisterGdprRequestRequest {
    apiToken?: string;
    registerGdprRequestData?: RegisterGdprRequestData;
}
export interface PrivacyApiViewGdprRequestByIdRequest {
    requestId: string;
    apiToken?: string;
}
export declare class ObjectPrivacyApi {
    private api;
    constructor(configuration: Configuration, requestFactory?: PrivacyApiRequestFactory, responseProcessor?: PrivacyApiResponseProcessor);
    cancelTheRegistrationOfGdprRequestById(param: PrivacyApiCancelTheRegistrationOfGdprRequestByIdRequest, options?: Configuration): Promise<void>;
    listGdprRequests(param?: PrivacyApiListGdprRequestsRequest, options?: Configuration): Promise<ListGdprRequestsResponse>;
    registerGdprRequest(param?: PrivacyApiRegisterGdprRequestRequest, options?: Configuration): Promise<RegisterGdprRequestResponse>;
    viewGdprRequestById(param: PrivacyApiViewGdprRequestByIdRequest, options?: Configuration): Promise<ViewGdprRequestByIdResponse>;
}
import { PushNotificationsApiRequestFactory, PushNotificationsApiResponseProcessor } from "../apis/PushNotificationsApi";
export interface PushNotificationsApiV3ApplicationsPushSettingsGetRequest {
    apiToken?: string;
}
export interface PushNotificationsApiV3ApplicationsPushSettingsPutRequest {
    apiToken?: string;
    v3ApplicationsPushSettingsGetRequest?: V3ApplicationsPushSettingsGetRequest;
}
export declare class ObjectPushNotificationsApi {
    private api;
    constructor(configuration: Configuration, requestFactory?: PushNotificationsApiRequestFactory, responseProcessor?: PushNotificationsApiResponseProcessor);
    v3ApplicationsPushSettingsGet(param?: PushNotificationsApiV3ApplicationsPushSettingsGetRequest, options?: Configuration): Promise<V3ApplicationsPushSettingsGet200Response>;
    v3ApplicationsPushSettingsPut(param?: PushNotificationsApiV3ApplicationsPushSettingsPutRequest, options?: Configuration): Promise<ListPushConfigurationsResponse>;
}
import { ReportApiRequestFactory, ReportApiResponseProcessor } from "../apis/ReportApi";
export interface ReportApiListReportsRequest {
    apiToken?: string;
    token?: string;
    limit?: number;
    startTs?: number;
    endTs?: number;
}
export interface ReportApiListReportsOnChannelByUrlRequest {
    channelType: string;
    channelUrl: string;
    apiToken?: string;
    token?: string;
    limit?: number;
}
export interface ReportApiListReportsOnMessageByIdRequest {
    channelType: string;
    channelUrl: string;
    messageId: string;
    apiToken?: string;
    token?: string;
    limit?: number;
}
export interface ReportApiListReportsOnUserByIdRequest {
    offendingUserId: string;
    apiToken?: string;
    token?: string;
    limit?: number;
}
export interface ReportApiReportChannelByUrlRequest {
    channelType: string;
    channelUrl: string;
    apiToken?: string;
    reportChannelByUrlData?: ReportChannelByUrlData;
}
export interface ReportApiReportMessageByIdRequest {
    channelType: string;
    channelUrl: string;
    messageId: string;
    apiToken?: string;
    reportMessageByIdData?: ReportMessageByIdData;
}
export interface ReportApiReportUserByIdRequest {
    offendingUserId: string;
    apiToken?: string;
    reportUserByIdData?: ReportUserByIdData;
}
export interface ReportApiViewModeratedMessageByIdRequest {
    channelType: string;
    channelUrl: string;
    messageId: string;
    apiToken?: string;
}
export declare class ObjectReportApi {
    private api;
    constructor(configuration: Configuration, requestFactory?: ReportApiRequestFactory, responseProcessor?: ReportApiResponseProcessor);
    listReports(param?: ReportApiListReportsRequest, options?: Configuration): Promise<ListReportsResponse>;
    listReportsOnChannelByUrl(param: ReportApiListReportsOnChannelByUrlRequest, options?: Configuration): Promise<ListReportsOnChannelByUrlResponse>;
    listReportsOnMessageById(param: ReportApiListReportsOnMessageByIdRequest, options?: Configuration): Promise<ListReportsOnMessageByIdResponse>;
    listReportsOnUserById(param: ReportApiListReportsOnUserByIdRequest, options?: Configuration): Promise<ListReportsOnUserByIdResponse>;
    reportChannelByUrl(param: ReportApiReportChannelByUrlRequest, options?: Configuration): Promise<ReportChannelByUrlResponse>;
    reportMessageById(param: ReportApiReportMessageByIdRequest, options?: Configuration): Promise<ReportMessageByIdResponse>;
    reportUserById(param: ReportApiReportUserByIdRequest, options?: Configuration): Promise<ReportUserByIdResponse>;
    viewModeratedMessageById(param: ReportApiViewModeratedMessageByIdRequest, options?: Configuration): Promise<any>;
}
import { ScheduledMessageApiRequestFactory, ScheduledMessageApiResponseProcessor } from "../apis/ScheduledMessageApi";
export interface ScheduledMessageApiV3ChannelTypeChannelUrlScheduledMessagesScheduledMessageIdSendNowPostRequest {
    channelType: string;
    channelUrl: string;
    scheduledMessageId: number;
    apiToken?: string;
}
export interface ScheduledMessageApiV3GroupChannelsChannelUrlScheduledMessagesPostRequest {
    channelUrl: string;
    apiToken?: string;
    v3GroupChannelsChannelUrlScheduledMessagesScheduledMessageIdDeleteRequest?: V3GroupChannelsChannelUrlScheduledMessagesScheduledMessageIdDeleteRequest;
}
export interface ScheduledMessageApiV3GroupChannelsChannelUrlScheduledMessagesScheduledMessageIdDeleteRequest {
    channelUrl: string;
    scheduledMessageId: number;
    apiToken?: string;
}
export interface ScheduledMessageApiV3GroupChannelsChannelUrlScheduledMessagesScheduledMessageIdGetRequest {
    channelUrl: string;
    scheduledMessageId: number;
    apiToken?: string;
}
export interface ScheduledMessageApiV3GroupChannelsChannelUrlScheduledMessagesScheduledMessageIdPostRequest {
    channelUrl: string;
    scheduledMessageId: number;
    apiToken?: string;
    v3GroupChannelsChannelUrlScheduledMessagesScheduledMessageIdDeleteRequest?: V3GroupChannelsChannelUrlScheduledMessagesScheduledMessageIdDeleteRequest;
}
export interface ScheduledMessageApiV3ScheduledMessagesCountGetRequest {
    apiToken?: string;
    channelType?: string;
    channelUrl?: string;
    senderId?: string;
    status?: Array<any>;
    messageType?: string;
}
export interface ScheduledMessageApiV3ScheduledMessagesGetRequest {
    apiToken?: string;
    channelType?: string;
    channelUrl?: string;
    senderId?: string;
    token?: string;
    limit?: number;
    order?: string;
    reverse?: boolean;
    status?: Array<any>;
    messageType?: string;
}
export declare class ObjectScheduledMessageApi {
    private api;
    constructor(configuration: Configuration, requestFactory?: ScheduledMessageApiRequestFactory, responseProcessor?: ScheduledMessageApiResponseProcessor);
    v3ChannelTypeChannelUrlScheduledMessagesScheduledMessageIdSendNowPost(param: ScheduledMessageApiV3ChannelTypeChannelUrlScheduledMessagesScheduledMessageIdSendNowPostRequest, options?: Configuration): Promise<any>;
    v3GroupChannelsChannelUrlScheduledMessagesPost(param: ScheduledMessageApiV3GroupChannelsChannelUrlScheduledMessagesPostRequest, options?: Configuration): Promise<V3ScheduledMessagesGet200Response>;
    v3GroupChannelsChannelUrlScheduledMessagesScheduledMessageIdDelete(param: ScheduledMessageApiV3GroupChannelsChannelUrlScheduledMessagesScheduledMessageIdDeleteRequest, options?: Configuration): Promise<V3ScheduledMessagesGet200Response>;
    v3GroupChannelsChannelUrlScheduledMessagesScheduledMessageIdGet(param: ScheduledMessageApiV3GroupChannelsChannelUrlScheduledMessagesScheduledMessageIdGetRequest, options?: Configuration): Promise<V3ScheduledMessagesGet200Response>;
    v3GroupChannelsChannelUrlScheduledMessagesScheduledMessageIdPost(param: ScheduledMessageApiV3GroupChannelsChannelUrlScheduledMessagesScheduledMessageIdPostRequest, options?: Configuration): Promise<V3ScheduledMessagesGet200Response>;
    v3ScheduledMessagesCountGet(param?: ScheduledMessageApiV3ScheduledMessagesCountGetRequest, options?: Configuration): Promise<V3ScheduledMessagesCountGet200Response>;
    v3ScheduledMessagesGet(param?: ScheduledMessageApiV3ScheduledMessagesGetRequest, options?: Configuration): Promise<V3ScheduledMessagesGet200Response>;
}
import { StatisticsApiRequestFactory, StatisticsApiResponseProcessor } from "../apis/StatisticsApi";
export interface StatisticsApiGetDetailedOpenRateOfAnnouncementByIdRequest {
    uniqueId: string;
    apiToken?: string;
}
export interface StatisticsApiGetDetailedOpenStatusOfAnnouncementByIdRequest {
    uniqueId: string;
    apiToken?: string;
    limit?: number;
    next?: string;
    uniqueIds?: Array<string>;
    channelUrls?: Array<string>;
    hasOpened?: boolean;
}
export interface StatisticsApiRetrieveAdvancedAnalyticsMetricsRequest {
    apiToken?: string;
}
export interface StatisticsApiViewNumberOfConcurrentConnectionsRequest {
    apiToken?: string;
}
export interface StatisticsApiViewNumberOfDailyActiveUsersRequest {
    apiToken?: string;
    date?: string;
}
export interface StatisticsApiViewNumberOfMonthlyActiveUsersRequest {
    apiToken?: string;
    date?: string;
}
export interface StatisticsApiViewNumberOfPeakConnectionsRequest {
    timeDimension: string;
    startYear: number;
    startMonth: number;
    endYear: number;
    endMonth: number;
    apiToken?: string;
    startDay?: number;
    endDay?: number;
}
export declare class ObjectStatisticsApi {
    private api;
    constructor(configuration: Configuration, requestFactory?: StatisticsApiRequestFactory, responseProcessor?: StatisticsApiResponseProcessor);
    getDetailedOpenRateOfAnnouncementById(param: StatisticsApiGetDetailedOpenRateOfAnnouncementByIdRequest, options?: Configuration): Promise<GetDetailedOpenRateOfAnnouncementByIdResponse>;
    getDetailedOpenStatusOfAnnouncementById(param: StatisticsApiGetDetailedOpenStatusOfAnnouncementByIdRequest, options?: Configuration): Promise<GetDetailedOpenStatusOfAnnouncementByIdResponse>;
    retrieveAdvancedAnalyticsMetrics(param?: StatisticsApiRetrieveAdvancedAnalyticsMetricsRequest, options?: Configuration): Promise<RetrieveAdvancedAnalyticsMetricsResponse>;
    viewNumberOfConcurrentConnections(param?: StatisticsApiViewNumberOfConcurrentConnectionsRequest, options?: Configuration): Promise<ViewNumberOfConcurrentConnectionsResponse>;
    viewNumberOfDailyActiveUsers(param?: StatisticsApiViewNumberOfDailyActiveUsersRequest, options?: Configuration): Promise<ViewNumberOfDailyActiveUsersResponse>;
    viewNumberOfMonthlyActiveUsers(param?: StatisticsApiViewNumberOfMonthlyActiveUsersRequest, options?: Configuration): Promise<ViewNumberOfMonthlyActiveUsersResponse>;
    viewNumberOfPeakConnections(param: StatisticsApiViewNumberOfPeakConnectionsRequest, options?: Configuration): Promise<ViewNumberOfPeakConnectionsResponse>;
}
import { UserApiRequestFactory, UserApiResponseProcessor } from "../apis/UserApi";
export interface UserApiAddRegistrationOrDeviceTokenRequest {
    userId: string;
    tokenType: string;
    apiToken?: string;
    addRegistrationOrDeviceTokenData?: AddRegistrationOrDeviceTokenData;
}
export interface UserApiChoosePushNotificationContentTemplateRequest {
    userId: string;
    apiToken?: string;
    body?: any;
}
export interface UserApiCreateUserRequest {
    apiToken?: string;
    createUserData?: CreateUserData;
}
export interface UserApiCreateUserTokenRequest {
    userId: string;
    apiToken?: string;
    createUserTokenData?: CreateUserTokenData;
}
export interface UserApiDeleteUserByIdRequest {
    userId: string;
    apiToken?: string;
}
export interface UserApiLeaveMyGroupChannelsRequest {
    userId: string;
    apiToken?: string;
    leaveMyGroupChannelsData?: LeaveMyGroupChannelsData;
}
export interface UserApiListMyGroupChannelsRequest {
    userId: string;
    apiToken?: string;
    token?: string;
    limit?: number;
    distinctMode?: string;
    publicMode?: string;
    superMode?: string;
    hiddenMode?: string;
    memberStateFilter?: string;
    unreadFilter?: string;
    createdAfter?: number;
    createdBefore?: number;
    showEmpty?: boolean;
    showFrozen?: boolean;
    showMember?: boolean;
    showDeliveryReceipt?: boolean;
    showReadReceipt?: boolean;
    order?: string;
    metadataOrderKey?: string;
    customTypes?: string;
    customTypeStartswith?: string;
    channelUrls?: string;
    name?: string;
    nameContains?: string;
    nameStartswith?: string;
    membersExactlyIn?: string;
    membersIncludeIn?: string;
    queryType?: string;
    membersNickname?: string;
    membersNicknameContains?: string;
    searchQuery?: string;
    searchFields?: string;
    metadataKey?: string;
    metadataValues?: string;
    metadataValueStartswith?: string;
    metacounterKey?: string;
    metacounterValues?: string;
    metacounterValueGt?: string;
    metacounterValueGte?: string;
    metacounterValueLt?: string;
    metacounterValueLte?: string;
    customType?: string;
}
export interface UserApiListRegistrationOrDeviceTokensRequest {
    userId: string;
    tokenType: string;
    apiToken?: string;
}
export interface UserApiListUsersRequest {
    apiToken?: string;
    token?: string;
    limit?: number;
    activeMode?: string;
    showBot?: boolean;
    userIds?: string;
    nickname?: string;
    nicknameStartswith?: string;
    metadatakey?: string;
    metadatavaluesIn?: string;
}
export interface UserApiMarkAllMessagesAsReadRequest {
    userId: string;
    apiToken?: string;
    markAllMessagesAsReadData?: MarkAllMessagesAsReadData;
}
export interface UserApiRegisterAsOperatorToChannelsWithCustomChannelTypesRequest {
    userId: string;
    apiToken?: string;
    registerAsOperatorToChannelsWithCustomChannelTypesData?: RegisterAsOperatorToChannelsWithCustomChannelTypesData;
}
export interface UserApiRemoveRegistrationOrDeviceTokenRequest {
    userId: string;
    apiToken?: string;
}
export interface UserApiRemoveRegistrationOrDeviceTokenByTokenRequest {
    userId: string;
    tokenType: string;
    token: string;
    apiToken?: string;
}
export interface UserApiRemoveRegistrationOrDeviceTokenFromOwnerByTokenRequest {
    tokenType: string;
    token: string;
    apiToken?: string;
}
export interface UserApiResetPushPreferencesRequest {
    userId: string;
    apiToken?: string;
}
export interface UserApiUpdateChannelInvitationPreferenceRequest {
    userId: string;
    apiToken?: string;
    updateChannelInvitationPreferenceData?: UpdateChannelInvitationPreferenceData;
}
export interface UserApiUpdateCountPreferenceOfChannelByUrlRequest {
    userId: string;
    channelUrl: string;
    apiToken?: string;
    updateCountPreferenceOfChannelByUrlData?: UpdateCountPreferenceOfChannelByUrlData;
}
export interface UserApiUpdatePushPreferencesRequest {
    userId: string;
    apiToken?: string;
    updatePushPreferencesData?: UpdatePushPreferencesData;
}
export interface UserApiUpdatePushPreferencesForChannelByUrlRequest {
    userId: string;
    channelUrl: string;
    apiToken?: string;
    updatePushPreferencesForChannelByUrlData?: UpdatePushPreferencesForChannelByUrlData;
}
export interface UserApiUpdateUserByIdRequest {
    userId: string;
    apiToken?: string;
    updateUserByIdData?: UpdateUserByIdData;
}
export interface UserApiViewChannelInvitationPreferenceRequest {
    userId: string;
    apiToken?: string;
}
export interface UserApiViewCountPreferenceOfChannelByUrlRequest {
    userId: string;
    channelUrl: string;
    apiToken?: string;
}
export interface UserApiViewNumberOfChannelsByJoinStatusRequest {
    userId: string;
    apiToken?: string;
    state?: string;
}
export interface UserApiViewNumberOfChannelsWithUnreadMessagesRequest {
    userId: string;
    apiToken?: string;
    customTypes?: Array<string>;
    superMode?: string;
}
export interface UserApiViewNumberOfUnreadItemsRequest {
    userId: string;
    apiToken?: string;
    customType?: string;
    itemKeys?: string;
}
export interface UserApiViewNumberOfUnreadMessagesRequest {
    userId: string;
    apiToken?: string;
    customTypes?: string;
    superMode?: string;
}
export interface UserApiViewPushPreferencesRequest {
    userId: string;
    apiToken?: string;
}
export interface UserApiViewPushPreferencesForChannelByUrlRequest {
    userId: string;
    channelUrl: string;
    apiToken?: string;
}
export interface UserApiViewUserByIdRequest {
    userId: string;
    apiToken?: string;
    includeUnreadCount?: boolean;
    customTypes?: string;
    superMode?: string;
}
export interface UserApiViewWhoOwnsRegistrationOrDeviceTokenByTokenRequest {
    tokenType: string;
    token: string;
    apiToken?: string;
}
export declare class ObjectUserApi {
    private api;
    constructor(configuration: Configuration, requestFactory?: UserApiRequestFactory, responseProcessor?: UserApiResponseProcessor);
    addRegistrationOrDeviceToken(param: UserApiAddRegistrationOrDeviceTokenRequest, options?: Configuration): Promise<AddRegistrationOrDeviceTokenResponse>;
    choosePushNotificationContentTemplate(param: UserApiChoosePushNotificationContentTemplateRequest, options?: Configuration): Promise<ChoosePushNotificationContentTemplateResponse>;
    createUser(param?: UserApiCreateUserRequest, options?: Configuration): Promise<SendBirdUser>;
    createUserToken(param: UserApiCreateUserTokenRequest, options?: Configuration): Promise<CreateUserTokenResponse>;
    deleteUserById(param: UserApiDeleteUserByIdRequest, options?: Configuration): Promise<any>;
    leaveMyGroupChannels(param: UserApiLeaveMyGroupChannelsRequest, options?: Configuration): Promise<any>;
    listMyGroupChannels(param: UserApiListMyGroupChannelsRequest, options?: Configuration): Promise<ListMyGroupChannelsResponse>;
    listRegistrationOrDeviceTokens(param: UserApiListRegistrationOrDeviceTokensRequest, options?: Configuration): Promise<ListRegistrationOrDeviceTokensResponse>;
    listUsers(param?: UserApiListUsersRequest, options?: Configuration): Promise<ListUsersResponse>;
    markAllMessagesAsRead(param: UserApiMarkAllMessagesAsReadRequest, options?: Configuration): Promise<any>;
    registerAsOperatorToChannelsWithCustomChannelTypes(param: UserApiRegisterAsOperatorToChannelsWithCustomChannelTypesRequest, options?: Configuration): Promise<any>;
    removeRegistrationOrDeviceToken(param: UserApiRemoveRegistrationOrDeviceTokenRequest, options?: Configuration): Promise<RemoveRegistrationOrDeviceTokenResponse>;
    removeRegistrationOrDeviceTokenByToken(param: UserApiRemoveRegistrationOrDeviceTokenByTokenRequest, options?: Configuration): Promise<RemoveRegistrationOrDeviceTokenByTokenResponse>;
    removeRegistrationOrDeviceTokenFromOwnerByToken(param: UserApiRemoveRegistrationOrDeviceTokenFromOwnerByTokenRequest, options?: Configuration): Promise<RemoveRegistrationOrDeviceTokenFromOwnerByTokenResponse>;
    resetPushPreferences(param: UserApiResetPushPreferencesRequest, options?: Configuration): Promise<ResetPushPreferencesResponse>;
    updateChannelInvitationPreference(param: UserApiUpdateChannelInvitationPreferenceRequest, options?: Configuration): Promise<UpdateChannelInvitationPreferenceResponse>;
    updateCountPreferenceOfChannelByUrl(param: UserApiUpdateCountPreferenceOfChannelByUrlRequest, options?: Configuration): Promise<UpdateCountPreferenceOfChannelByUrlResponse>;
    updatePushPreferences(param: UserApiUpdatePushPreferencesRequest, options?: Configuration): Promise<UpdatePushPreferencesResponse>;
    updatePushPreferencesForChannelByUrl(param: UserApiUpdatePushPreferencesForChannelByUrlRequest, options?: Configuration): Promise<UpdatePushPreferencesForChannelByUrlResponse>;
    updateUserById(param: UserApiUpdateUserByIdRequest, options?: Configuration): Promise<SendBirdUser>;
    viewChannelInvitationPreference(param: UserApiViewChannelInvitationPreferenceRequest, options?: Configuration): Promise<ViewChannelInvitationPreferenceResponse>;
    viewCountPreferenceOfChannelByUrl(param: UserApiViewCountPreferenceOfChannelByUrlRequest, options?: Configuration): Promise<ViewCountPreferenceOfChannelByUrlResponse>;
    viewNumberOfChannelsByJoinStatus(param: UserApiViewNumberOfChannelsByJoinStatusRequest, options?: Configuration): Promise<ViewNumberOfChannelsByJoinStatusResponse>;
    viewNumberOfChannelsWithUnreadMessages(param: UserApiViewNumberOfChannelsWithUnreadMessagesRequest, options?: Configuration): Promise<ViewNumberOfChannelsWithUnreadMessagesResponse>;
    viewNumberOfUnreadItems(param: UserApiViewNumberOfUnreadItemsRequest, options?: Configuration): Promise<ViewNumberOfUnreadItemsResponse>;
    viewNumberOfUnreadMessages(param: UserApiViewNumberOfUnreadMessagesRequest, options?: Configuration): Promise<ViewNumberOfUnreadMessagesResponse>;
    viewPushPreferences(param: UserApiViewPushPreferencesRequest, options?: Configuration): Promise<ViewPushPreferencesResponse>;
    viewPushPreferencesForChannelByUrl(param: UserApiViewPushPreferencesForChannelByUrlRequest, options?: Configuration): Promise<ViewPushPreferencesForChannelByUrlResponse>;
    viewUserById(param: UserApiViewUserByIdRequest, options?: Configuration): Promise<SendBirdUser>;
    viewWhoOwnsRegistrationOrDeviceTokenByToken(param: UserApiViewWhoOwnsRegistrationOrDeviceTokenByTokenRequest, options?: Configuration): Promise<Array<ViewWhoOwnsRegistrationOrDeviceTokenByTokenResponseInner>>;
}
import { WebhookApiRequestFactory, WebhookApiResponseProcessor } from "../apis/WebhookApi";
export interface WebhookApiChooseWhichEventsToSubscribeToRequest {
    apiToken?: string;
    chooseWhichEventsToSubscribeToData?: ChooseWhichEventsToSubscribeToData;
}
export interface WebhookApiRetrieveListOfSubscribedEventsRequest {
    apiToken?: string;
    displayAllWebhookCategories?: boolean;
}
export declare class ObjectWebhookApi {
    private api;
    constructor(configuration: Configuration, requestFactory?: WebhookApiRequestFactory, responseProcessor?: WebhookApiResponseProcessor);
    chooseWhichEventsToSubscribeTo(param?: WebhookApiChooseWhichEventsToSubscribeToRequest, options?: Configuration): Promise<ChooseWhichEventsToSubscribeToResponse>;
    retrieveListOfSubscribedEvents(param?: WebhookApiRetrieveListOfSubscribedEventsRequest, options?: Configuration): Promise<RetrieveListOfSubscribedEventsResponse>;
}
