# WaziupApi.HistoricalDataApi

All URIs are relative to *http://127.0.0.1:8000/api/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**domainsDomainHistoryGet**](HistoricalDataApi.md#domainsDomainHistoryGet) | **GET** /domains/{domain}/history | Get Historical data for analysis


<a name="domainsDomainHistoryGet"></a>
# **domainsDomainHistoryGet**
> HistoricalValue domainsDomainHistoryGet(domain, )

Get Historical data for analysis

### Example
```javascript
var WaziupApi = require('waziup_api');
var defaultClient = WaziupApi.ApiClient.instance;

// Configure API key authorization: Bearer
var Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

var apiInstance = new WaziupApi.HistoricalDataApi();

var domain = "domain_example"; // String | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.domainsDomainHistoryGet(domain, , callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **domain** | **String**|  | 

### Return type

[**HistoricalValue**](HistoricalValue.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

