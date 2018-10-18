'use strict';
import ApiClient from '../ApiClient'
import Error from '../model/Error'
import Location from '../model/Location'
import Measurement from '../model/Measurement'
import MeasurementValue from '../model/MeasurementValue'
import Sensor from '../model/Sensor'

/**
 * Constructs a new SensorsApi. 
 * @alias module:api/SensorsApi
 * @class
 * @param {module:ApiClient} apiClient Optional API client implementation to use,
 * default to {@link module:ApiClient#instance} if unspecified.
 */
var exports = function(apiClient) {
  this.apiClient = apiClient || ApiClient.instance;

  /**
   * Sensor data
   * 
   * @param {Object} opts Optional parameters
   * @param {String} opts.q filter the results
   * data is of type: {@link Array.<module:model/Sensor>}
   */
  this.getSensors = async function(opts) {
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
    var returnType = [Sensor];

    return this.apiClient.callApi(
      '/sensors', 'GET',
      pathParams, queryParams, headerParams, formParams, postBody,
      authNames, contentTypes, accepts, returnType)
  }

  /**
   * Create sensors
   * Endpoint to create sensing devices.
   * @param {module:model/Sensor} body 
   */
  this.createSensor = async function(body) {
    var postBody = body;

    // verify the required parameter 'body' is set
    if (body === undefined || body === null) {
      throw("Missing the required parameter 'body' when calling createSensor");
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
      'sensors', 'POST',
      pathParams, queryParams, headerParams, formParams, postBody,
      authNames, contentTypes, accepts, returnType);
  }

  /**
   * Delete sensor
   * 
   * @param {String} sensorId 
   */
  this.deleteSensor = async function(sensorId) {
    var postBody = null;

    // verify the required parameter 'sensorId' is set
    if (sensorId === undefined || sensorId === null) {
      throw("Missing the required parameter 'sensorId' when calling deleteSensor");
    }


    var pathParams = {
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
      '/sensors/{sensor_id}', 'DELETE',
      pathParams, queryParams, headerParams, formParams, postBody,
      authNames, contentTypes, accepts, returnType);
  }

  /**
   * get sensor
   * 
   * @param {String} sensorId 
   * data is of type: {@link module:model/Sensor}
   */
  this.getSensor = async function(sensorId) {
    var postBody = null;

    // verify the required parameter 'sensorId' is set
    if (sensorId === undefined || sensorId === null) {
      throw("Missing the required parameter 'sensorId' when calling getSensor");
    }


    var pathParams = {
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
      '/sensors/{sensor_id}', 'GET',
      pathParams, queryParams, headerParams, formParams, postBody,
      authNames, contentTypes, accepts, returnType);
  }

  /**
   * insert location
   * @param {String} sensorId 
   * @param {module:model/Location} body 
   */
  this.putSensorLocation = async function(sensorId, body) {
    var postBody = body;

    // verify the required parameter 'sensorId' is set
    if (sensorId === undefined || sensorId === null) {
      throw("Missing the required parameter 'sensorId' when calling putSensorLocation");
    }

    // verify the required parameter 'body' is set
    if (body === undefined || body === null) {
      throw("Missing the required parameter 'body' when calling putSensorLocation");
    }


    var pathParams = {
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
      '/sensors/{sensor_id}/location', 'PUT',
      pathParams, queryParams, headerParams, formParams, postBody,
      authNames, contentTypes, accepts, returnType);
  }

  /**
   * get measurements
   * @param {String} sensorId 
   * data is of type: {@link Array.<module:model/Measurement>}
   */
  this.getSensorMeasurements = async function(sensorId) {
    var postBody = null;

    // verify the required parameter 'sensorId' is set
    if (sensorId === undefined || sensorId === null) {
      throw("Missing the required parameter 'sensorId' when calling getSensorMeasurements");
    }


    var pathParams = {
      'sensor_id': sensorId
    };
    var queryParams = {};
    var headerParams = {};
    var formParams = {};

    var authNames = ['Bearer'];
    var contentTypes = ['application/json'];
    var accepts = ['application/json'];
    var returnType = [Measurement];

    return this.apiClient.callApi(
      '/sensors/{sensor_id}/measurements', 'GET',
      pathParams, queryParams, headerParams, formParams, postBody,
      authNames, contentTypes, accepts, returnType);
  }

  /**
   * Delete measurement
   * 
   * @param {String} sensorId 
   * @param {String} measurementId 
   * @param {module:api/SensorsApi~deleteMeasurementCallback} callback The callback function, accepting three arguments: error, data, response
   */
  this.deleteMeasurement = async function(sensorId, measurementId) {
    var postBody = null;

    // verify the required parameter 'sensorId' is set
    if (sensorId === undefined || sensorId === null) {
      throw("Missing the required parameter 'sensorId' when calling deleteMeasurement");
    }

    // verify the required parameter 'measurementId' is set
    if (measurementId === undefined || measurementId === null) {
      throw("Missing the required parameter 'measurementId' when calling deleteMeasurement");
    }


    var pathParams = {
      'sensor_id': sensorId,
      'measurement_id': measurementId
    };
    var queryParams = {};
    var headerParams = {};
    var formParams = {};

    var authNames = ['Bearer'];
    var contentTypes = ['application/json'];
    var accepts = ['application/json'];
    var returnType = null;

    return this.apiClient.callApi(
      '/sensors/{sensor_id}/measurements/{measurement_id}', 'DELETE',
      pathParams, queryParams, headerParams, formParams, postBody,
      authNames, contentTypes, accepts, returnType);
  }

  /**
   * put measurement quantity kind 
   * @param {String} sensorId 
   * @param {String} measurementId 
   * @param {String} body 
   */
  this.putMeasurementQK = async function(sensorId, measurementId, body) {
    var postBody = body;

    // verify the required parameter 'sensorId' is set
    if (sensorId === undefined || sensorId === null) {
      throw("Missing the required parameter 'sensorId' when calling putMeasurementQK");
    }

    // verify the required parameter 'measurementId' is set
    if (measurementId === undefined || measurementId === null) {
      throw("Missing the required parameter 'measurementId' when calling putMeasurementQK");
    }

    // verify the required parameter 'body' is set
    if (body === undefined || body === null) {
      throw("Missing the required parameter 'body' when calling putMeasurementQK");
    }


    var pathParams = {
      'sensor_id': sensorId,
      'measurement_id': measurementId
    };
    var queryParams = {};
    var headerParams = {};
    var formParams = {};

    var authNames = ['Bearer'];
    var contentTypes = ['text/plain'];
    var accepts = ['application/json'];
    var returnType = null;

    return this.apiClient.callApi(
      '/sensors/{sensor_id}/measurements/{measurement_id}/quantity_kind', 'PUT',
      pathParams, queryParams, headerParams, formParams, postBody,
      authNames, contentTypes, accepts, returnType);
  }

  /**
   * get measurement
   * @param {String} sensorId 
   * @param {String} measurementId 
   * data is of type: {@link module:model/Measurement}
   */
  this.getMeasurement = async function(sensorId, measurementId) {
    var postBody = null;

    // verify the required parameter 'sensorId' is set
    if (sensorId === undefined || sensorId === null) {
      throw("Missing the required parameter 'sensorId' when calling getMeasurement");
    }

    // verify the required parameter 'measurementId' is set
    if (measurementId === undefined || measurementId === null) {
      throw("Missing the required parameter 'measurementId' when calling getMeasurement");
    }


    var pathParams = {
      'sensor_id': sensorId,
      'measurement_id': measurementId
    };
    var queryParams = {};
    var headerParams = {};
    var formParams = {};

    var authNames = ['Bearer'];
    var contentTypes = ['application/json'];
    var accepts = ['application/json'];
    var returnType = Measurement;

    return this.apiClient.callApi(
      '/sensors/{sensor_id}/measurements/{measurement_id}', 'GET',
      pathParams, queryParams, headerParams, formParams, postBody,
      authNames, contentTypes, accepts, returnType);
  }

  /**
   * put measurement name
   * @param {String} sensorId 
   * @param {String} measurementId 
   * @param {String} body 
   */
  this.putMeasurementName = async function(sensorId, measurementId, body) {
    var postBody = body;

    // verify the required parameter 'sensorId' is set
    if (sensorId === undefined || sensorId === null) {
      throw("Missing the required parameter 'sensorId' when calling putMeasurementName");
    }

    // verify the required parameter 'measurementId' is set
    if (measurementId === undefined || measurementId === null) {
      throw("Missing the required parameter 'measurementId' when calling putMeasurementName");
    }

    // verify the required parameter 'body' is set
    if (body === undefined || body === null) {
      throw("Missing the required parameter 'body' when calling putMeasurementName");
    }


    var pathParams = {
      'sensor_id': sensorId,
      'measurement_id': measurementId
    };
    var queryParams = {};
    var headerParams = {};
    var formParams = {};

    var authNames = ['Bearer'];
    var contentTypes = ['text/plain'];
    var accepts = ['application/json'];
    var returnType = null;

    return this.apiClient.callApi(
      '/sensors/{sensor_id}/measurements/{measurement_id}/name', 'PUT',
      pathParams, queryParams, headerParams, formParams, postBody,
      authNames, contentTypes, accepts, returnType);
  }

  /**
   * insert sensor kind
   * @param {String} sensorId 
   * @param {String} measurementId 
   * @param {String} body 
   */
  this.putMeasurementSensorKind = async function(sensorId, measurementId, body) {
    var postBody = body;

    // verify the required parameter 'sensorId' is set
    if (sensorId === undefined || sensorId === null) {
      throw("Missing the required parameter 'sensorId' when calling putMeasurementSensorKind");
    }

    // verify the required parameter 'measurementId' is set
    if (measurementId === undefined || measurementId === null) {
      throw("Missing the required parameter 'measurementId' when calling putMeasurementSensorKind");
    }

    // verify the required parameter 'body' is set
    if (body === undefined || body === null) {
      throw("Missing the required parameter 'body' when calling putMeasurementSensorKind");
    }


    var pathParams = {
      'sensor_id': sensorId,
      'measurement_id': measurementId
    };
    var queryParams = {};
    var headerParams = {};
    var formParams = {};

    var authNames = ['Bearer'];
    var contentTypes = ['text/plain'];
    var accepts = ['application/json'];
    var returnType = null;

    return this.apiClient.callApi(
      '/sensors/{sensor_id}/measurements/{measurement_id}/sensing_device', 'PUT',
      pathParams, queryParams, headerParams, formParams, postBody,
      authNames, contentTypes, accepts, returnType);
  }

  /**
   * put measurement unit
   * @param {String} sensorId 
   * @param {String} measurementId 
   * @param {String} body 
   */
  this.putMeasurementUnit = async function(sensorId, measurementId, body) {
    var postBody = body;

    // verify the required parameter 'sensorId' is set
    if (sensorId === undefined || sensorId === null) {
      throw("Missing the required parameter 'sensorId' when calling putMeasurementUnit");
    }

    // verify the required parameter 'measurementId' is set
    if (measurementId === undefined || measurementId === null) {
      throw("Missing the required parameter 'measurementId' when calling putMeasurementUnit");
    }

    // verify the required parameter 'body' is set
    if (body === undefined || body === null) {
      throw("Missing the required parameter 'body' when calling putMeasurementUnit");
    }


    var pathParams = {
      'sensor_id': sensorId,
      'measurement_id': measurementId
    };
    var queryParams = {};
    var headerParams = {};
    var formParams = {};

    var authNames = ['Bearer'];
    var contentTypes = ['text/plain'];
    var accepts = ['application/json'];
    var returnType = null;

    return this.apiClient.callApi(
      '/sensors/{sensor_id}/measurements/{measurement_id}/unit', 'PUT',
      pathParams, queryParams, headerParams, formParams, postBody,
      authNames, contentTypes, accepts, returnType);
  }

  /**
   * get measurement values
   * @param {String} sensorId 
   * @param {String} measurementId
   * @param {Object} opts Optional parameters
   * @param {String} opts.lastN get the last N entries, most recent first. Default value is 20.
   * @param {String} opts.limit In case of pagination, number of entris per page
   * @param {String} opts.offset In case of pagination, offset for the starting entry
   * @param {String} opts.dateFrom The starting date and time from which the entries are desired. It is an optional parameter.
   * @param {String} opts.dateTo The final date and time until which the entries are desired. It is an optional parameter. 
   * data is of type: {@link Array.<module:model/MeasurementValue>}
   */
  this.getMeasurementValues = async function(sensorId, measurementId, opts) {
    var postBody = null;

    // verify the required parameter 'sensorId' is set
    if (sensorId === undefined || sensorId === null) {
      throw("Missing the required parameter 'sensorId' when calling getMeasurementValues");
    }

    // verify the required parameter 'measurementId' is set
    if (measurementId === undefined || measurementId === null) {
      throw("Missing the required parameter 'measurementId' when calling getMeasurementValues");
    }

    var pathParams = {
      'sensor_id': sensorId,
      'measurement_id': measurementId
    };
    var queryParams = {
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
    var returnType = [MeasurementValue];

    return this.apiClient.callApi(
      '/sensors/{sensor_id}/measurements/{measurement_id}/values', 'GET',
      pathParams, queryParams, headerParams, formParams, postBody,
      authNames, contentTypes, accepts, returnType);
  }

  /**
   * Create new datapoint
   * @param {String} sensorId 
   * @param {String} measurementId 
   * @param {module:model/MeasurementValue} body 
   */
  this.addDatapoint = async function(sensorId, measurementId, body) {
    var postBody = body;

    // verify the required parameter 'sensorId' is set
    if (sensorId === undefined || sensorId === null) {
      throw("Missing the required parameter 'sensorId' when calling addDatapoint");
    }

    // verify the required parameter 'measurementId' is set
    if (measurementId === undefined || measurementId === null) {
      throw("Missing the required parameter 'measurementId' when calling addDatapoint");
    }

    // verify the required parameter 'body' is set
    if (body === undefined || body === null) {
      throw("Missing the required parameter 'body' when calling addDatapoint");
    }


    var pathParams = {
      'sensor_id': sensorId,
      'measurement_id': measurementId
    };
    var queryParams = {};
    var headerParams = {};
    var formParams = {};

    var authNames = ['Bearer'];
    var contentTypes = ['application/json'];
    var accepts = ['application/json'];
    var returnType = null;

    return this.apiClient.callApi(
      '/sensors/{sensor_id}/measurements/{measurement_id}/values', 'POST',
      pathParams, queryParams, headerParams, formParams, postBody,
      authNames, contentTypes, accepts, returnType);
  }

  /**
   * insert new measurement
   * @param {String} sensorId 
   * @param {module:model/Measurement} body 
   */
  this.addMeasurement = async function(sensorId, body) {
    var postBody = body;

    // verify the required parameter 'sensorId' is set
    if (sensorId === undefined || sensorId === null) {
      throw("Missing the required parameter 'sensorId' when calling addMeasurement");
    }

    // verify the required parameter 'body' is set
    if (body === undefined || body === null) {
      throw("Missing the required parameter 'body' when calling addMeasurement");
    }


    var pathParams = {
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
      '/sensors/{sensor_id}/measurements', 'POST',
      pathParams, queryParams, headerParams, formParams, postBody,
      authNames, contentTypes, accepts, returnType);
  }

  /**
   * insert name
   * @param {String} sensorId 
   * @param {String} body 
   */
  this.putSensorName = async function(sensorId, body) {
    var postBody = body;

    // verify the required parameter 'sensorId' is set
    if (sensorId === undefined || sensorId === null) {
      throw("Missing the required parameter 'sensorId' when calling putSensorName");
    }

    // verify the required parameter 'body' is set
    if (body === undefined || body === null) {
      throw("Missing the required parameter 'body' when calling putSensorName");
    }


    var pathParams = {
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
      '/sensors/{sensor_id}/name', 'PUT',
      pathParams, queryParams, headerParams, formParams, postBody,
      authNames, contentTypes, accepts, returnType);
  }

  /**
   * insert owner
   * @param {String} sensorId 
   * @param {String} body 
   */
  this.putSensorOwner = async function(sensorId, body) {
    var postBody = body;

    // verify the required parameter 'sensorId' is set
    if (sensorId === undefined || sensorId === null) {
      throw("Missing the required parameter 'sensorId' when calling putSensorOwner");
    }

    // verify the required parameter 'body' is set
    if (body === undefined || body === null) {
      throw("Missing the required parameter 'body' when calling putSensorOwner");
    }

    var pathParams = {
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
      '/sensors/{sensor_id}/owner', 'PUT',
      pathParams, queryParams, headerParams, formParams, postBody,
      authNames, contentTypes, accepts, returnType);
  }

  /**
   * insert visibility
   * @param {String} sensorId 
   * @param {String} body 
   */
  this.putSensorVisility = async function(sensorId, body) {
    var postBody = body;

    // verify the required parameter 'sensorId' is set
    if (sensorId === undefined || sensorId === null) {
      throw("Missing the required parameter 'sensorId' when calling putSensorOwner");
    }

    // verify the required parameter 'body' is set
    if (body === undefined || body === null) {
      throw("Missing the required parameter 'body' when calling putSensorOwner");
    }

    var pathParams = {
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
      '/sensors/{sensor_id}/visibility', 'PUT',
      pathParams, queryParams, headerParams, formParams, postBody,
      authNames, contentTypes, accepts, returnType);
  }
  /**
   * insert gateway_id
   * @param {String} sensorId 
   * @param {String} body 
   */
  this.putSensorGatewayId = async function(sensorId, body) {
    var postBody = body;

    // verify the required parameter 'sensorId' is set
    if (sensorId === undefined || sensorId === null) {
      throw("Missing the required parameter 'sensorId' when calling putSensorGatewayId");
    }

    // verify the required parameter 'body' is set
    if (body === undefined || body === null) {
      throw("Missing the required parameter 'body' when calling putSensorGatewayId");
    }

    var pathParams = {
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
      '/sensors/{sensor_id}/gateway_id', 'PUT',
      pathParams, queryParams, headerParams, formParams, postBody,
      authNames, contentTypes, accepts, returnType);
  }
};

export default exports;
