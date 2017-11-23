# WaziupApi.UsersApi

All URIs are relative to *http://127.0.0.1:8000/api/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**domainsDomainAuthPost**](UsersApi.md#domainsDomainAuthPost) | **POST** /domains/{domain}/auth/ | Get the access token for subsequent calls
[**domainsDomainUsersGet**](UsersApi.md#domainsDomainUsersGet) | **GET** /domains/{domain}/users/ | Get all users in a realm
[**domainsDomainUsersPost**](UsersApi.md#domainsDomainUsersPost) | **POST** /domains/{domain}/users/ | Create a new user in a realm
[**domainsDomainUsersSearchGet**](UsersApi.md#domainsDomainUsersSearchGet) | **GET** /domains/{domain}/users/search/ | Search users with specific criteria
[**domainsDomainUsersUseridDelete**](UsersApi.md#domainsDomainUsersUseridDelete) | **DELETE** /domains/{domain}/users/{userid} | 
[**domainsDomainUsersUseridGet**](UsersApi.md#domainsDomainUsersUseridGet) | **GET** /domains/{domain}/users/{userid} | 
[**domainsDomainUsersUseridPut**](UsersApi.md#domainsDomainUsersUseridPut) | **PUT** /domains/{domain}/users/{userid} | 


<a name="domainsDomainAuthPost"></a>
# **domainsDomainAuthPost**
> domainsDomainAuthPost(domain, credentials)

Get the access token for subsequent calls

### Example
```javascript
var WaziupApi = require('waziup_api');

var apiInstance = new WaziupApi.UsersApi();

var domain = "domain_example"; // String | 

var credentials = new WaziupApi.AuthBody(); // AuthBody | auth credentials


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.domainsDomainAuthPost(domain, credentials, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **domain** | **String**|  | 
 **credentials** | [**AuthBody**](AuthBody.md)| auth credentials | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="domainsDomainUsersGet"></a>
# **domainsDomainUsersGet**
> domainsDomainUsersGet(domain, )

Get all users in a realm

### Example
```javascript
var WaziupApi = require('waziup_api');
var defaultClient = WaziupApi.ApiClient.instance;

// Configure API key authorization: Bearer
var Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

var apiInstance = new WaziupApi.UsersApi();

var domain = "domain_example"; // String | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.domainsDomainUsersGet(domain, , callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **domain** | **String**|  | 

### Return type

null (empty response body)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="domainsDomainUsersPost"></a>
# **domainsDomainUsersPost**
> domainsDomainUsersPost(domain, user)

Create a new user in a realm

### Example
```javascript
var WaziupApi = require('waziup_api');
var defaultClient = WaziupApi.ApiClient.instance;

// Configure API key authorization: Bearer
var Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

var apiInstance = new WaziupApi.UsersApi();

var domain = "domain_example"; // String | 

var user = new WaziupApi.User(); // User | user object


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.domainsDomainUsersPost(domain, user, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **domain** | **String**|  | 
 **user** | [**User**](User.md)| user object | 

### Return type

null (empty response body)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="domainsDomainUsersSearchGet"></a>
# **domainsDomainUsersSearchGet**
> domainsDomainUsersSearchGet(domain, )

Search users with specific criteria

### Example
```javascript
var WaziupApi = require('waziup_api');
var defaultClient = WaziupApi.ApiClient.instance;

// Configure API key authorization: Bearer
var Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

var apiInstance = new WaziupApi.UsersApi();

var domain = "domain_example"; // String | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.domainsDomainUsersSearchGet(domain, , callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **domain** | **String**|  | 

### Return type

null (empty response body)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="domainsDomainUsersUseridDelete"></a>
# **domainsDomainUsersUseridDelete**
> domainsDomainUsersUseridDelete(domain, userid)



### Example
```javascript
var WaziupApi = require('waziup_api');
var defaultClient = WaziupApi.ApiClient.instance;

// Configure API key authorization: Bearer
var Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

var apiInstance = new WaziupApi.UsersApi();

var domain = "domain_example"; // String | 

var userid = "userid_example"; // String | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.domainsDomainUsersUseridDelete(domain, userid, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **domain** | **String**|  | 
 **userid** | **String**|  | 

### Return type

null (empty response body)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="domainsDomainUsersUseridGet"></a>
# **domainsDomainUsersUseridGet**
> domainsDomainUsersUseridGet(domain, userid)



### Example
```javascript
var WaziupApi = require('waziup_api');
var defaultClient = WaziupApi.ApiClient.instance;

// Configure API key authorization: Bearer
var Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

var apiInstance = new WaziupApi.UsersApi();

var domain = "domain_example"; // String | 

var userid = "userid_example"; // String | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.domainsDomainUsersUseridGet(domain, userid, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **domain** | **String**|  | 
 **userid** | **String**|  | 

### Return type

null (empty response body)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="domainsDomainUsersUseridPut"></a>
# **domainsDomainUsersUseridPut**
> domainsDomainUsersUseridPut(domain, useriddata)



### Example
```javascript
var WaziupApi = require('waziup_api');
var defaultClient = WaziupApi.ApiClient.instance;

// Configure API key authorization: Bearer
var Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

var apiInstance = new WaziupApi.UsersApi();

var domain = "domain_example"; // String | 

var userid = "userid_example"; // String | 

var data = new WaziupApi.UserUpdateBody(); // UserUpdateBody | user data to update


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.domainsDomainUsersUseridPut(domain, useriddata, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **domain** | **String**|  | 
 **userid** | **String**|  | 
 **data** | [**UserUpdateBody**](UserUpdateBody.md)| user data to update | 

### Return type

null (empty response body)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

