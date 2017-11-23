# WaziupApi.SpecificationApi

All URIs are relative to *http://127.0.0.1:8000/api/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**specGet**](SpecificationApi.md#specGet) | **GET** /spec | 


<a name="specGet"></a>
# **specGet**
> specGet()



### Example
```javascript
var WaziupApi = require('waziup_api');

var apiInstance = new WaziupApi.SpecificationApi();

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.specGet(callback);
```

### Parameters
This endpoint does not need any parameter.

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

