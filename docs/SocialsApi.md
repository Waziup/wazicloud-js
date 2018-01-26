# WaziupApi.SocialsApi

All URIs are relative to *http://127.0.0.1:8000/api/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createSocialMsgsBatch**](SocialsApi.md#createSocialMsgsBatch) | **POST** /domains/{domain}/socials/batch | post several message to social networks
[**getSocialMsgs**](SocialsApi.md#getSocialMsgs) | **GET** /domains/{domain}/socials | Get all messages sent
[**deleteSocialsMsg**](SocialsApi.md#deleteSocialsMsg) | **DELETE** /domains/{domain}/socials/{msg_id} | delete a message to social networks
[**getSocialsMsg**](SocialsApi.md#getSocialsMsg) | **GET** /domains/{domain}/socials/{msg_id} | Get one message
[**createSocialMsg**](SocialsApi.md#createSocialMsg) | **POST** /domains/{domain}/socials | post a message to social networks


<a name="createSocialMsgsBatch"></a>
# **createSocialMsgsBatch**
> createSocialMsgsBatch(domain, data)

post several message to social networks

### Example
```javascript
var WaziupApi = require('waziup_api');
var defaultClient = WaziupApi.ApiClient.instance;

// Configure API key authorization: Bearer
var Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

var apiInstance = new WaziupApi.SocialsApi();

var domain = "domain_example"; // String | 

var data = new WaziupApi.SocialMessageBatch(); // SocialMessageBatch | social message


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.createSocialMsgsBatch(domain, data, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **domain** | **String**|  | 
 **data** | [**SocialMessageBatch**](SocialMessageBatch.md)| social message | 

### Return type

null (empty response body)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getSocialMsgs"></a>
# **getSocialMsgs**
> SocialMessage getSocialMsgs(domain, )

Get all messages sent

### Example
```javascript
var WaziupApi = require('waziup_api');
var defaultClient = WaziupApi.ApiClient.instance;

// Configure API key authorization: Bearer
var Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

var apiInstance = new WaziupApi.SocialsApi();

var domain = "domain_example"; // String | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getSocialMsgs(domain, , callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **domain** | **String**|  | 

### Return type

[**SocialMessage**](SocialMessage.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="deleteSocialsMsg"></a>
# **deleteSocialsMsg**
> deleteSocialsMsg(domain, msgId)

delete a message to social networks

### Example
```javascript
var WaziupApi = require('waziup_api');
var defaultClient = WaziupApi.ApiClient.instance;

// Configure API key authorization: Bearer
var Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

var apiInstance = new WaziupApi.SocialsApi();

var domain = "domain_example"; // String | 

var msgId = "msgId_example"; // String | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.deleteSocialsMsg(domain, msgId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **domain** | **String**|  | 
 **msgId** | **String**|  | 

### Return type

null (empty response body)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getSocialsMsg"></a>
# **getSocialsMsg**
> SocialMessage getSocialsMsg(domain, msgId)

Get one message

### Example
```javascript
var WaziupApi = require('waziup_api');
var defaultClient = WaziupApi.ApiClient.instance;

// Configure API key authorization: Bearer
var Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

var apiInstance = new WaziupApi.SocialsApi();

var domain = "domain_example"; // String | 

var msgId = "msgId_example"; // String | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getSocialsMsg(domain, msgId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **domain** | **String**|  | 
 **msgId** | **String**|  | 

### Return type

[**SocialMessage**](SocialMessage.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="createSocialMsg"></a>
# **createSocialMsg**
> createSocialMsg(domain, data)

post a message to social networks

### Example
```javascript
var WaziupApi = require('waziup_api');
var defaultClient = WaziupApi.ApiClient.instance;

// Configure API key authorization: Bearer
var Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

var apiInstance = new WaziupApi.SocialsApi();

var domain = "domain_example"; // String | 

var data = new WaziupApi.SocialMessage(); // SocialMessage | social message


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.createSocialMsg(domain, data, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **domain** | **String**|  | 
 **data** | [**SocialMessage**](SocialMessage.md)| social message | 

### Return type

null (empty response body)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

