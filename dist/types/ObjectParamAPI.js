"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ObjectWebhookApi = exports.ObjectUserApi = exports.ObjectStatisticsApi = exports.ObjectScheduledMessageApi = exports.ObjectReportApi = exports.ObjectPushNotificationsApi = exports.ObjectPrivacyApi = exports.ObjectPollApi = exports.ObjectPinAMessageApi = exports.ObjectOpenChannelApi = exports.ObjectModerationApi = exports.ObjectMetadataApi = exports.ObjectMessageApi = exports.ObjectGroupChannelApi = exports.ObjectDeleteAPinApi = exports.ObjectDataExportApi = exports.ObjectBotApi = exports.ObjectApplicationApi = exports.ObjectAnnouncementApi = void 0;
var ObservableAPI_1 = require("./ObservableAPI");
var ObjectAnnouncementApi = (function () {
    function ObjectAnnouncementApi(configuration, requestFactory, responseProcessor) {
        this.api = new ObservableAPI_1.ObservableAnnouncementApi(configuration, requestFactory, responseProcessor);
    }
    ObjectAnnouncementApi.prototype.getDetailedOpenRateOfAnnouncementGroup = function (param, options) {
        return this.api.getDetailedOpenRateOfAnnouncementGroup(param.announcementGroup, param.apiToken, options).toPromise();
    };
    ObjectAnnouncementApi.prototype.getStatistics = function (param, options) {
        if (param === void 0) { param = {}; }
        return this.api.getStatistics(param.apiToken, options).toPromise();
    };
    ObjectAnnouncementApi.prototype.getStatisticsDaily = function (param, options) {
        return this.api.getStatisticsDaily(param.startDate, param.endDate, param.startWeek, param.endWeek, param.startMonth, param.endMonth, param.apiToken, param.announcementGroup, options).toPromise();
    };
    ObjectAnnouncementApi.prototype.getStatisticsMonthly = function (param, options) {
        if (param === void 0) { param = {}; }
        return this.api.getStatisticsMonthly(param.apiToken, options).toPromise();
    };
    ObjectAnnouncementApi.prototype.listAnnouncementGroups = function (param, options) {
        if (param === void 0) { param = {}; }
        return this.api.listAnnouncementGroups(param.apiToken, param.token, param.limit, options).toPromise();
    };
    ObjectAnnouncementApi.prototype.scheduleAnnouncement = function (param, options) {
        if (param === void 0) { param = {}; }
        return this.api.scheduleAnnouncement(param.apiToken, param.scheduleAnnouncementData, options).toPromise();
    };
    ObjectAnnouncementApi.prototype.updateAnnouncementById = function (param, options) {
        return this.api.updateAnnouncementById(param.uniqueId, param.apiToken, param.updateAnnouncementByIdData, options).toPromise();
    };
    ObjectAnnouncementApi.prototype.viewAnnouncementById = function (param, options) {
        return this.api.viewAnnouncementById(param.uniqueId, param.apiToken, options).toPromise();
    };
    return ObjectAnnouncementApi;
}());
exports.ObjectAnnouncementApi = ObjectAnnouncementApi;
var ObservableAPI_2 = require("./ObservableAPI");
var ObjectApplicationApi = (function () {
    function ObjectApplicationApi(configuration, requestFactory, responseProcessor) {
        this.api = new ObservableAPI_2.ObservableApplicationApi(configuration, requestFactory, responseProcessor);
    }
    ObjectApplicationApi.prototype.addApnsPushConfiguration = function (param, options) {
        if (param === void 0) { param = {}; }
        return this.api.addApnsPushConfiguration(param.apiToken, param.addApnsPushConfigurationData, options).toPromise();
    };
    ObjectApplicationApi.prototype.addFcmPushConfiguration = function (param, options) {
        if (param === void 0) { param = {}; }
        return this.api.addFcmPushConfiguration(param.apiToken, param.addFcmPushConfigurationData, options).toPromise();
    };
    ObjectApplicationApi.prototype.addHmsPushConfiguration = function (param, options) {
        if (param === void 0) { param = {}; }
        return this.api.addHmsPushConfiguration(param.apiToken, param.addHmsPushConfigurationData, options).toPromise();
    };
    ObjectApplicationApi.prototype.addIpToWhitelist = function (param, options) {
        if (param === void 0) { param = {}; }
        return this.api.addIpToWhitelist(param.apiToken, param.addIpToWhitelistData, options).toPromise();
    };
    ObjectApplicationApi.prototype.banUsersInChannelsWithCustomChannelType = function (param, options) {
        return this.api.banUsersInChannelsWithCustomChannelType(param.customType, param.apiToken, param.banUsersInChannelsWithCustomChannelTypeData, options).toPromise();
    };
    ObjectApplicationApi.prototype.configureAutoEventMessages = function (param, options) {
        if (param === void 0) { param = {}; }
        return this.api.configureAutoEventMessages(param.apiToken, param.configureAutoEventData, options).toPromise();
    };
    ObjectApplicationApi.prototype.deleteAllowedIpsFromWhitelist = function (param, options) {
        return this.api.deleteAllowedIpsFromWhitelist(param.ipWhitelistAddresses, param.apiToken, options).toPromise();
    };
    ObjectApplicationApi.prototype.deleteApnsCertificateById = function (param, options) {
        return this.api.deleteApnsCertificateById(param.providerId, param.apiToken, options).toPromise();
    };
    ObjectApplicationApi.prototype.generateSecondaryApiToken = function (param, options) {
        if (param === void 0) { param = {}; }
        return this.api.generateSecondaryApiToken(param.apiToken, param.generateSecondaryApiTokenData, options).toPromise();
    };
    ObjectApplicationApi.prototype.listAutoEventMessages = function (param, options) {
        if (param === void 0) { param = {}; }
        return this.api.listAutoEventMessages(param.apiToken, options).toPromise();
    };
    ObjectApplicationApi.prototype.listBannedUsersInChannelsWithCustomChannelType = function (param, options) {
        return this.api.listBannedUsersInChannelsWithCustomChannelType(param.customType, param.apiToken, param.token, param.limit, options).toPromise();
    };
    ObjectApplicationApi.prototype.listMutedUsersInChannelsWithCustomChannelType = function (param, options) {
        return this.api.listMutedUsersInChannelsWithCustomChannelType(param.customType, param.apiToken, param.token, param.limit, options).toPromise();
    };
    ObjectApplicationApi.prototype.listPushConfigurations = function (param, options) {
        return this.api.listPushConfigurations(param.pushType, param.apiToken, options).toPromise();
    };
    ObjectApplicationApi.prototype.listPushNotificationContentTemplates = function (param, options) {
        if (param === void 0) { param = {}; }
        return this.api.listPushNotificationContentTemplates(param.apiToken, options).toPromise();
    };
    ObjectApplicationApi.prototype.listSecondaryApiTokens = function (param, options) {
        if (param === void 0) { param = {}; }
        return this.api.listSecondaryApiTokens(param.apiToken, options).toPromise();
    };
    ObjectApplicationApi.prototype.muteUsersInChannelsWithCustomChannelType = function (param, options) {
        return this.api.muteUsersInChannelsWithCustomChannelType(param.customType, param.apiToken, param.muteUsersInChannelsWithCustomChannelTypeData, options).toPromise();
    };
    ObjectApplicationApi.prototype.removePushConfigurationById = function (param, options) {
        return this.api.removePushConfigurationById(param.pushType, param.providerId, param.apiToken, options).toPromise();
    };
    ObjectApplicationApi.prototype.retrieveIpWhitelist = function (param, options) {
        if (param === void 0) { param = {}; }
        return this.api.retrieveIpWhitelist(param.apiToken, options).toPromise();
    };
    ObjectApplicationApi.prototype.revokeSecondaryApiTokenByToken = function (param, options) {
        return this.api.revokeSecondaryApiTokenByToken(param.apiToken2, param.apiToken, options).toPromise();
    };
    ObjectApplicationApi.prototype.setDomainFilter = function (param, options) {
        return this.api.setDomainFilter(param.customType, param.apiToken, param.setDomainFilterData, options).toPromise();
    };
    ObjectApplicationApi.prototype.unbanUsersInChannelsWithCustomChannelType = function (param, options) {
        return this.api.unbanUsersInChannelsWithCustomChannelType(param.customType, param.userIds, param.apiToken, options).toPromise();
    };
    ObjectApplicationApi.prototype.unmuteUsersInChannelsWithCustomChannelType = function (param, options) {
        return this.api.unmuteUsersInChannelsWithCustomChannelType(param.customType, param.userIds, param.apiToken, options).toPromise();
    };
    ObjectApplicationApi.prototype.updateApnsPushConfigurationById = function (param, options) {
        return this.api.updateApnsPushConfigurationById(param.providerId, param.apiToken, param.updateApnsPushConfigurationByIdData, options).toPromise();
    };
    ObjectApplicationApi.prototype.updateDefaultChannelInvitationPreference = function (param, options) {
        if (param === void 0) { param = {}; }
        return this.api.updateDefaultChannelInvitationPreference(param.apiToken, param.updateDefaultChannelInvitationPreferenceData, options).toPromise();
    };
    ObjectApplicationApi.prototype.updateFcmPushConfigurationById = function (param, options) {
        return this.api.updateFcmPushConfigurationById(param.providerId, param.apiToken, param.updateFcmPushConfigurationByIdData, options).toPromise();
    };
    ObjectApplicationApi.prototype.updateHmsPushConfigurationById = function (param, options) {
        return this.api.updateHmsPushConfigurationById(param.providerId, param.apiToken, param.updateHmsPushConfigurationByIdData, options).toPromise();
    };
    ObjectApplicationApi.prototype.updatePushNotificationContentTemplate = function (param, options) {
        return this.api.updatePushNotificationContentTemplate(param.templateName, param.apiToken, param.updatePushNotificationContentTemplateData, options).toPromise();
    };
    ObjectApplicationApi.prototype.viewDefaultChannelInvitationPreference = function (param, options) {
        if (param === void 0) { param = {}; }
        return this.api.viewDefaultChannelInvitationPreference(param.apiToken, options).toPromise();
    };
    ObjectApplicationApi.prototype.viewPushConfigurationById = function (param, options) {
        return this.api.viewPushConfigurationById(param.pushType, param.providerId, param.apiToken, options).toPromise();
    };
    ObjectApplicationApi.prototype.viewPushNotificationContentTemplate = function (param, options) {
        return this.api.viewPushNotificationContentTemplate(param.templateName, param.apiToken, options).toPromise();
    };
    ObjectApplicationApi.prototype.viewSecondaryApiTokenByToken = function (param, options) {
        return this.api.viewSecondaryApiTokenByToken(param.apiToken2, param.apiToken, options).toPromise();
    };
    return ObjectApplicationApi;
}());
exports.ObjectApplicationApi = ObjectApplicationApi;
var ObservableAPI_3 = require("./ObservableAPI");
var ObjectBotApi = (function () {
    function ObjectBotApi(configuration, requestFactory, responseProcessor) {
        this.api = new ObservableAPI_3.ObservableBotApi(configuration, requestFactory, responseProcessor);
    }
    ObjectBotApi.prototype.createBot = function (param, options) {
        if (param === void 0) { param = {}; }
        return this.api.createBot(param.apiToken, param.createBotData, options).toPromise();
    };
    ObjectBotApi.prototype.deleteBotById = function (param, options) {
        return this.api.deleteBotById(param.botUserid, param.apiToken, options).toPromise();
    };
    ObjectBotApi.prototype.joinChannels = function (param, options) {
        return this.api.joinChannels(param.botUserid, param.apiToken, param.joinChannelsData, options).toPromise();
    };
    ObjectBotApi.prototype.leaveChannels = function (param, options) {
        return this.api.leaveChannels(param.botUserid, param.apiToken, param.channelUrl, options).toPromise();
    };
    ObjectBotApi.prototype.leaveChannelsByUrl = function (param, options) {
        return this.api.leaveChannelsByUrl(param.botUserid, param.channelUrl, param.apiToken, options).toPromise();
    };
    ObjectBotApi.prototype.listBots = function (param, options) {
        if (param === void 0) { param = {}; }
        return this.api.listBots(param.apiToken, param.token, param.limit, options).toPromise();
    };
    ObjectBotApi.prototype.sendBotsMessage = function (param, options) {
        return this.api.sendBotsMessage(param.botUserid, param.apiToken, param.sendBotSMessageData, options).toPromise();
    };
    ObjectBotApi.prototype.updateBotById = function (param, options) {
        return this.api.updateBotById(param.botUserid, param.apiToken, param.updateBotByIdData, options).toPromise();
    };
    ObjectBotApi.prototype.viewBotById = function (param, options) {
        return this.api.viewBotById(param.botUserid, param.apiToken, options).toPromise();
    };
    return ObjectBotApi;
}());
exports.ObjectBotApi = ObjectBotApi;
var ObservableAPI_4 = require("./ObservableAPI");
var ObjectDataExportApi = (function () {
    function ObjectDataExportApi(configuration, requestFactory, responseProcessor) {
        this.api = new ObservableAPI_4.ObservableDataExportApi(configuration, requestFactory, responseProcessor);
    }
    ObjectDataExportApi.prototype.listDataExportsByMessageChannelOrUser = function (param, options) {
        return this.api.listDataExportsByMessageChannelOrUser(param.dataType, param.apiToken, param.token, param.limit, options).toPromise();
    };
    ObjectDataExportApi.prototype.registerAndScheduleDataExport = function (param, options) {
        return this.api.registerAndScheduleDataExport(param.dataType, param.apiToken, param.registerAndScheduleDataExportData, options).toPromise();
    };
    ObjectDataExportApi.prototype.viewDataExportById = function (param, options) {
        return this.api.viewDataExportById(param.dataType, param.requestId, param.apiToken, options).toPromise();
    };
    return ObjectDataExportApi;
}());
exports.ObjectDataExportApi = ObjectDataExportApi;
var ObservableAPI_5 = require("./ObservableAPI");
var ObjectDeleteAPinApi = (function () {
    function ObjectDeleteAPinApi(configuration, requestFactory, responseProcessor) {
        this.api = new ObservableAPI_5.ObservableDeleteAPinApi(configuration, requestFactory, responseProcessor);
    }
    ObjectDeleteAPinApi.prototype.v3ChannelTypeChannelUrlMessagesMessageIdPinDelete = function (param, options) {
        return this.api.v3ChannelTypeChannelUrlMessagesMessageIdPinDelete(param.channelType, param.channelUrl, param.messageId, param.apiToken, options).toPromise();
    };
    return ObjectDeleteAPinApi;
}());
exports.ObjectDeleteAPinApi = ObjectDeleteAPinApi;
var ObservableAPI_6 = require("./ObservableAPI");
var ObjectGroupChannelApi = (function () {
    function ObjectGroupChannelApi(configuration, requestFactory, responseProcessor) {
        this.api = new ObservableAPI_6.ObservableGroupChannelApi(configuration, requestFactory, responseProcessor);
    }
    ObjectGroupChannelApi.prototype.gcAcceptInvitation = function (param, options) {
        return this.api.gcAcceptInvitation(param.channelUrl, param.apiToken, param.gcAcceptInvitationData, options).toPromise();
    };
    ObjectGroupChannelApi.prototype.gcCancelTheRegistrationOfOperators = function (param, options) {
        return this.api.gcCancelTheRegistrationOfOperators(param.channelUrl, param.operatorIds, param.apiToken, param.deleteAll, options).toPromise();
    };
    ObjectGroupChannelApi.prototype.gcCheckIfMemberById = function (param, options) {
        return this.api.gcCheckIfMemberById(param.channelUrl, param.userId, param.apiToken, options).toPromise();
    };
    ObjectGroupChannelApi.prototype.gcCreateChannel = function (param, options) {
        if (param === void 0) { param = {}; }
        return this.api.gcCreateChannel(param.apiToken, param.gcCreateChannelData, options).toPromise();
    };
    ObjectGroupChannelApi.prototype.gcDeclineInvitation = function (param, options) {
        return this.api.gcDeclineInvitation(param.channelUrl, param.apiToken, param.gcDeclineInvitationData, options).toPromise();
    };
    ObjectGroupChannelApi.prototype.gcDeleteChannelByUrl = function (param, options) {
        return this.api.gcDeleteChannelByUrl(param.channelUrl, param.apiToken, options).toPromise();
    };
    ObjectGroupChannelApi.prototype.gcHideOrArchiveChannel = function (param, options) {
        return this.api.gcHideOrArchiveChannel(param.channelUrl, param.apiToken, param.gcHideOrArchiveChannelData, options).toPromise();
    };
    ObjectGroupChannelApi.prototype.gcInviteAsMembers = function (param, options) {
        return this.api.gcInviteAsMembers(param.channelUrl, param.apiToken, param.gcInviteAsMembersData, options).toPromise();
    };
    ObjectGroupChannelApi.prototype.gcJoinChannel = function (param, options) {
        return this.api.gcJoinChannel(param.channelUrl, param.apiToken, param.gcJoinChannelData, options).toPromise();
    };
    ObjectGroupChannelApi.prototype.gcLeaveChannel = function (param, options) {
        return this.api.gcLeaveChannel(param.channelUrl, param.apiToken, param.gcLeaveChannelData, options).toPromise();
    };
    ObjectGroupChannelApi.prototype.gcListChannels = function (param, options) {
        if (param === void 0) { param = {}; }
        return this.api.gcListChannels(param.apiToken, param.token, param.limit, param.distinctMode, param.publicMode, param.superMode, param.createdAfter, param.createdBefore, param.showEmpty, param.showMember, param.showDeliveryReceipt, param.showReadReceipt, param.showMetadata, param.showFrozen, param.order, param.metadataOrderKey, param.customTypes, param.customTypeStartswith, param.channelUrls, param.name, param.nameContains, param.nameStartswith, param.membersExactlyIn, param.membersIncludeIn, param.queryType, param.membersNickname, param.membersNicknameContains, param.metadataKey, param.metadataValues, param.metadataValueStartswith, param.metacounterKey, param.metacounterValues, param.metacounterValueGt, param.metacounterValueGte, param.metacounterValueLt, param.metacounterValueLte, param.includeSortedMetaarrayInLastMessage, param.customType, param.readReceipt, param.member, param.isDistinct, param.membersIn, param.userId, options).toPromise();
    };
    ObjectGroupChannelApi.prototype.gcListMembers = function (param, options) {
        return this.api.gcListMembers(param.channelUrl, param.apiToken, param.token, param.limit, param.showDeliveryReceipt, param.showReadReceipt, param.order, param.operatorFilter, param.memberStateFilter, param.mutedMemberFilter, param.nicknameStartswith, options).toPromise();
    };
    ObjectGroupChannelApi.prototype.gcListOperators = function (param, options) {
        return this.api.gcListOperators(param.channelUrl, param.apiToken, param.token, param.limit, options).toPromise();
    };
    ObjectGroupChannelApi.prototype.gcRegisterOperators = function (param, options) {
        return this.api.gcRegisterOperators(param.channelUrl, param.apiToken, param.gcRegisterOperatorsData, options).toPromise();
    };
    ObjectGroupChannelApi.prototype.gcResetChatHistory = function (param, options) {
        return this.api.gcResetChatHistory(param.channelUrl, param.apiToken, param.gcResetChatHistoryData, options).toPromise();
    };
    ObjectGroupChannelApi.prototype.gcStartTypingIndicators = function (param, options) {
        return this.api.gcStartTypingIndicators(param.channelUrl, param.apiToken, param.gcTypingIndicatorsData, options).toPromise();
    };
    ObjectGroupChannelApi.prototype.gcStopTypingIndicators = function (param, options) {
        return this.api.gcStopTypingIndicators(param.channelUrl, param.apiToken, param.gcTypingIndicatorsData, options).toPromise();
    };
    ObjectGroupChannelApi.prototype.gcUnhideOrUnarchiveChannel = function (param, options) {
        return this.api.gcUnhideOrUnarchiveChannel(param.channelUrl, param.userId, param.apiToken, param.shouldUnhideAll, options).toPromise();
    };
    ObjectGroupChannelApi.prototype.gcUpdateChannelByUrl = function (param, options) {
        return this.api.gcUpdateChannelByUrl(param.channelUrl, param.apiToken, param.gcUpdateChannelByUrlData, options).toPromise();
    };
    ObjectGroupChannelApi.prototype.gcViewChannelByUrl = function (param, options) {
        return this.api.gcViewChannelByUrl(param.channelUrl, param.apiToken, param.showDeliveryReceipt, param.showReadReceipt, param.showMember, param.readReceipt, param.member, options).toPromise();
    };
    return ObjectGroupChannelApi;
}());
exports.ObjectGroupChannelApi = ObjectGroupChannelApi;
var ObservableAPI_7 = require("./ObservableAPI");
var ObjectMessageApi = (function () {
    function ObjectMessageApi(configuration, requestFactory, responseProcessor) {
        this.api = new ObservableAPI_7.ObservableMessageApi(configuration, requestFactory, responseProcessor);
    }
    ObjectMessageApi.prototype.addEmojiCategories = function (param, options) {
        if (param === void 0) { param = {}; }
        return this.api.addEmojiCategories(param.apiToken, param.body, options).toPromise();
    };
    ObjectMessageApi.prototype.addEmojis = function (param, options) {
        if (param === void 0) { param = {}; }
        return this.api.addEmojis(param.apiToken, param.addEmojisData, options).toPromise();
    };
    ObjectMessageApi.prototype.addExtraDataToMessage = function (param, options) {
        return this.api.addExtraDataToMessage(param.channelType, param.channelUrl, param.messageId, param.apiToken, param.addExtraDataToMessageData, options).toPromise();
    };
    ObjectMessageApi.prototype.addReactionToAMessage = function (param, options) {
        return this.api.addReactionToAMessage(param.channelType, param.channelUrl, param.messageId, param.apiToken, param.addReactionToAMessageData, options).toPromise();
    };
    ObjectMessageApi.prototype.deleteEmojiByKey = function (param, options) {
        return this.api.deleteEmojiByKey(param.emojiKey, param.apiToken, options).toPromise();
    };
    ObjectMessageApi.prototype.deleteEmojiCategoryById = function (param, options) {
        return this.api.deleteEmojiCategoryById(param.emojiCategoryId, param.apiToken, options).toPromise();
    };
    ObjectMessageApi.prototype.deleteMessageById = function (param, options) {
        return this.api.deleteMessageById(param.channelType, param.channelUrl, param.messageId, param.apiToken, options).toPromise();
    };
    ObjectMessageApi.prototype.enableReactions = function (param, options) {
        if (param === void 0) { param = {}; }
        return this.api.enableReactions(param.apiToken, param.enableReactionsData, options).toPromise();
    };
    ObjectMessageApi.prototype.gcMarkAllMessagesAsDelivered = function (param, options) {
        return this.api.gcMarkAllMessagesAsDelivered(param.channelUrl, param.apiToken, param.gcMarkAllMessagesAsDeliveredData, options).toPromise();
    };
    ObjectMessageApi.prototype.gcMarkAllMessagesAsRead = function (param, options) {
        return this.api.gcMarkAllMessagesAsRead(param.channelUrl, param.apiToken, param.gcMarkAllMessagesAsReadData, options).toPromise();
    };
    ObjectMessageApi.prototype.gcViewNumberOfEachMembersUnreadMessages = function (param, options) {
        return this.api.gcViewNumberOfEachMembersUnreadMessages(param.channelUrl, param.apiToken, param.userIds, options).toPromise();
    };
    ObjectMessageApi.prototype.getEmojiByKey = function (param, options) {
        return this.api.getEmojiByKey(param.emojiKey, param.apiToken, options).toPromise();
    };
    ObjectMessageApi.prototype.getEmojiCategoryById = function (param, options) {
        return this.api.getEmojiCategoryById(param.emojiCategoryId, param.apiToken, options).toPromise();
    };
    ObjectMessageApi.prototype.listAllEmojisAndEmojiCategories = function (param, options) {
        if (param === void 0) { param = {}; }
        return this.api.listAllEmojisAndEmojiCategories(param.apiToken, options).toPromise();
    };
    ObjectMessageApi.prototype.listAnnouncements = function (param, options) {
        if (param === void 0) { param = {}; }
        return this.api.listAnnouncements(param.apiToken, param.token, param.limit, param.order, param.status, param.announcementGroup, options).toPromise();
    };
    ObjectMessageApi.prototype.listEmojis = function (param, options) {
        if (param === void 0) { param = {}; }
        return this.api.listEmojis(param.apiToken, options).toPromise();
    };
    ObjectMessageApi.prototype.listMessages = function (param, options) {
        return this.api.listMessages(param.channelType, param.channelUrl, param.apiToken, param.messageTs, param.messageId, param.prevLimit, param.nextLimit, param.include, param.reverse, param.senderId, param.senderIds, param.operatorFilter, param.customTypes, param.messageType, param.includingRemoved, param.includeReactions, param.includeReplyType, param.includeParentMessageInfo, param.withSortedMetaArray, param.showSubchannelMessagesOnly, param.userId, param.customType, param.withMetaArray, options).toPromise();
    };
    ObjectMessageApi.prototype.listReactionsOfMessage = function (param, options) {
        return this.api.listReactionsOfMessage(param.channelType, param.channelUrl, param.messageId, param.apiToken, param.listUsers, options).toPromise();
    };
    ObjectMessageApi.prototype.migrateMessagesByUrl = function (param, options) {
        return this.api.migrateMessagesByUrl(param.targetChannelUrl, param.apiToken, param.body, options).toPromise();
    };
    ObjectMessageApi.prototype.removeExtraDataFromMessage = function (param, options) {
        return this.api.removeExtraDataFromMessage(param.channelType, param.channelUrl, param.messageId, param.apiToken, param.keys, options).toPromise();
    };
    ObjectMessageApi.prototype.removeReactionFromAMessage = function (param, options) {
        return this.api.removeReactionFromAMessage(param.channelType, param.channelUrl, param.messageId, param.apiToken, param.userId, param.reaction, options).toPromise();
    };
    ObjectMessageApi.prototype.sendMessage = function (param, options) {
        return this.api.sendMessage(param.channelType, param.channelUrl, param.apiToken, param.sendMessageData, options).toPromise();
    };
    ObjectMessageApi.prototype.translateMessageIntoOtherLanguages = function (param, options) {
        return this.api.translateMessageIntoOtherLanguages(param.channelType, param.channelUrl, param.messageId, param.apiToken, param.translateMessageIntoOtherLanguagesData, options).toPromise();
    };
    ObjectMessageApi.prototype.updateEmojiCategoryUrlById = function (param, options) {
        return this.api.updateEmojiCategoryUrlById(param.emojiCategoryId, param.apiToken, param.updateEmojiCategoryUrlByIdData, options).toPromise();
    };
    ObjectMessageApi.prototype.updateEmojiUrlByKey = function (param, options) {
        return this.api.updateEmojiUrlByKey(param.emojiKey, param.apiToken, param.updateEmojiUrlByKeyData, options).toPromise();
    };
    ObjectMessageApi.prototype.updateExtraDataInMessage = function (param, options) {
        return this.api.updateExtraDataInMessage(param.channelType, param.channelUrl, param.messageId, param.apiToken, param.updateExtraDataInMessageData, options).toPromise();
    };
    ObjectMessageApi.prototype.updateMessageById = function (param, options) {
        return this.api.updateMessageById(param.channelType, param.channelUrl, param.messageId, param.apiToken, param.updateMessageByIdData, options).toPromise();
    };
    ObjectMessageApi.prototype.useDefaultEmojis = function (param, options) {
        if (param === void 0) { param = {}; }
        return this.api.useDefaultEmojis(param.apiToken, param.useDefaultEmojisData, options).toPromise();
    };
    ObjectMessageApi.prototype.viewMessageById = function (param, options) {
        return this.api.viewMessageById(param.channelType, param.channelUrl, param.messageId, param.apiToken, param.withSortedMetaArray, param.withMetaArray, param.includeParentMessageInfo, options).toPromise();
    };
    ObjectMessageApi.prototype.viewTotalNumberOfMessagesInChannel = function (param, options) {
        return this.api.viewTotalNumberOfMessagesInChannel(param.channelType, param.channelUrl, param.apiToken, options).toPromise();
    };
    return ObjectMessageApi;
}());
exports.ObjectMessageApi = ObjectMessageApi;
var ObservableAPI_8 = require("./ObservableAPI");
var ObjectMetadataApi = (function () {
    function ObjectMetadataApi(configuration, requestFactory, responseProcessor) {
        this.api = new ObservableAPI_8.ObservableMetadataApi(configuration, requestFactory, responseProcessor);
    }
    ObjectMetadataApi.prototype.createChannelMetacounter = function (param, options) {
        return this.api.createChannelMetacounter(param.channelType, param.channelUrl, param.apiToken, param.createChannelMetacounterData, options).toPromise();
    };
    ObjectMetadataApi.prototype.createChannelMetadata = function (param, options) {
        return this.api.createChannelMetadata(param.channelType, param.channelUrl, param.apiToken, param.createChannelMetadataData, options).toPromise();
    };
    ObjectMetadataApi.prototype.createUserMetadata = function (param, options) {
        return this.api.createUserMetadata(param.userId, param.apiToken, param.createUserMetadataData, options).toPromise();
    };
    ObjectMetadataApi.prototype.deleteChannelMetacounter = function (param, options) {
        return this.api.deleteChannelMetacounter(param.channelType, param.channelUrl, param.apiToken, options).toPromise();
    };
    ObjectMetadataApi.prototype.deleteChannelMetacounterByKey = function (param, options) {
        return this.api.deleteChannelMetacounterByKey(param.channelType, param.channelUrl, param.key, param.apiToken, options).toPromise();
    };
    ObjectMetadataApi.prototype.deleteChannelMetadata = function (param, options) {
        return this.api.deleteChannelMetadata(param.channelType, param.channelUrl, param.apiToken, param.key, options).toPromise();
    };
    ObjectMetadataApi.prototype.deleteChannelMetadataByKey = function (param, options) {
        return this.api.deleteChannelMetadataByKey(param.channelType, param.channelUrl, param.key, param.apiToken, options).toPromise();
    };
    ObjectMetadataApi.prototype.deleteUserMetadata = function (param, options) {
        return this.api.deleteUserMetadata(param.userId, param.apiToken, param.key, options).toPromise();
    };
    ObjectMetadataApi.prototype.deleteUserMetadataByKey = function (param, options) {
        return this.api.deleteUserMetadataByKey(param.userId, param.key, param.apiToken, options).toPromise();
    };
    ObjectMetadataApi.prototype.updateChannelMetacounter = function (param, options) {
        return this.api.updateChannelMetacounter(param.channelType, param.channelUrl, param.apiToken, param.updateChannelMetacounterData, options).toPromise();
    };
    ObjectMetadataApi.prototype.updateChannelMetacounterByKey = function (param, options) {
        return this.api.updateChannelMetacounterByKey(param.channelType, param.channelUrl, param.key, param.apiToken, param.body, options).toPromise();
    };
    ObjectMetadataApi.prototype.updateChannelMetadata = function (param, options) {
        return this.api.updateChannelMetadata(param.channelType, param.channelUrl, param.apiToken, param.updateChannelMetadataData, options).toPromise();
    };
    ObjectMetadataApi.prototype.updateChannelMetadataByKey = function (param, options) {
        return this.api.updateChannelMetadataByKey(param.channelType, param.channelUrl, param.key, param.apiToken, param.body, options).toPromise();
    };
    ObjectMetadataApi.prototype.updateUserMetadata = function (param, options) {
        return this.api.updateUserMetadata(param.userId, param.apiToken, param.updateUserMetadataData, options).toPromise();
    };
    ObjectMetadataApi.prototype.updateUserMetadataByKey = function (param, options) {
        return this.api.updateUserMetadataByKey(param.userId, param.key, param.apiToken, param.body, options).toPromise();
    };
    ObjectMetadataApi.prototype.viewChannelMetacounter = function (param, options) {
        return this.api.viewChannelMetacounter(param.channelType, param.channelUrl, param.apiToken, param.key, param.keys, options).toPromise();
    };
    ObjectMetadataApi.prototype.viewChannelMetacounterByKey = function (param, options) {
        return this.api.viewChannelMetacounterByKey(param.channelType, param.channelUrl, param.key, param.apiToken, options).toPromise();
    };
    ObjectMetadataApi.prototype.viewChannelMetadata = function (param, options) {
        return this.api.viewChannelMetadata(param.channelType, param.channelUrl, param.apiToken, param.key, param.keys, options).toPromise();
    };
    ObjectMetadataApi.prototype.viewChannelMetadataByKey = function (param, options) {
        return this.api.viewChannelMetadataByKey(param.channelType, param.channelUrl, param.key, param.apiToken, options).toPromise();
    };
    ObjectMetadataApi.prototype.viewUserMetadata = function (param, options) {
        return this.api.viewUserMetadata(param.userId, param.apiToken, param.key, param.keys, options).toPromise();
    };
    ObjectMetadataApi.prototype.viewUserMetadataByKey = function (param, options) {
        return this.api.viewUserMetadataByKey(param.userId, param.key, param.apiToken, options).toPromise();
    };
    return ObjectMetadataApi;
}());
exports.ObjectMetadataApi = ObjectMetadataApi;
var ObservableAPI_9 = require("./ObservableAPI");
var ObjectModerationApi = (function () {
    function ObjectModerationApi(configuration, requestFactory, responseProcessor) {
        this.api = new ObservableAPI_9.ObservableModerationApi(configuration, requestFactory, responseProcessor);
    }
    ObjectModerationApi.prototype.banFromChannelsWithCustomChannelTypes = function (param, options) {
        return this.api.banFromChannelsWithCustomChannelTypes(param.userId, param.apiToken, param.banFromChannelsWithCustomChannelTypesData, options).toPromise();
    };
    ObjectModerationApi.prototype.blockUser = function (param, options) {
        return this.api.blockUser(param.userId, param.apiToken, param.blockUserData, options).toPromise();
    };
    ObjectModerationApi.prototype.gcBanUser = function (param, options) {
        return this.api.gcBanUser(param.channelUrl, param.apiToken, param.gcBanUserData, options).toPromise();
    };
    ObjectModerationApi.prototype.gcFreezeChannel = function (param, options) {
        return this.api.gcFreezeChannel(param.channelUrl, param.apiToken, param.gcFreezeChannelData, options).toPromise();
    };
    ObjectModerationApi.prototype.gcListBannedUsers = function (param, options) {
        return this.api.gcListBannedUsers(param.channelUrl, param.apiToken, param.token, param.limit, options).toPromise();
    };
    ObjectModerationApi.prototype.gcListMutedUsers = function (param, options) {
        return this.api.gcListMutedUsers(param.channelUrl, param.apiToken, param.token, param.limit, options).toPromise();
    };
    ObjectModerationApi.prototype.gcMuteUser = function (param, options) {
        return this.api.gcMuteUser(param.channelUrl, param.apiToken, param.gcMuteUserData, options).toPromise();
    };
    ObjectModerationApi.prototype.gcUnbanUserById = function (param, options) {
        return this.api.gcUnbanUserById(param.channelUrl, param.bannedUserId, param.apiToken, options).toPromise();
    };
    ObjectModerationApi.prototype.gcUnmuteUserById = function (param, options) {
        return this.api.gcUnmuteUserById(param.channelUrl, param.mutedUserId, param.apiToken, options).toPromise();
    };
    ObjectModerationApi.prototype.gcUpdateBanById = function (param, options) {
        return this.api.gcUpdateBanById(param.channelUrl, param.bannedUserId, param.apiToken, param.gcUpdateBanByIdData, options).toPromise();
    };
    ObjectModerationApi.prototype.gcViewBanById = function (param, options) {
        return this.api.gcViewBanById(param.channelUrl, param.bannedUserId, param.apiToken, options).toPromise();
    };
    ObjectModerationApi.prototype.gcViewMuteById = function (param, options) {
        return this.api.gcViewMuteById(param.channelUrl, param.mutedUserId, param.apiToken, options).toPromise();
    };
    ObjectModerationApi.prototype.listBannedChannels = function (param, options) {
        return this.api.listBannedChannels(param.userId, param.apiToken, param.token, param.limit, options).toPromise();
    };
    ObjectModerationApi.prototype.listBlockedUsers = function (param, options) {
        return this.api.listBlockedUsers(param.userId, param.apiToken, param.token, param.limit, param.userIds, param.metadatakey, param.metadatavaluesIn, options).toPromise();
    };
    ObjectModerationApi.prototype.listMutedChannels = function (param, options) {
        return this.api.listMutedChannels(param.userId, param.apiToken, param.token, param.limit, options).toPromise();
    };
    ObjectModerationApi.prototype.muteInChannelsWithCustomChannelTypes = function (param, options) {
        return this.api.muteInChannelsWithCustomChannelTypes(param.userId, param.apiToken, param.muteInChannelsWithCustomChannelTypesData, options).toPromise();
    };
    ObjectModerationApi.prototype.ocBanUser = function (param, options) {
        return this.api.ocBanUser(param.channelUrl, param.apiToken, param.ocBanUserData, options).toPromise();
    };
    ObjectModerationApi.prototype.ocFreezeChannel = function (param, options) {
        return this.api.ocFreezeChannel(param.channelUrl, param.apiToken, param.ocFreezeChannelData, options).toPromise();
    };
    ObjectModerationApi.prototype.ocListBannedUsers = function (param, options) {
        return this.api.ocListBannedUsers(param.channelUrl, param.apiToken, param.token, param.limit, options).toPromise();
    };
    ObjectModerationApi.prototype.ocListMutedUsers = function (param, options) {
        return this.api.ocListMutedUsers(param.channelUrl, param.apiToken, param.token, param.limit, options).toPromise();
    };
    ObjectModerationApi.prototype.ocMuteUser = function (param, options) {
        return this.api.ocMuteUser(param.channelUrl, param.apiToken, param.ocMuteUserData, options).toPromise();
    };
    ObjectModerationApi.prototype.ocUnbanUserById = function (param, options) {
        return this.api.ocUnbanUserById(param.channelUrl, param.bannedUserId, param.apiToken, options).toPromise();
    };
    ObjectModerationApi.prototype.ocUnmuteUserById = function (param, options) {
        return this.api.ocUnmuteUserById(param.channelUrl, param.mutedUserId, param.apiToken, options).toPromise();
    };
    ObjectModerationApi.prototype.ocUpdateBanById = function (param, options) {
        return this.api.ocUpdateBanById(param.channelUrl, param.bannedUserId, param.apiToken, param.ocUpdateBanByIdData, options).toPromise();
    };
    ObjectModerationApi.prototype.ocViewBanById = function (param, options) {
        return this.api.ocViewBanById(param.channelUrl, param.bannedUserId, param.apiToken, options).toPromise();
    };
    ObjectModerationApi.prototype.ocViewMuteById = function (param, options) {
        return this.api.ocViewMuteById(param.channelUrl, param.mutedUserId, param.apiToken, options).toPromise();
    };
    ObjectModerationApi.prototype.unblockUserById = function (param, options) {
        return this.api.unblockUserById(param.userId, param.targetId, param.apiToken, options).toPromise();
    };
    return ObjectModerationApi;
}());
exports.ObjectModerationApi = ObjectModerationApi;
var ObservableAPI_10 = require("./ObservableAPI");
var ObjectOpenChannelApi = (function () {
    function ObjectOpenChannelApi(configuration, requestFactory, responseProcessor) {
        this.api = new ObservableAPI_10.ObservableOpenChannelApi(configuration, requestFactory, responseProcessor);
    }
    ObjectOpenChannelApi.prototype.ocCancelTheRegistrationOfOperators = function (param, options) {
        return this.api.ocCancelTheRegistrationOfOperators(param.channelUrl, param.operatorIds, param.apiToken, param.deleteAll, options).toPromise();
    };
    ObjectOpenChannelApi.prototype.ocCreateChannel = function (param, options) {
        if (param === void 0) { param = {}; }
        return this.api.ocCreateChannel(param.apiToken, param.ocCreateChannelData, options).toPromise();
    };
    ObjectOpenChannelApi.prototype.ocDeleteChannelByUrl = function (param, options) {
        return this.api.ocDeleteChannelByUrl(param.channelUrl, param.apiToken, options).toPromise();
    };
    ObjectOpenChannelApi.prototype.ocListChannels = function (param, options) {
        if (param === void 0) { param = {}; }
        return this.api.ocListChannels(param.apiToken, param.token, param.limit, param.customTypes, param.nameContains, param.urlContains, param.showFrozen, param.showMetadata, param.customType, options).toPromise();
    };
    ObjectOpenChannelApi.prototype.ocListOperators = function (param, options) {
        return this.api.ocListOperators(param.channelUrl, param.apiToken, param.token, param.limit, options).toPromise();
    };
    ObjectOpenChannelApi.prototype.ocListParticipants = function (param, options) {
        return this.api.ocListParticipants(param.channelUrl, param.apiToken, param.token, param.limit, options).toPromise();
    };
    ObjectOpenChannelApi.prototype.ocRegisterOperators = function (param, options) {
        return this.api.ocRegisterOperators(param.channelUrl, param.apiToken, param.ocRegisterOperatorsData, options).toPromise();
    };
    ObjectOpenChannelApi.prototype.ocUpdateChannelByUrl = function (param, options) {
        return this.api.ocUpdateChannelByUrl(param.channelUrl, param.apiToken, param.ocUpdateChannelByUrlData, options).toPromise();
    };
    ObjectOpenChannelApi.prototype.ocViewChannelByUrl = function (param, options) {
        return this.api.ocViewChannelByUrl(param.channelUrl, param.apiToken, options).toPromise();
    };
    return ObjectOpenChannelApi;
}());
exports.ObjectOpenChannelApi = ObjectOpenChannelApi;
var ObservableAPI_11 = require("./ObservableAPI");
var ObjectPinAMessageApi = (function () {
    function ObjectPinAMessageApi(configuration, requestFactory, responseProcessor) {
        this.api = new ObservableAPI_11.ObservablePinAMessageApi(configuration, requestFactory, responseProcessor);
    }
    ObjectPinAMessageApi.prototype.v3ChannelTypeChannelUrlMessagesMessageIdPinPost = function (param, options) {
        return this.api.v3ChannelTypeChannelUrlMessagesMessageIdPinPost(param.channelType, param.channelUrl, param.messageId, param.apiToken, options).toPromise();
    };
    return ObjectPinAMessageApi;
}());
exports.ObjectPinAMessageApi = ObjectPinAMessageApi;
var ObservableAPI_12 = require("./ObservableAPI");
var ObjectPollApi = (function () {
    function ObjectPollApi(configuration, requestFactory, responseProcessor) {
        this.api = new ObservableAPI_12.ObservablePollApi(configuration, requestFactory, responseProcessor);
    }
    ObjectPollApi.prototype.v3PollsGet = function (param, options) {
        if (param === void 0) { param = {}; }
        return this.api.v3PollsGet(param.apiToken, param.channelUrl, param.channelType, param.token, param.limit, options).toPromise();
    };
    ObjectPollApi.prototype.v3PollsPollIdClosePut = function (param, options) {
        return this.api.v3PollsPollIdClosePut(param.pollId, param.apiToken, options).toPromise();
    };
    ObjectPollApi.prototype.v3PollsPollIdDelete = function (param, options) {
        return this.api.v3PollsPollIdDelete(param.pollId, param.apiToken, options).toPromise();
    };
    ObjectPollApi.prototype.v3PollsPollIdGet = function (param, options) {
        return this.api.v3PollsPollIdGet(param.pollId, param.apiToken, param.v3PollsPollIdDeleteRequest, options).toPromise();
    };
    ObjectPollApi.prototype.v3PollsPollIdOptionsOptionIdDelete = function (param, options) {
        return this.api.v3PollsPollIdOptionsOptionIdDelete(param.pollId, param.optionId, param.apiToken, options).toPromise();
    };
    ObjectPollApi.prototype.v3PollsPollIdOptionsOptionIdGet = function (param, options) {
        return this.api.v3PollsPollIdOptionsOptionIdGet(param.pollId, param.optionId, param.apiToken, options).toPromise();
    };
    ObjectPollApi.prototype.v3PollsPollIdOptionsOptionIdPut = function (param, options) {
        return this.api.v3PollsPollIdOptionsOptionIdPut(param.pollId, param.optionId, param.apiToken, param.v3PollsPollIdOptionsOptionIdDeleteRequest, options).toPromise();
    };
    ObjectPollApi.prototype.v3PollsPollIdOptionsOptionIdVotersGet = function (param, options) {
        return this.api.v3PollsPollIdOptionsOptionIdVotersGet(param.pollId, param.optionId, param.apiToken, param.v3PollsPollIdOptionsOptionIdVotersGetRequest, options).toPromise();
    };
    ObjectPollApi.prototype.v3PollsPollIdOptionsPost = function (param, options) {
        return this.api.v3PollsPollIdOptionsPost(param.pollId, param.apiToken, param.v3PollsPollIdOptionsOptionIdDeleteRequest, options).toPromise();
    };
    ObjectPollApi.prototype.v3PollsPollIdPut = function (param, options) {
        return this.api.v3PollsPollIdPut(param.pollId, param.apiToken, param.v3PollsPollIdDeleteRequest1, options).toPromise();
    };
    ObjectPollApi.prototype.v3PollsPollIdVotePut = function (param, options) {
        return this.api.v3PollsPollIdVotePut(param.pollId, param.apiToken, param.v3PollsPollIdVotePutRequest, options).toPromise();
    };
    ObjectPollApi.prototype.v3PollsPost = function (param, options) {
        return this.api.v3PollsPost(param.title, param.options, param.apiToken, param.v3PollsGetRequest, options).toPromise();
    };
    return ObjectPollApi;
}());
exports.ObjectPollApi = ObjectPollApi;
var ObservableAPI_13 = require("./ObservableAPI");
var ObjectPrivacyApi = (function () {
    function ObjectPrivacyApi(configuration, requestFactory, responseProcessor) {
        this.api = new ObservableAPI_13.ObservablePrivacyApi(configuration, requestFactory, responseProcessor);
    }
    ObjectPrivacyApi.prototype.cancelTheRegistrationOfGdprRequestById = function (param, options) {
        return this.api.cancelTheRegistrationOfGdprRequestById(param.requestId, param.apiToken, options).toPromise();
    };
    ObjectPrivacyApi.prototype.listGdprRequests = function (param, options) {
        if (param === void 0) { param = {}; }
        return this.api.listGdprRequests(param.apiToken, param.token, param.limit, options).toPromise();
    };
    ObjectPrivacyApi.prototype.registerGdprRequest = function (param, options) {
        if (param === void 0) { param = {}; }
        return this.api.registerGdprRequest(param.apiToken, param.registerGdprRequestData, options).toPromise();
    };
    ObjectPrivacyApi.prototype.viewGdprRequestById = function (param, options) {
        return this.api.viewGdprRequestById(param.requestId, param.apiToken, options).toPromise();
    };
    return ObjectPrivacyApi;
}());
exports.ObjectPrivacyApi = ObjectPrivacyApi;
var ObservableAPI_14 = require("./ObservableAPI");
var ObjectPushNotificationsApi = (function () {
    function ObjectPushNotificationsApi(configuration, requestFactory, responseProcessor) {
        this.api = new ObservableAPI_14.ObservablePushNotificationsApi(configuration, requestFactory, responseProcessor);
    }
    ObjectPushNotificationsApi.prototype.v3ApplicationsPushSettingsGet = function (param, options) {
        if (param === void 0) { param = {}; }
        return this.api.v3ApplicationsPushSettingsGet(param.apiToken, options).toPromise();
    };
    ObjectPushNotificationsApi.prototype.v3ApplicationsPushSettingsPut = function (param, options) {
        if (param === void 0) { param = {}; }
        return this.api.v3ApplicationsPushSettingsPut(param.apiToken, param.v3ApplicationsPushSettingsGetRequest, options).toPromise();
    };
    return ObjectPushNotificationsApi;
}());
exports.ObjectPushNotificationsApi = ObjectPushNotificationsApi;
var ObservableAPI_15 = require("./ObservableAPI");
var ObjectReportApi = (function () {
    function ObjectReportApi(configuration, requestFactory, responseProcessor) {
        this.api = new ObservableAPI_15.ObservableReportApi(configuration, requestFactory, responseProcessor);
    }
    ObjectReportApi.prototype.listReports = function (param, options) {
        if (param === void 0) { param = {}; }
        return this.api.listReports(param.apiToken, param.token, param.limit, param.startTs, param.endTs, options).toPromise();
    };
    ObjectReportApi.prototype.listReportsOnChannelByUrl = function (param, options) {
        return this.api.listReportsOnChannelByUrl(param.channelType, param.channelUrl, param.apiToken, param.token, param.limit, options).toPromise();
    };
    ObjectReportApi.prototype.listReportsOnMessageById = function (param, options) {
        return this.api.listReportsOnMessageById(param.channelType, param.channelUrl, param.messageId, param.apiToken, param.token, param.limit, options).toPromise();
    };
    ObjectReportApi.prototype.listReportsOnUserById = function (param, options) {
        return this.api.listReportsOnUserById(param.offendingUserId, param.apiToken, param.token, param.limit, options).toPromise();
    };
    ObjectReportApi.prototype.reportChannelByUrl = function (param, options) {
        return this.api.reportChannelByUrl(param.channelType, param.channelUrl, param.apiToken, param.reportChannelByUrlData, options).toPromise();
    };
    ObjectReportApi.prototype.reportMessageById = function (param, options) {
        return this.api.reportMessageById(param.channelType, param.channelUrl, param.messageId, param.apiToken, param.reportMessageByIdData, options).toPromise();
    };
    ObjectReportApi.prototype.reportUserById = function (param, options) {
        return this.api.reportUserById(param.offendingUserId, param.apiToken, param.reportUserByIdData, options).toPromise();
    };
    ObjectReportApi.prototype.viewModeratedMessageById = function (param, options) {
        return this.api.viewModeratedMessageById(param.channelType, param.channelUrl, param.messageId, param.apiToken, options).toPromise();
    };
    return ObjectReportApi;
}());
exports.ObjectReportApi = ObjectReportApi;
var ObservableAPI_16 = require("./ObservableAPI");
var ObjectScheduledMessageApi = (function () {
    function ObjectScheduledMessageApi(configuration, requestFactory, responseProcessor) {
        this.api = new ObservableAPI_16.ObservableScheduledMessageApi(configuration, requestFactory, responseProcessor);
    }
    ObjectScheduledMessageApi.prototype.v3ChannelTypeChannelUrlScheduledMessagesScheduledMessageIdSendNowPost = function (param, options) {
        return this.api.v3ChannelTypeChannelUrlScheduledMessagesScheduledMessageIdSendNowPost(param.channelType, param.channelUrl, param.scheduledMessageId, param.apiToken, options).toPromise();
    };
    ObjectScheduledMessageApi.prototype.v3GroupChannelsChannelUrlScheduledMessagesPost = function (param, options) {
        return this.api.v3GroupChannelsChannelUrlScheduledMessagesPost(param.channelUrl, param.apiToken, param.v3GroupChannelsChannelUrlScheduledMessagesScheduledMessageIdDeleteRequest, options).toPromise();
    };
    ObjectScheduledMessageApi.prototype.v3GroupChannelsChannelUrlScheduledMessagesScheduledMessageIdDelete = function (param, options) {
        return this.api.v3GroupChannelsChannelUrlScheduledMessagesScheduledMessageIdDelete(param.channelUrl, param.scheduledMessageId, param.apiToken, options).toPromise();
    };
    ObjectScheduledMessageApi.prototype.v3GroupChannelsChannelUrlScheduledMessagesScheduledMessageIdGet = function (param, options) {
        return this.api.v3GroupChannelsChannelUrlScheduledMessagesScheduledMessageIdGet(param.channelUrl, param.scheduledMessageId, param.apiToken, options).toPromise();
    };
    ObjectScheduledMessageApi.prototype.v3GroupChannelsChannelUrlScheduledMessagesScheduledMessageIdPost = function (param, options) {
        return this.api.v3GroupChannelsChannelUrlScheduledMessagesScheduledMessageIdPost(param.channelUrl, param.scheduledMessageId, param.apiToken, param.v3GroupChannelsChannelUrlScheduledMessagesScheduledMessageIdDeleteRequest, options).toPromise();
    };
    ObjectScheduledMessageApi.prototype.v3ScheduledMessagesCountGet = function (param, options) {
        if (param === void 0) { param = {}; }
        return this.api.v3ScheduledMessagesCountGet(param.apiToken, param.channelType, param.channelUrl, param.senderId, param.status, param.messageType, options).toPromise();
    };
    ObjectScheduledMessageApi.prototype.v3ScheduledMessagesGet = function (param, options) {
        if (param === void 0) { param = {}; }
        return this.api.v3ScheduledMessagesGet(param.apiToken, param.channelType, param.channelUrl, param.senderId, param.token, param.limit, param.order, param.reverse, param.status, param.messageType, options).toPromise();
    };
    return ObjectScheduledMessageApi;
}());
exports.ObjectScheduledMessageApi = ObjectScheduledMessageApi;
var ObservableAPI_17 = require("./ObservableAPI");
var ObjectStatisticsApi = (function () {
    function ObjectStatisticsApi(configuration, requestFactory, responseProcessor) {
        this.api = new ObservableAPI_17.ObservableStatisticsApi(configuration, requestFactory, responseProcessor);
    }
    ObjectStatisticsApi.prototype.getDetailedOpenRateOfAnnouncementById = function (param, options) {
        return this.api.getDetailedOpenRateOfAnnouncementById(param.uniqueId, param.apiToken, options).toPromise();
    };
    ObjectStatisticsApi.prototype.getDetailedOpenStatusOfAnnouncementById = function (param, options) {
        return this.api.getDetailedOpenStatusOfAnnouncementById(param.uniqueId, param.apiToken, param.limit, param.next, param.uniqueIds, param.channelUrls, param.hasOpened, options).toPromise();
    };
    ObjectStatisticsApi.prototype.retrieveAdvancedAnalyticsMetrics = function (param, options) {
        if (param === void 0) { param = {}; }
        return this.api.retrieveAdvancedAnalyticsMetrics(param.apiToken, options).toPromise();
    };
    ObjectStatisticsApi.prototype.viewNumberOfConcurrentConnections = function (param, options) {
        if (param === void 0) { param = {}; }
        return this.api.viewNumberOfConcurrentConnections(param.apiToken, options).toPromise();
    };
    ObjectStatisticsApi.prototype.viewNumberOfDailyActiveUsers = function (param, options) {
        if (param === void 0) { param = {}; }
        return this.api.viewNumberOfDailyActiveUsers(param.apiToken, param.date, options).toPromise();
    };
    ObjectStatisticsApi.prototype.viewNumberOfMonthlyActiveUsers = function (param, options) {
        if (param === void 0) { param = {}; }
        return this.api.viewNumberOfMonthlyActiveUsers(param.apiToken, param.date, options).toPromise();
    };
    ObjectStatisticsApi.prototype.viewNumberOfPeakConnections = function (param, options) {
        return this.api.viewNumberOfPeakConnections(param.timeDimension, param.startYear, param.startMonth, param.endYear, param.endMonth, param.apiToken, param.startDay, param.endDay, options).toPromise();
    };
    return ObjectStatisticsApi;
}());
exports.ObjectStatisticsApi = ObjectStatisticsApi;
var ObservableAPI_18 = require("./ObservableAPI");
var ObjectUserApi = (function () {
    function ObjectUserApi(configuration, requestFactory, responseProcessor) {
        this.api = new ObservableAPI_18.ObservableUserApi(configuration, requestFactory, responseProcessor);
    }
    ObjectUserApi.prototype.addRegistrationOrDeviceToken = function (param, options) {
        return this.api.addRegistrationOrDeviceToken(param.userId, param.tokenType, param.apiToken, param.addRegistrationOrDeviceTokenData, options).toPromise();
    };
    ObjectUserApi.prototype.choosePushNotificationContentTemplate = function (param, options) {
        return this.api.choosePushNotificationContentTemplate(param.userId, param.apiToken, param.body, options).toPromise();
    };
    ObjectUserApi.prototype.createUser = function (param, options) {
        if (param === void 0) { param = {}; }
        return this.api.createUser(param.apiToken, param.createUserData, options).toPromise();
    };
    ObjectUserApi.prototype.createUserToken = function (param, options) {
        return this.api.createUserToken(param.userId, param.apiToken, param.createUserTokenData, options).toPromise();
    };
    ObjectUserApi.prototype.deleteUserById = function (param, options) {
        return this.api.deleteUserById(param.userId, param.apiToken, options).toPromise();
    };
    ObjectUserApi.prototype.leaveMyGroupChannels = function (param, options) {
        return this.api.leaveMyGroupChannels(param.userId, param.apiToken, param.leaveMyGroupChannelsData, options).toPromise();
    };
    ObjectUserApi.prototype.listMyGroupChannels = function (param, options) {
        return this.api.listMyGroupChannels(param.userId, param.apiToken, param.token, param.limit, param.distinctMode, param.publicMode, param.superMode, param.hiddenMode, param.memberStateFilter, param.unreadFilter, param.createdAfter, param.createdBefore, param.showEmpty, param.showFrozen, param.showMember, param.showDeliveryReceipt, param.showReadReceipt, param.order, param.metadataOrderKey, param.customTypes, param.customTypeStartswith, param.channelUrls, param.name, param.nameContains, param.nameStartswith, param.membersExactlyIn, param.membersIncludeIn, param.queryType, param.membersNickname, param.membersNicknameContains, param.searchQuery, param.searchFields, param.metadataKey, param.metadataValues, param.metadataValueStartswith, param.metacounterKey, param.metacounterValues, param.metacounterValueGt, param.metacounterValueGte, param.metacounterValueLt, param.metacounterValueLte, param.customType, options).toPromise();
    };
    ObjectUserApi.prototype.listRegistrationOrDeviceTokens = function (param, options) {
        return this.api.listRegistrationOrDeviceTokens(param.userId, param.tokenType, param.apiToken, options).toPromise();
    };
    ObjectUserApi.prototype.listUsers = function (param, options) {
        if (param === void 0) { param = {}; }
        return this.api.listUsers(param.apiToken, param.token, param.limit, param.activeMode, param.showBot, param.userIds, param.nickname, param.nicknameStartswith, param.metadatakey, param.metadatavaluesIn, options).toPromise();
    };
    ObjectUserApi.prototype.markAllMessagesAsRead = function (param, options) {
        return this.api.markAllMessagesAsRead(param.userId, param.apiToken, param.markAllMessagesAsReadData, options).toPromise();
    };
    ObjectUserApi.prototype.registerAsOperatorToChannelsWithCustomChannelTypes = function (param, options) {
        return this.api.registerAsOperatorToChannelsWithCustomChannelTypes(param.userId, param.apiToken, param.registerAsOperatorToChannelsWithCustomChannelTypesData, options).toPromise();
    };
    ObjectUserApi.prototype.removeRegistrationOrDeviceToken = function (param, options) {
        return this.api.removeRegistrationOrDeviceToken(param.userId, param.apiToken, options).toPromise();
    };
    ObjectUserApi.prototype.removeRegistrationOrDeviceTokenByToken = function (param, options) {
        return this.api.removeRegistrationOrDeviceTokenByToken(param.userId, param.tokenType, param.token, param.apiToken, options).toPromise();
    };
    ObjectUserApi.prototype.removeRegistrationOrDeviceTokenFromOwnerByToken = function (param, options) {
        return this.api.removeRegistrationOrDeviceTokenFromOwnerByToken(param.tokenType, param.token, param.apiToken, options).toPromise();
    };
    ObjectUserApi.prototype.resetPushPreferences = function (param, options) {
        return this.api.resetPushPreferences(param.userId, param.apiToken, options).toPromise();
    };
    ObjectUserApi.prototype.updateChannelInvitationPreference = function (param, options) {
        return this.api.updateChannelInvitationPreference(param.userId, param.apiToken, param.updateChannelInvitationPreferenceData, options).toPromise();
    };
    ObjectUserApi.prototype.updateCountPreferenceOfChannelByUrl = function (param, options) {
        return this.api.updateCountPreferenceOfChannelByUrl(param.userId, param.channelUrl, param.apiToken, param.updateCountPreferenceOfChannelByUrlData, options).toPromise();
    };
    ObjectUserApi.prototype.updatePushPreferences = function (param, options) {
        return this.api.updatePushPreferences(param.userId, param.apiToken, param.updatePushPreferencesData, options).toPromise();
    };
    ObjectUserApi.prototype.updatePushPreferencesForChannelByUrl = function (param, options) {
        return this.api.updatePushPreferencesForChannelByUrl(param.userId, param.channelUrl, param.apiToken, param.updatePushPreferencesForChannelByUrlData, options).toPromise();
    };
    ObjectUserApi.prototype.updateUserById = function (param, options) {
        return this.api.updateUserById(param.userId, param.apiToken, param.updateUserByIdData, options).toPromise();
    };
    ObjectUserApi.prototype.viewChannelInvitationPreference = function (param, options) {
        return this.api.viewChannelInvitationPreference(param.userId, param.apiToken, options).toPromise();
    };
    ObjectUserApi.prototype.viewCountPreferenceOfChannelByUrl = function (param, options) {
        return this.api.viewCountPreferenceOfChannelByUrl(param.userId, param.channelUrl, param.apiToken, options).toPromise();
    };
    ObjectUserApi.prototype.viewNumberOfChannelsByJoinStatus = function (param, options) {
        return this.api.viewNumberOfChannelsByJoinStatus(param.userId, param.apiToken, param.state, options).toPromise();
    };
    ObjectUserApi.prototype.viewNumberOfChannelsWithUnreadMessages = function (param, options) {
        return this.api.viewNumberOfChannelsWithUnreadMessages(param.userId, param.apiToken, param.customTypes, param.superMode, options).toPromise();
    };
    ObjectUserApi.prototype.viewNumberOfUnreadItems = function (param, options) {
        return this.api.viewNumberOfUnreadItems(param.userId, param.apiToken, param.customType, param.itemKeys, options).toPromise();
    };
    ObjectUserApi.prototype.viewNumberOfUnreadMessages = function (param, options) {
        return this.api.viewNumberOfUnreadMessages(param.userId, param.apiToken, param.customTypes, param.superMode, options).toPromise();
    };
    ObjectUserApi.prototype.viewPushPreferences = function (param, options) {
        return this.api.viewPushPreferences(param.userId, param.apiToken, options).toPromise();
    };
    ObjectUserApi.prototype.viewPushPreferencesForChannelByUrl = function (param, options) {
        return this.api.viewPushPreferencesForChannelByUrl(param.userId, param.channelUrl, param.apiToken, options).toPromise();
    };
    ObjectUserApi.prototype.viewUserById = function (param, options) {
        return this.api.viewUserById(param.userId, param.apiToken, param.includeUnreadCount, param.customTypes, param.superMode, options).toPromise();
    };
    ObjectUserApi.prototype.viewWhoOwnsRegistrationOrDeviceTokenByToken = function (param, options) {
        return this.api.viewWhoOwnsRegistrationOrDeviceTokenByToken(param.tokenType, param.token, param.apiToken, options).toPromise();
    };
    return ObjectUserApi;
}());
exports.ObjectUserApi = ObjectUserApi;
var ObservableAPI_19 = require("./ObservableAPI");
var ObjectWebhookApi = (function () {
    function ObjectWebhookApi(configuration, requestFactory, responseProcessor) {
        this.api = new ObservableAPI_19.ObservableWebhookApi(configuration, requestFactory, responseProcessor);
    }
    ObjectWebhookApi.prototype.chooseWhichEventsToSubscribeTo = function (param, options) {
        if (param === void 0) { param = {}; }
        return this.api.chooseWhichEventsToSubscribeTo(param.apiToken, param.chooseWhichEventsToSubscribeToData, options).toPromise();
    };
    ObjectWebhookApi.prototype.retrieveListOfSubscribedEvents = function (param, options) {
        if (param === void 0) { param = {}; }
        return this.api.retrieveListOfSubscribedEvents(param.apiToken, param.displayAllWebhookCategories, options).toPromise();
    };
    return ObjectWebhookApi;
}());
exports.ObjectWebhookApi = ObjectWebhookApi;
//# sourceMappingURL=ObjectParamAPI.js.map