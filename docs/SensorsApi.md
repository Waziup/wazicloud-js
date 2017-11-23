# WaziupApi.SensorsApi

All URIs are relative to *http://127.0.0.1:8000/api/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**domainsDomainSensorsGet**](SensorsApi.md#domainsDomainSensorsGet) | **GET** /domains/{domain}/sensors | Sensor data
[**domainsDomainSensorsPost**](SensorsApi.md#domainsDomainSensorsPost) | **POST** /domains/{domain}/sensors | Create sensors
[**domainsDomainSensorsSensorIdDelete**](SensorsApi.md#domainsDomainSensorsSensorIdDelete) | **DELETE** /domains/{domain}/sensors/{sensor_id} | Delete sensor
[**domainsDomainSensorsSensorIdGet**](SensorsApi.md#domainsDomainSensorsSensorIdGet) | **GET** /domains/{domain}/sensors/{sensor_id} | get sensor
[**domainsDomainSensorsSensorIdLocationPut**](SensorsApi.md#domainsDomainSensorsSensorIdLocationPut) | **PUT** /domains/{domain}/sensors/{sensor_id}/location | insert location
[**domainsDomainSensorsSensorIdMeasurementsGet**](SensorsApi.md#domainsDomainSensorsSensorIdMeasurementsGet) | **GET** /domains/{domain}/sensors/{sensor_id}/measurements | get measurements
[**domainsDomainSensorsSensorIdMeasurementsMeasurementIdDelete**](SensorsApi.md#domainsDomainSensorsSensorIdMeasurementsMeasurementIdDelete) | **DELETE** /domains/{domain}/sensors/{sensor_id}/measurements/{measurement_id} | Delete measurement
[**domainsDomainSensorsSensorIdMeasurementsMeasurementIdDimensionPut**](SensorsApi.md#domainsDomainSensorsSensorIdMeasurementsMeasurementIdDimensionPut) | **PUT** /domains/{domain}/sensors/{sensor_id}/measurements/{measurement_id}/dimension | put measurement dimension
[**domainsDomainSensorsSensorIdMeasurementsMeasurementIdGet**](SensorsApi.md#domainsDomainSensorsSensorIdMeasurementsMeasurementIdGet) | **GET** /domains/{domain}/sensors/{sensor_id}/measurements/{measurement_id} | get measurement
[**domainsDomainSensorsSensorIdMeasurementsMeasurementIdNamePut**](SensorsApi.md#domainsDomainSensorsSensorIdMeasurementsMeasurementIdNamePut) | **PUT** /domains/{domain}/sensors/{sensor_id}/measurements/{measurement_id}/name | put measurement name
[**domainsDomainSensorsSensorIdMeasurementsMeasurementIdSensorKindPut**](SensorsApi.md#domainsDomainSensorsSensorIdMeasurementsMeasurementIdSensorKindPut) | **PUT** /domains/{domain}/sensors/{sensor_id}/measurements/{measurement_id}/sensor_kind | insert sensor kind
[**domainsDomainSensorsSensorIdMeasurementsMeasurementIdUnitPut**](SensorsApi.md#domainsDomainSensorsSensorIdMeasurementsMeasurementIdUnitPut) | **PUT** /domains/{domain}/sensors/{sensor_id}/measurements/{measurement_id}/unit | put measurement unit
[**domainsDomainSensorsSensorIdMeasurementsMeasurementIdValuesGet**](SensorsApi.md#domainsDomainSensorsSensorIdMeasurementsMeasurementIdValuesGet) | **GET** /domains/{domain}/sensors/{sensor_id}/measurements/{measurement_id}/values | get measurement values
[**domainsDomainSensorsSensorIdMeasurementsMeasurementIdValuesPost**](SensorsApi.md#domainsDomainSensorsSensorIdMeasurementsMeasurementIdValuesPost) | **POST** /domains/{domain}/sensors/{sensor_id}/measurements/{measurement_id}/values | Create new datapoint
[**domainsDomainSensorsSensorIdMeasurementsPost**](SensorsApi.md#domainsDomainSensorsSensorIdMeasurementsPost) | **POST** /domains/{domain}/sensors/{sensor_id}/measurements | insert new measurement
[**domainsDomainSensorsSensorIdNamePut**](SensorsApi.md#domainsDomainSensorsSensorIdNamePut) | **PUT** /domains/{domain}/sensors/{sensor_id}/name | insert name
[**domainsDomainSensorsSensorIdOwnerPut**](SensorsApi.md#domainsDomainSensorsSensorIdOwnerPut) | **PUT** /domains/{domain}/sensors/{sensor_id}/owner | insert owner


<a name="domainsDomainSensorsGet"></a>
# **domainsDomainSensorsGet**
> [Sensor] domainsDomainSensorsGet(domain, , opts)

Sensor data



### Example
```javascript
var WaziupApi = require('waziup_api');
var defaultClient = WaziupApi.ApiClient.instance;

// Configure API key authorization: Bearer
var Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

var apiInstance = new WaziupApi.SensorsApi();

var domain = "domain_example"; // String | 

var opts = { 
  'q': "q_example" // String | filter the results
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.domainsDomainSensorsGet(domain, , opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **domain** | **String**|  | 
 **q** | **String**| filter the results | [optional] 

### Return type

[**[Sensor]**](Sensor.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="domainsDomainSensorsPost"></a>
# **domainsDomainSensorsPost**
> domainsDomainSensorsPost(body, domain, )

Create sensors

Endpoint to create sensing devices.

### Example
```javascript
var WaziupApi = require('waziup_api');
var defaultClient = WaziupApi.ApiClient.instance;

// Configure API key authorization: Bearer
var Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

var apiInstance = new WaziupApi.SensorsApi();

var body = new WaziupApi.Sensor(); // Sensor | 

var domain = "domain_example"; // String | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.domainsDomainSensorsPost(body, domain, , callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**Sensor**](Sensor.md)|  | 
 **domain** | **String**|  | 

### Return type

null (empty response body)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="domainsDomainSensorsSensorIdDelete"></a>
# **domainsDomainSensorsSensorIdDelete**
> domainsDomainSensorsSensorIdDelete(domain, sensorId, )

Delete sensor



### Example
```javascript
var WaziupApi = require('waziup_api');
var defaultClient = WaziupApi.ApiClient.instance;

// Configure API key authorization: Bearer
var Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

var apiInstance = new WaziupApi.SensorsApi();

var domain = "domain_example"; // String | 

var sensorId = "sensorId_example"; // String | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.domainsDomainSensorsSensorIdDelete(domain, sensorId, , callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **domain** | **String**|  | 
 **sensorId** | **String**|  | 

### Return type

null (empty response body)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="domainsDomainSensorsSensorIdGet"></a>
# **domainsDomainSensorsSensorIdGet**
> Sensor domainsDomainSensorsSensorIdGet(domain, sensorId, )

get sensor



### Example
```javascript
var WaziupApi = require('waziup_api');
var defaultClient = WaziupApi.ApiClient.instance;

// Configure API key authorization: Bearer
var Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

var apiInstance = new WaziupApi.SensorsApi();

var domain = "domain_example"; // String | 

var sensorId = "sensorId_example"; // String | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.domainsDomainSensorsSensorIdGet(domain, sensorId, , callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **domain** | **String**|  | 
 **sensorId** | **String**|  | 

### Return type

[**Sensor**](Sensor.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="domainsDomainSensorsSensorIdLocationPut"></a>
# **domainsDomainSensorsSensorIdLocationPut**
> domainsDomainSensorsSensorIdLocationPut(domain, sensorId, body)

insert location

### Example
```javascript
var WaziupApi = require('waziup_api');
var defaultClient = WaziupApi.ApiClient.instance;

// Configure API key authorization: Bearer
var Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

var apiInstance = new WaziupApi.SensorsApi();

var domain = "domain_example"; // String | 

var sensorId = "sensorId_example"; // String | 

var body = new WaziupApi.Location(); // Location | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.domainsDomainSensorsSensorIdLocationPut(domain, sensorId, body, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **domain** | **String**|  | 
 **sensorId** | **String**|  | 
 **body** | [**Location**](Location.md)|  | 

### Return type

null (empty response body)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="domainsDomainSensorsSensorIdMeasurementsGet"></a>
# **domainsDomainSensorsSensorIdMeasurementsGet**
> [Measurement] domainsDomainSensorsSensorIdMeasurementsGet(domain, sensorId, )

get measurements

### Example
```javascript
var WaziupApi = require('waziup_api');
var defaultClient = WaziupApi.ApiClient.instance;

// Configure API key authorization: Bearer
var Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

var apiInstance = new WaziupApi.SensorsApi();

var domain = "domain_example"; // String | 

var sensorId = "sensorId_example"; // String | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.domainsDomainSensorsSensorIdMeasurementsGet(domain, sensorId, , callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **domain** | **String**|  | 
 **sensorId** | **String**|  | 

### Return type

[**[Measurement]**](Measurement.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="domainsDomainSensorsSensorIdMeasurementsMeasurementIdDelete"></a>
# **domainsDomainSensorsSensorIdMeasurementsMeasurementIdDelete**
> domainsDomainSensorsSensorIdMeasurementsMeasurementIdDelete(domain, sensorId, measurementId, )

Delete measurement



### Example
```javascript
var WaziupApi = require('waziup_api');
var defaultClient = WaziupApi.ApiClient.instance;

// Configure API key authorization: Bearer
var Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

var apiInstance = new WaziupApi.SensorsApi();

var domain = "domain_example"; // String | 

var sensorId = "sensorId_example"; // String | 

var measurementId = "measurementId_example"; // String | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.domainsDomainSensorsSensorIdMeasurementsMeasurementIdDelete(domain, sensorId, measurementId, , callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **domain** | **String**|  | 
 **sensorId** | **String**|  | 
 **measurementId** | **String**|  | 

### Return type

null (empty response body)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="domainsDomainSensorsSensorIdMeasurementsMeasurementIdDimensionPut"></a>
# **domainsDomainSensorsSensorIdMeasurementsMeasurementIdDimensionPut**
> domainsDomainSensorsSensorIdMeasurementsMeasurementIdDimensionPut(domain, sensorId, measurementId, body)

put measurement dimension

### Example
```javascript
var WaziupApi = require('waziup_api');
var defaultClient = WaziupApi.ApiClient.instance;

// Configure API key authorization: Bearer
var Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

var apiInstance = new WaziupApi.SensorsApi();

var domain = "domain_example"; // String | 

var sensorId = "sensorId_example"; // String | 

var measurementId = "measurementId_example"; // String | 

var body = "body_example"; // String | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.domainsDomainSensorsSensorIdMeasurementsMeasurementIdDimensionPut(domain, sensorId, measurementId, body, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **domain** | **String**|  | 
 **sensorId** | **String**|  | 
 **measurementId** | **String**|  | 
 **body** | **String**|  | 

### Return type

null (empty response body)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: text/plain
 - **Accept**: application/json

<a name="domainsDomainSensorsSensorIdMeasurementsMeasurementIdGet"></a>
# **domainsDomainSensorsSensorIdMeasurementsMeasurementIdGet**
> Measurement domainsDomainSensorsSensorIdMeasurementsMeasurementIdGet(domain, sensorId, measurementId)

get measurement

### Example
```javascript
var WaziupApi = require('waziup_api');
var defaultClient = WaziupApi.ApiClient.instance;

// Configure API key authorization: Bearer
var Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

var apiInstance = new WaziupApi.SensorsApi();

var domain = "domain_example"; // String | 

var sensorId = "sensorId_example"; // String | 

var measurementId = "measurementId_example"; // String | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.domainsDomainSensorsSensorIdMeasurementsMeasurementIdGet(domain, sensorId, measurementId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **domain** | **String**|  | 
 **sensorId** | **String**|  | 
 **measurementId** | **String**|  | 

### Return type

[**Measurement**](Measurement.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="domainsDomainSensorsSensorIdMeasurementsMeasurementIdNamePut"></a>
# **domainsDomainSensorsSensorIdMeasurementsMeasurementIdNamePut**
> domainsDomainSensorsSensorIdMeasurementsMeasurementIdNamePut(domain, sensorId, measurementId, body)

put measurement name

### Example
```javascript
var WaziupApi = require('waziup_api');
var defaultClient = WaziupApi.ApiClient.instance;

// Configure API key authorization: Bearer
var Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

var apiInstance = new WaziupApi.SensorsApi();

var domain = "domain_example"; // String | 

var sensorId = "sensorId_example"; // String | 

var measurementId = "measurementId_example"; // String | 

var body = "body_example"; // String | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.domainsDomainSensorsSensorIdMeasurementsMeasurementIdNamePut(domain, sensorId, measurementId, body, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **domain** | **String**|  | 
 **sensorId** | **String**|  | 
 **measurementId** | **String**|  | 
 **body** | **String**|  | 

### Return type

null (empty response body)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: text/plain
 - **Accept**: application/json

<a name="domainsDomainSensorsSensorIdMeasurementsMeasurementIdSensorKindPut"></a>
# **domainsDomainSensorsSensorIdMeasurementsMeasurementIdSensorKindPut**
> domainsDomainSensorsSensorIdMeasurementsMeasurementIdSensorKindPut(domain, sensorId, measurementId, body)

insert sensor kind

### Example
```javascript
var WaziupApi = require('waziup_api');
var defaultClient = WaziupApi.ApiClient.instance;

// Configure API key authorization: Bearer
var Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

var apiInstance = new WaziupApi.SensorsApi();

var domain = "domain_example"; // String | 

var sensorId = "sensorId_example"; // String | 

var measurementId = "measurementId_example"; // String | 

var body = "body_example"; // String | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.domainsDomainSensorsSensorIdMeasurementsMeasurementIdSensorKindPut(domain, sensorId, measurementId, body, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **domain** | **String**|  | 
 **sensorId** | **String**|  | 
 **measurementId** | **String**|  | 
 **body** | **String**|  | 

### Return type

null (empty response body)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: text/plain
 - **Accept**: application/json

<a name="domainsDomainSensorsSensorIdMeasurementsMeasurementIdUnitPut"></a>
# **domainsDomainSensorsSensorIdMeasurementsMeasurementIdUnitPut**
> domainsDomainSensorsSensorIdMeasurementsMeasurementIdUnitPut(domain, sensorId, measurementId, body)

put measurement unit

### Example
```javascript
var WaziupApi = require('waziup_api');
var defaultClient = WaziupApi.ApiClient.instance;

// Configure API key authorization: Bearer
var Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

var apiInstance = new WaziupApi.SensorsApi();

var domain = "domain_example"; // String | 

var sensorId = "sensorId_example"; // String | 

var measurementId = "measurementId_example"; // String | 

var body = "body_example"; // String | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.domainsDomainSensorsSensorIdMeasurementsMeasurementIdUnitPut(domain, sensorId, measurementId, body, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **domain** | **String**|  | 
 **sensorId** | **String**|  | 
 **measurementId** | **String**|  | 
 **body** | **String**|  | 

### Return type

null (empty response body)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: text/plain
 - **Accept**: application/json

<a name="domainsDomainSensorsSensorIdMeasurementsMeasurementIdValuesGet"></a>
# **domainsDomainSensorsSensorIdMeasurementsMeasurementIdValuesGet**
> [MeasurementValue] domainsDomainSensorsSensorIdMeasurementsMeasurementIdValuesGet(domain, sensorId, measurementId, )

get measurement values

### Example
```javascript
var WaziupApi = require('waziup_api');
var defaultClient = WaziupApi.ApiClient.instance;

// Configure API key authorization: Bearer
var Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

var apiInstance = new WaziupApi.SensorsApi();

var domain = "domain_example"; // String | 

var sensorId = "sensorId_example"; // String | 

var measurementId = "measurementId_example"; // String | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.domainsDomainSensorsSensorIdMeasurementsMeasurementIdValuesGet(domain, sensorId, measurementId, , callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **domain** | **String**|  | 
 **sensorId** | **String**|  | 
 **measurementId** | **String**|  | 

### Return type

[**[MeasurementValue]**](MeasurementValue.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="domainsDomainSensorsSensorIdMeasurementsMeasurementIdValuesPost"></a>
# **domainsDomainSensorsSensorIdMeasurementsMeasurementIdValuesPost**
> domainsDomainSensorsSensorIdMeasurementsMeasurementIdValuesPost(domain, sensorId, measurementId, body)

Create new datapoint

### Example
```javascript
var WaziupApi = require('waziup_api');
var defaultClient = WaziupApi.ApiClient.instance;

// Configure API key authorization: Bearer
var Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

var apiInstance = new WaziupApi.SensorsApi();

var domain = "domain_example"; // String | 

var sensorId = "sensorId_example"; // String | 

var measurementId = "measurementId_example"; // String | 

var body = new WaziupApi.MeasurementValue(); // MeasurementValue | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.domainsDomainSensorsSensorIdMeasurementsMeasurementIdValuesPost(domain, sensorId, measurementId, body, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **domain** | **String**|  | 
 **sensorId** | **String**|  | 
 **measurementId** | **String**|  | 
 **body** | [**MeasurementValue**](MeasurementValue.md)|  | 

### Return type

null (empty response body)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="domainsDomainSensorsSensorIdMeasurementsPost"></a>
# **domainsDomainSensorsSensorIdMeasurementsPost**
> domainsDomainSensorsSensorIdMeasurementsPost(domain, sensorId, body)

insert new measurement

### Example
```javascript
var WaziupApi = require('waziup_api');
var defaultClient = WaziupApi.ApiClient.instance;

// Configure API key authorization: Bearer
var Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

var apiInstance = new WaziupApi.SensorsApi();

var domain = "domain_example"; // String | 

var sensorId = "sensorId_example"; // String | 

var body = new WaziupApi.Measurement(); // Measurement | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.domainsDomainSensorsSensorIdMeasurementsPost(domain, sensorId, body, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **domain** | **String**|  | 
 **sensorId** | **String**|  | 
 **body** | [**Measurement**](Measurement.md)|  | 

### Return type

null (empty response body)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="domainsDomainSensorsSensorIdNamePut"></a>
# **domainsDomainSensorsSensorIdNamePut**
> domainsDomainSensorsSensorIdNamePut(domain, sensorId, body)

insert name

### Example
```javascript
var WaziupApi = require('waziup_api');
var defaultClient = WaziupApi.ApiClient.instance;

// Configure API key authorization: Bearer
var Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

var apiInstance = new WaziupApi.SensorsApi();

var domain = "domain_example"; // String | 

var sensorId = "sensorId_example"; // String | 

var body = "body_example"; // String | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.domainsDomainSensorsSensorIdNamePut(domain, sensorId, body, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **domain** | **String**|  | 
 **sensorId** | **String**|  | 
 **body** | **String**|  | 

### Return type

null (empty response body)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: text/plain
 - **Accept**: application/json

<a name="domainsDomainSensorsSensorIdOwnerPut"></a>
# **domainsDomainSensorsSensorIdOwnerPut**
> domainsDomainSensorsSensorIdOwnerPut(domain, sensorId, body)

insert owner

### Example
```javascript
var WaziupApi = require('waziup_api');
var defaultClient = WaziupApi.ApiClient.instance;

// Configure API key authorization: Bearer
var Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

var apiInstance = new WaziupApi.SensorsApi();

var domain = "domain_example"; // String | 

var sensorId = "sensorId_example"; // String | 

var body = "body_example"; // String | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.domainsDomainSensorsSensorIdOwnerPut(domain, sensorId, body, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **domain** | **String**|  | 
 **sensorId** | **String**|  | 
 **body** | **String**|  | 

### Return type

null (empty response body)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: text/plain
 - **Accept**: application/json

