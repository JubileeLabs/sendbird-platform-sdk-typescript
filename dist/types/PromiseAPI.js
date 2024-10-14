"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PromiseWebhookApi = exports.PromiseUserApi = exports.PromiseStatisticsApi = exports.PromiseScheduledMessageApi = exports.PromiseReportApi = exports.PromisePushNotificationsApi = exports.PromisePrivacyApi = exports.PromisePollApi = exports.PromisePinAMessageApi = exports.PromiseOpenChannelApi = exports.PromiseModerationApi = exports.PromiseMetadataApi = exports.PromiseMessageApi = exports.PromiseGroupChannelApi = exports.PromiseDeleteAPinApi = exports.PromiseDataExportApi = exports.PromiseBotApi = exports.PromiseApplicationApi = exports.PromiseAnnouncementApi = void 0;
var ObservableAPI_1 = require("./ObservableAPI");
var PromiseAnnouncementApi = (function () {
    function PromiseAnnouncementApi(configuration, requestFactory, responseProcessor) {
        this.api = new ObservableAPI_1.ObservableAnnouncementApi(configuration, requestFactory, responseProcessor);
    }
    PromiseAnnouncementApi.prototype.getDetailedOpenRateOfAnnouncementGroup = function (announcementGroup, apiToken, _options) {
        var result = this.api.getDetailedOpenRateOfAnnouncementGroup(announcementGroup, apiToken, _options);
        return result.toPromise();
    };
    PromiseAnnouncementApi.prototype.getStatistics = function (apiToken, _options) {
        var result = this.api.getStatistics(apiToken, _options);
        return result.toPromise();
    };
    PromiseAnnouncementApi.prototype.getStatisticsDaily = function (startDate, endDate, startWeek, endWeek, startMonth, endMonth, apiToken, announcementGroup, _options) {
        var result = this.api.getStatisticsDaily(startDate, endDate, startWeek, endWeek, startMonth, endMonth, apiToken, announcementGroup, _options);
        return result.toPromise();
    };
    PromiseAnnouncementApi.prototype.getStatisticsMonthly = function (apiToken, _options) {
        var result = this.api.getStatisticsMonthly(apiToken, _options);
        return result.toPromise();
    };
    PromiseAnnouncementApi.prototype.listAnnouncementGroups = function (apiToken, token, limit, _options) {
        var result = this.api.listAnnouncementGroups(apiToken, token, limit, _options);
        return result.toPromise();
    };
    PromiseAnnouncementApi.prototype.scheduleAnnouncement = function (apiToken, scheduleAnnouncementData, _options) {
        var result = this.api.scheduleAnnouncement(apiToken, scheduleAnnouncementData, _options);
        return result.toPromise();
    };
    PromiseAnnouncementApi.prototype.updateAnnouncementById = function (uniqueId, apiToken, updateAnnouncementByIdData, _options) {
        var result = this.api.updateAnnouncementById(uniqueId, apiToken, updateAnnouncementByIdData, _options);
        return result.toPromise();
    };
    PromiseAnnouncementApi.prototype.viewAnnouncementById = function (uniqueId, apiToken, _options) {
        var result = this.api.viewAnnouncementById(uniqueId, apiToken, _options);
        return result.toPromise();
    };
    return PromiseAnnouncementApi;
}());
exports.PromiseAnnouncementApi = PromiseAnnouncementApi;
var ObservableAPI_2 = require("./ObservableAPI");
var PromiseApplicationApi = (function () {
    function PromiseApplicationApi(configuration, requestFactory, responseProcessor) {
        this.api = new ObservableAPI_2.ObservableApplicationApi(configuration, requestFactory, responseProcessor);
    }
    PromiseApplicationApi.prototype.addApnsPushConfiguration = function (apiToken, addApnsPushConfigurationData, _options) {
        var result = this.api.addApnsPushConfiguration(apiToken, addApnsPushConfigurationData, _options);
        return result.toPromise();
    };
    PromiseApplicationApi.prototype.addFcmPushConfiguration = function (apiToken, addFcmPushConfigurationData, _options) {
        var result = this.api.addFcmPushConfiguration(apiToken, addFcmPushConfigurationData, _options);
        return result.toPromise();
    };
    PromiseApplicationApi.prototype.addHmsPushConfiguration = function (apiToken, addHmsPushConfigurationData, _options) {
        var result = this.api.addHmsPushConfiguration(apiToken, addHmsPushConfigurationData, _options);
        return result.toPromise();
    };
    PromiseApplicationApi.prototype.addIpToWhitelist = function (apiToken, addIpToWhitelistData, _options) {
        var result = this.api.addIpToWhitelist(apiToken, addIpToWhitelistData, _options);
        return result.toPromise();
    };
    PromiseApplicationApi.prototype.banUsersInChannelsWithCustomChannelType = function (customType, apiToken, banUsersInChannelsWithCustomChannelTypeData, _options) {
        var result = this.api.banUsersInChannelsWithCustomChannelType(customType, apiToken, banUsersInChannelsWithCustomChannelTypeData, _options);
        return result.toPromise();
    };
    PromiseApplicationApi.prototype.configureAutoEventMessages = function (apiToken, configureAutoEventData, _options) {
        var result = this.api.configureAutoEventMessages(apiToken, configureAutoEventData, _options);
        return result.toPromise();
    };
    PromiseApplicationApi.prototype.deleteAllowedIpsFromWhitelist = function (ipWhitelistAddresses, apiToken, _options) {
        var result = this.api.deleteAllowedIpsFromWhitelist(ipWhitelistAddresses, apiToken, _options);
        return result.toPromise();
    };
    PromiseApplicationApi.prototype.deleteApnsCertificateById = function (providerId, apiToken, _options) {
        var result = this.api.deleteApnsCertificateById(providerId, apiToken, _options);
        return result.toPromise();
    };
    PromiseApplicationApi.prototype.generateSecondaryApiToken = function (apiToken, generateSecondaryApiTokenData, _options) {
        var result = this.api.generateSecondaryApiToken(apiToken, generateSecondaryApiTokenData, _options);
        return result.toPromise();
    };
    PromiseApplicationApi.prototype.listAutoEventMessages = function (apiToken, _options) {
        var result = this.api.listAutoEventMessages(apiToken, _options);
        return result.toPromise();
    };
    PromiseApplicationApi.prototype.listBannedUsersInChannelsWithCustomChannelType = function (customType, apiToken, token, limit, _options) {
        var result = this.api.listBannedUsersInChannelsWithCustomChannelType(customType, apiToken, token, limit, _options);
        return result.toPromise();
    };
    PromiseApplicationApi.prototype.listMutedUsersInChannelsWithCustomChannelType = function (customType, apiToken, token, limit, _options) {
        var result = this.api.listMutedUsersInChannelsWithCustomChannelType(customType, apiToken, token, limit, _options);
        return result.toPromise();
    };
    PromiseApplicationApi.prototype.listPushConfigurations = function (pushType, apiToken, _options) {
        var result = this.api.listPushConfigurations(pushType, apiToken, _options);
        return result.toPromise();
    };
    PromiseApplicationApi.prototype.listPushNotificationContentTemplates = function (apiToken, _options) {
        var result = this.api.listPushNotificationContentTemplates(apiToken, _options);
        return result.toPromise();
    };
    PromiseApplicationApi.prototype.listSecondaryApiTokens = function (apiToken, _options) {
        var result = this.api.listSecondaryApiTokens(apiToken, _options);
        return result.toPromise();
    };
    PromiseApplicationApi.prototype.muteUsersInChannelsWithCustomChannelType = function (customType, apiToken, muteUsersInChannelsWithCustomChannelTypeData, _options) {
        var result = this.api.muteUsersInChannelsWithCustomChannelType(customType, apiToken, muteUsersInChannelsWithCustomChannelTypeData, _options);
        return result.toPromise();
    };
    PromiseApplicationApi.prototype.removePushConfigurationById = function (pushType, providerId, apiToken, _options) {
        var result = this.api.removePushConfigurationById(pushType, providerId, apiToken, _options);
        return result.toPromise();
    };
    PromiseApplicationApi.prototype.retrieveIpWhitelist = function (apiToken, _options) {
        var result = this.api.retrieveIpWhitelist(apiToken, _options);
        return result.toPromise();
    };
    PromiseApplicationApi.prototype.revokeSecondaryApiTokenByToken = function (apiToken2, apiToken, _options) {
        var result = this.api.revokeSecondaryApiTokenByToken(apiToken2, apiToken, _options);
        return result.toPromise();
    };
    PromiseApplicationApi.prototype.setDomainFilter = function (customType, apiToken, setDomainFilterData, _options) {
        var result = this.api.setDomainFilter(customType, apiToken, setDomainFilterData, _options);
        return result.toPromise();
    };
    PromiseApplicationApi.prototype.unbanUsersInChannelsWithCustomChannelType = function (customType, userIds, apiToken, _options) {
        var result = this.api.unbanUsersInChannelsWithCustomChannelType(customType, userIds, apiToken, _options);
        return result.toPromise();
    };
    PromiseApplicationApi.prototype.unmuteUsersInChannelsWithCustomChannelType = function (customType, userIds, apiToken, _options) {
        var result = this.api.unmuteUsersInChannelsWithCustomChannelType(customType, userIds, apiToken, _options);
        return result.toPromise();
    };
    PromiseApplicationApi.prototype.updateApnsPushConfigurationById = function (providerId, apiToken, updateApnsPushConfigurationByIdData, _options) {
        var result = this.api.updateApnsPushConfigurationById(providerId, apiToken, updateApnsPushConfigurationByIdData, _options);
        return result.toPromise();
    };
    PromiseApplicationApi.prototype.updateDefaultChannelInvitationPreference = function (apiToken, updateDefaultChannelInvitationPreferenceData, _options) {
        var result = this.api.updateDefaultChannelInvitationPreference(apiToken, updateDefaultChannelInvitationPreferenceData, _options);
        return result.toPromise();
    };
    PromiseApplicationApi.prototype.updateFcmPushConfigurationById = function (providerId, apiToken, updateFcmPushConfigurationByIdData, _options) {
        var result = this.api.updateFcmPushConfigurationById(providerId, apiToken, updateFcmPushConfigurationByIdData, _options);
        return result.toPromise();
    };
    PromiseApplicationApi.prototype.updateHmsPushConfigurationById = function (providerId, apiToken, updateHmsPushConfigurationByIdData, _options) {
        var result = this.api.updateHmsPushConfigurationById(providerId, apiToken, updateHmsPushConfigurationByIdData, _options);
        return result.toPromise();
    };
    PromiseApplicationApi.prototype.updatePushNotificationContentTemplate = function (templateName, apiToken, updatePushNotificationContentTemplateData, _options) {
        var result = this.api.updatePushNotificationContentTemplate(templateName, apiToken, updatePushNotificationContentTemplateData, _options);
        return result.toPromise();
    };
    PromiseApplicationApi.prototype.viewDefaultChannelInvitationPreference = function (apiToken, _options) {
        var result = this.api.viewDefaultChannelInvitationPreference(apiToken, _options);
        return result.toPromise();
    };
    PromiseApplicationApi.prototype.viewPushConfigurationById = function (pushType, providerId, apiToken, _options) {
        var result = this.api.viewPushConfigurationById(pushType, providerId, apiToken, _options);
        return result.toPromise();
    };
    PromiseApplicationApi.prototype.viewPushNotificationContentTemplate = function (templateName, apiToken, _options) {
        var result = this.api.viewPushNotificationContentTemplate(templateName, apiToken, _options);
        return result.toPromise();
    };
    PromiseApplicationApi.prototype.viewSecondaryApiTokenByToken = function (apiToken2, apiToken, _options) {
        var result = this.api.viewSecondaryApiTokenByToken(apiToken2, apiToken, _options);
        return result.toPromise();
    };
    return PromiseApplicationApi;
}());
exports.PromiseApplicationApi = PromiseApplicationApi;
var ObservableAPI_3 = require("./ObservableAPI");
var PromiseBotApi = (function () {
    function PromiseBotApi(configuration, requestFactory, responseProcessor) {
        this.api = new ObservableAPI_3.ObservableBotApi(configuration, requestFactory, responseProcessor);
    }
    PromiseBotApi.prototype.createBot = function (apiToken, createBotData, _options) {
        var result = this.api.createBot(apiToken, createBotData, _options);
        return result.toPromise();
    };
    PromiseBotApi.prototype.deleteBotById = function (botUserid, apiToken, _options) {
        var result = this.api.deleteBotById(botUserid, apiToken, _options);
        return result.toPromise();
    };
    PromiseBotApi.prototype.joinChannels = function (botUserid, apiToken, joinChannelsData, _options) {
        var result = this.api.joinChannels(botUserid, apiToken, joinChannelsData, _options);
        return result.toPromise();
    };
    PromiseBotApi.prototype.leaveChannels = function (botUserid, apiToken, channelUrl, _options) {
        var result = this.api.leaveChannels(botUserid, apiToken, channelUrl, _options);
        return result.toPromise();
    };
    PromiseBotApi.prototype.leaveChannelsByUrl = function (botUserid, channelUrl, apiToken, _options) {
        var result = this.api.leaveChannelsByUrl(botUserid, channelUrl, apiToken, _options);
        return result.toPromise();
    };
    PromiseBotApi.prototype.listBots = function (apiToken, token, limit, _options) {
        var result = this.api.listBots(apiToken, token, limit, _options);
        return result.toPromise();
    };
    PromiseBotApi.prototype.sendBotsMessage = function (botUserid, apiToken, sendBotSMessageData, _options) {
        var result = this.api.sendBotsMessage(botUserid, apiToken, sendBotSMessageData, _options);
        return result.toPromise();
    };
    PromiseBotApi.prototype.updateBotById = function (botUserid, apiToken, updateBotByIdData, _options) {
        var result = this.api.updateBotById(botUserid, apiToken, updateBotByIdData, _options);
        return result.toPromise();
    };
    PromiseBotApi.prototype.viewBotById = function (botUserid, apiToken, _options) {
        var result = this.api.viewBotById(botUserid, apiToken, _options);
        return result.toPromise();
    };
    return PromiseBotApi;
}());
exports.PromiseBotApi = PromiseBotApi;
var ObservableAPI_4 = require("./ObservableAPI");
var PromiseDataExportApi = (function () {
    function PromiseDataExportApi(configuration, requestFactory, responseProcessor) {
        this.api = new ObservableAPI_4.ObservableDataExportApi(configuration, requestFactory, responseProcessor);
    }
    PromiseDataExportApi.prototype.listDataExportsByMessageChannelOrUser = function (dataType, apiToken, token, limit, _options) {
        var result = this.api.listDataExportsByMessageChannelOrUser(dataType, apiToken, token, limit, _options);
        return result.toPromise();
    };
    PromiseDataExportApi.prototype.registerAndScheduleDataExport = function (dataType, apiToken, registerAndScheduleDataExportData, _options) {
        var result = this.api.registerAndScheduleDataExport(dataType, apiToken, registerAndScheduleDataExportData, _options);
        return result.toPromise();
    };
    PromiseDataExportApi.prototype.viewDataExportById = function (dataType, requestId, apiToken, _options) {
        var result = this.api.viewDataExportById(dataType, requestId, apiToken, _options);
        return result.toPromise();
    };
    return PromiseDataExportApi;
}());
exports.PromiseDataExportApi = PromiseDataExportApi;
var ObservableAPI_5 = require("./ObservableAPI");
var PromiseDeleteAPinApi = (function () {
    function PromiseDeleteAPinApi(configuration, requestFactory, responseProcessor) {
        this.api = new ObservableAPI_5.ObservableDeleteAPinApi(configuration, requestFactory, responseProcessor);
    }
    PromiseDeleteAPinApi.prototype.v3ChannelTypeChannelUrlMessagesMessageIdPinDelete = function (channelType, channelUrl, messageId, apiToken, _options) {
        var result = this.api.v3ChannelTypeChannelUrlMessagesMessageIdPinDelete(channelType, channelUrl, messageId, apiToken, _options);
        return result.toPromise();
    };
    return PromiseDeleteAPinApi;
}());
exports.PromiseDeleteAPinApi = PromiseDeleteAPinApi;
var ObservableAPI_6 = require("./ObservableAPI");
var PromiseGroupChannelApi = (function () {
    function PromiseGroupChannelApi(configuration, requestFactory, responseProcessor) {
        this.api = new ObservableAPI_6.ObservableGroupChannelApi(configuration, requestFactory, responseProcessor);
    }
    PromiseGroupChannelApi.prototype.gcAcceptInvitation = function (channelUrl, apiToken, gcAcceptInvitationData, _options) {
        var result = this.api.gcAcceptInvitation(channelUrl, apiToken, gcAcceptInvitationData, _options);
        return result.toPromise();
    };
    PromiseGroupChannelApi.prototype.gcCancelTheRegistrationOfOperators = function (channelUrl, operatorIds, apiToken, deleteAll, _options) {
        var result = this.api.gcCancelTheRegistrationOfOperators(channelUrl, operatorIds, apiToken, deleteAll, _options);
        return result.toPromise();
    };
    PromiseGroupChannelApi.prototype.gcCheckIfMemberById = function (channelUrl, userId, apiToken, _options) {
        var result = this.api.gcCheckIfMemberById(channelUrl, userId, apiToken, _options);
        return result.toPromise();
    };
    PromiseGroupChannelApi.prototype.gcCreateChannel = function (apiToken, gcCreateChannelData, _options) {
        var result = this.api.gcCreateChannel(apiToken, gcCreateChannelData, _options);
        return result.toPromise();
    };
    PromiseGroupChannelApi.prototype.gcDeclineInvitation = function (channelUrl, apiToken, gcDeclineInvitationData, _options) {
        var result = this.api.gcDeclineInvitation(channelUrl, apiToken, gcDeclineInvitationData, _options);
        return result.toPromise();
    };
    PromiseGroupChannelApi.prototype.gcDeleteChannelByUrl = function (channelUrl, apiToken, _options) {
        var result = this.api.gcDeleteChannelByUrl(channelUrl, apiToken, _options);
        return result.toPromise();
    };
    PromiseGroupChannelApi.prototype.gcHideOrArchiveChannel = function (channelUrl, apiToken, gcHideOrArchiveChannelData, _options) {
        var result = this.api.gcHideOrArchiveChannel(channelUrl, apiToken, gcHideOrArchiveChannelData, _options);
        return result.toPromise();
    };
    PromiseGroupChannelApi.prototype.gcInviteAsMembers = function (channelUrl, apiToken, gcInviteAsMembersData, _options) {
        var result = this.api.gcInviteAsMembers(channelUrl, apiToken, gcInviteAsMembersData, _options);
        return result.toPromise();
    };
    PromiseGroupChannelApi.prototype.gcJoinChannel = function (channelUrl, apiToken, gcJoinChannelData, _options) {
        var result = this.api.gcJoinChannel(channelUrl, apiToken, gcJoinChannelData, _options);
        return result.toPromise();
    };
    PromiseGroupChannelApi.prototype.gcLeaveChannel = function (channelUrl, apiToken, gcLeaveChannelData, _options) {
        var result = this.api.gcLeaveChannel(channelUrl, apiToken, gcLeaveChannelData, _options);
        return result.toPromise();
    };
    PromiseGroupChannelApi.prototype.gcListChannels = function (apiToken, token, limit, distinctMode, publicMode, superMode, createdAfter, createdBefore, showEmpty, showMember, showDeliveryReceipt, showReadReceipt, showMetadata, showFrozen, order, metadataOrderKey, customTypes, customTypeStartswith, channelUrls, name, nameContains, nameStartswith, membersExactlyIn, membersIncludeIn, queryType, membersNickname, membersNicknameContains, metadataKey, metadataValues, metadataValueStartswith, metacounterKey, metacounterValues, metacounterValueGt, metacounterValueGte, metacounterValueLt, metacounterValueLte, includeSortedMetaarrayInLastMessage, customType, readReceipt, member, isDistinct, membersIn, userId, _options) {
        var result = this.api.gcListChannels(apiToken, token, limit, distinctMode, publicMode, superMode, createdAfter, createdBefore, showEmpty, showMember, showDeliveryReceipt, showReadReceipt, showMetadata, showFrozen, order, metadataOrderKey, customTypes, customTypeStartswith, channelUrls, name, nameContains, nameStartswith, membersExactlyIn, membersIncludeIn, queryType, membersNickname, membersNicknameContains, metadataKey, metadataValues, metadataValueStartswith, metacounterKey, metacounterValues, metacounterValueGt, metacounterValueGte, metacounterValueLt, metacounterValueLte, includeSortedMetaarrayInLastMessage, customType, readReceipt, member, isDistinct, membersIn, userId, _options);
        return result.toPromise();
    };
    PromiseGroupChannelApi.prototype.gcListMembers = function (channelUrl, apiToken, token, limit, showDeliveryReceipt, showReadReceipt, order, operatorFilter, memberStateFilter, mutedMemberFilter, nicknameStartswith, _options) {
        var result = this.api.gcListMembers(channelUrl, apiToken, token, limit, showDeliveryReceipt, showReadReceipt, order, operatorFilter, memberStateFilter, mutedMemberFilter, nicknameStartswith, _options);
        return result.toPromise();
    };
    PromiseGroupChannelApi.prototype.gcListOperators = function (channelUrl, apiToken, token, limit, _options) {
        var result = this.api.gcListOperators(channelUrl, apiToken, token, limit, _options);
        return result.toPromise();
    };
    PromiseGroupChannelApi.prototype.gcRegisterOperators = function (channelUrl, apiToken, gcRegisterOperatorsData, _options) {
        var result = this.api.gcRegisterOperators(channelUrl, apiToken, gcRegisterOperatorsData, _options);
        return result.toPromise();
    };
    PromiseGroupChannelApi.prototype.gcResetChatHistory = function (channelUrl, apiToken, gcResetChatHistoryData, _options) {
        var result = this.api.gcResetChatHistory(channelUrl, apiToken, gcResetChatHistoryData, _options);
        return result.toPromise();
    };
    PromiseGroupChannelApi.prototype.gcStartTypingIndicators = function (channelUrl, apiToken, gcTypingIndicatorsData, _options) {
        var result = this.api.gcStartTypingIndicators(channelUrl, apiToken, gcTypingIndicatorsData, _options);
        return result.toPromise();
    };
    PromiseGroupChannelApi.prototype.gcStopTypingIndicators = function (channelUrl, apiToken, gcTypingIndicatorsData, _options) {
        var result = this.api.gcStopTypingIndicators(channelUrl, apiToken, gcTypingIndicatorsData, _options);
        return result.toPromise();
    };
    PromiseGroupChannelApi.prototype.gcUnhideOrUnarchiveChannel = function (channelUrl, userId, apiToken, shouldUnhideAll, _options) {
        var result = this.api.gcUnhideOrUnarchiveChannel(channelUrl, userId, apiToken, shouldUnhideAll, _options);
        return result.toPromise();
    };
    PromiseGroupChannelApi.prototype.gcUpdateChannelByUrl = function (channelUrl, apiToken, gcUpdateChannelByUrlData, _options) {
        var result = this.api.gcUpdateChannelByUrl(channelUrl, apiToken, gcUpdateChannelByUrlData, _options);
        return result.toPromise();
    };
    PromiseGroupChannelApi.prototype.gcViewChannelByUrl = function (channelUrl, apiToken, showDeliveryReceipt, showReadReceipt, showMember, readReceipt, member, _options) {
        var result = this.api.gcViewChannelByUrl(channelUrl, apiToken, showDeliveryReceipt, showReadReceipt, showMember, readReceipt, member, _options);
        return result.toPromise();
    };
    return PromiseGroupChannelApi;
}());
exports.PromiseGroupChannelApi = PromiseGroupChannelApi;
var ObservableAPI_7 = require("./ObservableAPI");
var PromiseMessageApi = (function () {
    function PromiseMessageApi(configuration, requestFactory, responseProcessor) {
        this.api = new ObservableAPI_7.ObservableMessageApi(configuration, requestFactory, responseProcessor);
    }
    PromiseMessageApi.prototype.addEmojiCategories = function (apiToken, body, _options) {
        var result = this.api.addEmojiCategories(apiToken, body, _options);
        return result.toPromise();
    };
    PromiseMessageApi.prototype.addEmojis = function (apiToken, addEmojisData, _options) {
        var result = this.api.addEmojis(apiToken, addEmojisData, _options);
        return result.toPromise();
    };
    PromiseMessageApi.prototype.addExtraDataToMessage = function (channelType, channelUrl, messageId, apiToken, addExtraDataToMessageData, _options) {
        var result = this.api.addExtraDataToMessage(channelType, channelUrl, messageId, apiToken, addExtraDataToMessageData, _options);
        return result.toPromise();
    };
    PromiseMessageApi.prototype.addReactionToAMessage = function (channelType, channelUrl, messageId, apiToken, addReactionToAMessageData, _options) {
        var result = this.api.addReactionToAMessage(channelType, channelUrl, messageId, apiToken, addReactionToAMessageData, _options);
        return result.toPromise();
    };
    PromiseMessageApi.prototype.deleteEmojiByKey = function (emojiKey, apiToken, _options) {
        var result = this.api.deleteEmojiByKey(emojiKey, apiToken, _options);
        return result.toPromise();
    };
    PromiseMessageApi.prototype.deleteEmojiCategoryById = function (emojiCategoryId, apiToken, _options) {
        var result = this.api.deleteEmojiCategoryById(emojiCategoryId, apiToken, _options);
        return result.toPromise();
    };
    PromiseMessageApi.prototype.deleteMessageById = function (channelType, channelUrl, messageId, apiToken, _options) {
        var result = this.api.deleteMessageById(channelType, channelUrl, messageId, apiToken, _options);
        return result.toPromise();
    };
    PromiseMessageApi.prototype.enableReactions = function (apiToken, enableReactionsData, _options) {
        var result = this.api.enableReactions(apiToken, enableReactionsData, _options);
        return result.toPromise();
    };
    PromiseMessageApi.prototype.gcMarkAllMessagesAsDelivered = function (channelUrl, apiToken, gcMarkAllMessagesAsDeliveredData, _options) {
        var result = this.api.gcMarkAllMessagesAsDelivered(channelUrl, apiToken, gcMarkAllMessagesAsDeliveredData, _options);
        return result.toPromise();
    };
    PromiseMessageApi.prototype.gcMarkAllMessagesAsRead = function (channelUrl, apiToken, gcMarkAllMessagesAsReadData, _options) {
        var result = this.api.gcMarkAllMessagesAsRead(channelUrl, apiToken, gcMarkAllMessagesAsReadData, _options);
        return result.toPromise();
    };
    PromiseMessageApi.prototype.gcViewNumberOfEachMembersUnreadMessages = function (channelUrl, apiToken, userIds, _options) {
        var result = this.api.gcViewNumberOfEachMembersUnreadMessages(channelUrl, apiToken, userIds, _options);
        return result.toPromise();
    };
    PromiseMessageApi.prototype.getEmojiByKey = function (emojiKey, apiToken, _options) {
        var result = this.api.getEmojiByKey(emojiKey, apiToken, _options);
        return result.toPromise();
    };
    PromiseMessageApi.prototype.getEmojiCategoryById = function (emojiCategoryId, apiToken, _options) {
        var result = this.api.getEmojiCategoryById(emojiCategoryId, apiToken, _options);
        return result.toPromise();
    };
    PromiseMessageApi.prototype.listAllEmojisAndEmojiCategories = function (apiToken, _options) {
        var result = this.api.listAllEmojisAndEmojiCategories(apiToken, _options);
        return result.toPromise();
    };
    PromiseMessageApi.prototype.listAnnouncements = function (apiToken, token, limit, order, status, announcementGroup, _options) {
        var result = this.api.listAnnouncements(apiToken, token, limit, order, status, announcementGroup, _options);
        return result.toPromise();
    };
    PromiseMessageApi.prototype.listEmojis = function (apiToken, _options) {
        var result = this.api.listEmojis(apiToken, _options);
        return result.toPromise();
    };
    PromiseMessageApi.prototype.listMessages = function (channelType, channelUrl, apiToken, messageTs, messageId, prevLimit, nextLimit, include, reverse, senderId, senderIds, operatorFilter, customTypes, messageType, includingRemoved, includeReactions, includeReplyType, includeParentMessageInfo, withSortedMetaArray, showSubchannelMessagesOnly, userId, customType, withMetaArray, _options) {
        var result = this.api.listMessages(channelType, channelUrl, apiToken, messageTs, messageId, prevLimit, nextLimit, include, reverse, senderId, senderIds, operatorFilter, customTypes, messageType, includingRemoved, includeReactions, includeReplyType, includeParentMessageInfo, withSortedMetaArray, showSubchannelMessagesOnly, userId, customType, withMetaArray, _options);
        return result.toPromise();
    };
    PromiseMessageApi.prototype.listReactionsOfMessage = function (channelType, channelUrl, messageId, apiToken, listUsers, _options) {
        var result = this.api.listReactionsOfMessage(channelType, channelUrl, messageId, apiToken, listUsers, _options);
        return result.toPromise();
    };
    PromiseMessageApi.prototype.migrateMessagesByUrl = function (targetChannelUrl, apiToken, body, _options) {
        var result = this.api.migrateMessagesByUrl(targetChannelUrl, apiToken, body, _options);
        return result.toPromise();
    };
    PromiseMessageApi.prototype.removeExtraDataFromMessage = function (channelType, channelUrl, messageId, apiToken, keys, _options) {
        var result = this.api.removeExtraDataFromMessage(channelType, channelUrl, messageId, apiToken, keys, _options);
        return result.toPromise();
    };
    PromiseMessageApi.prototype.removeReactionFromAMessage = function (channelType, channelUrl, messageId, apiToken, userId, reaction, _options) {
        var result = this.api.removeReactionFromAMessage(channelType, channelUrl, messageId, apiToken, userId, reaction, _options);
        return result.toPromise();
    };
    PromiseMessageApi.prototype.sendMessage = function (channelType, channelUrl, apiToken, sendMessageData, _options) {
        var result = this.api.sendMessage(channelType, channelUrl, apiToken, sendMessageData, _options);
        return result.toPromise();
    };
    PromiseMessageApi.prototype.translateMessageIntoOtherLanguages = function (channelType, channelUrl, messageId, apiToken, translateMessageIntoOtherLanguagesData, _options) {
        var result = this.api.translateMessageIntoOtherLanguages(channelType, channelUrl, messageId, apiToken, translateMessageIntoOtherLanguagesData, _options);
        return result.toPromise();
    };
    PromiseMessageApi.prototype.updateEmojiCategoryUrlById = function (emojiCategoryId, apiToken, updateEmojiCategoryUrlByIdData, _options) {
        var result = this.api.updateEmojiCategoryUrlById(emojiCategoryId, apiToken, updateEmojiCategoryUrlByIdData, _options);
        return result.toPromise();
    };
    PromiseMessageApi.prototype.updateEmojiUrlByKey = function (emojiKey, apiToken, updateEmojiUrlByKeyData, _options) {
        var result = this.api.updateEmojiUrlByKey(emojiKey, apiToken, updateEmojiUrlByKeyData, _options);
        return result.toPromise();
    };
    PromiseMessageApi.prototype.updateExtraDataInMessage = function (channelType, channelUrl, messageId, apiToken, updateExtraDataInMessageData, _options) {
        var result = this.api.updateExtraDataInMessage(channelType, channelUrl, messageId, apiToken, updateExtraDataInMessageData, _options);
        return result.toPromise();
    };
    PromiseMessageApi.prototype.updateMessageById = function (channelType, channelUrl, messageId, apiToken, updateMessageByIdData, _options) {
        var result = this.api.updateMessageById(channelType, channelUrl, messageId, apiToken, updateMessageByIdData, _options);
        return result.toPromise();
    };
    PromiseMessageApi.prototype.useDefaultEmojis = function (apiToken, useDefaultEmojisData, _options) {
        var result = this.api.useDefaultEmojis(apiToken, useDefaultEmojisData, _options);
        return result.toPromise();
    };
    PromiseMessageApi.prototype.viewMessageById = function (channelType, channelUrl, messageId, apiToken, withSortedMetaArray, withMetaArray, includeParentMessageInfo, _options) {
        var result = this.api.viewMessageById(channelType, channelUrl, messageId, apiToken, withSortedMetaArray, withMetaArray, includeParentMessageInfo, _options);
        return result.toPromise();
    };
    PromiseMessageApi.prototype.viewTotalNumberOfMessagesInChannel = function (channelType, channelUrl, apiToken, _options) {
        var result = this.api.viewTotalNumberOfMessagesInChannel(channelType, channelUrl, apiToken, _options);
        return result.toPromise();
    };
    return PromiseMessageApi;
}());
exports.PromiseMessageApi = PromiseMessageApi;
var ObservableAPI_8 = require("./ObservableAPI");
var PromiseMetadataApi = (function () {
    function PromiseMetadataApi(configuration, requestFactory, responseProcessor) {
        this.api = new ObservableAPI_8.ObservableMetadataApi(configuration, requestFactory, responseProcessor);
    }
    PromiseMetadataApi.prototype.createChannelMetacounter = function (channelType, channelUrl, apiToken, createChannelMetacounterData, _options) {
        var result = this.api.createChannelMetacounter(channelType, channelUrl, apiToken, createChannelMetacounterData, _options);
        return result.toPromise();
    };
    PromiseMetadataApi.prototype.createChannelMetadata = function (channelType, channelUrl, apiToken, createChannelMetadataData, _options) {
        var result = this.api.createChannelMetadata(channelType, channelUrl, apiToken, createChannelMetadataData, _options);
        return result.toPromise();
    };
    PromiseMetadataApi.prototype.createUserMetadata = function (userId, apiToken, createUserMetadataData, _options) {
        var result = this.api.createUserMetadata(userId, apiToken, createUserMetadataData, _options);
        return result.toPromise();
    };
    PromiseMetadataApi.prototype.deleteChannelMetacounter = function (channelType, channelUrl, apiToken, _options) {
        var result = this.api.deleteChannelMetacounter(channelType, channelUrl, apiToken, _options);
        return result.toPromise();
    };
    PromiseMetadataApi.prototype.deleteChannelMetacounterByKey = function (channelType, channelUrl, key, apiToken, _options) {
        var result = this.api.deleteChannelMetacounterByKey(channelType, channelUrl, key, apiToken, _options);
        return result.toPromise();
    };
    PromiseMetadataApi.prototype.deleteChannelMetadata = function (channelType, channelUrl, apiToken, key, _options) {
        var result = this.api.deleteChannelMetadata(channelType, channelUrl, apiToken, key, _options);
        return result.toPromise();
    };
    PromiseMetadataApi.prototype.deleteChannelMetadataByKey = function (channelType, channelUrl, key, apiToken, _options) {
        var result = this.api.deleteChannelMetadataByKey(channelType, channelUrl, key, apiToken, _options);
        return result.toPromise();
    };
    PromiseMetadataApi.prototype.deleteUserMetadata = function (userId, apiToken, key, _options) {
        var result = this.api.deleteUserMetadata(userId, apiToken, key, _options);
        return result.toPromise();
    };
    PromiseMetadataApi.prototype.deleteUserMetadataByKey = function (userId, key, apiToken, _options) {
        var result = this.api.deleteUserMetadataByKey(userId, key, apiToken, _options);
        return result.toPromise();
    };
    PromiseMetadataApi.prototype.updateChannelMetacounter = function (channelType, channelUrl, apiToken, updateChannelMetacounterData, _options) {
        var result = this.api.updateChannelMetacounter(channelType, channelUrl, apiToken, updateChannelMetacounterData, _options);
        return result.toPromise();
    };
    PromiseMetadataApi.prototype.updateChannelMetacounterByKey = function (channelType, channelUrl, key, apiToken, body, _options) {
        var result = this.api.updateChannelMetacounterByKey(channelType, channelUrl, key, apiToken, body, _options);
        return result.toPromise();
    };
    PromiseMetadataApi.prototype.updateChannelMetadata = function (channelType, channelUrl, apiToken, updateChannelMetadataData, _options) {
        var result = this.api.updateChannelMetadata(channelType, channelUrl, apiToken, updateChannelMetadataData, _options);
        return result.toPromise();
    };
    PromiseMetadataApi.prototype.updateChannelMetadataByKey = function (channelType, channelUrl, key, apiToken, body, _options) {
        var result = this.api.updateChannelMetadataByKey(channelType, channelUrl, key, apiToken, body, _options);
        return result.toPromise();
    };
    PromiseMetadataApi.prototype.updateUserMetadata = function (userId, apiToken, updateUserMetadataData, _options) {
        var result = this.api.updateUserMetadata(userId, apiToken, updateUserMetadataData, _options);
        return result.toPromise();
    };
    PromiseMetadataApi.prototype.updateUserMetadataByKey = function (userId, key, apiToken, body, _options) {
        var result = this.api.updateUserMetadataByKey(userId, key, apiToken, body, _options);
        return result.toPromise();
    };
    PromiseMetadataApi.prototype.viewChannelMetacounter = function (channelType, channelUrl, apiToken, key, keys, _options) {
        var result = this.api.viewChannelMetacounter(channelType, channelUrl, apiToken, key, keys, _options);
        return result.toPromise();
    };
    PromiseMetadataApi.prototype.viewChannelMetacounterByKey = function (channelType, channelUrl, key, apiToken, _options) {
        var result = this.api.viewChannelMetacounterByKey(channelType, channelUrl, key, apiToken, _options);
        return result.toPromise();
    };
    PromiseMetadataApi.prototype.viewChannelMetadata = function (channelType, channelUrl, apiToken, key, keys, _options) {
        var result = this.api.viewChannelMetadata(channelType, channelUrl, apiToken, key, keys, _options);
        return result.toPromise();
    };
    PromiseMetadataApi.prototype.viewChannelMetadataByKey = function (channelType, channelUrl, key, apiToken, _options) {
        var result = this.api.viewChannelMetadataByKey(channelType, channelUrl, key, apiToken, _options);
        return result.toPromise();
    };
    PromiseMetadataApi.prototype.viewUserMetadata = function (userId, apiToken, key, keys, _options) {
        var result = this.api.viewUserMetadata(userId, apiToken, key, keys, _options);
        return result.toPromise();
    };
    PromiseMetadataApi.prototype.viewUserMetadataByKey = function (userId, key, apiToken, _options) {
        var result = this.api.viewUserMetadataByKey(userId, key, apiToken, _options);
        return result.toPromise();
    };
    return PromiseMetadataApi;
}());
exports.PromiseMetadataApi = PromiseMetadataApi;
var ObservableAPI_9 = require("./ObservableAPI");
var PromiseModerationApi = (function () {
    function PromiseModerationApi(configuration, requestFactory, responseProcessor) {
        this.api = new ObservableAPI_9.ObservableModerationApi(configuration, requestFactory, responseProcessor);
    }
    PromiseModerationApi.prototype.banFromChannelsWithCustomChannelTypes = function (userId, apiToken, banFromChannelsWithCustomChannelTypesData, _options) {
        var result = this.api.banFromChannelsWithCustomChannelTypes(userId, apiToken, banFromChannelsWithCustomChannelTypesData, _options);
        return result.toPromise();
    };
    PromiseModerationApi.prototype.blockUser = function (userId, apiToken, blockUserData, _options) {
        var result = this.api.blockUser(userId, apiToken, blockUserData, _options);
        return result.toPromise();
    };
    PromiseModerationApi.prototype.gcBanUser = function (channelUrl, apiToken, gcBanUserData, _options) {
        var result = this.api.gcBanUser(channelUrl, apiToken, gcBanUserData, _options);
        return result.toPromise();
    };
    PromiseModerationApi.prototype.gcFreezeChannel = function (channelUrl, apiToken, gcFreezeChannelData, _options) {
        var result = this.api.gcFreezeChannel(channelUrl, apiToken, gcFreezeChannelData, _options);
        return result.toPromise();
    };
    PromiseModerationApi.prototype.gcListBannedUsers = function (channelUrl, apiToken, token, limit, _options) {
        var result = this.api.gcListBannedUsers(channelUrl, apiToken, token, limit, _options);
        return result.toPromise();
    };
    PromiseModerationApi.prototype.gcListMutedUsers = function (channelUrl, apiToken, token, limit, _options) {
        var result = this.api.gcListMutedUsers(channelUrl, apiToken, token, limit, _options);
        return result.toPromise();
    };
    PromiseModerationApi.prototype.gcMuteUser = function (channelUrl, apiToken, gcMuteUserData, _options) {
        var result = this.api.gcMuteUser(channelUrl, apiToken, gcMuteUserData, _options);
        return result.toPromise();
    };
    PromiseModerationApi.prototype.gcUnbanUserById = function (channelUrl, bannedUserId, apiToken, _options) {
        var result = this.api.gcUnbanUserById(channelUrl, bannedUserId, apiToken, _options);
        return result.toPromise();
    };
    PromiseModerationApi.prototype.gcUnmuteUserById = function (channelUrl, mutedUserId, apiToken, _options) {
        var result = this.api.gcUnmuteUserById(channelUrl, mutedUserId, apiToken, _options);
        return result.toPromise();
    };
    PromiseModerationApi.prototype.gcUpdateBanById = function (channelUrl, bannedUserId, apiToken, gcUpdateBanByIdData, _options) {
        var result = this.api.gcUpdateBanById(channelUrl, bannedUserId, apiToken, gcUpdateBanByIdData, _options);
        return result.toPromise();
    };
    PromiseModerationApi.prototype.gcViewBanById = function (channelUrl, bannedUserId, apiToken, _options) {
        var result = this.api.gcViewBanById(channelUrl, bannedUserId, apiToken, _options);
        return result.toPromise();
    };
    PromiseModerationApi.prototype.gcViewMuteById = function (channelUrl, mutedUserId, apiToken, _options) {
        var result = this.api.gcViewMuteById(channelUrl, mutedUserId, apiToken, _options);
        return result.toPromise();
    };
    PromiseModerationApi.prototype.listBannedChannels = function (userId, apiToken, token, limit, _options) {
        var result = this.api.listBannedChannels(userId, apiToken, token, limit, _options);
        return result.toPromise();
    };
    PromiseModerationApi.prototype.listBlockedUsers = function (userId, apiToken, token, limit, userIds, metadatakey, metadatavaluesIn, _options) {
        var result = this.api.listBlockedUsers(userId, apiToken, token, limit, userIds, metadatakey, metadatavaluesIn, _options);
        return result.toPromise();
    };
    PromiseModerationApi.prototype.listMutedChannels = function (userId, apiToken, token, limit, _options) {
        var result = this.api.listMutedChannels(userId, apiToken, token, limit, _options);
        return result.toPromise();
    };
    PromiseModerationApi.prototype.muteInChannelsWithCustomChannelTypes = function (userId, apiToken, muteInChannelsWithCustomChannelTypesData, _options) {
        var result = this.api.muteInChannelsWithCustomChannelTypes(userId, apiToken, muteInChannelsWithCustomChannelTypesData, _options);
        return result.toPromise();
    };
    PromiseModerationApi.prototype.ocBanUser = function (channelUrl, apiToken, ocBanUserData, _options) {
        var result = this.api.ocBanUser(channelUrl, apiToken, ocBanUserData, _options);
        return result.toPromise();
    };
    PromiseModerationApi.prototype.ocFreezeChannel = function (channelUrl, apiToken, ocFreezeChannelData, _options) {
        var result = this.api.ocFreezeChannel(channelUrl, apiToken, ocFreezeChannelData, _options);
        return result.toPromise();
    };
    PromiseModerationApi.prototype.ocListBannedUsers = function (channelUrl, apiToken, token, limit, _options) {
        var result = this.api.ocListBannedUsers(channelUrl, apiToken, token, limit, _options);
        return result.toPromise();
    };
    PromiseModerationApi.prototype.ocListMutedUsers = function (channelUrl, apiToken, token, limit, _options) {
        var result = this.api.ocListMutedUsers(channelUrl, apiToken, token, limit, _options);
        return result.toPromise();
    };
    PromiseModerationApi.prototype.ocMuteUser = function (channelUrl, apiToken, ocMuteUserData, _options) {
        var result = this.api.ocMuteUser(channelUrl, apiToken, ocMuteUserData, _options);
        return result.toPromise();
    };
    PromiseModerationApi.prototype.ocUnbanUserById = function (channelUrl, bannedUserId, apiToken, _options) {
        var result = this.api.ocUnbanUserById(channelUrl, bannedUserId, apiToken, _options);
        return result.toPromise();
    };
    PromiseModerationApi.prototype.ocUnmuteUserById = function (channelUrl, mutedUserId, apiToken, _options) {
        var result = this.api.ocUnmuteUserById(channelUrl, mutedUserId, apiToken, _options);
        return result.toPromise();
    };
    PromiseModerationApi.prototype.ocUpdateBanById = function (channelUrl, bannedUserId, apiToken, ocUpdateBanByIdData, _options) {
        var result = this.api.ocUpdateBanById(channelUrl, bannedUserId, apiToken, ocUpdateBanByIdData, _options);
        return result.toPromise();
    };
    PromiseModerationApi.prototype.ocViewBanById = function (channelUrl, bannedUserId, apiToken, _options) {
        var result = this.api.ocViewBanById(channelUrl, bannedUserId, apiToken, _options);
        return result.toPromise();
    };
    PromiseModerationApi.prototype.ocViewMuteById = function (channelUrl, mutedUserId, apiToken, _options) {
        var result = this.api.ocViewMuteById(channelUrl, mutedUserId, apiToken, _options);
        return result.toPromise();
    };
    PromiseModerationApi.prototype.unblockUserById = function (userId, targetId, apiToken, _options) {
        var result = this.api.unblockUserById(userId, targetId, apiToken, _options);
        return result.toPromise();
    };
    return PromiseModerationApi;
}());
exports.PromiseModerationApi = PromiseModerationApi;
var ObservableAPI_10 = require("./ObservableAPI");
var PromiseOpenChannelApi = (function () {
    function PromiseOpenChannelApi(configuration, requestFactory, responseProcessor) {
        this.api = new ObservableAPI_10.ObservableOpenChannelApi(configuration, requestFactory, responseProcessor);
    }
    PromiseOpenChannelApi.prototype.ocCancelTheRegistrationOfOperators = function (channelUrl, operatorIds, apiToken, deleteAll, _options) {
        var result = this.api.ocCancelTheRegistrationOfOperators(channelUrl, operatorIds, apiToken, deleteAll, _options);
        return result.toPromise();
    };
    PromiseOpenChannelApi.prototype.ocCreateChannel = function (apiToken, ocCreateChannelData, _options) {
        var result = this.api.ocCreateChannel(apiToken, ocCreateChannelData, _options);
        return result.toPromise();
    };
    PromiseOpenChannelApi.prototype.ocDeleteChannelByUrl = function (channelUrl, apiToken, _options) {
        var result = this.api.ocDeleteChannelByUrl(channelUrl, apiToken, _options);
        return result.toPromise();
    };
    PromiseOpenChannelApi.prototype.ocListChannels = function (apiToken, token, limit, customTypes, nameContains, urlContains, showFrozen, showMetadata, customType, _options) {
        var result = this.api.ocListChannels(apiToken, token, limit, customTypes, nameContains, urlContains, showFrozen, showMetadata, customType, _options);
        return result.toPromise();
    };
    PromiseOpenChannelApi.prototype.ocListOperators = function (channelUrl, apiToken, token, limit, _options) {
        var result = this.api.ocListOperators(channelUrl, apiToken, token, limit, _options);
        return result.toPromise();
    };
    PromiseOpenChannelApi.prototype.ocListParticipants = function (channelUrl, apiToken, token, limit, _options) {
        var result = this.api.ocListParticipants(channelUrl, apiToken, token, limit, _options);
        return result.toPromise();
    };
    PromiseOpenChannelApi.prototype.ocRegisterOperators = function (channelUrl, apiToken, ocRegisterOperatorsData, _options) {
        var result = this.api.ocRegisterOperators(channelUrl, apiToken, ocRegisterOperatorsData, _options);
        return result.toPromise();
    };
    PromiseOpenChannelApi.prototype.ocUpdateChannelByUrl = function (channelUrl, apiToken, ocUpdateChannelByUrlData, _options) {
        var result = this.api.ocUpdateChannelByUrl(channelUrl, apiToken, ocUpdateChannelByUrlData, _options);
        return result.toPromise();
    };
    PromiseOpenChannelApi.prototype.ocViewChannelByUrl = function (channelUrl, apiToken, _options) {
        var result = this.api.ocViewChannelByUrl(channelUrl, apiToken, _options);
        return result.toPromise();
    };
    return PromiseOpenChannelApi;
}());
exports.PromiseOpenChannelApi = PromiseOpenChannelApi;
var ObservableAPI_11 = require("./ObservableAPI");
var PromisePinAMessageApi = (function () {
    function PromisePinAMessageApi(configuration, requestFactory, responseProcessor) {
        this.api = new ObservableAPI_11.ObservablePinAMessageApi(configuration, requestFactory, responseProcessor);
    }
    PromisePinAMessageApi.prototype.v3ChannelTypeChannelUrlMessagesMessageIdPinPost = function (channelType, channelUrl, messageId, apiToken, _options) {
        var result = this.api.v3ChannelTypeChannelUrlMessagesMessageIdPinPost(channelType, channelUrl, messageId, apiToken, _options);
        return result.toPromise();
    };
    return PromisePinAMessageApi;
}());
exports.PromisePinAMessageApi = PromisePinAMessageApi;
var ObservableAPI_12 = require("./ObservableAPI");
var PromisePollApi = (function () {
    function PromisePollApi(configuration, requestFactory, responseProcessor) {
        this.api = new ObservableAPI_12.ObservablePollApi(configuration, requestFactory, responseProcessor);
    }
    PromisePollApi.prototype.v3PollsGet = function (apiToken, channelUrl, channelType, token, limit, _options) {
        var result = this.api.v3PollsGet(apiToken, channelUrl, channelType, token, limit, _options);
        return result.toPromise();
    };
    PromisePollApi.prototype.v3PollsPollIdClosePut = function (pollId, apiToken, _options) {
        var result = this.api.v3PollsPollIdClosePut(pollId, apiToken, _options);
        return result.toPromise();
    };
    PromisePollApi.prototype.v3PollsPollIdDelete = function (pollId, apiToken, _options) {
        var result = this.api.v3PollsPollIdDelete(pollId, apiToken, _options);
        return result.toPromise();
    };
    PromisePollApi.prototype.v3PollsPollIdGet = function (pollId, apiToken, v3PollsPollIdDeleteRequest, _options) {
        var result = this.api.v3PollsPollIdGet(pollId, apiToken, v3PollsPollIdDeleteRequest, _options);
        return result.toPromise();
    };
    PromisePollApi.prototype.v3PollsPollIdOptionsOptionIdDelete = function (pollId, optionId, apiToken, _options) {
        var result = this.api.v3PollsPollIdOptionsOptionIdDelete(pollId, optionId, apiToken, _options);
        return result.toPromise();
    };
    PromisePollApi.prototype.v3PollsPollIdOptionsOptionIdGet = function (pollId, optionId, apiToken, _options) {
        var result = this.api.v3PollsPollIdOptionsOptionIdGet(pollId, optionId, apiToken, _options);
        return result.toPromise();
    };
    PromisePollApi.prototype.v3PollsPollIdOptionsOptionIdPut = function (pollId, optionId, apiToken, v3PollsPollIdOptionsOptionIdDeleteRequest, _options) {
        var result = this.api.v3PollsPollIdOptionsOptionIdPut(pollId, optionId, apiToken, v3PollsPollIdOptionsOptionIdDeleteRequest, _options);
        return result.toPromise();
    };
    PromisePollApi.prototype.v3PollsPollIdOptionsOptionIdVotersGet = function (pollId, optionId, apiToken, v3PollsPollIdOptionsOptionIdVotersGetRequest, _options) {
        var result = this.api.v3PollsPollIdOptionsOptionIdVotersGet(pollId, optionId, apiToken, v3PollsPollIdOptionsOptionIdVotersGetRequest, _options);
        return result.toPromise();
    };
    PromisePollApi.prototype.v3PollsPollIdOptionsPost = function (pollId, apiToken, v3PollsPollIdOptionsOptionIdDeleteRequest, _options) {
        var result = this.api.v3PollsPollIdOptionsPost(pollId, apiToken, v3PollsPollIdOptionsOptionIdDeleteRequest, _options);
        return result.toPromise();
    };
    PromisePollApi.prototype.v3PollsPollIdPut = function (pollId, apiToken, v3PollsPollIdDeleteRequest1, _options) {
        var result = this.api.v3PollsPollIdPut(pollId, apiToken, v3PollsPollIdDeleteRequest1, _options);
        return result.toPromise();
    };
    PromisePollApi.prototype.v3PollsPollIdVotePut = function (pollId, apiToken, v3PollsPollIdVotePutRequest, _options) {
        var result = this.api.v3PollsPollIdVotePut(pollId, apiToken, v3PollsPollIdVotePutRequest, _options);
        return result.toPromise();
    };
    PromisePollApi.prototype.v3PollsPost = function (title, options, apiToken, v3PollsGetRequest, _options) {
        var result = this.api.v3PollsPost(title, options, apiToken, v3PollsGetRequest, _options);
        return result.toPromise();
    };
    return PromisePollApi;
}());
exports.PromisePollApi = PromisePollApi;
var ObservableAPI_13 = require("./ObservableAPI");
var PromisePrivacyApi = (function () {
    function PromisePrivacyApi(configuration, requestFactory, responseProcessor) {
        this.api = new ObservableAPI_13.ObservablePrivacyApi(configuration, requestFactory, responseProcessor);
    }
    PromisePrivacyApi.prototype.cancelTheRegistrationOfGdprRequestById = function (requestId, apiToken, _options) {
        var result = this.api.cancelTheRegistrationOfGdprRequestById(requestId, apiToken, _options);
        return result.toPromise();
    };
    PromisePrivacyApi.prototype.listGdprRequests = function (apiToken, token, limit, _options) {
        var result = this.api.listGdprRequests(apiToken, token, limit, _options);
        return result.toPromise();
    };
    PromisePrivacyApi.prototype.registerGdprRequest = function (apiToken, registerGdprRequestData, _options) {
        var result = this.api.registerGdprRequest(apiToken, registerGdprRequestData, _options);
        return result.toPromise();
    };
    PromisePrivacyApi.prototype.viewGdprRequestById = function (requestId, apiToken, _options) {
        var result = this.api.viewGdprRequestById(requestId, apiToken, _options);
        return result.toPromise();
    };
    return PromisePrivacyApi;
}());
exports.PromisePrivacyApi = PromisePrivacyApi;
var ObservableAPI_14 = require("./ObservableAPI");
var PromisePushNotificationsApi = (function () {
    function PromisePushNotificationsApi(configuration, requestFactory, responseProcessor) {
        this.api = new ObservableAPI_14.ObservablePushNotificationsApi(configuration, requestFactory, responseProcessor);
    }
    PromisePushNotificationsApi.prototype.v3ApplicationsPushSettingsGet = function (apiToken, _options) {
        var result = this.api.v3ApplicationsPushSettingsGet(apiToken, _options);
        return result.toPromise();
    };
    PromisePushNotificationsApi.prototype.v3ApplicationsPushSettingsPut = function (apiToken, v3ApplicationsPushSettingsGetRequest, _options) {
        var result = this.api.v3ApplicationsPushSettingsPut(apiToken, v3ApplicationsPushSettingsGetRequest, _options);
        return result.toPromise();
    };
    return PromisePushNotificationsApi;
}());
exports.PromisePushNotificationsApi = PromisePushNotificationsApi;
var ObservableAPI_15 = require("./ObservableAPI");
var PromiseReportApi = (function () {
    function PromiseReportApi(configuration, requestFactory, responseProcessor) {
        this.api = new ObservableAPI_15.ObservableReportApi(configuration, requestFactory, responseProcessor);
    }
    PromiseReportApi.prototype.listReports = function (apiToken, token, limit, startTs, endTs, _options) {
        var result = this.api.listReports(apiToken, token, limit, startTs, endTs, _options);
        return result.toPromise();
    };
    PromiseReportApi.prototype.listReportsOnChannelByUrl = function (channelType, channelUrl, apiToken, token, limit, _options) {
        var result = this.api.listReportsOnChannelByUrl(channelType, channelUrl, apiToken, token, limit, _options);
        return result.toPromise();
    };
    PromiseReportApi.prototype.listReportsOnMessageById = function (channelType, channelUrl, messageId, apiToken, token, limit, _options) {
        var result = this.api.listReportsOnMessageById(channelType, channelUrl, messageId, apiToken, token, limit, _options);
        return result.toPromise();
    };
    PromiseReportApi.prototype.listReportsOnUserById = function (offendingUserId, apiToken, token, limit, _options) {
        var result = this.api.listReportsOnUserById(offendingUserId, apiToken, token, limit, _options);
        return result.toPromise();
    };
    PromiseReportApi.prototype.reportChannelByUrl = function (channelType, channelUrl, apiToken, reportChannelByUrlData, _options) {
        var result = this.api.reportChannelByUrl(channelType, channelUrl, apiToken, reportChannelByUrlData, _options);
        return result.toPromise();
    };
    PromiseReportApi.prototype.reportMessageById = function (channelType, channelUrl, messageId, apiToken, reportMessageByIdData, _options) {
        var result = this.api.reportMessageById(channelType, channelUrl, messageId, apiToken, reportMessageByIdData, _options);
        return result.toPromise();
    };
    PromiseReportApi.prototype.reportUserById = function (offendingUserId, apiToken, reportUserByIdData, _options) {
        var result = this.api.reportUserById(offendingUserId, apiToken, reportUserByIdData, _options);
        return result.toPromise();
    };
    PromiseReportApi.prototype.viewModeratedMessageById = function (channelType, channelUrl, messageId, apiToken, _options) {
        var result = this.api.viewModeratedMessageById(channelType, channelUrl, messageId, apiToken, _options);
        return result.toPromise();
    };
    return PromiseReportApi;
}());
exports.PromiseReportApi = PromiseReportApi;
var ObservableAPI_16 = require("./ObservableAPI");
var PromiseScheduledMessageApi = (function () {
    function PromiseScheduledMessageApi(configuration, requestFactory, responseProcessor) {
        this.api = new ObservableAPI_16.ObservableScheduledMessageApi(configuration, requestFactory, responseProcessor);
    }
    PromiseScheduledMessageApi.prototype.v3ChannelTypeChannelUrlScheduledMessagesScheduledMessageIdSendNowPost = function (channelType, channelUrl, scheduledMessageId, apiToken, _options) {
        var result = this.api.v3ChannelTypeChannelUrlScheduledMessagesScheduledMessageIdSendNowPost(channelType, channelUrl, scheduledMessageId, apiToken, _options);
        return result.toPromise();
    };
    PromiseScheduledMessageApi.prototype.v3GroupChannelsChannelUrlScheduledMessagesPost = function (channelUrl, apiToken, v3GroupChannelsChannelUrlScheduledMessagesScheduledMessageIdDeleteRequest, _options) {
        var result = this.api.v3GroupChannelsChannelUrlScheduledMessagesPost(channelUrl, apiToken, v3GroupChannelsChannelUrlScheduledMessagesScheduledMessageIdDeleteRequest, _options);
        return result.toPromise();
    };
    PromiseScheduledMessageApi.prototype.v3GroupChannelsChannelUrlScheduledMessagesScheduledMessageIdDelete = function (channelUrl, scheduledMessageId, apiToken, _options) {
        var result = this.api.v3GroupChannelsChannelUrlScheduledMessagesScheduledMessageIdDelete(channelUrl, scheduledMessageId, apiToken, _options);
        return result.toPromise();
    };
    PromiseScheduledMessageApi.prototype.v3GroupChannelsChannelUrlScheduledMessagesScheduledMessageIdGet = function (channelUrl, scheduledMessageId, apiToken, _options) {
        var result = this.api.v3GroupChannelsChannelUrlScheduledMessagesScheduledMessageIdGet(channelUrl, scheduledMessageId, apiToken, _options);
        return result.toPromise();
    };
    PromiseScheduledMessageApi.prototype.v3GroupChannelsChannelUrlScheduledMessagesScheduledMessageIdPost = function (channelUrl, scheduledMessageId, apiToken, v3GroupChannelsChannelUrlScheduledMessagesScheduledMessageIdDeleteRequest, _options) {
        var result = this.api.v3GroupChannelsChannelUrlScheduledMessagesScheduledMessageIdPost(channelUrl, scheduledMessageId, apiToken, v3GroupChannelsChannelUrlScheduledMessagesScheduledMessageIdDeleteRequest, _options);
        return result.toPromise();
    };
    PromiseScheduledMessageApi.prototype.v3ScheduledMessagesCountGet = function (apiToken, channelType, channelUrl, senderId, status, messageType, _options) {
        var result = this.api.v3ScheduledMessagesCountGet(apiToken, channelType, channelUrl, senderId, status, messageType, _options);
        return result.toPromise();
    };
    PromiseScheduledMessageApi.prototype.v3ScheduledMessagesGet = function (apiToken, channelType, channelUrl, senderId, token, limit, order, reverse, status, messageType, _options) {
        var result = this.api.v3ScheduledMessagesGet(apiToken, channelType, channelUrl, senderId, token, limit, order, reverse, status, messageType, _options);
        return result.toPromise();
    };
    return PromiseScheduledMessageApi;
}());
exports.PromiseScheduledMessageApi = PromiseScheduledMessageApi;
var ObservableAPI_17 = require("./ObservableAPI");
var PromiseStatisticsApi = (function () {
    function PromiseStatisticsApi(configuration, requestFactory, responseProcessor) {
        this.api = new ObservableAPI_17.ObservableStatisticsApi(configuration, requestFactory, responseProcessor);
    }
    PromiseStatisticsApi.prototype.getDetailedOpenRateOfAnnouncementById = function (uniqueId, apiToken, _options) {
        var result = this.api.getDetailedOpenRateOfAnnouncementById(uniqueId, apiToken, _options);
        return result.toPromise();
    };
    PromiseStatisticsApi.prototype.getDetailedOpenStatusOfAnnouncementById = function (uniqueId, apiToken, limit, next, uniqueIds, channelUrls, hasOpened, _options) {
        var result = this.api.getDetailedOpenStatusOfAnnouncementById(uniqueId, apiToken, limit, next, uniqueIds, channelUrls, hasOpened, _options);
        return result.toPromise();
    };
    PromiseStatisticsApi.prototype.retrieveAdvancedAnalyticsMetrics = function (apiToken, _options) {
        var result = this.api.retrieveAdvancedAnalyticsMetrics(apiToken, _options);
        return result.toPromise();
    };
    PromiseStatisticsApi.prototype.viewNumberOfConcurrentConnections = function (apiToken, _options) {
        var result = this.api.viewNumberOfConcurrentConnections(apiToken, _options);
        return result.toPromise();
    };
    PromiseStatisticsApi.prototype.viewNumberOfDailyActiveUsers = function (apiToken, date, _options) {
        var result = this.api.viewNumberOfDailyActiveUsers(apiToken, date, _options);
        return result.toPromise();
    };
    PromiseStatisticsApi.prototype.viewNumberOfMonthlyActiveUsers = function (apiToken, date, _options) {
        var result = this.api.viewNumberOfMonthlyActiveUsers(apiToken, date, _options);
        return result.toPromise();
    };
    PromiseStatisticsApi.prototype.viewNumberOfPeakConnections = function (timeDimension, startYear, startMonth, endYear, endMonth, apiToken, startDay, endDay, _options) {
        var result = this.api.viewNumberOfPeakConnections(timeDimension, startYear, startMonth, endYear, endMonth, apiToken, startDay, endDay, _options);
        return result.toPromise();
    };
    return PromiseStatisticsApi;
}());
exports.PromiseStatisticsApi = PromiseStatisticsApi;
var ObservableAPI_18 = require("./ObservableAPI");
var PromiseUserApi = (function () {
    function PromiseUserApi(configuration, requestFactory, responseProcessor) {
        this.api = new ObservableAPI_18.ObservableUserApi(configuration, requestFactory, responseProcessor);
    }
    PromiseUserApi.prototype.addRegistrationOrDeviceToken = function (userId, tokenType, apiToken, addRegistrationOrDeviceTokenData, _options) {
        var result = this.api.addRegistrationOrDeviceToken(userId, tokenType, apiToken, addRegistrationOrDeviceTokenData, _options);
        return result.toPromise();
    };
    PromiseUserApi.prototype.choosePushNotificationContentTemplate = function (userId, apiToken, body, _options) {
        var result = this.api.choosePushNotificationContentTemplate(userId, apiToken, body, _options);
        return result.toPromise();
    };
    PromiseUserApi.prototype.createUser = function (apiToken, createUserData, _options) {
        var result = this.api.createUser(apiToken, createUserData, _options);
        return result.toPromise();
    };
    PromiseUserApi.prototype.createUserToken = function (userId, apiToken, createUserTokenData, _options) {
        var result = this.api.createUserToken(userId, apiToken, createUserTokenData, _options);
        return result.toPromise();
    };
    PromiseUserApi.prototype.deleteUserById = function (userId, apiToken, _options) {
        var result = this.api.deleteUserById(userId, apiToken, _options);
        return result.toPromise();
    };
    PromiseUserApi.prototype.leaveMyGroupChannels = function (userId, apiToken, leaveMyGroupChannelsData, _options) {
        var result = this.api.leaveMyGroupChannels(userId, apiToken, leaveMyGroupChannelsData, _options);
        return result.toPromise();
    };
    PromiseUserApi.prototype.listMyGroupChannels = function (userId, apiToken, token, limit, distinctMode, publicMode, superMode, hiddenMode, memberStateFilter, unreadFilter, createdAfter, createdBefore, showEmpty, showFrozen, showMember, showDeliveryReceipt, showReadReceipt, order, metadataOrderKey, customTypes, customTypeStartswith, channelUrls, name, nameContains, nameStartswith, membersExactlyIn, membersIncludeIn, queryType, membersNickname, membersNicknameContains, searchQuery, searchFields, metadataKey, metadataValues, metadataValueStartswith, metacounterKey, metacounterValues, metacounterValueGt, metacounterValueGte, metacounterValueLt, metacounterValueLte, customType, _options) {
        var result = this.api.listMyGroupChannels(userId, apiToken, token, limit, distinctMode, publicMode, superMode, hiddenMode, memberStateFilter, unreadFilter, createdAfter, createdBefore, showEmpty, showFrozen, showMember, showDeliveryReceipt, showReadReceipt, order, metadataOrderKey, customTypes, customTypeStartswith, channelUrls, name, nameContains, nameStartswith, membersExactlyIn, membersIncludeIn, queryType, membersNickname, membersNicknameContains, searchQuery, searchFields, metadataKey, metadataValues, metadataValueStartswith, metacounterKey, metacounterValues, metacounterValueGt, metacounterValueGte, metacounterValueLt, metacounterValueLte, customType, _options);
        return result.toPromise();
    };
    PromiseUserApi.prototype.listRegistrationOrDeviceTokens = function (userId, tokenType, apiToken, _options) {
        var result = this.api.listRegistrationOrDeviceTokens(userId, tokenType, apiToken, _options);
        return result.toPromise();
    };
    PromiseUserApi.prototype.listUsers = function (apiToken, token, limit, activeMode, showBot, userIds, nickname, nicknameStartswith, metadatakey, metadatavaluesIn, _options) {
        var result = this.api.listUsers(apiToken, token, limit, activeMode, showBot, userIds, nickname, nicknameStartswith, metadatakey, metadatavaluesIn, _options);
        return result.toPromise();
    };
    PromiseUserApi.prototype.markAllMessagesAsRead = function (userId, apiToken, markAllMessagesAsReadData, _options) {
        var result = this.api.markAllMessagesAsRead(userId, apiToken, markAllMessagesAsReadData, _options);
        return result.toPromise();
    };
    PromiseUserApi.prototype.registerAsOperatorToChannelsWithCustomChannelTypes = function (userId, apiToken, registerAsOperatorToChannelsWithCustomChannelTypesData, _options) {
        var result = this.api.registerAsOperatorToChannelsWithCustomChannelTypes(userId, apiToken, registerAsOperatorToChannelsWithCustomChannelTypesData, _options);
        return result.toPromise();
    };
    PromiseUserApi.prototype.removeRegistrationOrDeviceToken = function (userId, apiToken, _options) {
        var result = this.api.removeRegistrationOrDeviceToken(userId, apiToken, _options);
        return result.toPromise();
    };
    PromiseUserApi.prototype.removeRegistrationOrDeviceTokenByToken = function (userId, tokenType, token, apiToken, _options) {
        var result = this.api.removeRegistrationOrDeviceTokenByToken(userId, tokenType, token, apiToken, _options);
        return result.toPromise();
    };
    PromiseUserApi.prototype.removeRegistrationOrDeviceTokenFromOwnerByToken = function (tokenType, token, apiToken, _options) {
        var result = this.api.removeRegistrationOrDeviceTokenFromOwnerByToken(tokenType, token, apiToken, _options);
        return result.toPromise();
    };
    PromiseUserApi.prototype.resetPushPreferences = function (userId, apiToken, _options) {
        var result = this.api.resetPushPreferences(userId, apiToken, _options);
        return result.toPromise();
    };
    PromiseUserApi.prototype.updateChannelInvitationPreference = function (userId, apiToken, updateChannelInvitationPreferenceData, _options) {
        var result = this.api.updateChannelInvitationPreference(userId, apiToken, updateChannelInvitationPreferenceData, _options);
        return result.toPromise();
    };
    PromiseUserApi.prototype.updateCountPreferenceOfChannelByUrl = function (userId, channelUrl, apiToken, updateCountPreferenceOfChannelByUrlData, _options) {
        var result = this.api.updateCountPreferenceOfChannelByUrl(userId, channelUrl, apiToken, updateCountPreferenceOfChannelByUrlData, _options);
        return result.toPromise();
    };
    PromiseUserApi.prototype.updatePushPreferences = function (userId, apiToken, updatePushPreferencesData, _options) {
        var result = this.api.updatePushPreferences(userId, apiToken, updatePushPreferencesData, _options);
        return result.toPromise();
    };
    PromiseUserApi.prototype.updatePushPreferencesForChannelByUrl = function (userId, channelUrl, apiToken, updatePushPreferencesForChannelByUrlData, _options) {
        var result = this.api.updatePushPreferencesForChannelByUrl(userId, channelUrl, apiToken, updatePushPreferencesForChannelByUrlData, _options);
        return result.toPromise();
    };
    PromiseUserApi.prototype.updateUserById = function (userId, apiToken, updateUserByIdData, _options) {
        var result = this.api.updateUserById(userId, apiToken, updateUserByIdData, _options);
        return result.toPromise();
    };
    PromiseUserApi.prototype.viewChannelInvitationPreference = function (userId, apiToken, _options) {
        var result = this.api.viewChannelInvitationPreference(userId, apiToken, _options);
        return result.toPromise();
    };
    PromiseUserApi.prototype.viewCountPreferenceOfChannelByUrl = function (userId, channelUrl, apiToken, _options) {
        var result = this.api.viewCountPreferenceOfChannelByUrl(userId, channelUrl, apiToken, _options);
        return result.toPromise();
    };
    PromiseUserApi.prototype.viewNumberOfChannelsByJoinStatus = function (userId, apiToken, state, _options) {
        var result = this.api.viewNumberOfChannelsByJoinStatus(userId, apiToken, state, _options);
        return result.toPromise();
    };
    PromiseUserApi.prototype.viewNumberOfChannelsWithUnreadMessages = function (userId, apiToken, customTypes, superMode, _options) {
        var result = this.api.viewNumberOfChannelsWithUnreadMessages(userId, apiToken, customTypes, superMode, _options);
        return result.toPromise();
    };
    PromiseUserApi.prototype.viewNumberOfUnreadItems = function (userId, apiToken, customType, itemKeys, _options) {
        var result = this.api.viewNumberOfUnreadItems(userId, apiToken, customType, itemKeys, _options);
        return result.toPromise();
    };
    PromiseUserApi.prototype.viewNumberOfUnreadMessages = function (userId, apiToken, customTypes, superMode, _options) {
        var result = this.api.viewNumberOfUnreadMessages(userId, apiToken, customTypes, superMode, _options);
        return result.toPromise();
    };
    PromiseUserApi.prototype.viewPushPreferences = function (userId, apiToken, _options) {
        var result = this.api.viewPushPreferences(userId, apiToken, _options);
        return result.toPromise();
    };
    PromiseUserApi.prototype.viewPushPreferencesForChannelByUrl = function (userId, channelUrl, apiToken, _options) {
        var result = this.api.viewPushPreferencesForChannelByUrl(userId, channelUrl, apiToken, _options);
        return result.toPromise();
    };
    PromiseUserApi.prototype.viewUserById = function (userId, apiToken, includeUnreadCount, customTypes, superMode, _options) {
        var result = this.api.viewUserById(userId, apiToken, includeUnreadCount, customTypes, superMode, _options);
        return result.toPromise();
    };
    PromiseUserApi.prototype.viewWhoOwnsRegistrationOrDeviceTokenByToken = function (tokenType, token, apiToken, _options) {
        var result = this.api.viewWhoOwnsRegistrationOrDeviceTokenByToken(tokenType, token, apiToken, _options);
        return result.toPromise();
    };
    return PromiseUserApi;
}());
exports.PromiseUserApi = PromiseUserApi;
var ObservableAPI_19 = require("./ObservableAPI");
var PromiseWebhookApi = (function () {
    function PromiseWebhookApi(configuration, requestFactory, responseProcessor) {
        this.api = new ObservableAPI_19.ObservableWebhookApi(configuration, requestFactory, responseProcessor);
    }
    PromiseWebhookApi.prototype.chooseWhichEventsToSubscribeTo = function (apiToken, chooseWhichEventsToSubscribeToData, _options) {
        var result = this.api.chooseWhichEventsToSubscribeTo(apiToken, chooseWhichEventsToSubscribeToData, _options);
        return result.toPromise();
    };
    PromiseWebhookApi.prototype.retrieveListOfSubscribedEvents = function (apiToken, displayAllWebhookCategories, _options) {
        var result = this.api.retrieveListOfSubscribedEvents(apiToken, displayAllWebhookCategories, _options);
        return result.toPromise();
    };
    return PromiseWebhookApi;
}());
exports.PromiseWebhookApi = PromiseWebhookApi;
//# sourceMappingURL=PromiseAPI.js.map