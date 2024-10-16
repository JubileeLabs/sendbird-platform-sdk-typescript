import { BaseAPIRequestFactory } from './baseapi';
import { Configuration } from '../configuration';
import { RequestContext, ResponseContext } from '../http/http';
import { AddEmojiCategoriesResponse } from '../models/AddEmojiCategoriesResponse';
import { AddEmojisData } from '../models/AddEmojisData';
import { AddEmojisResponse } from '../models/AddEmojisResponse';
import { AddExtraDataToMessageData } from '../models/AddExtraDataToMessageData';
import { AddExtraDataToMessageResponse } from '../models/AddExtraDataToMessageResponse';
import { AddReactionToAMessageData } from '../models/AddReactionToAMessageData';
import { AddReactionToAMessageResponse } from '../models/AddReactionToAMessageResponse';
import { EnableReactionsData } from '../models/EnableReactionsData';
import { EnableReactionsResponse } from '../models/EnableReactionsResponse';
import { GcMarkAllMessagesAsDeliveredData } from '../models/GcMarkAllMessagesAsDeliveredData';
import { GcMarkAllMessagesAsDeliveredResponse } from '../models/GcMarkAllMessagesAsDeliveredResponse';
import { GcMarkAllMessagesAsReadData } from '../models/GcMarkAllMessagesAsReadData';
import { GcViewNumberOfEachMembersUnreadMessagesResponse } from '../models/GcViewNumberOfEachMembersUnreadMessagesResponse';
import { ListAllEmojisAndEmojiCategoriesResponse } from '../models/ListAllEmojisAndEmojiCategoriesResponse';
import { ListAnnouncementsResponse } from '../models/ListAnnouncementsResponse';
import { ListEmojisResponse } from '../models/ListEmojisResponse';
import { ListMessagesResponse } from '../models/ListMessagesResponse';
import { ListReactionsOfMessageResponse } from '../models/ListReactionsOfMessageResponse';
import { RemoveReactionFromAMessageResponse } from '../models/RemoveReactionFromAMessageResponse';
import { SendBirdEmoji } from '../models/SendBirdEmoji';
import { SendBirdEmojiCategory } from '../models/SendBirdEmojiCategory';
import { SendBirdMessageResponse } from '../models/SendBirdMessageResponse';
import { SendMessageData } from '../models/SendMessageData';
import { TranslateMessageIntoOtherLanguagesData } from '../models/TranslateMessageIntoOtherLanguagesData';
import { UpdateEmojiCategoryUrlByIdData } from '../models/UpdateEmojiCategoryUrlByIdData';
import { UpdateEmojiUrlByKeyData } from '../models/UpdateEmojiUrlByKeyData';
import { UpdateExtraDataInMessageData } from '../models/UpdateExtraDataInMessageData';
import { UpdateExtraDataInMessageResponse } from '../models/UpdateExtraDataInMessageResponse';
import { UpdateMessageByIdData } from '../models/UpdateMessageByIdData';
import { UseDefaultEmojisData } from '../models/UseDefaultEmojisData';
import { UseDefaultEmojisResponse } from '../models/UseDefaultEmojisResponse';
import { ViewTotalNumberOfMessagesInChannelResponse } from '../models/ViewTotalNumberOfMessagesInChannelResponse';
export declare class MessageApiRequestFactory extends BaseAPIRequestFactory {
    addEmojiCategories(apiToken?: string, body?: any, _options?: Configuration): Promise<RequestContext>;
    addEmojis(apiToken?: string, addEmojisData?: AddEmojisData, _options?: Configuration): Promise<RequestContext>;
    addExtraDataToMessage(channelType: string, channelUrl: string, messageId: string, apiToken?: string, addExtraDataToMessageData?: AddExtraDataToMessageData, _options?: Configuration): Promise<RequestContext>;
    addReactionToAMessage(channelType: string, channelUrl: string, messageId: string, apiToken?: string, addReactionToAMessageData?: AddReactionToAMessageData, _options?: Configuration): Promise<RequestContext>;
    deleteEmojiByKey(emojiKey: string, apiToken?: string, _options?: Configuration): Promise<RequestContext>;
    deleteEmojiCategoryById(emojiCategoryId: string, apiToken?: string, _options?: Configuration): Promise<RequestContext>;
    deleteMessageById(channelType: string, channelUrl: string, messageId: string, apiToken?: string, _options?: Configuration): Promise<RequestContext>;
    enableReactions(apiToken?: string, enableReactionsData?: EnableReactionsData, _options?: Configuration): Promise<RequestContext>;
    gcMarkAllMessagesAsDelivered(channelUrl: string, apiToken?: string, gcMarkAllMessagesAsDeliveredData?: GcMarkAllMessagesAsDeliveredData, _options?: Configuration): Promise<RequestContext>;
    gcMarkAllMessagesAsRead(channelUrl: string, apiToken?: string, gcMarkAllMessagesAsReadData?: GcMarkAllMessagesAsReadData, _options?: Configuration): Promise<RequestContext>;
    gcViewNumberOfEachMembersUnreadMessages(channelUrl: string, apiToken?: string, userIds?: Array<string>, _options?: Configuration): Promise<RequestContext>;
    getEmojiByKey(emojiKey: string, apiToken?: string, _options?: Configuration): Promise<RequestContext>;
    getEmojiCategoryById(emojiCategoryId: string, apiToken?: string, _options?: Configuration): Promise<RequestContext>;
    listAllEmojisAndEmojiCategories(apiToken?: string, _options?: Configuration): Promise<RequestContext>;
    listAnnouncements(apiToken?: string, token?: string, limit?: number, order?: string, status?: string, announcementGroup?: string, _options?: Configuration): Promise<RequestContext>;
    listEmojis(apiToken?: string, _options?: Configuration): Promise<RequestContext>;
    listMessages(channelType: string, channelUrl: string, apiToken?: string, messageTs?: string, messageId?: number, prevLimit?: number, nextLimit?: number, include?: boolean, reverse?: boolean, senderId?: string, senderIds?: string, operatorFilter?: string, customTypes?: string, messageType?: string, includingRemoved?: boolean, includeReactions?: boolean, includeReplyType?: 'NONE' | 'ALL' | 'ONLY_REPLY_TO_CHANNEL', includeParentMessageInfo?: boolean, withSortedMetaArray?: boolean, showSubchannelMessagesOnly?: boolean, userId?: string, customType?: string, withMetaArray?: boolean, _options?: Configuration): Promise<RequestContext>;
    listReactionsOfMessage(channelType: string, channelUrl: string, messageId: string, apiToken?: string, listUsers?: boolean, _options?: Configuration): Promise<RequestContext>;
    migrateMessagesByUrl(targetChannelUrl: string, apiToken?: string, body?: any, _options?: Configuration): Promise<RequestContext>;
    removeExtraDataFromMessage(channelType: string, channelUrl: string, messageId: string, apiToken?: string, keys?: Array<string>, _options?: Configuration): Promise<RequestContext>;
    removeReactionFromAMessage(channelType: string, channelUrl: string, messageId: string, apiToken?: string, userId?: string, reaction?: string, _options?: Configuration): Promise<RequestContext>;
    sendMessage(channelType: string, channelUrl: string, apiToken?: string, sendMessageData?: SendMessageData, _options?: Configuration): Promise<RequestContext>;
    translateMessageIntoOtherLanguages(channelType: string, channelUrl: string, messageId: string, apiToken?: string, translateMessageIntoOtherLanguagesData?: TranslateMessageIntoOtherLanguagesData, _options?: Configuration): Promise<RequestContext>;
    updateEmojiCategoryUrlById(emojiCategoryId: string, apiToken?: string, updateEmojiCategoryUrlByIdData?: UpdateEmojiCategoryUrlByIdData, _options?: Configuration): Promise<RequestContext>;
    updateEmojiUrlByKey(emojiKey: string, apiToken?: string, updateEmojiUrlByKeyData?: UpdateEmojiUrlByKeyData, _options?: Configuration): Promise<RequestContext>;
    updateExtraDataInMessage(channelType: string, channelUrl: string, messageId: string, apiToken?: string, updateExtraDataInMessageData?: UpdateExtraDataInMessageData, _options?: Configuration): Promise<RequestContext>;
    updateMessageById(channelType: string, channelUrl: string, messageId: string, apiToken?: string, updateMessageByIdData?: UpdateMessageByIdData, _options?: Configuration): Promise<RequestContext>;
    useDefaultEmojis(apiToken?: string, useDefaultEmojisData?: UseDefaultEmojisData, _options?: Configuration): Promise<RequestContext>;
    viewMessageById(channelType: string, channelUrl: string, messageId: string, apiToken?: string, withSortedMetaArray?: boolean, withMetaArray?: boolean, includeParentMessageInfo?: boolean, _options?: Configuration): Promise<RequestContext>;
    viewTotalNumberOfMessagesInChannel(channelType: string, channelUrl: string, apiToken?: string, _options?: Configuration): Promise<RequestContext>;
}
export declare class MessageApiResponseProcessor {
    addEmojiCategories(response: ResponseContext): Promise<AddEmojiCategoriesResponse>;
    addEmojis(response: ResponseContext): Promise<AddEmojisResponse>;
    addExtraDataToMessage(response: ResponseContext): Promise<AddExtraDataToMessageResponse>;
    addReactionToAMessage(response: ResponseContext): Promise<AddReactionToAMessageResponse>;
    deleteEmojiByKey(response: ResponseContext): Promise<void>;
    deleteEmojiCategoryById(response: ResponseContext): Promise<any>;
    deleteMessageById(response: ResponseContext): Promise<any>;
    enableReactions(response: ResponseContext): Promise<EnableReactionsResponse>;
    gcMarkAllMessagesAsDelivered(response: ResponseContext): Promise<GcMarkAllMessagesAsDeliveredResponse>;
    gcMarkAllMessagesAsRead(response: ResponseContext): Promise<any>;
    gcViewNumberOfEachMembersUnreadMessages(response: ResponseContext): Promise<GcViewNumberOfEachMembersUnreadMessagesResponse>;
    getEmojiByKey(response: ResponseContext): Promise<SendBirdEmoji>;
    getEmojiCategoryById(response: ResponseContext): Promise<SendBirdEmojiCategory>;
    listAllEmojisAndEmojiCategories(response: ResponseContext): Promise<ListAllEmojisAndEmojiCategoriesResponse>;
    listAnnouncements(response: ResponseContext): Promise<ListAnnouncementsResponse>;
    listEmojis(response: ResponseContext): Promise<ListEmojisResponse>;
    listMessages(response: ResponseContext): Promise<ListMessagesResponse>;
    listReactionsOfMessage(response: ResponseContext): Promise<ListReactionsOfMessageResponse>;
    migrateMessagesByUrl(response: ResponseContext): Promise<void>;
    removeExtraDataFromMessage(response: ResponseContext): Promise<any>;
    removeReactionFromAMessage(response: ResponseContext): Promise<RemoveReactionFromAMessageResponse>;
    sendMessage(response: ResponseContext): Promise<SendBirdMessageResponse>;
    translateMessageIntoOtherLanguages(response: ResponseContext): Promise<SendBirdMessageResponse>;
    updateEmojiCategoryUrlById(response: ResponseContext): Promise<SendBirdEmojiCategory>;
    updateEmojiUrlByKey(response: ResponseContext): Promise<SendBirdEmoji>;
    updateExtraDataInMessage(response: ResponseContext): Promise<UpdateExtraDataInMessageResponse>;
    updateMessageById(response: ResponseContext): Promise<SendBirdMessageResponse>;
    useDefaultEmojis(response: ResponseContext): Promise<UseDefaultEmojisResponse>;
    viewMessageById(response: ResponseContext): Promise<SendBirdMessageResponse>;
    viewTotalNumberOfMessagesInChannel(response: ResponseContext): Promise<ViewTotalNumberOfMessagesInChannelResponse>;
}
