import { BaseAPIRequestFactory } from './baseapi';
import { Configuration } from '../configuration';
import { RequestContext, ResponseContext } from '../http/http';
import { BanFromChannelsWithCustomChannelTypesData } from '../models/BanFromChannelsWithCustomChannelTypesData';
import { BlockUserData } from '../models/BlockUserData';
import { BlockUserResponse } from '../models/BlockUserResponse';
import { GcBanUserData } from '../models/GcBanUserData';
import { GcBanUserResponse } from '../models/GcBanUserResponse';
import { GcFreezeChannelData } from '../models/GcFreezeChannelData';
import { GcListBannedUsersResponse } from '../models/GcListBannedUsersResponse';
import { GcListMutedUsersResponse } from '../models/GcListMutedUsersResponse';
import { GcMuteUserData } from '../models/GcMuteUserData';
import { GcUpdateBanByIdData } from '../models/GcUpdateBanByIdData';
import { GcUpdateBanByIdResponse } from '../models/GcUpdateBanByIdResponse';
import { GcViewBanByIdResponse } from '../models/GcViewBanByIdResponse';
import { GcViewMuteByIdResponse } from '../models/GcViewMuteByIdResponse';
import { ListBannedChannelsResponse } from '../models/ListBannedChannelsResponse';
import { ListBlockedUsersResponse } from '../models/ListBlockedUsersResponse';
import { ListMutedChannelsResponse } from '../models/ListMutedChannelsResponse';
import { MuteInChannelsWithCustomChannelTypesData } from '../models/MuteInChannelsWithCustomChannelTypesData';
import { OcBanUserData } from '../models/OcBanUserData';
import { OcBanUserResponse } from '../models/OcBanUserResponse';
import { OcDeleteChannelByUrl200Response } from '../models/OcDeleteChannelByUrl200Response';
import { OcFreezeChannelData } from '../models/OcFreezeChannelData';
import { OcListBannedUsersResponse } from '../models/OcListBannedUsersResponse';
import { OcListMutedUsersResponse } from '../models/OcListMutedUsersResponse';
import { OcMuteUserData } from '../models/OcMuteUserData';
import { OcUpdateBanByIdData } from '../models/OcUpdateBanByIdData';
import { OcUpdateBanByIdResponse } from '../models/OcUpdateBanByIdResponse';
import { OcViewBanByIdResponse } from '../models/OcViewBanByIdResponse';
import { OcViewMuteByIdResponse } from '../models/OcViewMuteByIdResponse';
import { SendBirdGroupChannel } from '../models/SendBirdGroupChannel';
import { SendBirdOpenChannel } from '../models/SendBirdOpenChannel';
export declare class ModerationApiRequestFactory extends BaseAPIRequestFactory {
    banFromChannelsWithCustomChannelTypes(userId: string, apiToken?: string, banFromChannelsWithCustomChannelTypesData?: BanFromChannelsWithCustomChannelTypesData, _options?: Configuration): Promise<RequestContext>;
    blockUser(userId: string, apiToken?: string, blockUserData?: BlockUserData, _options?: Configuration): Promise<RequestContext>;
    gcBanUser(channelUrl: string, apiToken?: string, gcBanUserData?: GcBanUserData, _options?: Configuration): Promise<RequestContext>;
    gcFreezeChannel(channelUrl: string, apiToken?: string, gcFreezeChannelData?: GcFreezeChannelData, _options?: Configuration): Promise<RequestContext>;
    gcListBannedUsers(channelUrl: string, apiToken?: string, token?: string, limit?: number, _options?: Configuration): Promise<RequestContext>;
    gcListMutedUsers(channelUrl: string, apiToken?: string, token?: string, limit?: number, _options?: Configuration): Promise<RequestContext>;
    gcMuteUser(channelUrl: string, apiToken?: string, gcMuteUserData?: GcMuteUserData, _options?: Configuration): Promise<RequestContext>;
    gcUnbanUserById(channelUrl: string, bannedUserId: string, apiToken?: string, _options?: Configuration): Promise<RequestContext>;
    gcUnmuteUserById(channelUrl: string, mutedUserId: string, apiToken?: string, _options?: Configuration): Promise<RequestContext>;
    gcUpdateBanById(channelUrl: string, bannedUserId: string, apiToken?: string, gcUpdateBanByIdData?: GcUpdateBanByIdData, _options?: Configuration): Promise<RequestContext>;
    gcViewBanById(channelUrl: string, bannedUserId: string, apiToken?: string, _options?: Configuration): Promise<RequestContext>;
    gcViewMuteById(channelUrl: string, mutedUserId: string, apiToken?: string, _options?: Configuration): Promise<RequestContext>;
    listBannedChannels(userId: string, apiToken?: string, token?: string, limit?: number, _options?: Configuration): Promise<RequestContext>;
    listBlockedUsers(userId: string, apiToken?: string, token?: string, limit?: number, userIds?: string, metadatakey?: string, metadatavaluesIn?: string, _options?: Configuration): Promise<RequestContext>;
    listMutedChannels(userId: string, apiToken?: string, token?: string, limit?: number, _options?: Configuration): Promise<RequestContext>;
    muteInChannelsWithCustomChannelTypes(userId: string, apiToken?: string, muteInChannelsWithCustomChannelTypesData?: MuteInChannelsWithCustomChannelTypesData, _options?: Configuration): Promise<RequestContext>;
    ocBanUser(channelUrl: string, apiToken?: string, ocBanUserData?: OcBanUserData, _options?: Configuration): Promise<RequestContext>;
    ocFreezeChannel(channelUrl: string, apiToken?: string, ocFreezeChannelData?: OcFreezeChannelData, _options?: Configuration): Promise<RequestContext>;
    ocListBannedUsers(channelUrl: string, apiToken?: string, token?: string, limit?: number, _options?: Configuration): Promise<RequestContext>;
    ocListMutedUsers(channelUrl: string, apiToken?: string, token?: string, limit?: number, _options?: Configuration): Promise<RequestContext>;
    ocMuteUser(channelUrl: string, apiToken?: string, ocMuteUserData?: OcMuteUserData, _options?: Configuration): Promise<RequestContext>;
    ocUnbanUserById(channelUrl: string, bannedUserId: string, apiToken?: string, _options?: Configuration): Promise<RequestContext>;
    ocUnmuteUserById(channelUrl: string, mutedUserId: string, apiToken?: string, _options?: Configuration): Promise<RequestContext>;
    ocUpdateBanById(channelUrl: string, bannedUserId: string, apiToken?: string, ocUpdateBanByIdData?: OcUpdateBanByIdData, _options?: Configuration): Promise<RequestContext>;
    ocViewBanById(channelUrl: string, bannedUserId: string, apiToken?: string, _options?: Configuration): Promise<RequestContext>;
    ocViewMuteById(channelUrl: string, mutedUserId: string, apiToken?: string, _options?: Configuration): Promise<RequestContext>;
    unblockUserById(userId: string, targetId: string, apiToken?: string, _options?: Configuration): Promise<RequestContext>;
}
export declare class ModerationApiResponseProcessor {
    banFromChannelsWithCustomChannelTypes(response: ResponseContext): Promise<any>;
    blockUser(response: ResponseContext): Promise<BlockUserResponse>;
    gcBanUser(response: ResponseContext): Promise<GcBanUserResponse>;
    gcFreezeChannel(response: ResponseContext): Promise<SendBirdGroupChannel>;
    gcListBannedUsers(response: ResponseContext): Promise<GcListBannedUsersResponse>;
    gcListMutedUsers(response: ResponseContext): Promise<GcListMutedUsersResponse>;
    gcMuteUser(response: ResponseContext): Promise<SendBirdGroupChannel>;
    gcUnbanUserById(response: ResponseContext): Promise<OcDeleteChannelByUrl200Response>;
    gcUnmuteUserById(response: ResponseContext): Promise<OcDeleteChannelByUrl200Response>;
    gcUpdateBanById(response: ResponseContext): Promise<GcUpdateBanByIdResponse>;
    gcViewBanById(response: ResponseContext): Promise<GcViewBanByIdResponse>;
    gcViewMuteById(response: ResponseContext): Promise<GcViewMuteByIdResponse>;
    listBannedChannels(response: ResponseContext): Promise<ListBannedChannelsResponse>;
    listBlockedUsers(response: ResponseContext): Promise<ListBlockedUsersResponse>;
    listMutedChannels(response: ResponseContext): Promise<ListMutedChannelsResponse>;
    muteInChannelsWithCustomChannelTypes(response: ResponseContext): Promise<any>;
    ocBanUser(response: ResponseContext): Promise<OcBanUserResponse>;
    ocFreezeChannel(response: ResponseContext): Promise<SendBirdOpenChannel>;
    ocListBannedUsers(response: ResponseContext): Promise<OcListBannedUsersResponse>;
    ocListMutedUsers(response: ResponseContext): Promise<OcListMutedUsersResponse>;
    ocMuteUser(response: ResponseContext): Promise<SendBirdOpenChannel>;
    ocUnbanUserById(response: ResponseContext): Promise<OcDeleteChannelByUrl200Response>;
    ocUnmuteUserById(response: ResponseContext): Promise<OcDeleteChannelByUrl200Response>;
    ocUpdateBanById(response: ResponseContext): Promise<OcUpdateBanByIdResponse>;
    ocViewBanById(response: ResponseContext): Promise<OcViewBanByIdResponse>;
    ocViewMuteById(response: ResponseContext): Promise<OcViewMuteByIdResponse>;
    unblockUserById(response: ResponseContext): Promise<any>;
}