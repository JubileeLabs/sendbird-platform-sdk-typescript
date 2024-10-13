# Sendbird.PinAMessageApi

All URIs are relative to *https://api-APP_ID.sendbird.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**v3ChannelTypeChannelUrlMessagesMessageIdPinPost**](PinAMessageApi.md#v3ChannelTypeChannelUrlMessagesMessageIdPinPost) | **POST** /v3/{channel_type}/{channel_url}/messages/{message_id}/pin | Add a new pin


# **v3ChannelTypeChannelUrlMessagesMessageIdPinPost**
> SendBirdChannelResponse v3ChannelTypeChannelUrlMessagesMessageIdPinPost()

## Add a new pin Pin a message to its channel. -----------------------------  

### Example


```typescript
import { Sendbird } from 'sendbird-platform-sdk';
import * as fs from 'fs';

const configuration = Sendbird.createConfiguration();
const apiInstance = new Sendbird.PinAMessageApi(configuration);

let body:Sendbird.PinAMessageApiV3ChannelTypeChannelUrlMessagesMessageIdPinPostRequest = {
  // string
  channelType: "channel_type_example",
  // string
  channelUrl: "channel_url_example",
  // number
  messageId: 1,
  // string (optional)
  apiToken: "Api-Token_example",
};

apiInstance.v3ChannelTypeChannelUrlMessagesMessageIdPinPost(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **channelType** | [**string**] |  | defaults to undefined
 **channelUrl** | [**string**] |  | defaults to undefined
 **messageId** | [**number**] |  | defaults to undefined
 **apiToken** | [**string**] |  | (optional) defaults to undefined


### Return type

**SendBirdChannelResponse**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful response |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

