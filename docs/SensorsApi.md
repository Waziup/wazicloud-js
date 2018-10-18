# WaziupApi.SensorsApi

All URIs are relative to *http://127.0.0.1:8000/api/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getSensors**](SensorsApi.md#getSensors) | **GET** /sensors | Sensor data
[**createSensor**](SensorsApi.md#createSensor) | **POST** /sensors | Create sensors
[**getSensor**](SensorsApi.md#getSensor) | **GET** /sensors/{sensor_id} | get sensor
[**deleteSensor**](SensorsApi.md#deleteSensor) | **DELETE** /sensors/{sensor_id} | Delete sensor
[**putSensorLocation**](SensorsApi.md#putSensorLocation) | **PUT** /sensors/{sensor_id}/location | insert location
[**putSensorName**](SensorsApi.md#putSensorName) | **PUT** /sensors/{sensor_id}/name | insert name
[**putSensorOwner**](SensorsApi.md#putSensorOwner) | **PUT** /sensors/{sensor_id}/owner | insert owner
[**getSensorMeasurements**](SensorsApi.md#getSensorMeasurements) | **GET** /sensors/{sensor_id}/measurements | get measurements
[**addMeasurement**](SensorsApi.md#addMeasurement) | **POST** /sensors/{sensor_id}/measurements | insert new measurement
[**deleteMeasurement**](SensorsApi.md#deleteMeasurement) | **DELETE** /sensors/{sensor_id}/measurements/{measurement_id} | Delete measurement
[**putMeasurementQK**](SensorsApi.md#putMeasurementQK) | **PUT** /sensors/{sensor_id}/measurements/{measurement_id}/quantity_kind | put measurement quantity kind 
[**getMeasurement**](SensorsApi.md#getMeasurement) | **GET** /sensors/{sensor_id}/measurements/{measurement_id} | get measurement
[**putMeasurementName**](SensorsApi.md#putMeasurementName) | **PUT** /sensors/{sensor_id}/measurements/{measurement_id}/name | put measurement name
[**putMeasurementSD**](SensorsApi.md#putMeasurementSD) | **PUT** /sensors/{sensor_id}/measurements/{measurement_id}/sensingDevice | insert sensor kind
[**putMeasurementUnit**](SensorsApi.md#putMeasurementUnit) | **PUT** /sensors/{sensor_id}/measurements/{measurement_id}/unit | put measurement unit
[**getMeasurementValues**](SensorsApi.md#getMeasurementValues) | **GET** /sensors/{sensor_id}/measurements/{measurement_id}/values | get measurement values
[**addDatapoint**](SensorsApi.md#addDatapoint) | **POST** /sensors/{sensor_id}/measurements/{measurement_id}/values | Create new datapoint

## Preliminaries
Insert this code in your file, before using any endpoint:

```javascript
var WaziupApi = require('waziup-js');
var defaultClient = WaziupApi.ApiClient.instance;
defaultClient.basePath = 'WAZIUP_BASE_URL' + '/v1'

// Configure API key authorization: Bearer
defaultClient.authentications['Bearer'].apiKey = "Bearer " + 'YOUR API KEY';

var apiInstance = new WaziupApi.SensorsApi();
```

<a name="getSensors"></a>
# **getSensors**
> [Sensor] getSensors(opts)

Sensor data

### Example

```javascript
var opts = {'q': "owner=cdupont"} // filter the results
let sensors = await apiInstance.getSensors(opts);
//You can use the sensors here
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
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
> createSensor(sensor)

Create sensors

Endpoint to create sensing devices.

### Example
```javascript
var sensor = new WaziupApi.Sensor("ID");
sensor.name = ... //Set up the sensor here
apiInstance.createSensors(sensor);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**Sensor**](Sensor.md)|  | 

### Return type

null (empty response body)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="deleteSensor"></a>
# **deleteSensor**
> deleteSensor(sensorId)

Delete sensor

### Example
```javascript
var sensorID = "test"
apiInstance.deleteSensor(sensorID);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
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
> Sensor getSensor(sensorId)

get sensor

### Example
```javascript
var sensorID = "test"
let sensor = await apiInstance.getSensor(sensorID);
//You can use the sensor here
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
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
> putSensorLocation(sensorId, body)

insert location

### Example
```javascript
var sensorID = "test"
var location = new WaziupApi.Location(4.0, 1.0);
apiInstance.putSensorLocation(sensorID, location);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
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
> [Measurement] getSensorMeasurements(sensorId)

get measurements

### Example
```javascript
var sensorID = "test"
var measurements = await apiInstance.getSensorMeasurements(sensorID);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
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
> deleteMeasurement(sensorId, measurementId)

Delete measurement



### Example
```javascript
var sensorID = "test"
var measID = "TC"
var measurements = await apiInstance.deleteSensorMeasurement(sensorID, measID);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
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
> putMeasurementQuantityKind(sensorId, measurementId, body)

put measurement quantity kind 

### Example
```javascript
var sensorID = "test"
var measID = "TC"
apiInstance.putMeasurementQuantityKind(sensorID, measID, "Temperature");
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
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
> Measurement getMeasurement(sensorId, measurementId)

get measurement

### Example
```javascript
var sensorID = "test"
var measID = "TC"
var measurements = await apiInstance.getMeasurement(sensorID, measID);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
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
> putMeasurementName(sensorId, measurementId, body)

put measurement name

### Example
```javascript
var sensorID = "test"
var measID = "TC"
apiInstance.putMeasurementName(sensorID, "My temperature");
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
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
> putMeasurementSensorKind(sensorId, measurementId, body)

insert sensor kind

### Example
```javascript
var sensorID = "test"
var measID = "TC"
apiInstance.putMeasurementSensorKind(sensorID, measID, "Thermometer");
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
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
> putMeasurementUnit(sensorId, measurementId, body)

put measurement unit

### Example
```javascript
var sensorID = "test"
var measID = "TC"
apiInstance.putMeasurementUnit(sensorID, measID, "DegreeCelcius");
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
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
> [MeasurementValue] getMeasurementValues(sensorId, measurementId, options)

get measurement values

### Example
```javascript
var sensorID = "test"
var measID = "TC"
//Options for fetching the values. Use either 'lastN' or ('limit', 'offset'). dateFrom and dataTo can be use to further limit the time window.
var opts = { 
  'lastN': "20", // String | get the last N entries, most recent first. Default value is 20.
  'limit': "50", // String | In case of pagination, number of entris per page
  'offset': "0", // String | In case of pagination, offset for the starting entry
  'dateFrom': "2016-01-01T00:00:00.000Z", // String | The starting date and time from which the entries are desired. It is an optional parameter.
  'dateTo': "2019-01-31T23:59:59.999Z" // String | The final date and time until which the entries are desired. It is an optional parameter.
};
var values = await apiInstance.getMeasurementValues(sensorID, measID, opts);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **sensorId** | **String**|  | 
 **measurementId** | **String**|  |
 **lastN** | **String**| get the last N entries, most recent first. Default value is 20. | [optional] 
 **limit** | **String**| In case of pagination, number of entris per page | [optional] 
 **offset** | **String**| In case of pagination, offset for the starting entry | [optional] 
 **dateFrom** | **String**| The starting date and time from which the entries are desired. It is an optional parameter. | [optional] 
 **dateTo** | **String**| The final date and time until which the entries are desired. It is an optional parameter. | [optional] 

### Return type

[**[MeasurementValue]**](MeasurementValue.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="addDatapoint"></a>
# **addDatapoint**
> addDatapoint(sensorId, measurementId, datapoint)

Create new datapoint

### Example
```javascript
var sensorID = "test"
var measID = "TC"
var value = new WaziupApi.MeasurementValue("25.6", "2018-03-15T15:27:17+01:00");
apiInstance.addDatapoint(sensorID, measID, value);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **sensorId** | **String**|  | 
 **measurementId** | **String**|  | 
 **value** | [**MeasurementValue**](MeasurementValue.md)|  | 

### Return type

null (empty response body)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="addMeasurement"></a>
# **addMeasurement**
> addMeasurement(sensorId, body)

insert new measurement

### Example
```javascript
var sensorID = "test"
var meas = new WaziupApi.Measurement("TC");
apiInstance.addMeasurement(sensorID, meas);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
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
> putSensorName(sensorId, body)

insert name

### Example
```javascript
var sensorID = "test"
apiInstance.putSensorName(sensorID, "My Sensor 1");
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
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
> putSensorOwner(sensorId, body)

insert owner

### Example
```javascript
var sensorID = "test"
apiInstance.putSensorOwner(sensorID, "cdupont");
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **sensorId** | **String**|  | 
 **body** | **String**|  | 

### Return type

null (empty response body)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: text/plain
 - **Accept**: application/json

