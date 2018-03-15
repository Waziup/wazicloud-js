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
> [Sensor] getSensors(domain, opts)

Sensor data

### Example

```javascript
var domain = "domain_example";
var opts = {'q': "owner=cdupont"} // filter the results
let sensors = await apiInstance.getSensors(domain, opts);
//You can use the sensors here
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
> createSensor(domain, sensor)

Create sensors

Endpoint to create sensing devices.

### Example
```javascript
var domain = "domain_example";
var sensor = new WaziupApi.Sensor("ID");
sensor.name = ... //Set up the sensor here
apiInstance.createSensors(domain, sensor);
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
> deleteSensor(domain, sensorId)

Delete sensor

### Example
```javascript
var domain = "domain_example";
var sensorID = "test"
apiInstance.deleteSensor(domain, sensorID);
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
> Sensor getSensor(domain, sensorId)

get sensor

### Example
```javascript
var domain = "domain_example";
var sensorID = "test"
let sensor = await apiInstance.getSensor(domain, sensorID);
//You can use the sensor here
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
var domain = "domain_example";
var sensorID = "test"
var location = new WaziupApi.Location(4.0, 1.0);
apiInstance.putSensorLocation(domain, sensorID, location);
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
> [Measurement] getSensorMeasurements(domain, sensorId)

get measurements

### Example
```javascript
var domain = "domain_example";
var sensorID = "test"
var measurements = await apiInstance.getSensorMeasurements(domain, sensorID);
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
> deleteMeasurement(domain, sensorId, measurementId)

Delete measurement



### Example
```javascript
var domain = "domain_example";
var sensorID = "test"
var measID = "TC"
var measurements = await apiInstance.deleteSensorMeasurement(domain, sensorID, measID);
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
var domain = "domain_example";
var sensorID = "test"
var measID = "TC"
apiInstance.putMeasurementQuantityKind(domain, sensorID, measID, "Temperature");
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
var domain = "domain_example";
var sensorID = "test"
var measID = "TC"
var measurements = await apiInstance.getMeasurement(domain, sensorID, measID);
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
var domain = "domain_example";
var sensorID = "test"
var measID = "TC"
apiInstance.putMeasurementName(domain, sensorID, "My temperature");
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
var domain = "domain_example";
var sensorID = "test"
var measID = "TC"
apiInstance.putMeasurementSensorKind(domain, sensorID, measID, "Thermometer");
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
var domain = "domain_example";
var sensorID = "test"
var measID = "TC"
apiInstance.putMeasurementUnit(domain, sensorID, measID, "DegreeCelcius");
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
> [MeasurementValue] getMeasurementValues(domain, sensorId, measurementId)

get measurement values

### Example
```javascript
var domain = "domain_example";
var sensorID = "test"
var measID = "TC"
var values = await apiInstance.getMeasurementValues(domain, sensorID, measID);
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
# **addDatapoint**
> addDatapoint(domain, sensorId, measurementId, datapoint)

Create new datapoint

### Example
```javascript
var domain = "domain_example";
var sensorID = "test"
var measID = "TC"
var value = new WaziupApi.MeasurementValue("25.6", "2018-03-15T15:27:17+01:00");
apiInstance.putMeasurementValue(domain, sensorID, measID, value);
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
var domain = "domain_example";
var sensorID = "test"
var meas = new WaziupApi.Measurement("TC");
apiInstance.addMeasurement(domain, sensorID, meas);
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
var domain = "domain_example";
var sensorID = "test"
apiInstance.putSensorName(domain, sensorID, "My Sensor 1");
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
var domain = "domain_example";
var sensorID = "test"
apiInstance.putSensorOwner(domain, sensorID, "cdupont");
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

