# WaziupApi.SocialsApi

All URIs are relative to *http://127.0.0.1:8000/api/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**domainsDomainSocialsBatchPost**](SocialsApi.md#domainsDomainSocialsBatchPost) | **POST** /domains/{domain}/socials/batch | post several message to social networks
[**domainsDomainSocialsGet**](SocialsApi.md#domainsDomainSocialsGet) | **GET** /domains/{domain}/socials | Get all messages sent
[**domainsDomainSocialsMsgIdDelete**](SocialsApi.md#domainsDomainSocialsMsgIdDelete) | **DELETE** /domains/{domain}/socials/{msg_id} | delete a message to social networks
[**domainsDomainSocialsMsgIdGet**](SocialsApi.md#domainsDomainSocialsMsgIdGet) | **GET** /domains/{domain}/socials/{msg_id} | Get one message
[**domainsDomainSocialsPost**](SocialsApi.md#domainsDomainSocialsPost) | **POST** /domains/{domain}/socials | post a message to social networks


<a name="domainsDomainSocialsBatchPost"></a>
# **domainsDomainSocialsBatchPost**
> domainsDomainSocialsBatchPost(domain, data)

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
apiInstance.domainsDomainSocialsBatchPost(domain, data, callback);
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

<a name="domainsDomainSocialsGet"></a>
# **domainsDomainSocialsGet**
> SocialMessage domainsDomainSocialsGet(domain, )

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
apiInstance.domainsDomainSocialsGet(domain, , callback);
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

<a name="domainsDomainSocialsMsgIdDelete"></a>
# **domainsDomainSocialsMsgIdDelete**
> domainsDomainSocialsMsgIdDelete(domain, msgId)

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
apiInstance.domainsDomainSocialsMsgIdDelete(domain, msgId, callback);
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

<a name="domainsDomainSocialsMsgIdGet"></a>
# **domainsDomainSocialsMsgIdGet**
> SocialMessage domainsDomainSocialsMsgIdGet(domain, msgId)

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
apiInstance.domainsDomainSocialsMsgIdGet(domain, msgId, callback);
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

<a name="domainsDomainSocialsPost"></a>
# **domainsDomainSocialsPost**
> domainsDomainSocialsPost(domain, data)

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
apiInstance.domainsDomainSocialsPost(domain, data, callback);
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

