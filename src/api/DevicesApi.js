'use strict';
import ApiClient from '../ApiClient'
import Error from '../model/Error'
import Location from '../model/Location'
import Sensor from '../model/Sensor'
import SensorValue from '../model/SensorValue'
import Device from '../model/Device'

/**
 * Constructs a new DevicesApi. 
 * @alias module:api/DevicesApi
 * @class
 * @param {module:ApiClient} apiClient Optional API client implementation to use,
 * default to {@link module:ApiClient#instance} if unspecified.
 */
var exports = function(apiClient) {
  this.apiClient = apiClient || ApiClient.instance;

  /**
   * Device data
   * 
   * @param {Object} opts Optional parameters
   * @param {String} opts.q filter the results
   * data is of type: {@link Array.<module:model/Device>}
   */
  this.getDevices = async function(opts) {
    opts = opts || {};
    var postBody = null;

    var pathParams = {};
    var queryParams = {'q':      opts['q'],
                       'limit':  opts['limit'],
                       'offset': opts['offset']};
    var headerParams = {};
    var formParams = {};

    var authNames = ['Bearer'];
    var contentTypes = ['application/json'];
    var accepts = ['application/json'];
    var returnType = [Device];

    return this.apiClient.callApi(
      '/devices', 'GET',
      pathParams, queryParams, headerParams, formParams, postBody,
      authNames, contentTypes, accepts, returnType)
  }

  /**
   * Create devices
   * Endpoint to create sensing devices.
   * @param {module:model/Device} body 
   */
  this.createDevice = async function(body) {
    var postBody = body;

    // verify the required parameter 'body' is set
    if (body === undefined || body === null) {
      throw("Missing the required parameter 'body' when calling createDevice");
    }

    var pathParams = {};
    var queryParams = {};
    var headerParams = {};
    var formParams = {};

    var authNames = ['Bearer'];
    var contentTypes = ['application/json'];
    var accepts = ['application/json'];
    var returnType = null;

    return this.apiClient.callApi(
      'devices', 'POST',
      pathParams, queryParams, headerParams, formParams, postBody,
      authNames, contentTypes, accepts, returnType);
  }

  /**
   * Delete device
   * 
   * @param {String} deviceId 
   */
  this.deleteDevice = async function(deviceId) {
    var postBody = null;

    // verify the required parameter 'deviceId' is set
    if (deviceId === undefined || deviceId === null) {
      throw("Missing the required parameter 'deviceId' when calling deleteDevice");
    }


    var pathParams = {
      'device_id': deviceId
    };
    var queryParams = {};
    var headerParams = {};
    var formParams = {};

    var authNames = ['Bearer'];
    var contentTypes = ['application/json'];
    var accepts = ['application/json'];
    var returnType = null;

    return this.apiClient.callApi(
      '/devices/{device_id}', 'DELETE',
      pathParams, queryParams, headerParams, formParams, postBody,
      authNames, contentTypes, accepts, returnType);
  }

  /**
   * get device
   * 
   * @param {String} deviceId 
   * data is of type: {@link module:model/Device}
   */
  this.getDevice = async function(deviceId) {
    var postBody = null;

    // verify the required parameter 'deviceId' is set
    if (deviceId === undefined || deviceId === null) {
      throw("Missing the required parameter 'deviceId' when calling getDevice");
    }


    var pathParams = {
      'device_id': deviceId
    };
    var queryParams = {};
    var headerParams = {};
    var formParams = {};

    var authNames = ['Bearer'];
    var contentTypes = ['application/json'];
    var accepts = ['application/json'];
    var returnType = Device;

    return this.apiClient.callApi(
      '/devices/{device_id}', 'GET',
      pathParams, queryParams, headerParams, formParams, postBody,
      authNames, contentTypes, accepts, returnType);
  }

  /**
   * insert location
   * @param {String} deviceId 
   * @param {module:model/Location} body 
   */
  this.putDeviceLocation = async function(deviceId, body) {
    var postBody = body;

    // verify the required parameter 'deviceId' is set
    if (deviceId === undefined || deviceId === null) {
      throw("Missing the required parameter 'deviceId' when calling putDeviceLocation");
    }

    // verify the required parameter 'body' is set
    if (body === undefined || body === null) {
      throw("Missing the required parameter 'body' when calling putDeviceLocation");
    }


    var pathParams = {
      'device_id': deviceId
    };
    var queryParams = {};
    var headerParams = {};
    var formParams = {};

    var authNames = ['Bearer'];
    var contentTypes = ['application/json'];
    var accepts = ['application/json'];
    var returnType = null;

    return this.apiClient.callApi(
      '/devices/{device_id}/location', 'PUT',
      pathParams, queryParams, headerParams, formParams, postBody,
      authNames, contentTypes, accepts, returnType);
  }

  /**
   * get sensors
   * @param {String} deviceId 
   * data is of type: {@link Array.<module:model/Sensor>}
   */
  this.getDeviceSensors = async function(deviceId) {
    var postBody = null;

    // verify the required parameter 'deviceId' is set
    if (deviceId === undefined || deviceId === null) {
      throw("Missing the required parameter 'deviceId' when calling getDeviceSensors");
    }


    var pathParams = {
      'device_id': deviceId
    };
    var queryParams = {};
    var headerParams = {};
    var formParams = {};

    var authNames = ['Bearer'];
    var contentTypes = ['application/json'];
    var accepts = ['application/json'];
    var returnType = [Sensor];

    return this.apiClient.callApi(
      '/devices/{device_id}/sensors', 'GET',
      pathParams, queryParams, headerParams, formParams, postBody,
      authNames, contentTypes, accepts, returnType);
  }

  /**
   * Delete sensor
   * 
   * @param {String} deviceId 
   * @param {String} sensorId 
   * @param {module:api/DevicesApi~deleteSensorCallback} callback The callback function, accepting three arguments: error, data, response
   */
  this.deleteSensor = async function(deviceId, sensorId) {
    var postBody = null;

    // verify the required parameter 'deviceId' is set
    if (deviceId === undefined || deviceId === null) {
      throw("Missing the required parameter 'deviceId' when calling deleteSensor");
    }

    // verify the required parameter 'sensorId' is set
    if (sensorId === undefined || sensorId === null) {
      throw("Missing the required parameter 'sensorId' when calling deleteSensor");
    }


    var pathParams = {
      'device_id': deviceId,
      'sensor_id': sensorId
    };
    var queryParams = {};
    var headerParams = {};
    var formParams = {};

    var authNames = ['Bearer'];
    var contentTypes = ['application/json'];
    var accepts = ['application/json'];
    var returnType = null;

    return this.apiClient.callApi(
      '/devices/{device_id}/sensors/{sensor_id}', 'DELETE',
      pathParams, queryParams, headerParams, formParams, postBody,
      authNames, contentTypes, accepts, returnType);
  }

  /**
   * put sensor quantity kind 
   * @param {String} deviceId 
   * @param {String} sensorId 
   * @param {String} body 
   */
  this.putSensorQK = async function(deviceId, sensorId, body) {
    var postBody = body;

    // verify the required parameter 'deviceId' is set
    if (deviceId === undefined || deviceId === null) {
      throw("Missing the required parameter 'deviceId' when calling putSensorQK");
    }

    // verify the required parameter 'sensorId' is set
    if (sensorId === undefined || sensorId === null) {
      throw("Missing the required parameter 'sensorId' when calling putSensorQK");
    }

    // verify the required parameter 'body' is set
    if (body === undefined || body === null) {
      throw("Missing the required parameter 'body' when calling putSensorQK");
    }


    var pathParams = {
      'device_id': deviceId,
      'sensor_id': sensorId
    };
    var queryParams = {};
    var headerParams = {};
    var formParams = {};

    var authNames = ['Bearer'];
    var contentTypes = ['text/plain'];
    var accepts = ['application/json'];
    var returnType = null;

    return this.apiClient.callApi(
      '/devices/{device_id}/sensors/{sensor_id}/quantity_kind', 'PUT',
      pathParams, queryParams, headerParams, formParams, postBody,
      authNames, contentTypes, accepts, returnType);
  }

  /**
   * get sensor
   * @param {String} deviceId 
   * @param {String} sensorId 
   * data is of type: {@link module:model/Sensor}
   */
  this.getSensor = async function(deviceId, sensorId) {
    var postBody = null;

    // verify the required parameter 'deviceId' is set
    if (deviceId === undefined || deviceId === null) {
      throw("Missing the required parameter 'deviceId' when calling getSensor");
    }

    // verify the required parameter 'sensorId' is set
    if (sensorId === undefined || sensorId === null) {
      throw("Missing the required parameter 'sensorId' when calling getSensor");
    }


    var pathParams = {
      'device_id': deviceId,
      'sensor_id': sensorId
    };
    var queryParams = {};
    var headerParams = {};
    var formParams = {};

    var authNames = ['Bearer'];
    var contentTypes = ['application/json'];
    var accepts = ['application/json'];
    var returnType = Sensor;

    return this.apiClient.callApi(
      '/devices/{device_id}/sensors/{sensor_id}', 'GET',
      pathParams, queryParams, headerParams, formParams, postBody,
      authNames, contentTypes, accepts, returnType);
  }

  /**
   * put sensor name
   * @param {String} deviceId 
   * @param {String} sensorId 
   * @param {String} body 
   */
  this.putSensorName = async function(deviceId, sensorId, body) {
    var postBody = body;

    // verify the required parameter 'deviceId' is set
    if (deviceId === undefined || deviceId === null) {
      throw("Missing the required parameter 'deviceId' when calling putSensorName");
    }

    // verify the required parameter 'sensorId' is set
    if (sensorId === undefined || sensorId === null) {
      throw("Missing the required parameter 'sensorId' when calling putSensorName");
    }

    // verify the required parameter 'body' is set
    if (body === undefined || body === null) {
      throw("Missing the required parameter 'body' when calling putSensorName");
    }


    var pathParams = {
      'device_id': deviceId,
      'sensor_id': sensorId
    };
    var queryParams = {};
    var headerParams = {};
    var formParams = {};

    var authNames = ['Bearer'];
    var contentTypes = ['text/plain'];
    var accepts = ['application/json'];
    var returnType = null;

    return this.apiClient.callApi(
      '/devices/{device_id}/sensors/{sensor_id}/name', 'PUT',
      pathParams, queryParams, headerParams, formParams, postBody,
      authNames, contentTypes, accepts, returnType);
  }

  /**
   * insert device kind
   * @param {String} deviceId 
   * @param {String} sensorId 
   * @param {String} body 
   */
  this.putSensorDeviceKind = async function(deviceId, sensorId, body) {
    var postBody = body;

    // verify the required parameter 'deviceId' is set
    if (deviceId === undefined || deviceId === null) {
      throw("Missing the required parameter 'deviceId' when calling putSensorDeviceKind");
    }

    // verify the required parameter 'sensorId' is set
    if (sensorId === undefined || sensorId === null) {
      throw("Missing the required parameter 'sensorId' when calling putSensorDeviceKind");
    }

    // verify the required parameter 'body' is set
    if (body === undefined || body === null) {
      throw("Missing the required parameter 'body' when calling putSensorDeviceKind");
    }


    var pathParams = {
      'device_id': deviceId,
      'sensor_id': sensorId
    };
    var queryParams = {};
    var headerParams = {};
    var formParams = {};

    var authNames = ['Bearer'];
    var contentTypes = ['text/plain'];
    var accepts = ['application/json'];
    var returnType = null;

    return this.apiClient.callApi(
      '/devices/{device_id}/sensors/{sensor_id}/sensor_kind', 'PUT',
      pathParams, queryParams, headerParams, formParams, postBody,
      authNames, contentTypes, accepts, returnType);
  }

  /**
   * put sensor unit
   * @param {String} deviceId 
   * @param {String} sensorId 
   * @param {String} body 
   */
  this.putSensorUnit = async function(deviceId, sensorId, body) {
    var postBody = body;

    // verify the required parameter 'deviceId' is set
    if (deviceId === undefined || deviceId === null) {
      throw("Missing the required parameter 'deviceId' when calling putSensorUnit");
    }

    // verify the required parameter 'sensorId' is set
    if (sensorId === undefined || sensorId === null) {
      throw("Missing the required parameter 'sensorId' when calling putSensorUnit");
    }

    // verify the required parameter 'body' is set
    if (body === undefined || body === null) {
      throw("Missing the required parameter 'body' when calling putSensorUnit");
    }


    var pathParams = {
      'device_id': deviceId,
      'sensor_id': sensorId
    };
    var queryParams = {};
    var headerParams = {};
    var formParams = {};

    var authNames = ['Bearer'];
    var contentTypes = ['text/plain'];
    var accepts = ['application/json'];
    var returnType = null;

    return this.apiClient.callApi(
      '/devices/{device_id}/sensors/{sensor_id}/unit', 'PUT',
      pathParams, queryParams, headerParams, formParams, postBody,
      authNames, contentTypes, accepts, returnType);
  }

  /**
   * get sensor values
   * @param {String} deviceId 
   * @param {String} sensorId
   * @param {Object} opts Optional parameters
   * @param {String} opts.lastN get the last N entries, most recent first. Default value is 20.
   * @param {String} opts.limit In case of pagination, number of entris per page
   * @param {String} opts.offset In case of pagination, offset for the starting entry
   * @param {String} opts.dateFrom The starting date and time from which the entries are desired. It is an optional parameter.
   * @param {String} opts.dateTo The final date and time until which the entries are desired. It is an optional parameter. 
   * data is of type: {@link Array.<module:model/SensorValue>}
   */
  this.getSensorValues = async function(deviceId, sensorId, opts) {
    var postBody = null;

    // verify the required parameter 'deviceId' is set
    if (deviceId === undefined || deviceId === null) {
      throw("Missing the required parameter 'deviceId' when calling getSensorValues");
    }

    // verify the required parameter 'sensorId' is set
    if (sensorId === undefined || sensorId === null) {
      throw("Missing the required parameter 'sensorId' when calling getSensorValues");
    }

    var pathParams = {
      'device_id': deviceId,
      'sensor_id': sensorId
    };
    var queryParams = {
      'device_id': deviceId,
      'sensor_id': sensorId,
      'lastN'   : opts['lastN'],
      'limit'   : opts['limit'],
      'offset'  : opts['offset'],
      'dateFrom': opts['dateFrom'],
      'dateTo'  : opts['dateTo']
    };
    var headerParams = {};
    var formParams = {};

    var authNames = ['Bearer'];
    var contentTypes = ['application/json'];
    var accepts = ['application/json'];
    var returnType = [SensorValue];

    return this.apiClient.callApi(
      '/sensors_data', 'GET',
      pathParams, queryParams, headerParams, formParams, postBody,
      authNames, contentTypes, accepts, returnType);
  }

  /**
   * Create new datapoint
   * @param {String} deviceId 
   * @param {String} sensorId 
   * @param {module:model/SensorValue} body 
   */
  this.addDatapoint = async function(deviceId, sensorId, body) {
    var postBody = body;

    // verify the required parameter 'deviceId' is set
    if (deviceId === undefined || deviceId === null) {
      throw("Missing the required parameter 'deviceId' when calling addDatapoint");
    }

    // verify the required parameter 'sensorId' is set
    if (sensorId === undefined || sensorId === null) {
      throw("Missing the required parameter 'sensorId' when calling addDatapoint");
    }

    // verify the required parameter 'body' is set
    if (body === undefined || body === null) {
      throw("Missing the required parameter 'body' when calling addDatapoint");
    }


    var pathParams = {
      'device_id': deviceId,
      'sensor_id': sensorId
    };
    var queryParams = {};
    var headerParams = {};
    var formParams = {};

    var authNames = ['Bearer'];
    var contentTypes = ['application/json'];
    var accepts = ['application/json'];
    var returnType = null;

    return this.apiClient.callApi(
      '/devices/{device_id}/sensors/{sensor_id}/value', 'POST',
      pathParams, queryParams, headerParams, formParams, postBody,
      authNames, contentTypes, accepts, returnType);
  }

  /**
   * insert new sensor
   * @param {String} deviceId 
   * @param {module:model/Sensor} body 
   */
  this.addSensor = async function(deviceId, body) {
    var postBody = body;

    // verify the required parameter 'deviceId' is set
    if (deviceId === undefined || deviceId === null) {
      throw("Missing the required parameter 'deviceId' when calling addSensor");
    }

    // verify the required parameter 'body' is set
    if (body === undefined || body === null) {
      throw("Missing the required parameter 'body' when calling addSensor");
    }


    var pathParams = {
      'device_id': deviceId
    };
    var queryParams = {};
    var headerParams = {};
    var formParams = {};

    var authNames = ['Bearer'];
    var contentTypes = ['application/json'];
    var accepts = ['application/json'];
    var returnType = null;

    return this.apiClient.callApi(
      '/devices/{device_id}/sensors', 'POST',
      pathParams, queryParams, headerParams, formParams, postBody,
      authNames, contentTypes, accepts, returnType);
  }

  /**
   * insert name
   * @param {String} deviceId 
   * @param {String} body 
   */
  this.putDeviceName = async function(deviceId, body) {
    var postBody = body;

    // verify the required parameter 'deviceId' is set
    if (deviceId === undefined || deviceId === null) {
      throw("Missing the required parameter 'deviceId' when calling putDeviceName");
    }

    // verify the required parameter 'body' is set
    if (body === undefined || body === null) {
      throw("Missing the required parameter 'body' when calling putDeviceName");
    }


    var pathParams = {
      'device_id': deviceId
    };
    var queryParams = {};
    var headerParams = {};
    var formParams = {};

    var authNames = ['Bearer'];
    var contentTypes = ['text/plain'];
    var accepts = ['application/json'];
    var returnType = null;

    return this.apiClient.callApi(
      '/devices/{device_id}/name', 'PUT',
      pathParams, queryParams, headerParams, formParams, postBody,
      authNames, contentTypes, accepts, returnType);
  }

  /**
   * insert owner
   * @param {String} deviceId 
   * @param {String} body 
   */
  this.putDeviceOwner = async function(deviceId, body) {
    var postBody = body;

    // verify the required parameter 'deviceId' is set
    if (deviceId === undefined || deviceId === null) {
      throw("Missing the required parameter 'deviceId' when calling putDeviceOwner");
    }

    // verify the required parameter 'body' is set
    if (body === undefined || body === null) {
      throw("Missing the required parameter 'body' when calling putDeviceOwner");
    }

    var pathParams = {
      'device_id': deviceId
    };
    var queryParams = {};
    var headerParams = {};
    var formParams = {};

    var authNames = ['Bearer'];
    var contentTypes = ['text/plain'];
    var accepts = ['application/json'];
    var returnType = null;

    return this.apiClient.callApi(
      '/devices/{device_id}/owner', 'PUT',
      pathParams, queryParams, headerParams, formParams, postBody,
      authNames, contentTypes, accepts, returnType);
  }

  /**
   * insert visibility
   * @param {String} deviceId 
   * @param {String} body 
   */
  this.putDeviceVisility = async function(deviceId, body) {
    var postBody = body;

    // verify the required parameter 'deviceId' is set
    if (deviceId === undefined || deviceId === null) {
      throw("Missing the required parameter 'deviceId' when calling putDeviceOwner");
    }

    // verify the required parameter 'body' is set
    if (body === undefined || body === null) {
      throw("Missing the required parameter 'body' when calling putDeviceOwner");
    }

    var pathParams = {
      'device_id': deviceId
    };
    var queryParams = {};
    var headerParams = {};
    var formParams = {};

    var authNames = ['Bearer'];
    var contentTypes = ['text/plain'];
    var accepts = ['application/json'];
    var returnType = null;

    return this.apiClient.callApi(
      '/devices/{device_id}/visibility', 'PUT',
      pathParams, queryParams, headerParams, formParams, postBody,
      authNames, contentTypes, accepts, returnType);
  }
  /**
   * insert gateway_id
   * @param {String} deviceId 
   * @param {String} body 
   */
  this.putDeviceGatewayId = async function(deviceId, body) {
    var postBody = body;

    // verify the required parameter 'deviceId' is set
    if (deviceId === undefined || deviceId === null) {
      throw("Missing the required parameter 'deviceId' when calling putDeviceGatewayId");
    }

    // verify the required parameter 'body' is set
    if (body === undefined || body === null) {
      throw("Missing the required parameter 'body' when calling putDeviceGatewayId");
    }

    var pathParams = {
      'device_id': deviceId
    };
    var queryParams = {};
    var headerParams = {};
    var formParams = {};

    var authNames = ['Bearer'];
    var contentTypes = ['text/plain'];
    var accepts = ['application/json'];
    var returnType = null;

    return this.apiClient.callApi(
      '/devices/{device_id}/gateway_id', 'PUT',
      pathParams, queryParams, headerParams, formParams, postBody,
      authNames, contentTypes, accepts, returnType);
  }
};

export default exports;
