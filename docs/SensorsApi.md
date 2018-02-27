# WaziupApi.SensorsApi

All URIs are relative to *http://127.0.0.1:8000/api/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getSensors**](SensorsApi.md#getSensors) | **GET** /domains/{domain}/sensors | Sensor data
[**createSensor**](SensorsApi.md#createSensor) | **POST** /domains/{domain}/sensors | Create sensors
[**deleteSensor**](SensorsApi.md#deleteSensor) | **DELETE** /domains/{domain}/sensors/{sensor_id} | Delete sensor
[**getSensor**](SensorsApi.md#getSensor) | **GET** /domains/{domain}/sensors/{sensor_id} | get sensor
[**putSensorLocation**](SensorsApi.md#putSensorLocation) | **PUT** /domains/{domain}/sensors/{sensor_id}/location | insert location
[**getSensorMeasurements**](SensorsApi.md#getSensorMeasurements) | **GET** /domains/{domain}/sensors/{sensor_id}/measurements | get measurements
[**deleteMeasurement**](SensorsApi.md#deleteMeasurement) | **DELETE** /domains/{domain}/sensors/{sensor_id}/measurements/{measurement_id} | Delete measurement
[**putMeasurementQK**](SensorsApi.md#putMeasurementQK) | **PUT** /domains/{domain}/sensors/{sensor_id}/measurements/{measurement_id}/quantity_kind | put measurement quantity kind 
[**getMeasurement**](SensorsApi.md#getMeasurement) | **GET** /domains/{domain}/sensors/{sensor_id}/measurements/{measurement_id} | get measurement
[**putMeasurementName**](SensorsApi.md#putMeasurementName) | **PUT** /domains/{domain}/sensors/{sensor_id}/measurements/{measurement_id}/name | put measurement name
[**putMeasurementSD**](SensorsApi.md#putMeasurementSD) | **PUT** /domains/{domain}/sensors/{sensor_id}/measurements/{measurement_id}/sensingDevice | insert sensor kind
[**putMeasurementUnit**](SensorsApi.md#putMeasurementUnit) | **PUT** /domains/{domain}/sensors/{sensor_id}/measurements/{measurement_id}/unit | put measurement unit
[**getMeasurementValues**](SensorsApi.md#getMeasurementValues) | **GET** /domains/{domain}/sensors/{sensor_id}/measurements/{measurement_id}/values | get measurement values
[**addMeasurement**](SensorsApi.md#addMeasurement) | **POST** /domains/{domain}/sensors/{sensor_id}/measurements/{measurement_id}/values | Create new datapoint
[**addMeasurement**](SensorsApi.md#addMeasurement) | **POST** /domains/{domain}/sensors/{sensor_id}/measurements | insert new measurement
[**putSensorName**](SensorsApi.md#putSensorName) | **PUT** /domains/{domain}/sensors/{sensor_id}/name | insert name
[**putSensorOwner**](SensorsApi.md#putSensorOwner) | **PUT** /domains/{domain}/sensors/{sensor_id}/owner | insert owner


<a name="getSensors"></a>
# **getSensors**
> [Sensor] getSensors(domain, , opts)

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
apiInstance.getSensors(domain, , opts, callback);
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

<a name="createSensor"></a>
# **createSensor**
> createSensor(body, domain, )

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
apiInstance.createSensor(body, domain, , callback);
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

<a name="deleteSensor"></a>
# **deleteSensor**
> deleteSensor(domain, sensorId, )

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
apiInstance.deleteSensor(domain, sensorId, , callback);
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

<a name="getSensor"></a>
# **getSensor**
> Sensor getSensor(domain, sensorId, )

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
apiInstance.getSensor(domain, sensorId, , callback);
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

<a name="putSensorLocation"></a>
# **putSensorLocation**
> putSensorLocation(domain, sensorId, body)

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
apiInstance.putSensorLocation(domain, sensorId, body, callback);
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

<a name="getSensorMeasurements"></a>
# **getSensorMeasurements**
> [Measurement] getSensorMeasurements(domain, sensorId, )

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
apiInstance.getSensorMeasurements(domain, sensorId, , callback);
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

<a name="deleteMeasurement"></a>
# **deleteMeasurement**
> deleteMeasurement(domain, sensorId, measurementId, )

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
apiInstance.deleteMeasurement(domain, sensorId, measurementId, , callback);
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

<a name="putMeasurementQuantityKind"></a>
# **putMeasurementQuantityKind**
> putMeasurementQuantityKind(domain, sensorId, measurementId, body)

put measurement quantity kind 

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
apiInstance.putMeasurementQuantityKind(domain, sensorId, measurementId, body, callback);
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

<a name="getMeasurement"></a>
# **getMeasurement**
> Measurement getMeasurement(domain, sensorId, measurementId)

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
apiInstance.getMeasurement(domain, sensorId, measurementId, callback);
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

<a name="putMeasurementName"></a>
# **putMeasurementName**
> putMeasurementName(domain, sensorId, measurementId, body)

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
apiInstance.putMeasurementName(domain, sensorId, measurementId, body, callback);
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

<a name="putMeasurementSensorKind"></a>
# **putMeasurementSensorKind**
> putMeasurementSensorKind(domain, sensorId, measurementId, body)

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
apiInstance.putMeasurementSensorKind(domain, sensorId, measurementId, body, callback);
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

<a name="putMeasurementUnit"></a>
# **putMeasurementUnit**
> putMeasurementUnit(domain, sensorId, measurementId, body)

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
apiInstance.putMeasurementUnit(domain, sensorId, measurementId, body, callback);
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

<a name="getMeasurementValues"></a>
# **getMeasurementValues**
> [MeasurementValue] getMeasurementValues(domain, sensorId, measurementId, )

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
apiInstance.getMeasurementValues(domain, sensorId, measurementId, , callback);
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

<a name="addMeasurement"></a>
# **addMeasurement**
> addMeasurement(domain, sensorId, measurementId, body)

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
apiInstance.addMeasurement(domain, sensorId, measurementId, body, callback);
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

<a name="addMeasurement"></a>
# **addMeasurement**
> addMeasurement(domain, sensorId, body)

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
apiInstance.addMeasurement(domain, sensorId, body, callback);
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

<a name="putSensorName"></a>
# **putSensorName**
> putSensorName(domain, sensorId, body)

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
apiInstance.putSensorName(domain, sensorId, body, callback);
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

<a name="putSensorOwner"></a>
# **putSensorOwner**
> putSensorOwner(domain, sensorId, body)

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
apiInstance.putSensorOwner(domain, sensorId, body, callback);
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

