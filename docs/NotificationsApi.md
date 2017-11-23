# WaziupApi.NotificationsApi

All URIs are relative to *http://127.0.0.1:8000/api/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**domainsDomainNotificationsGet**](NotificationsApi.md#domainsDomainNotificationsGet) | **GET** /domains/{domain}/notifications | Get all notifications
[**domainsDomainNotificationsNotifIdDelete**](NotificationsApi.md#domainsDomainNotificationsNotifIdDelete) | **DELETE** /domains/{domain}/notifications/{notif_id} | delete a message to social networks
[**domainsDomainNotificationsNotifIdGet**](NotificationsApi.md#domainsDomainNotificationsNotifIdGet) | **GET** /domains/{domain}/notifications/{notif_id} | Get one message
[**domainsDomainNotificationsPost**](NotificationsApi.md#domainsDomainNotificationsPost) | **POST** /domains/{domain}/notifications | post a message to social networks


<a name="domainsDomainNotificationsGet"></a>
# **domainsDomainNotificationsGet**
> Notification domainsDomainNotificationsGet(domain, )

Get all notifications

### Example
```javascript
var WaziupApi = require('waziup_api');
var defaultClient = WaziupApi.ApiClient.instance;

// Configure API key authorization: Bearer
var Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

var apiInstance = new WaziupApi.NotificationsApi();

var domain = "domain_example"; // String | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.domainsDomainNotificationsGet(domain, , callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **domain** | **String**|  | 

### Return type

[**Notification**](Notification.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="domainsDomainNotificationsNotifIdDelete"></a>
# **domainsDomainNotificationsNotifIdDelete**
> domainsDomainNotificationsNotifIdDelete(domain, notifId)

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

var apiInstance = new WaziupApi.NotificationsApi();

var domain = "domain_example"; // String | 

var notifId = "notifId_example"; // String | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.domainsDomainNotificationsNotifIdDelete(domain, notifId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **domain** | **String**|  | 
 **notifId** | **String**|  | 

### Return type

null (empty response body)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="domainsDomainNotificationsNotifIdGet"></a>
# **domainsDomainNotificationsNotifIdGet**
> Notification domainsDomainNotificationsNotifIdGet(domain, notifId)

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

var apiInstance = new WaziupApi.NotificationsApi();

var domain = "domain_example"; // String | 

var notifId = "notifId_example"; // String | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.domainsDomainNotificationsNotifIdGet(domain, notifId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **domain** | **String**|  | 
 **notifId** | **String**|  | 

### Return type

[**Notification**](Notification.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="domainsDomainNotificationsPost"></a>
# **domainsDomainNotificationsPost**
> domainsDomainNotificationsPost(domain, data)

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

var apiInstance = new WaziupApi.NotificationsApi();

var domain = "domain_example"; // String | 

var data = new WaziupApi.Notification(); // Notification | social message


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.domainsDomainNotificationsPost(domain, data, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **domain** | **String**|  | 
 **data** | [**Notification**](Notification.md)| social message | 

### Return type

null (empty response body)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

