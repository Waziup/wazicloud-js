# WaziupApi.DevicesApi

All URIs are relative to *http://127.0.0.1:8000/api/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getDevices**](DevicesApi.md#getDevices) | **GET** /devices | Device data
[**createDevice**](DevicesApi.md#createDevice) | **POST** /devices | Create devices
[**getDevice**](DevicesApi.md#getDevice) | **GET** /devices/{device_id} | get device
[**deleteDevice**](DevicesApi.md#deleteDevice) | **DELETE** /devices/{device_id} | Delete device
[**putDeviceLocation**](DevicesApi.md#putDeviceLocation) | **PUT** /devices/{device_id}/location | insert location
[**putDeviceName**](DevicesApi.md#putDeviceName) | **PUT** /devices/{device_id}/name | insert name
[**putDeviceOwner**](DevicesApi.md#putDeviceOwner) | **PUT** /devices/{device_id}/owner | insert owner
[**getDeviceSensors**](DevicesApi.md#getDeviceSensors) | **GET** /devices/{device_id}/sensors | get sensors
[**addSensor**](DevicesApi.md#addSensor) | **POST** /devices/{device_id}/sensors | insert new sensor
[**deleteSensor**](DevicesApi.md#deleteSensor) | **DELETE** /devices/{device_id}/sensors/{sensor_id} | Delete sensor
[**putSensorQK**](DevicesApi.md#putSensorQK) | **PUT** /devices/{device_id}/sensors/{sensor_id}/quantity_kind | put sensor quantity kind 
[**getSensor**](DevicesApi.md#getSensor) | **GET** /devices/{device_id}/sensors/{sensor_id} | get sensor
[**putSensorName**](DevicesApi.md#putSensorName) | **PUT** /devices/{device_id}/sensors/{sensor_id}/name | put sensor name
[**putSensorSD**](DevicesApi.md#putSensorSD) | **PUT** /devices/{device_id}/sensors/{sensor_id}/sensingDevice | insert device kind
[**putSensorUnit**](DevicesApi.md#putSensorUnit) | **PUT** /devices/{device_id}/sensors/{sensor_id}/unit | put sensor unit
[**getSensorValues**](DevicesApi.md#getSensorValues) | **GET** /devices/{device_id}/sensors/{sensor_id}/values | get sensor values
[**addDatapoint**](DevicesApi.md#addDatapoint) | **POST** /devices/{device_id}/sensors/{sensor_id}/values | Create new datapoint

## Preliminaries
Insert this code in your file, before using any endpoint:

```javascript
var WaziupApi = require('waziup-js');
var defaultClient = WaziupApi.ApiClient.instance;
defaultClient.basePath = 'WAZIUP_BASE_URL' + '/v1'

// Configure API key authorization: Bearer
defaultClient.authentications['Bearer'].apiKey = "Bearer " + 'YOUR API KEY';

var apiInstance = new WaziupApi.DevicesApi();
```

<a name="getDevices"></a>
# **getDevices**
> [Device] getDevices(opts)

Device data

### Example

```javascript
var opts = {'q': "owner=cdupont"} // filter the results
let devices = await apiInstance.getDevices(opts);
//You can use the devices here
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **q** | **String**| filter the results | [optional] 

### Return type

[**[Device]**](Device.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="createDevice"></a>
# **createDevice**
> createDevice(device)

Create devices

Endpoint to create sensing devices.

### Example
```javascript
var device = new WaziupApi.Device("ID");
device.name = ... //Set up the device here
apiInstance.createDevices(device);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**Device**](Device.md)|  | 

### Return type

null (empty response body)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="deleteDevice"></a>
# **deleteDevice**
> deleteDevice(deviceId)

Delete device

### Example
```javascript
var deviceID = "test"
apiInstance.deleteDevice(deviceID);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **deviceId** | **String**|  | 

### Return type

null (empty response body)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getDevice"></a>
# **getDevice**
> Device getDevice(deviceId)

get device

### Example
```javascript
var deviceID = "test"
let device = await apiInstance.getDevice(deviceID);
//You can use the device here
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **deviceId** | **String**|  | 

### Return type

[**Device**](Device.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="putDeviceLocation"></a>
# **putDeviceLocation**
> putDeviceLocation(deviceId, body)

insert location

### Example
```javascript
var deviceID = "test"
var location = new WaziupApi.Location(4.0, 1.0);
apiInstance.putDeviceLocation(deviceID, location);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **deviceId** | **String**|  | 
 **body** | [**Location**](Location.md)|  | 

### Return type

null (empty response body)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getDeviceSensors"></a>
# **getDeviceSensors**
> [Sensor] getDeviceSensors(deviceId)

get sensors

### Example
```javascript
var deviceID = "test"
var sensors = await apiInstance.getDeviceSensors(deviceID);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **deviceId** | **String**|  | 

### Return type

[**[Sensor]**](Sensor.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="deleteSensor"></a>
# **deleteSensor**
> deleteSensor(deviceId, sensorId)

Delete sensor



### Example
```javascript
var deviceID = "test"
var sensID = "TC"
var sensors = await apiInstance.deleteDeviceSensor(deviceID, sensID);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **deviceId** | **String**|  | 
 **sensorId** | **String**|  | 

### Return type

null (empty response body)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="putSensorQuantityKind"></a>
# **putSensorQuantityKind**
> putSensorQuantityKind(deviceId, sensorId, body)

put sensor quantity kind 

### Example
```javascript
var deviceID = "test"
var sensID = "TC"
apiInstance.putSensorQuantityKind(deviceID, sensID, "Temperature");
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **deviceId** | **String**|  | 
 **sensorId** | **String**|  | 
 **body** | **String**|  | 

### Return type

null (empty response body)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: text/plain
 - **Accept**: application/json

<a name="getSensor"></a>
# **getSensor**
> Sensor getSensor(deviceId, sensorId)

get sensor

### Example
```javascript
var deviceID = "test"
var sensID = "TC"
var sensors = await apiInstance.getSensor(deviceID, sensID);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **deviceId** | **String**|  | 
 **sensorId** | **String**|  | 

### Return type

[**Sensor**](Sensor.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="putSensorName"></a>
# **putSensorName**
> putSensorName(deviceId, sensorId, body)

put sensor name

### Example
```javascript
var deviceID = "test"
var sensID = "TC"
apiInstance.putSensorName(deviceID, "My temperature");
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **deviceId** | **String**|  | 
 **sensorId** | **String**|  | 
 **body** | **String**|  | 

### Return type

null (empty response body)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: text/plain
 - **Accept**: application/json

<a name="putSensorDeviceKind"></a>
# **putSensorDeviceKind**
> putSensorDeviceKind(deviceId, sensorId, body)

insert device kind

### Example
```javascript
var deviceID = "test"
var sensID = "TC"
apiInstance.putSensorDeviceKind(deviceID, sensID, "Thermometer");
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **deviceId** | **String**|  | 
 **sensorId** | **String**|  | 
 **body** | **String**|  | 

### Return type

null (empty response body)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: text/plain
 - **Accept**: application/json

<a name="putSensorUnit"></a>
# **putSensorUnit**
> putSensorUnit(deviceId, sensorId, body)

put sensor unit

### Example
```javascript
var deviceID = "test"
var sensID = "TC"
apiInstance.putSensorUnit(deviceID, sensID, "DegreeCelcius");
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **deviceId** | **String**|  | 
 **sensorId** | **String**|  | 
 **body** | **String**|  | 

### Return type

null (empty response body)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: text/plain
 - **Accept**: application/json

<a name="getSensorValues"></a>
# **getSensorValues**
> [SensorValue] getSensorValues(deviceId, sensorId, options)

get sensor values

### Example
```javascript
var deviceID = "test"
var sensID = "TC"
//Options for fetching the values. Use either 'lastN' or ('limit', 'offset'). dateFrom and dataTo can be use to further limit the time window.
var opts = { 
  'lastN': "20", // String | get the last N entries, most recent first. Default value is 20.
  'limit': "50", // String | In case of pagination, number of entris per page
  'offset': "0", // String | In case of pagination, offset for the starting entry
  'dateFrom': "2016-01-01T00:00:00.000Z", // String | The starting date and time from which the entries are desired. It is an optional parameter.
  'dateTo': "2019-01-31T23:59:59.999Z" // String | The final date and time until which the entries are desired. It is an optional parameter.
};
var values = await apiInstance.getSensorValues(deviceID, sensID, opts);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **deviceId** | **String**|  | 
 **sensorId** | **String**|  |
 **lastN** | **String**| get the last N entries, most recent first. Default value is 20. | [optional] 
 **limit** | **String**| In case of pagination, number of entris per page | [optional] 
 **offset** | **String**| In case of pagination, offset for the starting entry | [optional] 
 **dateFrom** | **String**| The starting date and time from which the entries are desired. It is an optional parameter. | [optional] 
 **dateTo** | **String**| The final date and time until which the entries are desired. It is an optional parameter. | [optional] 

### Return type

[**[SensorValue]**](SensorValue.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="addDatapoint"></a>
# **addDatapoint**
> addDatapoint(deviceId, sensorId, datapoint)

Create new datapoint

### Example
```javascript
var deviceID = "test"
var sensID = "TC"
var value = new WaziupApi.SensorValue("25.6", "2018-03-15T15:27:17+01:00");
apiInstance.addDatapoint(deviceID, sensID, value);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **deviceId** | **String**|  | 
 **sensorId** | **String**|  | 
 **value** | [**SensorValue**](SensorValue.md)|  | 

### Return type

null (empty response body)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="addSensor"></a>
# **addSensor**
> addSensor(deviceId, body)

insert new sensor

### Example
```javascript
var deviceID = "test"
var sens = new WaziupApi.Sensor("TC");
apiInstance.addSensor(deviceID, sens);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **deviceId** | **String**|  | 
 **body** | [**Sensor**](Sensor.md)|  | 

### Return type

null (empty response body)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="putDeviceName"></a>
# **putDeviceName**
> putDeviceName(deviceId, body)

insert name

### Example
```javascript
var deviceID = "test"
apiInstance.putDeviceName(deviceID, "My Device 1");
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **deviceId** | **String**|  | 
 **body** | **String**|  | 

### Return type

null (empty response body)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: text/plain
 - **Accept**: application/json

<a name="putDeviceOwner"></a>
# **putDeviceOwner**
> putDeviceOwner(deviceId, body)

insert owner

### Example
```javascript
var deviceID = "test"
apiInstance.putDeviceOwner(deviceID, "cdupont");
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **deviceId** | **String**|  | 
 **body** | **String**|  | 

### Return type

null (empty response body)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: text/plain
 - **Accept**: application/json

