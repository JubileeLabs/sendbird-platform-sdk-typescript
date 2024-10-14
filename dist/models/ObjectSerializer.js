"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ObjectSerializer = void 0;
__exportStar(require("./AddApnsPushConfigurationData"), exports);
__exportStar(require("./AddApnsPushConfigurationResponse"), exports);
__exportStar(require("./AddApnsPushConfigurationResponsePushConfigurationsInner"), exports);
__exportStar(require("./AddEmojiCategoriesResponse"), exports);
__exportStar(require("./AddEmojiCategoriesResponseEmojiCategoriesInner"), exports);
__exportStar(require("./AddEmojisData"), exports);
__exportStar(require("./AddEmojisResponse"), exports);
__exportStar(require("./AddExtraDataToMessageData"), exports);
__exportStar(require("./AddExtraDataToMessageResponse"), exports);
__exportStar(require("./AddFcmPushConfigurationData"), exports);
__exportStar(require("./AddFcmPushConfigurationResponse"), exports);
__exportStar(require("./AddFcmPushConfigurationResponsePushConfigurationsInner"), exports);
__exportStar(require("./AddHmsPushConfigurationData"), exports);
__exportStar(require("./AddHmsPushConfigurationResponse"), exports);
__exportStar(require("./AddHmsPushConfigurationResponsePushConfigurationsInner"), exports);
__exportStar(require("./AddIpToWhitelistData"), exports);
__exportStar(require("./AddIpToWhitelistResponse"), exports);
__exportStar(require("./AddReactionToAMessageData"), exports);
__exportStar(require("./AddReactionToAMessageResponse"), exports);
__exportStar(require("./AddRegistrationOrDeviceTokenData"), exports);
__exportStar(require("./AddRegistrationOrDeviceTokenResponse"), exports);
__exportStar(require("./BanFromChannelsWithCustomChannelTypesData"), exports);
__exportStar(require("./BanUsersInChannelsWithCustomChannelTypeData"), exports);
__exportStar(require("./BanUsersInChannelsWithCustomChannelTypeDataBannedListInner"), exports);
__exportStar(require("./Blob"), exports);
__exportStar(require("./BlockUserData"), exports);
__exportStar(require("./BlockUserResponse"), exports);
__exportStar(require("./ChoosePushNotificationContentTemplateResponse"), exports);
__exportStar(require("./ChooseWhichEventsToSubscribeToData"), exports);
__exportStar(require("./ChooseWhichEventsToSubscribeToResponse"), exports);
__exportStar(require("./ChooseWhichEventsToSubscribeToResponseWebhook"), exports);
__exportStar(require("./ConfigureAutoEventData"), exports);
__exportStar(require("./ConfigureAutoEventDataAutoEventMessage"), exports);
__exportStar(require("./CreateBotData"), exports);
__exportStar(require("./CreateBotResponse"), exports);
__exportStar(require("./CreateBotResponseBot"), exports);
__exportStar(require("./CreateChannelMetacounterData"), exports);
__exportStar(require("./CreateChannelMetadataData"), exports);
__exportStar(require("./CreateChannelMetadataResponse"), exports);
__exportStar(require("./CreateUserData"), exports);
__exportStar(require("./CreateUserMetadataData"), exports);
__exportStar(require("./CreateUserMetadataResponse"), exports);
__exportStar(require("./CreateUserTokenData"), exports);
__exportStar(require("./CreateUserTokenResponse"), exports);
__exportStar(require("./CustomTypeListBannedUsersResponse"), exports);
__exportStar(require("./DeleteAllowedIpsFromWhitelistResponse"), exports);
__exportStar(require("./DeleteApnsCertificateByIdResponse"), exports);
__exportStar(require("./EnableReactionsData"), exports);
__exportStar(require("./EnableReactionsResponse"), exports);
__exportStar(require("./Function"), exports);
__exportStar(require("./GcAcceptInvitationData"), exports);
__exportStar(require("./GcBanUserData"), exports);
__exportStar(require("./GcBanUserResponse"), exports);
__exportStar(require("./GcCheckIfMemberByIdResponse"), exports);
__exportStar(require("./GcCreateChannelData"), exports);
__exportStar(require("./GcDeclineInvitationData"), exports);
__exportStar(require("./GcFreezeChannelData"), exports);
__exportStar(require("./GcHideOrArchiveChannelData"), exports);
__exportStar(require("./GcInviteAsMembersData"), exports);
__exportStar(require("./GcJoinChannelData"), exports);
__exportStar(require("./GcLeaveChannelData"), exports);
__exportStar(require("./GcListBannedUsersResponse"), exports);
__exportStar(require("./GcListChannelsResponse"), exports);
__exportStar(require("./GcListMembersResponse"), exports);
__exportStar(require("./GcListMutedUsersResponse"), exports);
__exportStar(require("./GcListOperatorsResponse"), exports);
__exportStar(require("./GcMarkAllMessagesAsDeliveredData"), exports);
__exportStar(require("./GcMarkAllMessagesAsDeliveredResponse"), exports);
__exportStar(require("./GcMarkAllMessagesAsReadData"), exports);
__exportStar(require("./GcMuteUserData"), exports);
__exportStar(require("./GcRegisterOperatorsData"), exports);
__exportStar(require("./GcRegisterOperatorsResponse"), exports);
__exportStar(require("./GcResetChatHistoryData"), exports);
__exportStar(require("./GcResetChatHistoryResponse"), exports);
__exportStar(require("./GcTypingIndicatorsData"), exports);
__exportStar(require("./GcUpdateBanByIdData"), exports);
__exportStar(require("./GcUpdateBanByIdResponse"), exports);
__exportStar(require("./GcUpdateChannelByUrlData"), exports);
__exportStar(require("./GcViewBanByIdResponse"), exports);
__exportStar(require("./GcViewMuteByIdResponse"), exports);
__exportStar(require("./GcViewNumberOfEachMembersUnreadMessagesResponse"), exports);
__exportStar(require("./GenerateSecondaryApiTokenData"), exports);
__exportStar(require("./GenerateSecondaryApiTokenResponse"), exports);
__exportStar(require("./GetDetailedOpenRateOfAnnouncementByIdResponse"), exports);
__exportStar(require("./GetDetailedOpenRateOfAnnouncementGroupResponse"), exports);
__exportStar(require("./GetDetailedOpenStatusOfAnnouncementByIdResponse"), exports);
__exportStar(require("./GetDetailedOpenStatusOfAnnouncementByIdResponseOpenStatusInner"), exports);
__exportStar(require("./GetStatisticsDailyResponse"), exports);
__exportStar(require("./GetStatisticsDailyResponseStatisticsInner"), exports);
__exportStar(require("./GetStatisticsMonthlyResponse"), exports);
__exportStar(require("./GetStatisticsResponse"), exports);
__exportStar(require("./JoinChannelsData"), exports);
__exportStar(require("./JoinChannelsResponse"), exports);
__exportStar(require("./LeaveMyGroupChannelsData"), exports);
__exportStar(require("./ListAllEmojisAndEmojiCategoriesResponse"), exports);
__exportStar(require("./ListAllEmojisAndEmojiCategoriesResponseEmojiCategoriesInner"), exports);
__exportStar(require("./ListAllEmojisAndEmojiCategoriesResponseEmojiCategoriesInnerEmojisInner"), exports);
__exportStar(require("./ListAnnouncementGroupsResponse"), exports);
__exportStar(require("./ListAnnouncementsResponse"), exports);
__exportStar(require("./ListAnnouncementsResponseAnnouncementsInner"), exports);
__exportStar(require("./ListBannedChannelsResponse"), exports);
__exportStar(require("./ListBannedChannelsResponseBannedChannelsInner"), exports);
__exportStar(require("./ListBlockedUsersResponse"), exports);
__exportStar(require("./ListBotsResponse"), exports);
__exportStar(require("./ListBotsResponseBotsInner"), exports);
__exportStar(require("./ListDataExportsByMessageChannelOrUserResponse"), exports);
__exportStar(require("./ListDataExportsByMessageChannelOrUserResponseExportedDataInner"), exports);
__exportStar(require("./ListDataExportsByMessageChannelOrUserResponseExportedDataInnerFile"), exports);
__exportStar(require("./ListEmojisResponse"), exports);
__exportStar(require("./ListGdprRequestsResponse"), exports);
__exportStar(require("./ListGdprRequestsResponseRequestsInner"), exports);
__exportStar(require("./ListMessagesResponse"), exports);
__exportStar(require("./ListMessagesResponseMessagesInner"), exports);
__exportStar(require("./ListMessagesResponseMessagesInnerOgTag"), exports);
__exportStar(require("./ListMessagesResponseMessagesInnerSortedMetaarrayInner"), exports);
__exportStar(require("./ListMutedChannelsResponse"), exports);
__exportStar(require("./ListMutedUsersInChannelsWithCustomChannelType200Response"), exports);
__exportStar(require("./ListMyGroupChannelsResponse"), exports);
__exportStar(require("./ListPushConfigurationsResponse"), exports);
__exportStar(require("./ListPushConfigurationsResponsePushConfigurationsInner"), exports);
__exportStar(require("./ListPushNotificationContentTemplatesResponse"), exports);
__exportStar(require("./ListPushNotificationContentTemplatesResponsePushMessageTemplatesInner"), exports);
__exportStar(require("./ListPushNotificationContentTemplatesResponsePushMessageTemplatesInnerTemplate"), exports);
__exportStar(require("./ListReactionsOfMessageResponse"), exports);
__exportStar(require("./ListRegistrationOrDeviceTokensResponse"), exports);
__exportStar(require("./ListReportsOnChannelByUrlResponse"), exports);
__exportStar(require("./ListReportsOnMessageByIdResponse"), exports);
__exportStar(require("./ListReportsOnMessageByIdResponseReportLogsInner"), exports);
__exportStar(require("./ListReportsOnUserByIdResponse"), exports);
__exportStar(require("./ListReportsResponse"), exports);
__exportStar(require("./ListReportsResponseReportLogsInner"), exports);
__exportStar(require("./ListSecondaryApiTokensResponse"), exports);
__exportStar(require("./ListSecondaryApiTokensResponseApiTokensInner"), exports);
__exportStar(require("./ListUsersResponse"), exports);
__exportStar(require("./MarkAllMessagesAsReadData"), exports);
__exportStar(require("./ModelFile"), exports);
__exportStar(require("./MuteInChannelsWithCustomChannelTypesData"), exports);
__exportStar(require("./MuteUsersInChannelsWithCustomChannelTypeData"), exports);
__exportStar(require("./OcBanUserData"), exports);
__exportStar(require("./OcBanUserResponse"), exports);
__exportStar(require("./OcCreateChannelData"), exports);
__exportStar(require("./OcDeleteChannelByUrl200Response"), exports);
__exportStar(require("./OcFreezeChannelData"), exports);
__exportStar(require("./OcListBannedUsersResponse"), exports);
__exportStar(require("./OcListBannedUsersResponseBannedListInner"), exports);
__exportStar(require("./OcListChannelsResponse"), exports);
__exportStar(require("./OcListMutedUsersResponse"), exports);
__exportStar(require("./OcListOperatorsResponse"), exports);
__exportStar(require("./OcListParticipantsResponse"), exports);
__exportStar(require("./OcMuteUserData"), exports);
__exportStar(require("./OcRegisterOperatorsData"), exports);
__exportStar(require("./OcUpdateBanByIdData"), exports);
__exportStar(require("./OcUpdateBanByIdResponse"), exports);
__exportStar(require("./OcUpdateChannelByUrlData"), exports);
__exportStar(require("./OcViewBanByIdResponse"), exports);
__exportStar(require("./OcViewMuteByIdResponse"), exports);
__exportStar(require("./RegisterAndScheduleDataExportData"), exports);
__exportStar(require("./RegisterAndScheduleDataExportResponse"), exports);
__exportStar(require("./RegisterAsOperatorToChannelsWithCustomChannelTypesData"), exports);
__exportStar(require("./RegisterGdprRequestData"), exports);
__exportStar(require("./RegisterGdprRequestResponse"), exports);
__exportStar(require("./RemovePushConfigurationByIdResponse"), exports);
__exportStar(require("./RemoveReactionFromAMessageResponse"), exports);
__exportStar(require("./RemoveRegistrationOrDeviceTokenByTokenResponse"), exports);
__exportStar(require("./RemoveRegistrationOrDeviceTokenFromOwnerByTokenResponse"), exports);
__exportStar(require("./RemoveRegistrationOrDeviceTokenResponse"), exports);
__exportStar(require("./ReportChannelByUrlData"), exports);
__exportStar(require("./ReportChannelByUrlResponse"), exports);
__exportStar(require("./ReportMessageByIdData"), exports);
__exportStar(require("./ReportMessageByIdResponse"), exports);
__exportStar(require("./ReportUserByIdData"), exports);
__exportStar(require("./ReportUserByIdResponse"), exports);
__exportStar(require("./ResetPushPreferencesResponse"), exports);
__exportStar(require("./RetrieveAdvancedAnalyticsMetricsResponse"), exports);
__exportStar(require("./RetrieveIpWhitelistResponse"), exports);
__exportStar(require("./RetrieveListOfSubscribedEventsResponse"), exports);
__exportStar(require("./RetrieveListOfSubscribedEventsResponseWebhook"), exports);
__exportStar(require("./RevokeSecondaryApiTokenByTokenResponse"), exports);
__exportStar(require("./SBObject"), exports);
__exportStar(require("./ScheduleAnnouncementData"), exports);
__exportStar(require("./ScheduleAnnouncementDataMessage"), exports);
__exportStar(require("./ScheduleAnnouncementResponse"), exports);
__exportStar(require("./ScheduleAnnouncementResponseCreateChannelOptions"), exports);
__exportStar(require("./ScheduleAnnouncementResponseMessage"), exports);
__exportStar(require("./SendBirdAdminMessage"), exports);
__exportStar(require("./SendBirdAppleCriticalAlertOptions"), exports);
__exportStar(require("./SendBirdAutoEventMessageSettings"), exports);
__exportStar(require("./SendBirdBaseChannel"), exports);
__exportStar(require("./SendBirdBaseMessageInstance"), exports);
__exportStar(require("./SendBirdBotsMessageResponse"), exports);
__exportStar(require("./SendBirdBotsMessageResponseMessage"), exports);
__exportStar(require("./SendBirdBotsMessageResponseMessageExtendedMessagePayload"), exports);
__exportStar(require("./SendBirdBotsMessageResponseMessageMessageEvents"), exports);
__exportStar(require("./SendBirdChannelResponse"), exports);
__exportStar(require("./SendBirdEmoji"), exports);
__exportStar(require("./SendBirdEmojiCategory"), exports);
__exportStar(require("./SendBirdFile"), exports);
__exportStar(require("./SendBirdFileMessageParams"), exports);
__exportStar(require("./SendBirdGroupChannel"), exports);
__exportStar(require("./SendBirdGroupChannelChannel"), exports);
__exportStar(require("./SendBirdGroupChannelCollection"), exports);
__exportStar(require("./SendBirdGroupChannelCreatedBy"), exports);
__exportStar(require("./SendBirdGroupChannelDisappearingMessage"), exports);
__exportStar(require("./SendBirdGroupChannelSmsFallback"), exports);
__exportStar(require("./SendBirdMember"), exports);
__exportStar(require("./SendBirdMessageMetaArray"), exports);
__exportStar(require("./SendBirdMessageResponse"), exports);
__exportStar(require("./SendBirdMessageResponseMentionedUsersInner"), exports);
__exportStar(require("./SendBirdMessageResponseUser"), exports);
__exportStar(require("./SendBirdOGImage"), exports);
__exportStar(require("./SendBirdOGMetaData"), exports);
__exportStar(require("./SendBirdOpenChannel"), exports);
__exportStar(require("./SendBirdParentMessageInfo"), exports);
__exportStar(require("./SendBirdPlugin"), exports);
__exportStar(require("./SendBirdPoll"), exports);
__exportStar(require("./SendBirdPollDetails"), exports);
__exportStar(require("./SendBirdPollOption"), exports);
__exportStar(require("./SendBirdPollUpdatedVoteCount"), exports);
__exportStar(require("./SendBirdReaction"), exports);
__exportStar(require("./SendBirdRestrictionInfo"), exports);
__exportStar(require("./SendBirdScheduledMessage"), exports);
__exportStar(require("./SendBirdSender"), exports);
__exportStar(require("./SendBirdThreadInfo"), exports);
__exportStar(require("./SendBirdThumbnailSBObject"), exports);
__exportStar(require("./SendBirdThumbnailSize"), exports);
__exportStar(require("./SendBirdUser"), exports);
__exportStar(require("./SendBirdUserMessageParams"), exports);
__exportStar(require("./SendBotSMessageData"), exports);
__exportStar(require("./SendBotSMessageDataExtendedMessagePayload"), exports);
__exportStar(require("./SendMessageData"), exports);
__exportStar(require("./SetDomainFilterData"), exports);
__exportStar(require("./SetDomainFilterDataDomainFilter"), exports);
__exportStar(require("./SetDomainFilterDataImageModeration"), exports);
__exportStar(require("./SetDomainFilterDataImageModerationLimits"), exports);
__exportStar(require("./SetDomainFilterDataProfanityFilter"), exports);
__exportStar(require("./SetDomainFilterDataProfanityFilterRegexFiltersInner"), exports);
__exportStar(require("./SetDomainFilterDataProfanityTriggeredModeration"), exports);
__exportStar(require("./TranslateMessageIntoOtherLanguagesData"), exports);
__exportStar(require("./UpdateAnnouncementByIdData"), exports);
__exportStar(require("./UpdateAnnouncementByIdResponse"), exports);
__exportStar(require("./UpdateAnnouncementByIdResponseMessage"), exports);
__exportStar(require("./UpdateApnsPushConfigurationByIdData"), exports);
__exportStar(require("./UpdateApnsPushConfigurationByIdResponse"), exports);
__exportStar(require("./UpdateBotByIdData"), exports);
__exportStar(require("./UpdateBotByIdResponse"), exports);
__exportStar(require("./UpdateChannelInvitationPreferenceData"), exports);
__exportStar(require("./UpdateChannelInvitationPreferenceResponse"), exports);
__exportStar(require("./UpdateChannelMetacounterData"), exports);
__exportStar(require("./UpdateChannelMetadataData"), exports);
__exportStar(require("./UpdateCountPreferenceOfChannelByUrlData"), exports);
__exportStar(require("./UpdateCountPreferenceOfChannelByUrlResponse"), exports);
__exportStar(require("./UpdateDefaultChannelInvitationPreferenceData"), exports);
__exportStar(require("./UpdateDefaultChannelInvitationPreferenceResponse"), exports);
__exportStar(require("./UpdateEmojiCategoryUrlByIdData"), exports);
__exportStar(require("./UpdateEmojiUrlByKeyData"), exports);
__exportStar(require("./UpdateExtraDataInMessageData"), exports);
__exportStar(require("./UpdateExtraDataInMessageResponse"), exports);
__exportStar(require("./UpdateExtraDataInMessageResponseSortedMetaarrayInner"), exports);
__exportStar(require("./UpdateFcmPushConfigurationByIdData"), exports);
__exportStar(require("./UpdateFcmPushConfigurationByIdResponse"), exports);
__exportStar(require("./UpdateHmsPushConfigurationByIdData"), exports);
__exportStar(require("./UpdateHmsPushConfigurationByIdResponse"), exports);
__exportStar(require("./UpdateMessageByIdData"), exports);
__exportStar(require("./UpdatePushNotificationContentTemplateData"), exports);
__exportStar(require("./UpdatePushNotificationContentTemplateResponse"), exports);
__exportStar(require("./UpdatePushPreferencesData"), exports);
__exportStar(require("./UpdatePushPreferencesForChannelByUrlData"), exports);
__exportStar(require("./UpdatePushPreferencesForChannelByUrlResponse"), exports);
__exportStar(require("./UpdatePushPreferencesResponse"), exports);
__exportStar(require("./UpdateUserByIdData"), exports);
__exportStar(require("./UpdateUserMetadataData"), exports);
__exportStar(require("./UpdateUserMetadataResponse"), exports);
__exportStar(require("./UseDefaultEmojisData"), exports);
__exportStar(require("./UseDefaultEmojisResponse"), exports);
__exportStar(require("./V3ApplicationsPushSettingsGet200Response"), exports);
__exportStar(require("./V3ApplicationsPushSettingsGetRequest"), exports);
__exportStar(require("./V3GroupChannelsChannelUrlScheduledMessagesScheduledMessageIdDeleteRequest"), exports);
__exportStar(require("./V3PollsGetRequest"), exports);
__exportStar(require("./V3PollsPollIdDeleteRequest"), exports);
__exportStar(require("./V3PollsPollIdDeleteRequest1"), exports);
__exportStar(require("./V3PollsPollIdOptionsOptionIdDeleteRequest"), exports);
__exportStar(require("./V3PollsPollIdOptionsOptionIdVotersGet200Response"), exports);
__exportStar(require("./V3PollsPollIdOptionsOptionIdVotersGet200ResponseVotersInner"), exports);
__exportStar(require("./V3PollsPollIdOptionsOptionIdVotersGetRequest"), exports);
__exportStar(require("./V3PollsPollIdVotePutRequest"), exports);
__exportStar(require("./V3ScheduledMessagesCountGet200Response"), exports);
__exportStar(require("./V3ScheduledMessagesGet200Response"), exports);
__exportStar(require("./ViewAnnouncementByIdResponse"), exports);
__exportStar(require("./ViewBotByIdResponse"), exports);
__exportStar(require("./ViewChannelInvitationPreferenceResponse"), exports);
__exportStar(require("./ViewCountPreferenceOfChannelByUrlResponse"), exports);
__exportStar(require("./ViewDataExportByIdResponse"), exports);
__exportStar(require("./ViewDefaultChannelInvitationPreferenceResponse"), exports);
__exportStar(require("./ViewGdprRequestByIdResponse"), exports);
__exportStar(require("./ViewNumberOfChannelsByJoinStatusResponse"), exports);
__exportStar(require("./ViewNumberOfChannelsWithUnreadMessagesResponse"), exports);
__exportStar(require("./ViewNumberOfConcurrentConnectionsResponse"), exports);
__exportStar(require("./ViewNumberOfDailyActiveUsersResponse"), exports);
__exportStar(require("./ViewNumberOfMonthlyActiveUsersResponse"), exports);
__exportStar(require("./ViewNumberOfPeakConnectionsResponse"), exports);
__exportStar(require("./ViewNumberOfPeakConnectionsResponsePeakConnectionsInner"), exports);
__exportStar(require("./ViewNumberOfUnreadItemsResponse"), exports);
__exportStar(require("./ViewNumberOfUnreadMessagesResponse"), exports);
__exportStar(require("./ViewPushConfigurationByIdResponse"), exports);
__exportStar(require("./ViewPushNotificationContentTemplateResponse"), exports);
__exportStar(require("./ViewPushNotificationContentTemplateResponsePushMessageTemplatesInner"), exports);
__exportStar(require("./ViewPushPreferencesForChannelByUrlResponse"), exports);
__exportStar(require("./ViewPushPreferencesResponse"), exports);
__exportStar(require("./ViewSecondaryApiTokenByTokenResponse"), exports);
__exportStar(require("./ViewTotalNumberOfMessagesInChannelResponse"), exports);
__exportStar(require("./ViewUserMetadataResponse"), exports);
__exportStar(require("./ViewWhoOwnsRegistrationOrDeviceTokenByTokenResponseInner"), exports);
var AddApnsPushConfigurationData_1 = require("./AddApnsPushConfigurationData");
var AddApnsPushConfigurationResponse_1 = require("./AddApnsPushConfigurationResponse");
var AddApnsPushConfigurationResponsePushConfigurationsInner_1 = require("./AddApnsPushConfigurationResponsePushConfigurationsInner");
var AddEmojiCategoriesResponse_1 = require("./AddEmojiCategoriesResponse");
var AddEmojiCategoriesResponseEmojiCategoriesInner_1 = require("./AddEmojiCategoriesResponseEmojiCategoriesInner");
var AddEmojisData_1 = require("./AddEmojisData");
var AddEmojisResponse_1 = require("./AddEmojisResponse");
var AddExtraDataToMessageData_1 = require("./AddExtraDataToMessageData");
var AddExtraDataToMessageResponse_1 = require("./AddExtraDataToMessageResponse");
var AddFcmPushConfigurationData_1 = require("./AddFcmPushConfigurationData");
var AddFcmPushConfigurationResponse_1 = require("./AddFcmPushConfigurationResponse");
var AddFcmPushConfigurationResponsePushConfigurationsInner_1 = require("./AddFcmPushConfigurationResponsePushConfigurationsInner");
var AddHmsPushConfigurationData_1 = require("./AddHmsPushConfigurationData");
var AddHmsPushConfigurationResponse_1 = require("./AddHmsPushConfigurationResponse");
var AddHmsPushConfigurationResponsePushConfigurationsInner_1 = require("./AddHmsPushConfigurationResponsePushConfigurationsInner");
var AddIpToWhitelistData_1 = require("./AddIpToWhitelistData");
var AddIpToWhitelistResponse_1 = require("./AddIpToWhitelistResponse");
var AddReactionToAMessageData_1 = require("./AddReactionToAMessageData");
var AddReactionToAMessageResponse_1 = require("./AddReactionToAMessageResponse");
var AddRegistrationOrDeviceTokenData_1 = require("./AddRegistrationOrDeviceTokenData");
var AddRegistrationOrDeviceTokenResponse_1 = require("./AddRegistrationOrDeviceTokenResponse");
var BanFromChannelsWithCustomChannelTypesData_1 = require("./BanFromChannelsWithCustomChannelTypesData");
var BanUsersInChannelsWithCustomChannelTypeData_1 = require("./BanUsersInChannelsWithCustomChannelTypeData");
var BanUsersInChannelsWithCustomChannelTypeDataBannedListInner_1 = require("./BanUsersInChannelsWithCustomChannelTypeDataBannedListInner");
var Blob_1 = require("./Blob");
var BlockUserData_1 = require("./BlockUserData");
var BlockUserResponse_1 = require("./BlockUserResponse");
var ChoosePushNotificationContentTemplateResponse_1 = require("./ChoosePushNotificationContentTemplateResponse");
var ChooseWhichEventsToSubscribeToData_1 = require("./ChooseWhichEventsToSubscribeToData");
var ChooseWhichEventsToSubscribeToResponse_1 = require("./ChooseWhichEventsToSubscribeToResponse");
var ChooseWhichEventsToSubscribeToResponseWebhook_1 = require("./ChooseWhichEventsToSubscribeToResponseWebhook");
var ConfigureAutoEventData_1 = require("./ConfigureAutoEventData");
var ConfigureAutoEventDataAutoEventMessage_1 = require("./ConfigureAutoEventDataAutoEventMessage");
var CreateBotData_1 = require("./CreateBotData");
var CreateBotResponse_1 = require("./CreateBotResponse");
var CreateBotResponseBot_1 = require("./CreateBotResponseBot");
var CreateChannelMetacounterData_1 = require("./CreateChannelMetacounterData");
var CreateChannelMetadataData_1 = require("./CreateChannelMetadataData");
var CreateChannelMetadataResponse_1 = require("./CreateChannelMetadataResponse");
var CreateUserData_1 = require("./CreateUserData");
var CreateUserMetadataData_1 = require("./CreateUserMetadataData");
var CreateUserMetadataResponse_1 = require("./CreateUserMetadataResponse");
var CreateUserTokenData_1 = require("./CreateUserTokenData");
var CreateUserTokenResponse_1 = require("./CreateUserTokenResponse");
var CustomTypeListBannedUsersResponse_1 = require("./CustomTypeListBannedUsersResponse");
var DeleteAllowedIpsFromWhitelistResponse_1 = require("./DeleteAllowedIpsFromWhitelistResponse");
var DeleteApnsCertificateByIdResponse_1 = require("./DeleteApnsCertificateByIdResponse");
var EnableReactionsData_1 = require("./EnableReactionsData");
var EnableReactionsResponse_1 = require("./EnableReactionsResponse");
var Function_1 = require("./Function");
var GcAcceptInvitationData_1 = require("./GcAcceptInvitationData");
var GcBanUserData_1 = require("./GcBanUserData");
var GcBanUserResponse_1 = require("./GcBanUserResponse");
var GcCheckIfMemberByIdResponse_1 = require("./GcCheckIfMemberByIdResponse");
var GcCreateChannelData_1 = require("./GcCreateChannelData");
var GcDeclineInvitationData_1 = require("./GcDeclineInvitationData");
var GcFreezeChannelData_1 = require("./GcFreezeChannelData");
var GcHideOrArchiveChannelData_1 = require("./GcHideOrArchiveChannelData");
var GcInviteAsMembersData_1 = require("./GcInviteAsMembersData");
var GcJoinChannelData_1 = require("./GcJoinChannelData");
var GcLeaveChannelData_1 = require("./GcLeaveChannelData");
var GcListBannedUsersResponse_1 = require("./GcListBannedUsersResponse");
var GcListChannelsResponse_1 = require("./GcListChannelsResponse");
var GcListMembersResponse_1 = require("./GcListMembersResponse");
var GcListMutedUsersResponse_1 = require("./GcListMutedUsersResponse");
var GcListOperatorsResponse_1 = require("./GcListOperatorsResponse");
var GcMarkAllMessagesAsDeliveredData_1 = require("./GcMarkAllMessagesAsDeliveredData");
var GcMarkAllMessagesAsDeliveredResponse_1 = require("./GcMarkAllMessagesAsDeliveredResponse");
var GcMarkAllMessagesAsReadData_1 = require("./GcMarkAllMessagesAsReadData");
var GcMuteUserData_1 = require("./GcMuteUserData");
var GcRegisterOperatorsData_1 = require("./GcRegisterOperatorsData");
var GcRegisterOperatorsResponse_1 = require("./GcRegisterOperatorsResponse");
var GcResetChatHistoryData_1 = require("./GcResetChatHistoryData");
var GcResetChatHistoryResponse_1 = require("./GcResetChatHistoryResponse");
var GcTypingIndicatorsData_1 = require("./GcTypingIndicatorsData");
var GcUpdateBanByIdData_1 = require("./GcUpdateBanByIdData");
var GcUpdateBanByIdResponse_1 = require("./GcUpdateBanByIdResponse");
var GcUpdateChannelByUrlData_1 = require("./GcUpdateChannelByUrlData");
var GcViewBanByIdResponse_1 = require("./GcViewBanByIdResponse");
var GcViewMuteByIdResponse_1 = require("./GcViewMuteByIdResponse");
var GcViewNumberOfEachMembersUnreadMessagesResponse_1 = require("./GcViewNumberOfEachMembersUnreadMessagesResponse");
var GenerateSecondaryApiTokenData_1 = require("./GenerateSecondaryApiTokenData");
var GenerateSecondaryApiTokenResponse_1 = require("./GenerateSecondaryApiTokenResponse");
var GetDetailedOpenRateOfAnnouncementByIdResponse_1 = require("./GetDetailedOpenRateOfAnnouncementByIdResponse");
var GetDetailedOpenRateOfAnnouncementGroupResponse_1 = require("./GetDetailedOpenRateOfAnnouncementGroupResponse");
var GetDetailedOpenStatusOfAnnouncementByIdResponse_1 = require("./GetDetailedOpenStatusOfAnnouncementByIdResponse");
var GetDetailedOpenStatusOfAnnouncementByIdResponseOpenStatusInner_1 = require("./GetDetailedOpenStatusOfAnnouncementByIdResponseOpenStatusInner");
var GetStatisticsDailyResponse_1 = require("./GetStatisticsDailyResponse");
var GetStatisticsDailyResponseStatisticsInner_1 = require("./GetStatisticsDailyResponseStatisticsInner");
var GetStatisticsMonthlyResponse_1 = require("./GetStatisticsMonthlyResponse");
var GetStatisticsResponse_1 = require("./GetStatisticsResponse");
var JoinChannelsData_1 = require("./JoinChannelsData");
var JoinChannelsResponse_1 = require("./JoinChannelsResponse");
var LeaveMyGroupChannelsData_1 = require("./LeaveMyGroupChannelsData");
var ListAllEmojisAndEmojiCategoriesResponse_1 = require("./ListAllEmojisAndEmojiCategoriesResponse");
var ListAllEmojisAndEmojiCategoriesResponseEmojiCategoriesInner_1 = require("./ListAllEmojisAndEmojiCategoriesResponseEmojiCategoriesInner");
var ListAllEmojisAndEmojiCategoriesResponseEmojiCategoriesInnerEmojisInner_1 = require("./ListAllEmojisAndEmojiCategoriesResponseEmojiCategoriesInnerEmojisInner");
var ListAnnouncementGroupsResponse_1 = require("./ListAnnouncementGroupsResponse");
var ListAnnouncementsResponse_1 = require("./ListAnnouncementsResponse");
var ListAnnouncementsResponseAnnouncementsInner_1 = require("./ListAnnouncementsResponseAnnouncementsInner");
var ListBannedChannelsResponse_1 = require("./ListBannedChannelsResponse");
var ListBannedChannelsResponseBannedChannelsInner_1 = require("./ListBannedChannelsResponseBannedChannelsInner");
var ListBlockedUsersResponse_1 = require("./ListBlockedUsersResponse");
var ListBotsResponse_1 = require("./ListBotsResponse");
var ListBotsResponseBotsInner_1 = require("./ListBotsResponseBotsInner");
var ListDataExportsByMessageChannelOrUserResponse_1 = require("./ListDataExportsByMessageChannelOrUserResponse");
var ListDataExportsByMessageChannelOrUserResponseExportedDataInner_1 = require("./ListDataExportsByMessageChannelOrUserResponseExportedDataInner");
var ListDataExportsByMessageChannelOrUserResponseExportedDataInnerFile_1 = require("./ListDataExportsByMessageChannelOrUserResponseExportedDataInnerFile");
var ListEmojisResponse_1 = require("./ListEmojisResponse");
var ListGdprRequestsResponse_1 = require("./ListGdprRequestsResponse");
var ListGdprRequestsResponseRequestsInner_1 = require("./ListGdprRequestsResponseRequestsInner");
var ListMessagesResponse_1 = require("./ListMessagesResponse");
var ListMessagesResponseMessagesInner_1 = require("./ListMessagesResponseMessagesInner");
var ListMessagesResponseMessagesInnerOgTag_1 = require("./ListMessagesResponseMessagesInnerOgTag");
var ListMessagesResponseMessagesInnerSortedMetaarrayInner_1 = require("./ListMessagesResponseMessagesInnerSortedMetaarrayInner");
var ListMutedChannelsResponse_1 = require("./ListMutedChannelsResponse");
var ListMutedUsersInChannelsWithCustomChannelType200Response_1 = require("./ListMutedUsersInChannelsWithCustomChannelType200Response");
var ListMyGroupChannelsResponse_1 = require("./ListMyGroupChannelsResponse");
var ListPushConfigurationsResponse_1 = require("./ListPushConfigurationsResponse");
var ListPushConfigurationsResponsePushConfigurationsInner_1 = require("./ListPushConfigurationsResponsePushConfigurationsInner");
var ListPushNotificationContentTemplatesResponse_1 = require("./ListPushNotificationContentTemplatesResponse");
var ListPushNotificationContentTemplatesResponsePushMessageTemplatesInner_1 = require("./ListPushNotificationContentTemplatesResponsePushMessageTemplatesInner");
var ListPushNotificationContentTemplatesResponsePushMessageTemplatesInnerTemplate_1 = require("./ListPushNotificationContentTemplatesResponsePushMessageTemplatesInnerTemplate");
var ListReactionsOfMessageResponse_1 = require("./ListReactionsOfMessageResponse");
var ListRegistrationOrDeviceTokensResponse_1 = require("./ListRegistrationOrDeviceTokensResponse");
var ListReportsOnChannelByUrlResponse_1 = require("./ListReportsOnChannelByUrlResponse");
var ListReportsOnMessageByIdResponse_1 = require("./ListReportsOnMessageByIdResponse");
var ListReportsOnMessageByIdResponseReportLogsInner_1 = require("./ListReportsOnMessageByIdResponseReportLogsInner");
var ListReportsOnUserByIdResponse_1 = require("./ListReportsOnUserByIdResponse");
var ListReportsResponse_1 = require("./ListReportsResponse");
var ListReportsResponseReportLogsInner_1 = require("./ListReportsResponseReportLogsInner");
var ListSecondaryApiTokensResponse_1 = require("./ListSecondaryApiTokensResponse");
var ListSecondaryApiTokensResponseApiTokensInner_1 = require("./ListSecondaryApiTokensResponseApiTokensInner");
var ListUsersResponse_1 = require("./ListUsersResponse");
var MarkAllMessagesAsReadData_1 = require("./MarkAllMessagesAsReadData");
var ModelFile_1 = require("./ModelFile");
var MuteInChannelsWithCustomChannelTypesData_1 = require("./MuteInChannelsWithCustomChannelTypesData");
var MuteUsersInChannelsWithCustomChannelTypeData_1 = require("./MuteUsersInChannelsWithCustomChannelTypeData");
var OcBanUserData_1 = require("./OcBanUserData");
var OcBanUserResponse_1 = require("./OcBanUserResponse");
var OcCreateChannelData_1 = require("./OcCreateChannelData");
var OcDeleteChannelByUrl200Response_1 = require("./OcDeleteChannelByUrl200Response");
var OcFreezeChannelData_1 = require("./OcFreezeChannelData");
var OcListBannedUsersResponse_1 = require("./OcListBannedUsersResponse");
var OcListBannedUsersResponseBannedListInner_1 = require("./OcListBannedUsersResponseBannedListInner");
var OcListChannelsResponse_1 = require("./OcListChannelsResponse");
var OcListMutedUsersResponse_1 = require("./OcListMutedUsersResponse");
var OcListOperatorsResponse_1 = require("./OcListOperatorsResponse");
var OcListParticipantsResponse_1 = require("./OcListParticipantsResponse");
var OcMuteUserData_1 = require("./OcMuteUserData");
var OcRegisterOperatorsData_1 = require("./OcRegisterOperatorsData");
var OcUpdateBanByIdData_1 = require("./OcUpdateBanByIdData");
var OcUpdateBanByIdResponse_1 = require("./OcUpdateBanByIdResponse");
var OcUpdateChannelByUrlData_1 = require("./OcUpdateChannelByUrlData");
var OcViewBanByIdResponse_1 = require("./OcViewBanByIdResponse");
var OcViewMuteByIdResponse_1 = require("./OcViewMuteByIdResponse");
var RegisterAndScheduleDataExportData_1 = require("./RegisterAndScheduleDataExportData");
var RegisterAndScheduleDataExportResponse_1 = require("./RegisterAndScheduleDataExportResponse");
var RegisterAsOperatorToChannelsWithCustomChannelTypesData_1 = require("./RegisterAsOperatorToChannelsWithCustomChannelTypesData");
var RegisterGdprRequestData_1 = require("./RegisterGdprRequestData");
var RegisterGdprRequestResponse_1 = require("./RegisterGdprRequestResponse");
var RemovePushConfigurationByIdResponse_1 = require("./RemovePushConfigurationByIdResponse");
var RemoveReactionFromAMessageResponse_1 = require("./RemoveReactionFromAMessageResponse");
var RemoveRegistrationOrDeviceTokenByTokenResponse_1 = require("./RemoveRegistrationOrDeviceTokenByTokenResponse");
var RemoveRegistrationOrDeviceTokenFromOwnerByTokenResponse_1 = require("./RemoveRegistrationOrDeviceTokenFromOwnerByTokenResponse");
var RemoveRegistrationOrDeviceTokenResponse_1 = require("./RemoveRegistrationOrDeviceTokenResponse");
var ReportChannelByUrlData_1 = require("./ReportChannelByUrlData");
var ReportChannelByUrlResponse_1 = require("./ReportChannelByUrlResponse");
var ReportMessageByIdData_1 = require("./ReportMessageByIdData");
var ReportMessageByIdResponse_1 = require("./ReportMessageByIdResponse");
var ReportUserByIdData_1 = require("./ReportUserByIdData");
var ReportUserByIdResponse_1 = require("./ReportUserByIdResponse");
var ResetPushPreferencesResponse_1 = require("./ResetPushPreferencesResponse");
var RetrieveAdvancedAnalyticsMetricsResponse_1 = require("./RetrieveAdvancedAnalyticsMetricsResponse");
var RetrieveIpWhitelistResponse_1 = require("./RetrieveIpWhitelistResponse");
var RetrieveListOfSubscribedEventsResponse_1 = require("./RetrieveListOfSubscribedEventsResponse");
var RetrieveListOfSubscribedEventsResponseWebhook_1 = require("./RetrieveListOfSubscribedEventsResponseWebhook");
var RevokeSecondaryApiTokenByTokenResponse_1 = require("./RevokeSecondaryApiTokenByTokenResponse");
var SBObject_1 = require("./SBObject");
var ScheduleAnnouncementData_1 = require("./ScheduleAnnouncementData");
var ScheduleAnnouncementDataMessage_1 = require("./ScheduleAnnouncementDataMessage");
var ScheduleAnnouncementResponse_1 = require("./ScheduleAnnouncementResponse");
var ScheduleAnnouncementResponseCreateChannelOptions_1 = require("./ScheduleAnnouncementResponseCreateChannelOptions");
var ScheduleAnnouncementResponseMessage_1 = require("./ScheduleAnnouncementResponseMessage");
var SendBirdAdminMessage_1 = require("./SendBirdAdminMessage");
var SendBirdAppleCriticalAlertOptions_1 = require("./SendBirdAppleCriticalAlertOptions");
var SendBirdAutoEventMessageSettings_1 = require("./SendBirdAutoEventMessageSettings");
var SendBirdBaseChannel_1 = require("./SendBirdBaseChannel");
var SendBirdBaseMessageInstance_1 = require("./SendBirdBaseMessageInstance");
var SendBirdBotsMessageResponse_1 = require("./SendBirdBotsMessageResponse");
var SendBirdBotsMessageResponseMessage_1 = require("./SendBirdBotsMessageResponseMessage");
var SendBirdBotsMessageResponseMessageExtendedMessagePayload_1 = require("./SendBirdBotsMessageResponseMessageExtendedMessagePayload");
var SendBirdBotsMessageResponseMessageMessageEvents_1 = require("./SendBirdBotsMessageResponseMessageMessageEvents");
var SendBirdChannelResponse_1 = require("./SendBirdChannelResponse");
var SendBirdEmoji_1 = require("./SendBirdEmoji");
var SendBirdEmojiCategory_1 = require("./SendBirdEmojiCategory");
var SendBirdFile_1 = require("./SendBirdFile");
var SendBirdFileMessageParams_1 = require("./SendBirdFileMessageParams");
var SendBirdGroupChannel_1 = require("./SendBirdGroupChannel");
var SendBirdGroupChannelChannel_1 = require("./SendBirdGroupChannelChannel");
var SendBirdGroupChannelCollection_1 = require("./SendBirdGroupChannelCollection");
var SendBirdGroupChannelCreatedBy_1 = require("./SendBirdGroupChannelCreatedBy");
var SendBirdGroupChannelDisappearingMessage_1 = require("./SendBirdGroupChannelDisappearingMessage");
var SendBirdGroupChannelSmsFallback_1 = require("./SendBirdGroupChannelSmsFallback");
var SendBirdMember_1 = require("./SendBirdMember");
var SendBirdMessageMetaArray_1 = require("./SendBirdMessageMetaArray");
var SendBirdMessageResponse_1 = require("./SendBirdMessageResponse");
var SendBirdMessageResponseMentionedUsersInner_1 = require("./SendBirdMessageResponseMentionedUsersInner");
var SendBirdMessageResponseUser_1 = require("./SendBirdMessageResponseUser");
var SendBirdOGImage_1 = require("./SendBirdOGImage");
var SendBirdOGMetaData_1 = require("./SendBirdOGMetaData");
var SendBirdOpenChannel_1 = require("./SendBirdOpenChannel");
var SendBirdParentMessageInfo_1 = require("./SendBirdParentMessageInfo");
var SendBirdPlugin_1 = require("./SendBirdPlugin");
var SendBirdPoll_1 = require("./SendBirdPoll");
var SendBirdPollDetails_1 = require("./SendBirdPollDetails");
var SendBirdPollOption_1 = require("./SendBirdPollOption");
var SendBirdPollUpdatedVoteCount_1 = require("./SendBirdPollUpdatedVoteCount");
var SendBirdReaction_1 = require("./SendBirdReaction");
var SendBirdRestrictionInfo_1 = require("./SendBirdRestrictionInfo");
var SendBirdScheduledMessage_1 = require("./SendBirdScheduledMessage");
var SendBirdSender_1 = require("./SendBirdSender");
var SendBirdThreadInfo_1 = require("./SendBirdThreadInfo");
var SendBirdThumbnailSBObject_1 = require("./SendBirdThumbnailSBObject");
var SendBirdThumbnailSize_1 = require("./SendBirdThumbnailSize");
var SendBirdUser_1 = require("./SendBirdUser");
var SendBirdUserMessageParams_1 = require("./SendBirdUserMessageParams");
var SendBotSMessageData_1 = require("./SendBotSMessageData");
var SendBotSMessageDataExtendedMessagePayload_1 = require("./SendBotSMessageDataExtendedMessagePayload");
var SendMessageData_1 = require("./SendMessageData");
var SetDomainFilterData_1 = require("./SetDomainFilterData");
var SetDomainFilterDataDomainFilter_1 = require("./SetDomainFilterDataDomainFilter");
var SetDomainFilterDataImageModeration_1 = require("./SetDomainFilterDataImageModeration");
var SetDomainFilterDataImageModerationLimits_1 = require("./SetDomainFilterDataImageModerationLimits");
var SetDomainFilterDataProfanityFilter_1 = require("./SetDomainFilterDataProfanityFilter");
var SetDomainFilterDataProfanityFilterRegexFiltersInner_1 = require("./SetDomainFilterDataProfanityFilterRegexFiltersInner");
var SetDomainFilterDataProfanityTriggeredModeration_1 = require("./SetDomainFilterDataProfanityTriggeredModeration");
var TranslateMessageIntoOtherLanguagesData_1 = require("./TranslateMessageIntoOtherLanguagesData");
var UpdateAnnouncementByIdData_1 = require("./UpdateAnnouncementByIdData");
var UpdateAnnouncementByIdResponse_1 = require("./UpdateAnnouncementByIdResponse");
var UpdateAnnouncementByIdResponseMessage_1 = require("./UpdateAnnouncementByIdResponseMessage");
var UpdateApnsPushConfigurationByIdData_1 = require("./UpdateApnsPushConfigurationByIdData");
var UpdateApnsPushConfigurationByIdResponse_1 = require("./UpdateApnsPushConfigurationByIdResponse");
var UpdateBotByIdData_1 = require("./UpdateBotByIdData");
var UpdateBotByIdResponse_1 = require("./UpdateBotByIdResponse");
var UpdateChannelInvitationPreferenceData_1 = require("./UpdateChannelInvitationPreferenceData");
var UpdateChannelInvitationPreferenceResponse_1 = require("./UpdateChannelInvitationPreferenceResponse");
var UpdateChannelMetacounterData_1 = require("./UpdateChannelMetacounterData");
var UpdateChannelMetadataData_1 = require("./UpdateChannelMetadataData");
var UpdateCountPreferenceOfChannelByUrlData_1 = require("./UpdateCountPreferenceOfChannelByUrlData");
var UpdateCountPreferenceOfChannelByUrlResponse_1 = require("./UpdateCountPreferenceOfChannelByUrlResponse");
var UpdateDefaultChannelInvitationPreferenceData_1 = require("./UpdateDefaultChannelInvitationPreferenceData");
var UpdateDefaultChannelInvitationPreferenceResponse_1 = require("./UpdateDefaultChannelInvitationPreferenceResponse");
var UpdateEmojiCategoryUrlByIdData_1 = require("./UpdateEmojiCategoryUrlByIdData");
var UpdateEmojiUrlByKeyData_1 = require("./UpdateEmojiUrlByKeyData");
var UpdateExtraDataInMessageData_1 = require("./UpdateExtraDataInMessageData");
var UpdateExtraDataInMessageResponse_1 = require("./UpdateExtraDataInMessageResponse");
var UpdateExtraDataInMessageResponseSortedMetaarrayInner_1 = require("./UpdateExtraDataInMessageResponseSortedMetaarrayInner");
var UpdateFcmPushConfigurationByIdData_1 = require("./UpdateFcmPushConfigurationByIdData");
var UpdateFcmPushConfigurationByIdResponse_1 = require("./UpdateFcmPushConfigurationByIdResponse");
var UpdateHmsPushConfigurationByIdData_1 = require("./UpdateHmsPushConfigurationByIdData");
var UpdateHmsPushConfigurationByIdResponse_1 = require("./UpdateHmsPushConfigurationByIdResponse");
var UpdateMessageByIdData_1 = require("./UpdateMessageByIdData");
var UpdatePushNotificationContentTemplateData_1 = require("./UpdatePushNotificationContentTemplateData");
var UpdatePushNotificationContentTemplateResponse_1 = require("./UpdatePushNotificationContentTemplateResponse");
var UpdatePushPreferencesData_1 = require("./UpdatePushPreferencesData");
var UpdatePushPreferencesForChannelByUrlData_1 = require("./UpdatePushPreferencesForChannelByUrlData");
var UpdatePushPreferencesForChannelByUrlResponse_1 = require("./UpdatePushPreferencesForChannelByUrlResponse");
var UpdatePushPreferencesResponse_1 = require("./UpdatePushPreferencesResponse");
var UpdateUserByIdData_1 = require("./UpdateUserByIdData");
var UpdateUserMetadataData_1 = require("./UpdateUserMetadataData");
var UpdateUserMetadataResponse_1 = require("./UpdateUserMetadataResponse");
var UseDefaultEmojisData_1 = require("./UseDefaultEmojisData");
var UseDefaultEmojisResponse_1 = require("./UseDefaultEmojisResponse");
var V3ApplicationsPushSettingsGet200Response_1 = require("./V3ApplicationsPushSettingsGet200Response");
var V3ApplicationsPushSettingsGetRequest_1 = require("./V3ApplicationsPushSettingsGetRequest");
var V3GroupChannelsChannelUrlScheduledMessagesScheduledMessageIdDeleteRequest_1 = require("./V3GroupChannelsChannelUrlScheduledMessagesScheduledMessageIdDeleteRequest");
var V3PollsGetRequest_1 = require("./V3PollsGetRequest");
var V3PollsPollIdDeleteRequest_1 = require("./V3PollsPollIdDeleteRequest");
var V3PollsPollIdDeleteRequest1_1 = require("./V3PollsPollIdDeleteRequest1");
var V3PollsPollIdOptionsOptionIdDeleteRequest_1 = require("./V3PollsPollIdOptionsOptionIdDeleteRequest");
var V3PollsPollIdOptionsOptionIdVotersGet200Response_1 = require("./V3PollsPollIdOptionsOptionIdVotersGet200Response");
var V3PollsPollIdOptionsOptionIdVotersGet200ResponseVotersInner_1 = require("./V3PollsPollIdOptionsOptionIdVotersGet200ResponseVotersInner");
var V3PollsPollIdOptionsOptionIdVotersGetRequest_1 = require("./V3PollsPollIdOptionsOptionIdVotersGetRequest");
var V3PollsPollIdVotePutRequest_1 = require("./V3PollsPollIdVotePutRequest");
var V3ScheduledMessagesCountGet200Response_1 = require("./V3ScheduledMessagesCountGet200Response");
var V3ScheduledMessagesGet200Response_1 = require("./V3ScheduledMessagesGet200Response");
var ViewAnnouncementByIdResponse_1 = require("./ViewAnnouncementByIdResponse");
var ViewBotByIdResponse_1 = require("./ViewBotByIdResponse");
var ViewChannelInvitationPreferenceResponse_1 = require("./ViewChannelInvitationPreferenceResponse");
var ViewCountPreferenceOfChannelByUrlResponse_1 = require("./ViewCountPreferenceOfChannelByUrlResponse");
var ViewDataExportByIdResponse_1 = require("./ViewDataExportByIdResponse");
var ViewDefaultChannelInvitationPreferenceResponse_1 = require("./ViewDefaultChannelInvitationPreferenceResponse");
var ViewGdprRequestByIdResponse_1 = require("./ViewGdprRequestByIdResponse");
var ViewNumberOfChannelsByJoinStatusResponse_1 = require("./ViewNumberOfChannelsByJoinStatusResponse");
var ViewNumberOfChannelsWithUnreadMessagesResponse_1 = require("./ViewNumberOfChannelsWithUnreadMessagesResponse");
var ViewNumberOfConcurrentConnectionsResponse_1 = require("./ViewNumberOfConcurrentConnectionsResponse");
var ViewNumberOfDailyActiveUsersResponse_1 = require("./ViewNumberOfDailyActiveUsersResponse");
var ViewNumberOfMonthlyActiveUsersResponse_1 = require("./ViewNumberOfMonthlyActiveUsersResponse");
var ViewNumberOfPeakConnectionsResponse_1 = require("./ViewNumberOfPeakConnectionsResponse");
var ViewNumberOfPeakConnectionsResponsePeakConnectionsInner_1 = require("./ViewNumberOfPeakConnectionsResponsePeakConnectionsInner");
var ViewNumberOfUnreadItemsResponse_1 = require("./ViewNumberOfUnreadItemsResponse");
var ViewNumberOfUnreadMessagesResponse_1 = require("./ViewNumberOfUnreadMessagesResponse");
var ViewPushConfigurationByIdResponse_1 = require("./ViewPushConfigurationByIdResponse");
var ViewPushNotificationContentTemplateResponse_1 = require("./ViewPushNotificationContentTemplateResponse");
var ViewPushNotificationContentTemplateResponsePushMessageTemplatesInner_1 = require("./ViewPushNotificationContentTemplateResponsePushMessageTemplatesInner");
var ViewPushPreferencesForChannelByUrlResponse_1 = require("./ViewPushPreferencesForChannelByUrlResponse");
var ViewPushPreferencesResponse_1 = require("./ViewPushPreferencesResponse");
var ViewSecondaryApiTokenByTokenResponse_1 = require("./ViewSecondaryApiTokenByTokenResponse");
var ViewTotalNumberOfMessagesInChannelResponse_1 = require("./ViewTotalNumberOfMessagesInChannelResponse");
var ViewUserMetadataResponse_1 = require("./ViewUserMetadataResponse");
var ViewWhoOwnsRegistrationOrDeviceTokenByTokenResponseInner_1 = require("./ViewWhoOwnsRegistrationOrDeviceTokenByTokenResponseInner");
var primitives = [
    "string",
    "boolean",
    "double",
    "integer",
    "long",
    "float",
    "number",
    "any"
];
var supportedMediaTypes = {
    "application/json": Infinity,
    "application/octet-stream": 0,
    "application/x-www-form-urlencoded": 0
};
var enumsMap = new Set([
    "SendBirdAdminMessageMessageTypeEnum",
    "SendBirdAdminMessageSendingStatusEnum",
    "SendBirdBaseMessageInstanceMessageTypeEnum",
    "SendBirdBaseMessageInstanceSendingStatusEnum",
    "SendBirdChannelResponseHiddenStateEnum",
    "SendBirdChannelResponseMyMemberStateEnum",
    "SendBirdChannelResponseMyMutedStateEnum",
    "SendBirdChannelResponseMyPushTriggerOptionEnum",
    "SendBirdChannelResponseMyRoleEnum",
    "SendBirdFileMessageParamsMentionTypeEnum",
    "SendBirdFileMessageParamsPushNotificationDeliveryOptionEnum",
    "SendBirdGroupChannelHiddenStateEnum",
    "SendBirdGroupChannelMyMemberStateEnum",
    "SendBirdGroupChannelMyMutedStateEnum",
    "SendBirdGroupChannelMyPushTriggerOptionEnum",
    "SendBirdGroupChannelMyRoleEnum",
    "SendBirdMemberRoleEnum",
    "SendBirdMemberStateEnum",
    "SendBirdPollDetailsStatusEnum",
    "SendBirdRestrictionInfoRestrictionTypeEnum",
    "SendBirdUserMessageParamsMentionTypeEnum",
    "SendBirdUserMessageParamsPushNotificationDeliveryOptionEnum",
]);
var typeMap = {
    "AddApnsPushConfigurationData": AddApnsPushConfigurationData_1.AddApnsPushConfigurationData,
    "AddApnsPushConfigurationResponse": AddApnsPushConfigurationResponse_1.AddApnsPushConfigurationResponse,
    "AddApnsPushConfigurationResponsePushConfigurationsInner": AddApnsPushConfigurationResponsePushConfigurationsInner_1.AddApnsPushConfigurationResponsePushConfigurationsInner,
    "AddEmojiCategoriesResponse": AddEmojiCategoriesResponse_1.AddEmojiCategoriesResponse,
    "AddEmojiCategoriesResponseEmojiCategoriesInner": AddEmojiCategoriesResponseEmojiCategoriesInner_1.AddEmojiCategoriesResponseEmojiCategoriesInner,
    "AddEmojisData": AddEmojisData_1.AddEmojisData,
    "AddEmojisResponse": AddEmojisResponse_1.AddEmojisResponse,
    "AddExtraDataToMessageData": AddExtraDataToMessageData_1.AddExtraDataToMessageData,
    "AddExtraDataToMessageResponse": AddExtraDataToMessageResponse_1.AddExtraDataToMessageResponse,
    "AddFcmPushConfigurationData": AddFcmPushConfigurationData_1.AddFcmPushConfigurationData,
    "AddFcmPushConfigurationResponse": AddFcmPushConfigurationResponse_1.AddFcmPushConfigurationResponse,
    "AddFcmPushConfigurationResponsePushConfigurationsInner": AddFcmPushConfigurationResponsePushConfigurationsInner_1.AddFcmPushConfigurationResponsePushConfigurationsInner,
    "AddHmsPushConfigurationData": AddHmsPushConfigurationData_1.AddHmsPushConfigurationData,
    "AddHmsPushConfigurationResponse": AddHmsPushConfigurationResponse_1.AddHmsPushConfigurationResponse,
    "AddHmsPushConfigurationResponsePushConfigurationsInner": AddHmsPushConfigurationResponsePushConfigurationsInner_1.AddHmsPushConfigurationResponsePushConfigurationsInner,
    "AddIpToWhitelistData": AddIpToWhitelistData_1.AddIpToWhitelistData,
    "AddIpToWhitelistResponse": AddIpToWhitelistResponse_1.AddIpToWhitelistResponse,
    "AddReactionToAMessageData": AddReactionToAMessageData_1.AddReactionToAMessageData,
    "AddReactionToAMessageResponse": AddReactionToAMessageResponse_1.AddReactionToAMessageResponse,
    "AddRegistrationOrDeviceTokenData": AddRegistrationOrDeviceTokenData_1.AddRegistrationOrDeviceTokenData,
    "AddRegistrationOrDeviceTokenResponse": AddRegistrationOrDeviceTokenResponse_1.AddRegistrationOrDeviceTokenResponse,
    "BanFromChannelsWithCustomChannelTypesData": BanFromChannelsWithCustomChannelTypesData_1.BanFromChannelsWithCustomChannelTypesData,
    "BanUsersInChannelsWithCustomChannelTypeData": BanUsersInChannelsWithCustomChannelTypeData_1.BanUsersInChannelsWithCustomChannelTypeData,
    "BanUsersInChannelsWithCustomChannelTypeDataBannedListInner": BanUsersInChannelsWithCustomChannelTypeDataBannedListInner_1.BanUsersInChannelsWithCustomChannelTypeDataBannedListInner,
    "Blob": Blob_1.Blob,
    "BlockUserData": BlockUserData_1.BlockUserData,
    "BlockUserResponse": BlockUserResponse_1.BlockUserResponse,
    "ChoosePushNotificationContentTemplateResponse": ChoosePushNotificationContentTemplateResponse_1.ChoosePushNotificationContentTemplateResponse,
    "ChooseWhichEventsToSubscribeToData": ChooseWhichEventsToSubscribeToData_1.ChooseWhichEventsToSubscribeToData,
    "ChooseWhichEventsToSubscribeToResponse": ChooseWhichEventsToSubscribeToResponse_1.ChooseWhichEventsToSubscribeToResponse,
    "ChooseWhichEventsToSubscribeToResponseWebhook": ChooseWhichEventsToSubscribeToResponseWebhook_1.ChooseWhichEventsToSubscribeToResponseWebhook,
    "ConfigureAutoEventData": ConfigureAutoEventData_1.ConfigureAutoEventData,
    "ConfigureAutoEventDataAutoEventMessage": ConfigureAutoEventDataAutoEventMessage_1.ConfigureAutoEventDataAutoEventMessage,
    "CreateBotData": CreateBotData_1.CreateBotData,
    "CreateBotResponse": CreateBotResponse_1.CreateBotResponse,
    "CreateBotResponseBot": CreateBotResponseBot_1.CreateBotResponseBot,
    "CreateChannelMetacounterData": CreateChannelMetacounterData_1.CreateChannelMetacounterData,
    "CreateChannelMetadataData": CreateChannelMetadataData_1.CreateChannelMetadataData,
    "CreateChannelMetadataResponse": CreateChannelMetadataResponse_1.CreateChannelMetadataResponse,
    "CreateUserData": CreateUserData_1.CreateUserData,
    "CreateUserMetadataData": CreateUserMetadataData_1.CreateUserMetadataData,
    "CreateUserMetadataResponse": CreateUserMetadataResponse_1.CreateUserMetadataResponse,
    "CreateUserTokenData": CreateUserTokenData_1.CreateUserTokenData,
    "CreateUserTokenResponse": CreateUserTokenResponse_1.CreateUserTokenResponse,
    "CustomTypeListBannedUsersResponse": CustomTypeListBannedUsersResponse_1.CustomTypeListBannedUsersResponse,
    "DeleteAllowedIpsFromWhitelistResponse": DeleteAllowedIpsFromWhitelistResponse_1.DeleteAllowedIpsFromWhitelistResponse,
    "DeleteApnsCertificateByIdResponse": DeleteApnsCertificateByIdResponse_1.DeleteApnsCertificateByIdResponse,
    "EnableReactionsData": EnableReactionsData_1.EnableReactionsData,
    "EnableReactionsResponse": EnableReactionsResponse_1.EnableReactionsResponse,
    "Function": Function_1.Function,
    "GcAcceptInvitationData": GcAcceptInvitationData_1.GcAcceptInvitationData,
    "GcBanUserData": GcBanUserData_1.GcBanUserData,
    "GcBanUserResponse": GcBanUserResponse_1.GcBanUserResponse,
    "GcCheckIfMemberByIdResponse": GcCheckIfMemberByIdResponse_1.GcCheckIfMemberByIdResponse,
    "GcCreateChannelData": GcCreateChannelData_1.GcCreateChannelData,
    "GcDeclineInvitationData": GcDeclineInvitationData_1.GcDeclineInvitationData,
    "GcFreezeChannelData": GcFreezeChannelData_1.GcFreezeChannelData,
    "GcHideOrArchiveChannelData": GcHideOrArchiveChannelData_1.GcHideOrArchiveChannelData,
    "GcInviteAsMembersData": GcInviteAsMembersData_1.GcInviteAsMembersData,
    "GcJoinChannelData": GcJoinChannelData_1.GcJoinChannelData,
    "GcLeaveChannelData": GcLeaveChannelData_1.GcLeaveChannelData,
    "GcListBannedUsersResponse": GcListBannedUsersResponse_1.GcListBannedUsersResponse,
    "GcListChannelsResponse": GcListChannelsResponse_1.GcListChannelsResponse,
    "GcListMembersResponse": GcListMembersResponse_1.GcListMembersResponse,
    "GcListMutedUsersResponse": GcListMutedUsersResponse_1.GcListMutedUsersResponse,
    "GcListOperatorsResponse": GcListOperatorsResponse_1.GcListOperatorsResponse,
    "GcMarkAllMessagesAsDeliveredData": GcMarkAllMessagesAsDeliveredData_1.GcMarkAllMessagesAsDeliveredData,
    "GcMarkAllMessagesAsDeliveredResponse": GcMarkAllMessagesAsDeliveredResponse_1.GcMarkAllMessagesAsDeliveredResponse,
    "GcMarkAllMessagesAsReadData": GcMarkAllMessagesAsReadData_1.GcMarkAllMessagesAsReadData,
    "GcMuteUserData": GcMuteUserData_1.GcMuteUserData,
    "GcRegisterOperatorsData": GcRegisterOperatorsData_1.GcRegisterOperatorsData,
    "GcRegisterOperatorsResponse": GcRegisterOperatorsResponse_1.GcRegisterOperatorsResponse,
    "GcResetChatHistoryData": GcResetChatHistoryData_1.GcResetChatHistoryData,
    "GcResetChatHistoryResponse": GcResetChatHistoryResponse_1.GcResetChatHistoryResponse,
    "GcTypingIndicatorsData": GcTypingIndicatorsData_1.GcTypingIndicatorsData,
    "GcUpdateBanByIdData": GcUpdateBanByIdData_1.GcUpdateBanByIdData,
    "GcUpdateBanByIdResponse": GcUpdateBanByIdResponse_1.GcUpdateBanByIdResponse,
    "GcUpdateChannelByUrlData": GcUpdateChannelByUrlData_1.GcUpdateChannelByUrlData,
    "GcViewBanByIdResponse": GcViewBanByIdResponse_1.GcViewBanByIdResponse,
    "GcViewMuteByIdResponse": GcViewMuteByIdResponse_1.GcViewMuteByIdResponse,
    "GcViewNumberOfEachMembersUnreadMessagesResponse": GcViewNumberOfEachMembersUnreadMessagesResponse_1.GcViewNumberOfEachMembersUnreadMessagesResponse,
    "GenerateSecondaryApiTokenData": GenerateSecondaryApiTokenData_1.GenerateSecondaryApiTokenData,
    "GenerateSecondaryApiTokenResponse": GenerateSecondaryApiTokenResponse_1.GenerateSecondaryApiTokenResponse,
    "GetDetailedOpenRateOfAnnouncementByIdResponse": GetDetailedOpenRateOfAnnouncementByIdResponse_1.GetDetailedOpenRateOfAnnouncementByIdResponse,
    "GetDetailedOpenRateOfAnnouncementGroupResponse": GetDetailedOpenRateOfAnnouncementGroupResponse_1.GetDetailedOpenRateOfAnnouncementGroupResponse,
    "GetDetailedOpenStatusOfAnnouncementByIdResponse": GetDetailedOpenStatusOfAnnouncementByIdResponse_1.GetDetailedOpenStatusOfAnnouncementByIdResponse,
    "GetDetailedOpenStatusOfAnnouncementByIdResponseOpenStatusInner": GetDetailedOpenStatusOfAnnouncementByIdResponseOpenStatusInner_1.GetDetailedOpenStatusOfAnnouncementByIdResponseOpenStatusInner,
    "GetStatisticsDailyResponse": GetStatisticsDailyResponse_1.GetStatisticsDailyResponse,
    "GetStatisticsDailyResponseStatisticsInner": GetStatisticsDailyResponseStatisticsInner_1.GetStatisticsDailyResponseStatisticsInner,
    "GetStatisticsMonthlyResponse": GetStatisticsMonthlyResponse_1.GetStatisticsMonthlyResponse,
    "GetStatisticsResponse": GetStatisticsResponse_1.GetStatisticsResponse,
    "JoinChannelsData": JoinChannelsData_1.JoinChannelsData,
    "JoinChannelsResponse": JoinChannelsResponse_1.JoinChannelsResponse,
    "LeaveMyGroupChannelsData": LeaveMyGroupChannelsData_1.LeaveMyGroupChannelsData,
    "ListAllEmojisAndEmojiCategoriesResponse": ListAllEmojisAndEmojiCategoriesResponse_1.ListAllEmojisAndEmojiCategoriesResponse,
    "ListAllEmojisAndEmojiCategoriesResponseEmojiCategoriesInner": ListAllEmojisAndEmojiCategoriesResponseEmojiCategoriesInner_1.ListAllEmojisAndEmojiCategoriesResponseEmojiCategoriesInner,
    "ListAllEmojisAndEmojiCategoriesResponseEmojiCategoriesInnerEmojisInner": ListAllEmojisAndEmojiCategoriesResponseEmojiCategoriesInnerEmojisInner_1.ListAllEmojisAndEmojiCategoriesResponseEmojiCategoriesInnerEmojisInner,
    "ListAnnouncementGroupsResponse": ListAnnouncementGroupsResponse_1.ListAnnouncementGroupsResponse,
    "ListAnnouncementsResponse": ListAnnouncementsResponse_1.ListAnnouncementsResponse,
    "ListAnnouncementsResponseAnnouncementsInner": ListAnnouncementsResponseAnnouncementsInner_1.ListAnnouncementsResponseAnnouncementsInner,
    "ListBannedChannelsResponse": ListBannedChannelsResponse_1.ListBannedChannelsResponse,
    "ListBannedChannelsResponseBannedChannelsInner": ListBannedChannelsResponseBannedChannelsInner_1.ListBannedChannelsResponseBannedChannelsInner,
    "ListBlockedUsersResponse": ListBlockedUsersResponse_1.ListBlockedUsersResponse,
    "ListBotsResponse": ListBotsResponse_1.ListBotsResponse,
    "ListBotsResponseBotsInner": ListBotsResponseBotsInner_1.ListBotsResponseBotsInner,
    "ListDataExportsByMessageChannelOrUserResponse": ListDataExportsByMessageChannelOrUserResponse_1.ListDataExportsByMessageChannelOrUserResponse,
    "ListDataExportsByMessageChannelOrUserResponseExportedDataInner": ListDataExportsByMessageChannelOrUserResponseExportedDataInner_1.ListDataExportsByMessageChannelOrUserResponseExportedDataInner,
    "ListDataExportsByMessageChannelOrUserResponseExportedDataInnerFile": ListDataExportsByMessageChannelOrUserResponseExportedDataInnerFile_1.ListDataExportsByMessageChannelOrUserResponseExportedDataInnerFile,
    "ListEmojisResponse": ListEmojisResponse_1.ListEmojisResponse,
    "ListGdprRequestsResponse": ListGdprRequestsResponse_1.ListGdprRequestsResponse,
    "ListGdprRequestsResponseRequestsInner": ListGdprRequestsResponseRequestsInner_1.ListGdprRequestsResponseRequestsInner,
    "ListMessagesResponse": ListMessagesResponse_1.ListMessagesResponse,
    "ListMessagesResponseMessagesInner": ListMessagesResponseMessagesInner_1.ListMessagesResponseMessagesInner,
    "ListMessagesResponseMessagesInnerOgTag": ListMessagesResponseMessagesInnerOgTag_1.ListMessagesResponseMessagesInnerOgTag,
    "ListMessagesResponseMessagesInnerSortedMetaarrayInner": ListMessagesResponseMessagesInnerSortedMetaarrayInner_1.ListMessagesResponseMessagesInnerSortedMetaarrayInner,
    "ListMutedChannelsResponse": ListMutedChannelsResponse_1.ListMutedChannelsResponse,
    "ListMutedUsersInChannelsWithCustomChannelType200Response": ListMutedUsersInChannelsWithCustomChannelType200Response_1.ListMutedUsersInChannelsWithCustomChannelType200Response,
    "ListMyGroupChannelsResponse": ListMyGroupChannelsResponse_1.ListMyGroupChannelsResponse,
    "ListPushConfigurationsResponse": ListPushConfigurationsResponse_1.ListPushConfigurationsResponse,
    "ListPushConfigurationsResponsePushConfigurationsInner": ListPushConfigurationsResponsePushConfigurationsInner_1.ListPushConfigurationsResponsePushConfigurationsInner,
    "ListPushNotificationContentTemplatesResponse": ListPushNotificationContentTemplatesResponse_1.ListPushNotificationContentTemplatesResponse,
    "ListPushNotificationContentTemplatesResponsePushMessageTemplatesInner": ListPushNotificationContentTemplatesResponsePushMessageTemplatesInner_1.ListPushNotificationContentTemplatesResponsePushMessageTemplatesInner,
    "ListPushNotificationContentTemplatesResponsePushMessageTemplatesInnerTemplate": ListPushNotificationContentTemplatesResponsePushMessageTemplatesInnerTemplate_1.ListPushNotificationContentTemplatesResponsePushMessageTemplatesInnerTemplate,
    "ListReactionsOfMessageResponse": ListReactionsOfMessageResponse_1.ListReactionsOfMessageResponse,
    "ListRegistrationOrDeviceTokensResponse": ListRegistrationOrDeviceTokensResponse_1.ListRegistrationOrDeviceTokensResponse,
    "ListReportsOnChannelByUrlResponse": ListReportsOnChannelByUrlResponse_1.ListReportsOnChannelByUrlResponse,
    "ListReportsOnMessageByIdResponse": ListReportsOnMessageByIdResponse_1.ListReportsOnMessageByIdResponse,
    "ListReportsOnMessageByIdResponseReportLogsInner": ListReportsOnMessageByIdResponseReportLogsInner_1.ListReportsOnMessageByIdResponseReportLogsInner,
    "ListReportsOnUserByIdResponse": ListReportsOnUserByIdResponse_1.ListReportsOnUserByIdResponse,
    "ListReportsResponse": ListReportsResponse_1.ListReportsResponse,
    "ListReportsResponseReportLogsInner": ListReportsResponseReportLogsInner_1.ListReportsResponseReportLogsInner,
    "ListSecondaryApiTokensResponse": ListSecondaryApiTokensResponse_1.ListSecondaryApiTokensResponse,
    "ListSecondaryApiTokensResponseApiTokensInner": ListSecondaryApiTokensResponseApiTokensInner_1.ListSecondaryApiTokensResponseApiTokensInner,
    "ListUsersResponse": ListUsersResponse_1.ListUsersResponse,
    "MarkAllMessagesAsReadData": MarkAllMessagesAsReadData_1.MarkAllMessagesAsReadData,
    "ModelFile": ModelFile_1.ModelFile,
    "MuteInChannelsWithCustomChannelTypesData": MuteInChannelsWithCustomChannelTypesData_1.MuteInChannelsWithCustomChannelTypesData,
    "MuteUsersInChannelsWithCustomChannelTypeData": MuteUsersInChannelsWithCustomChannelTypeData_1.MuteUsersInChannelsWithCustomChannelTypeData,
    "OcBanUserData": OcBanUserData_1.OcBanUserData,
    "OcBanUserResponse": OcBanUserResponse_1.OcBanUserResponse,
    "OcCreateChannelData": OcCreateChannelData_1.OcCreateChannelData,
    "OcDeleteChannelByUrl200Response": OcDeleteChannelByUrl200Response_1.OcDeleteChannelByUrl200Response,
    "OcFreezeChannelData": OcFreezeChannelData_1.OcFreezeChannelData,
    "OcListBannedUsersResponse": OcListBannedUsersResponse_1.OcListBannedUsersResponse,
    "OcListBannedUsersResponseBannedListInner": OcListBannedUsersResponseBannedListInner_1.OcListBannedUsersResponseBannedListInner,
    "OcListChannelsResponse": OcListChannelsResponse_1.OcListChannelsResponse,
    "OcListMutedUsersResponse": OcListMutedUsersResponse_1.OcListMutedUsersResponse,
    "OcListOperatorsResponse": OcListOperatorsResponse_1.OcListOperatorsResponse,
    "OcListParticipantsResponse": OcListParticipantsResponse_1.OcListParticipantsResponse,
    "OcMuteUserData": OcMuteUserData_1.OcMuteUserData,
    "OcRegisterOperatorsData": OcRegisterOperatorsData_1.OcRegisterOperatorsData,
    "OcUpdateBanByIdData": OcUpdateBanByIdData_1.OcUpdateBanByIdData,
    "OcUpdateBanByIdResponse": OcUpdateBanByIdResponse_1.OcUpdateBanByIdResponse,
    "OcUpdateChannelByUrlData": OcUpdateChannelByUrlData_1.OcUpdateChannelByUrlData,
    "OcViewBanByIdResponse": OcViewBanByIdResponse_1.OcViewBanByIdResponse,
    "OcViewMuteByIdResponse": OcViewMuteByIdResponse_1.OcViewMuteByIdResponse,
    "RegisterAndScheduleDataExportData": RegisterAndScheduleDataExportData_1.RegisterAndScheduleDataExportData,
    "RegisterAndScheduleDataExportResponse": RegisterAndScheduleDataExportResponse_1.RegisterAndScheduleDataExportResponse,
    "RegisterAsOperatorToChannelsWithCustomChannelTypesData": RegisterAsOperatorToChannelsWithCustomChannelTypesData_1.RegisterAsOperatorToChannelsWithCustomChannelTypesData,
    "RegisterGdprRequestData": RegisterGdprRequestData_1.RegisterGdprRequestData,
    "RegisterGdprRequestResponse": RegisterGdprRequestResponse_1.RegisterGdprRequestResponse,
    "RemovePushConfigurationByIdResponse": RemovePushConfigurationByIdResponse_1.RemovePushConfigurationByIdResponse,
    "RemoveReactionFromAMessageResponse": RemoveReactionFromAMessageResponse_1.RemoveReactionFromAMessageResponse,
    "RemoveRegistrationOrDeviceTokenByTokenResponse": RemoveRegistrationOrDeviceTokenByTokenResponse_1.RemoveRegistrationOrDeviceTokenByTokenResponse,
    "RemoveRegistrationOrDeviceTokenFromOwnerByTokenResponse": RemoveRegistrationOrDeviceTokenFromOwnerByTokenResponse_1.RemoveRegistrationOrDeviceTokenFromOwnerByTokenResponse,
    "RemoveRegistrationOrDeviceTokenResponse": RemoveRegistrationOrDeviceTokenResponse_1.RemoveRegistrationOrDeviceTokenResponse,
    "ReportChannelByUrlData": ReportChannelByUrlData_1.ReportChannelByUrlData,
    "ReportChannelByUrlResponse": ReportChannelByUrlResponse_1.ReportChannelByUrlResponse,
    "ReportMessageByIdData": ReportMessageByIdData_1.ReportMessageByIdData,
    "ReportMessageByIdResponse": ReportMessageByIdResponse_1.ReportMessageByIdResponse,
    "ReportUserByIdData": ReportUserByIdData_1.ReportUserByIdData,
    "ReportUserByIdResponse": ReportUserByIdResponse_1.ReportUserByIdResponse,
    "ResetPushPreferencesResponse": ResetPushPreferencesResponse_1.ResetPushPreferencesResponse,
    "RetrieveAdvancedAnalyticsMetricsResponse": RetrieveAdvancedAnalyticsMetricsResponse_1.RetrieveAdvancedAnalyticsMetricsResponse,
    "RetrieveIpWhitelistResponse": RetrieveIpWhitelistResponse_1.RetrieveIpWhitelistResponse,
    "RetrieveListOfSubscribedEventsResponse": RetrieveListOfSubscribedEventsResponse_1.RetrieveListOfSubscribedEventsResponse,
    "RetrieveListOfSubscribedEventsResponseWebhook": RetrieveListOfSubscribedEventsResponseWebhook_1.RetrieveListOfSubscribedEventsResponseWebhook,
    "RevokeSecondaryApiTokenByTokenResponse": RevokeSecondaryApiTokenByTokenResponse_1.RevokeSecondaryApiTokenByTokenResponse,
    "SBObject": SBObject_1.SBObject,
    "ScheduleAnnouncementData": ScheduleAnnouncementData_1.ScheduleAnnouncementData,
    "ScheduleAnnouncementDataMessage": ScheduleAnnouncementDataMessage_1.ScheduleAnnouncementDataMessage,
    "ScheduleAnnouncementResponse": ScheduleAnnouncementResponse_1.ScheduleAnnouncementResponse,
    "ScheduleAnnouncementResponseCreateChannelOptions": ScheduleAnnouncementResponseCreateChannelOptions_1.ScheduleAnnouncementResponseCreateChannelOptions,
    "ScheduleAnnouncementResponseMessage": ScheduleAnnouncementResponseMessage_1.ScheduleAnnouncementResponseMessage,
    "SendBirdAdminMessage": SendBirdAdminMessage_1.SendBirdAdminMessage,
    "SendBirdAppleCriticalAlertOptions": SendBirdAppleCriticalAlertOptions_1.SendBirdAppleCriticalAlertOptions,
    "SendBirdAutoEventMessageSettings": SendBirdAutoEventMessageSettings_1.SendBirdAutoEventMessageSettings,
    "SendBirdBaseChannel": SendBirdBaseChannel_1.SendBirdBaseChannel,
    "SendBirdBaseMessageInstance": SendBirdBaseMessageInstance_1.SendBirdBaseMessageInstance,
    "SendBirdBotsMessageResponse": SendBirdBotsMessageResponse_1.SendBirdBotsMessageResponse,
    "SendBirdBotsMessageResponseMessage": SendBirdBotsMessageResponseMessage_1.SendBirdBotsMessageResponseMessage,
    "SendBirdBotsMessageResponseMessageExtendedMessagePayload": SendBirdBotsMessageResponseMessageExtendedMessagePayload_1.SendBirdBotsMessageResponseMessageExtendedMessagePayload,
    "SendBirdBotsMessageResponseMessageMessageEvents": SendBirdBotsMessageResponseMessageMessageEvents_1.SendBirdBotsMessageResponseMessageMessageEvents,
    "SendBirdChannelResponse": SendBirdChannelResponse_1.SendBirdChannelResponse,
    "SendBirdEmoji": SendBirdEmoji_1.SendBirdEmoji,
    "SendBirdEmojiCategory": SendBirdEmojiCategory_1.SendBirdEmojiCategory,
    "SendBirdFile": SendBirdFile_1.SendBirdFile,
    "SendBirdFileMessageParams": SendBirdFileMessageParams_1.SendBirdFileMessageParams,
    "SendBirdGroupChannel": SendBirdGroupChannel_1.SendBirdGroupChannel,
    "SendBirdGroupChannelChannel": SendBirdGroupChannelChannel_1.SendBirdGroupChannelChannel,
    "SendBirdGroupChannelCollection": SendBirdGroupChannelCollection_1.SendBirdGroupChannelCollection,
    "SendBirdGroupChannelCreatedBy": SendBirdGroupChannelCreatedBy_1.SendBirdGroupChannelCreatedBy,
    "SendBirdGroupChannelDisappearingMessage": SendBirdGroupChannelDisappearingMessage_1.SendBirdGroupChannelDisappearingMessage,
    "SendBirdGroupChannelSmsFallback": SendBirdGroupChannelSmsFallback_1.SendBirdGroupChannelSmsFallback,
    "SendBirdMember": SendBirdMember_1.SendBirdMember,
    "SendBirdMessageMetaArray": SendBirdMessageMetaArray_1.SendBirdMessageMetaArray,
    "SendBirdMessageResponse": SendBirdMessageResponse_1.SendBirdMessageResponse,
    "SendBirdMessageResponseMentionedUsersInner": SendBirdMessageResponseMentionedUsersInner_1.SendBirdMessageResponseMentionedUsersInner,
    "SendBirdMessageResponseUser": SendBirdMessageResponseUser_1.SendBirdMessageResponseUser,
    "SendBirdOGImage": SendBirdOGImage_1.SendBirdOGImage,
    "SendBirdOGMetaData": SendBirdOGMetaData_1.SendBirdOGMetaData,
    "SendBirdOpenChannel": SendBirdOpenChannel_1.SendBirdOpenChannel,
    "SendBirdParentMessageInfo": SendBirdParentMessageInfo_1.SendBirdParentMessageInfo,
    "SendBirdPlugin": SendBirdPlugin_1.SendBirdPlugin,
    "SendBirdPoll": SendBirdPoll_1.SendBirdPoll,
    "SendBirdPollDetails": SendBirdPollDetails_1.SendBirdPollDetails,
    "SendBirdPollOption": SendBirdPollOption_1.SendBirdPollOption,
    "SendBirdPollUpdatedVoteCount": SendBirdPollUpdatedVoteCount_1.SendBirdPollUpdatedVoteCount,
    "SendBirdReaction": SendBirdReaction_1.SendBirdReaction,
    "SendBirdRestrictionInfo": SendBirdRestrictionInfo_1.SendBirdRestrictionInfo,
    "SendBirdScheduledMessage": SendBirdScheduledMessage_1.SendBirdScheduledMessage,
    "SendBirdSender": SendBirdSender_1.SendBirdSender,
    "SendBirdThreadInfo": SendBirdThreadInfo_1.SendBirdThreadInfo,
    "SendBirdThumbnailSBObject": SendBirdThumbnailSBObject_1.SendBirdThumbnailSBObject,
    "SendBirdThumbnailSize": SendBirdThumbnailSize_1.SendBirdThumbnailSize,
    "SendBirdUser": SendBirdUser_1.SendBirdUser,
    "SendBirdUserMessageParams": SendBirdUserMessageParams_1.SendBirdUserMessageParams,
    "SendBotSMessageData": SendBotSMessageData_1.SendBotSMessageData,
    "SendBotSMessageDataExtendedMessagePayload": SendBotSMessageDataExtendedMessagePayload_1.SendBotSMessageDataExtendedMessagePayload,
    "SendMessageData": SendMessageData_1.SendMessageData,
    "SetDomainFilterData": SetDomainFilterData_1.SetDomainFilterData,
    "SetDomainFilterDataDomainFilter": SetDomainFilterDataDomainFilter_1.SetDomainFilterDataDomainFilter,
    "SetDomainFilterDataImageModeration": SetDomainFilterDataImageModeration_1.SetDomainFilterDataImageModeration,
    "SetDomainFilterDataImageModerationLimits": SetDomainFilterDataImageModerationLimits_1.SetDomainFilterDataImageModerationLimits,
    "SetDomainFilterDataProfanityFilter": SetDomainFilterDataProfanityFilter_1.SetDomainFilterDataProfanityFilter,
    "SetDomainFilterDataProfanityFilterRegexFiltersInner": SetDomainFilterDataProfanityFilterRegexFiltersInner_1.SetDomainFilterDataProfanityFilterRegexFiltersInner,
    "SetDomainFilterDataProfanityTriggeredModeration": SetDomainFilterDataProfanityTriggeredModeration_1.SetDomainFilterDataProfanityTriggeredModeration,
    "TranslateMessageIntoOtherLanguagesData": TranslateMessageIntoOtherLanguagesData_1.TranslateMessageIntoOtherLanguagesData,
    "UpdateAnnouncementByIdData": UpdateAnnouncementByIdData_1.UpdateAnnouncementByIdData,
    "UpdateAnnouncementByIdResponse": UpdateAnnouncementByIdResponse_1.UpdateAnnouncementByIdResponse,
    "UpdateAnnouncementByIdResponseMessage": UpdateAnnouncementByIdResponseMessage_1.UpdateAnnouncementByIdResponseMessage,
    "UpdateApnsPushConfigurationByIdData": UpdateApnsPushConfigurationByIdData_1.UpdateApnsPushConfigurationByIdData,
    "UpdateApnsPushConfigurationByIdResponse": UpdateApnsPushConfigurationByIdResponse_1.UpdateApnsPushConfigurationByIdResponse,
    "UpdateBotByIdData": UpdateBotByIdData_1.UpdateBotByIdData,
    "UpdateBotByIdResponse": UpdateBotByIdResponse_1.UpdateBotByIdResponse,
    "UpdateChannelInvitationPreferenceData": UpdateChannelInvitationPreferenceData_1.UpdateChannelInvitationPreferenceData,
    "UpdateChannelInvitationPreferenceResponse": UpdateChannelInvitationPreferenceResponse_1.UpdateChannelInvitationPreferenceResponse,
    "UpdateChannelMetacounterData": UpdateChannelMetacounterData_1.UpdateChannelMetacounterData,
    "UpdateChannelMetadataData": UpdateChannelMetadataData_1.UpdateChannelMetadataData,
    "UpdateCountPreferenceOfChannelByUrlData": UpdateCountPreferenceOfChannelByUrlData_1.UpdateCountPreferenceOfChannelByUrlData,
    "UpdateCountPreferenceOfChannelByUrlResponse": UpdateCountPreferenceOfChannelByUrlResponse_1.UpdateCountPreferenceOfChannelByUrlResponse,
    "UpdateDefaultChannelInvitationPreferenceData": UpdateDefaultChannelInvitationPreferenceData_1.UpdateDefaultChannelInvitationPreferenceData,
    "UpdateDefaultChannelInvitationPreferenceResponse": UpdateDefaultChannelInvitationPreferenceResponse_1.UpdateDefaultChannelInvitationPreferenceResponse,
    "UpdateEmojiCategoryUrlByIdData": UpdateEmojiCategoryUrlByIdData_1.UpdateEmojiCategoryUrlByIdData,
    "UpdateEmojiUrlByKeyData": UpdateEmojiUrlByKeyData_1.UpdateEmojiUrlByKeyData,
    "UpdateExtraDataInMessageData": UpdateExtraDataInMessageData_1.UpdateExtraDataInMessageData,
    "UpdateExtraDataInMessageResponse": UpdateExtraDataInMessageResponse_1.UpdateExtraDataInMessageResponse,
    "UpdateExtraDataInMessageResponseSortedMetaarrayInner": UpdateExtraDataInMessageResponseSortedMetaarrayInner_1.UpdateExtraDataInMessageResponseSortedMetaarrayInner,
    "UpdateFcmPushConfigurationByIdData": UpdateFcmPushConfigurationByIdData_1.UpdateFcmPushConfigurationByIdData,
    "UpdateFcmPushConfigurationByIdResponse": UpdateFcmPushConfigurationByIdResponse_1.UpdateFcmPushConfigurationByIdResponse,
    "UpdateHmsPushConfigurationByIdData": UpdateHmsPushConfigurationByIdData_1.UpdateHmsPushConfigurationByIdData,
    "UpdateHmsPushConfigurationByIdResponse": UpdateHmsPushConfigurationByIdResponse_1.UpdateHmsPushConfigurationByIdResponse,
    "UpdateMessageByIdData": UpdateMessageByIdData_1.UpdateMessageByIdData,
    "UpdatePushNotificationContentTemplateData": UpdatePushNotificationContentTemplateData_1.UpdatePushNotificationContentTemplateData,
    "UpdatePushNotificationContentTemplateResponse": UpdatePushNotificationContentTemplateResponse_1.UpdatePushNotificationContentTemplateResponse,
    "UpdatePushPreferencesData": UpdatePushPreferencesData_1.UpdatePushPreferencesData,
    "UpdatePushPreferencesForChannelByUrlData": UpdatePushPreferencesForChannelByUrlData_1.UpdatePushPreferencesForChannelByUrlData,
    "UpdatePushPreferencesForChannelByUrlResponse": UpdatePushPreferencesForChannelByUrlResponse_1.UpdatePushPreferencesForChannelByUrlResponse,
    "UpdatePushPreferencesResponse": UpdatePushPreferencesResponse_1.UpdatePushPreferencesResponse,
    "UpdateUserByIdData": UpdateUserByIdData_1.UpdateUserByIdData,
    "UpdateUserMetadataData": UpdateUserMetadataData_1.UpdateUserMetadataData,
    "UpdateUserMetadataResponse": UpdateUserMetadataResponse_1.UpdateUserMetadataResponse,
    "UseDefaultEmojisData": UseDefaultEmojisData_1.UseDefaultEmojisData,
    "UseDefaultEmojisResponse": UseDefaultEmojisResponse_1.UseDefaultEmojisResponse,
    "V3ApplicationsPushSettingsGet200Response": V3ApplicationsPushSettingsGet200Response_1.V3ApplicationsPushSettingsGet200Response,
    "V3ApplicationsPushSettingsGetRequest": V3ApplicationsPushSettingsGetRequest_1.V3ApplicationsPushSettingsGetRequest,
    "V3GroupChannelsChannelUrlScheduledMessagesScheduledMessageIdDeleteRequest": V3GroupChannelsChannelUrlScheduledMessagesScheduledMessageIdDeleteRequest_1.V3GroupChannelsChannelUrlScheduledMessagesScheduledMessageIdDeleteRequest,
    "V3PollsGetRequest": V3PollsGetRequest_1.V3PollsGetRequest,
    "V3PollsPollIdDeleteRequest": V3PollsPollIdDeleteRequest_1.V3PollsPollIdDeleteRequest,
    "V3PollsPollIdDeleteRequest1": V3PollsPollIdDeleteRequest1_1.V3PollsPollIdDeleteRequest1,
    "V3PollsPollIdOptionsOptionIdDeleteRequest": V3PollsPollIdOptionsOptionIdDeleteRequest_1.V3PollsPollIdOptionsOptionIdDeleteRequest,
    "V3PollsPollIdOptionsOptionIdVotersGet200Response": V3PollsPollIdOptionsOptionIdVotersGet200Response_1.V3PollsPollIdOptionsOptionIdVotersGet200Response,
    "V3PollsPollIdOptionsOptionIdVotersGet200ResponseVotersInner": V3PollsPollIdOptionsOptionIdVotersGet200ResponseVotersInner_1.V3PollsPollIdOptionsOptionIdVotersGet200ResponseVotersInner,
    "V3PollsPollIdOptionsOptionIdVotersGetRequest": V3PollsPollIdOptionsOptionIdVotersGetRequest_1.V3PollsPollIdOptionsOptionIdVotersGetRequest,
    "V3PollsPollIdVotePutRequest": V3PollsPollIdVotePutRequest_1.V3PollsPollIdVotePutRequest,
    "V3ScheduledMessagesCountGet200Response": V3ScheduledMessagesCountGet200Response_1.V3ScheduledMessagesCountGet200Response,
    "V3ScheduledMessagesGet200Response": V3ScheduledMessagesGet200Response_1.V3ScheduledMessagesGet200Response,
    "ViewAnnouncementByIdResponse": ViewAnnouncementByIdResponse_1.ViewAnnouncementByIdResponse,
    "ViewBotByIdResponse": ViewBotByIdResponse_1.ViewBotByIdResponse,
    "ViewChannelInvitationPreferenceResponse": ViewChannelInvitationPreferenceResponse_1.ViewChannelInvitationPreferenceResponse,
    "ViewCountPreferenceOfChannelByUrlResponse": ViewCountPreferenceOfChannelByUrlResponse_1.ViewCountPreferenceOfChannelByUrlResponse,
    "ViewDataExportByIdResponse": ViewDataExportByIdResponse_1.ViewDataExportByIdResponse,
    "ViewDefaultChannelInvitationPreferenceResponse": ViewDefaultChannelInvitationPreferenceResponse_1.ViewDefaultChannelInvitationPreferenceResponse,
    "ViewGdprRequestByIdResponse": ViewGdprRequestByIdResponse_1.ViewGdprRequestByIdResponse,
    "ViewNumberOfChannelsByJoinStatusResponse": ViewNumberOfChannelsByJoinStatusResponse_1.ViewNumberOfChannelsByJoinStatusResponse,
    "ViewNumberOfChannelsWithUnreadMessagesResponse": ViewNumberOfChannelsWithUnreadMessagesResponse_1.ViewNumberOfChannelsWithUnreadMessagesResponse,
    "ViewNumberOfConcurrentConnectionsResponse": ViewNumberOfConcurrentConnectionsResponse_1.ViewNumberOfConcurrentConnectionsResponse,
    "ViewNumberOfDailyActiveUsersResponse": ViewNumberOfDailyActiveUsersResponse_1.ViewNumberOfDailyActiveUsersResponse,
    "ViewNumberOfMonthlyActiveUsersResponse": ViewNumberOfMonthlyActiveUsersResponse_1.ViewNumberOfMonthlyActiveUsersResponse,
    "ViewNumberOfPeakConnectionsResponse": ViewNumberOfPeakConnectionsResponse_1.ViewNumberOfPeakConnectionsResponse,
    "ViewNumberOfPeakConnectionsResponsePeakConnectionsInner": ViewNumberOfPeakConnectionsResponsePeakConnectionsInner_1.ViewNumberOfPeakConnectionsResponsePeakConnectionsInner,
    "ViewNumberOfUnreadItemsResponse": ViewNumberOfUnreadItemsResponse_1.ViewNumberOfUnreadItemsResponse,
    "ViewNumberOfUnreadMessagesResponse": ViewNumberOfUnreadMessagesResponse_1.ViewNumberOfUnreadMessagesResponse,
    "ViewPushConfigurationByIdResponse": ViewPushConfigurationByIdResponse_1.ViewPushConfigurationByIdResponse,
    "ViewPushNotificationContentTemplateResponse": ViewPushNotificationContentTemplateResponse_1.ViewPushNotificationContentTemplateResponse,
    "ViewPushNotificationContentTemplateResponsePushMessageTemplatesInner": ViewPushNotificationContentTemplateResponsePushMessageTemplatesInner_1.ViewPushNotificationContentTemplateResponsePushMessageTemplatesInner,
    "ViewPushPreferencesForChannelByUrlResponse": ViewPushPreferencesForChannelByUrlResponse_1.ViewPushPreferencesForChannelByUrlResponse,
    "ViewPushPreferencesResponse": ViewPushPreferencesResponse_1.ViewPushPreferencesResponse,
    "ViewSecondaryApiTokenByTokenResponse": ViewSecondaryApiTokenByTokenResponse_1.ViewSecondaryApiTokenByTokenResponse,
    "ViewTotalNumberOfMessagesInChannelResponse": ViewTotalNumberOfMessagesInChannelResponse_1.ViewTotalNumberOfMessagesInChannelResponse,
    "ViewUserMetadataResponse": ViewUserMetadataResponse_1.ViewUserMetadataResponse,
    "ViewWhoOwnsRegistrationOrDeviceTokenByTokenResponseInner": ViewWhoOwnsRegistrationOrDeviceTokenByTokenResponseInner_1.ViewWhoOwnsRegistrationOrDeviceTokenByTokenResponseInner,
};
var ObjectSerializer = (function () {
    function ObjectSerializer() {
    }
    ObjectSerializer.findCorrectType = function (data, expectedType) {
        if (data == undefined) {
            return expectedType;
        }
        else if (primitives.indexOf(expectedType.toLowerCase()) !== -1) {
            return expectedType;
        }
        else if (expectedType === "Date") {
            return expectedType;
        }
        else {
            if (enumsMap.has(expectedType)) {
                return expectedType;
            }
            if (!typeMap[expectedType]) {
                return expectedType;
            }
            var discriminatorProperty = typeMap[expectedType].discriminator;
            if (discriminatorProperty == null) {
                return expectedType;
            }
            else {
                if (data[discriminatorProperty]) {
                    var discriminatorType = data[discriminatorProperty];
                    if (typeMap[discriminatorType]) {
                        return discriminatorType;
                    }
                    else {
                        return expectedType;
                    }
                }
                else {
                    return expectedType;
                }
            }
        }
    };
    ObjectSerializer.serialize = function (data, type, format) {
        if (data == undefined) {
            return data;
        }
        else if (primitives.indexOf(type.toLowerCase()) !== -1) {
            return data;
        }
        else if (type.lastIndexOf("Array<", 0) === 0) {
            var subType = type.replace("Array<", "");
            subType = subType.substring(0, subType.length - 1);
            var transformedData = [];
            for (var index in data) {
                var date = data[index];
                transformedData.push(ObjectSerializer.serialize(date, subType, format));
            }
            return transformedData;
        }
        else if (type === "Date") {
            if (format == "date") {
                var month = data.getMonth() + 1;
                month = month < 10 ? "0" + month.toString() : month.toString();
                var day = data.getDate();
                day = day < 10 ? "0" + day.toString() : day.toString();
                return data.getFullYear() + "-" + month + "-" + day;
            }
            else {
                return data.toISOString();
            }
        }
        else {
            if (enumsMap.has(type)) {
                return data;
            }
            if (!typeMap[type]) {
                return data;
            }
            type = this.findCorrectType(data, type);
            var attributeTypes = typeMap[type].getAttributeTypeMap();
            var instance = {};
            for (var index in attributeTypes) {
                var attributeType = attributeTypes[index];
                instance[attributeType.baseName] = ObjectSerializer.serialize(data[attributeType.name], attributeType.type, attributeType.format);
            }
            return instance;
        }
    };
    ObjectSerializer.deserialize = function (data, type, format) {
        type = ObjectSerializer.findCorrectType(data, type);
        if (data == undefined) {
            return data;
        }
        else if (primitives.indexOf(type.toLowerCase()) !== -1) {
            return data;
        }
        else if (type.lastIndexOf("Array<", 0) === 0) {
            var subType = type.replace("Array<", "");
            subType = subType.substring(0, subType.length - 1);
            var transformedData = [];
            for (var index in data) {
                var date = data[index];
                transformedData.push(ObjectSerializer.deserialize(date, subType, format));
            }
            return transformedData;
        }
        else if (type === "Date") {
            return new Date(data);
        }
        else {
            if (enumsMap.has(type)) {
                return data;
            }
            if (!typeMap[type]) {
                return data;
            }
            var instance = new typeMap[type]();
            var attributeTypes = typeMap[type].getAttributeTypeMap();
            for (var index in attributeTypes) {
                var attributeType = attributeTypes[index];
                var value = ObjectSerializer.deserialize(data[attributeType.baseName], attributeType.type, attributeType.format);
                if (value !== undefined) {
                    instance[attributeType.name] = value;
                }
            }
            return instance;
        }
    };
    ObjectSerializer.normalizeMediaType = function (mediaType) {
        if (mediaType === undefined) {
            return undefined;
        }
        return mediaType.split(";")[0].trim().toLowerCase();
    };
    ObjectSerializer.getPreferredMediaType = function (mediaTypes) {
        if (!mediaTypes) {
            return "application/json";
        }
        var normalMediaTypes = mediaTypes.map(this.normalizeMediaType);
        var selectedMediaType = undefined;
        var selectedRank = -Infinity;
        for (var _i = 0, normalMediaTypes_1 = normalMediaTypes; _i < normalMediaTypes_1.length; _i++) {
            var mediaType = normalMediaTypes_1[_i];
            if (supportedMediaTypes[mediaType] > selectedRank) {
                selectedMediaType = mediaType;
                selectedRank = supportedMediaTypes[mediaType];
            }
        }
        if (selectedMediaType === undefined) {
            throw new Error("None of the given media types are supported: " + mediaTypes.join(", "));
        }
        return selectedMediaType;
    };
    ObjectSerializer.stringify = function (data, mediaType) {
        if (mediaType === "application/json") {
            return JSON.stringify(data);
        }
        throw new Error("The mediaType " + mediaType + " is not supported by ObjectSerializer.stringify.");
    };
    ObjectSerializer.parse = function (rawData, mediaType) {
        if (mediaType === undefined) {
            throw new Error("Cannot parse content. No Content-Type defined.");
        }
        if (mediaType === "application/json") {
            return JSON.parse(rawData);
        }
        throw new Error("The mediaType " + mediaType + " is not supported by ObjectSerializer.parse.");
    };
    return ObjectSerializer;
}());
exports.ObjectSerializer = ObjectSerializer;
//# sourceMappingURL=ObjectSerializer.js.map