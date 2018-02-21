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
   * @param {String} domain 
   * @param {Object} opts Optional parameters
   * @param {String} opts.q filter the results
   * data is of type: {@link Array.<module:model/Sensor>}
   */
  this.getSensors = async function(domain, opts) {
    opts = opts || {};
    var postBody = null;

    // verify the required parameter 'domain' is set
    if (domain === undefined || domain === null) {
      throw new Error("Missing the required parameter 'domain' when calling getSensors");
    }

    var pathParams = {'domain': domain};
    var queryParams = {'q': opts['q']};
    var headerParams = {};
    var formParams = {};

    var authNames = ['Bearer'];
    var contentTypes = ['application/json'];
    var accepts = ['application/json'];
    var returnType = [Sensor];

    return this.apiClient.callApi(
      '/domains/{domain}/sensors', 'GET',
      pathParams, queryParams, headerParams, formParams, postBody,
      authNames, contentTypes, accepts, returnType)
  }


  /**
   * Create sensors
   * Endpoint to create sensing devices.
   * @param {module:model/Sensor} body 
   * @param {String} domain 
   */
  this.createSensor = async function(domain, body) {
    var postBody = body;

    // verify the required parameter 'body' is set
    if (body === undefined || body === null) {
      throw new Error("Missing the required parameter 'body' when calling createSensor");
    }

    // verify the required parameter 'domain' is set
    if (domain === undefined || domain === null) {
      throw new Error("Missing the required parameter 'domain' when calling createSensor");
    }

    var pathParams = {'domain': domain};
    var queryParams = {};
    var headerParams = {};
    var formParams = {};

    var authNames = ['Bearer'];
    var contentTypes = ['application/json'];
    var accepts = ['application/json'];
    var returnType = null;

    return this.apiClient.callApi(
      '/domains/{domain}/sensors', 'POST',
      pathParams, queryParams, headerParams, formParams, postBody,
      authNames, contentTypes, accepts, returnType);
  }

  /**
   * Delete sensor
   * 
   * @param {String} domain 
   * @param {String} sensorId 
   */
  this.deleteSensor = async function(domain, sensorId) {
    var postBody = null;

    // verify the required parameter 'domain' is set
    if (domain === undefined || domain === null) {
      throw new Error("Missing the required parameter 'domain' when calling deleteSensor");
    }

    // verify the required parameter 'sensorId' is set
    if (sensorId === undefined || sensorId === null) {
      throw new Error("Missing the required parameter 'sensorId' when calling deleteSensor");
    }


    var pathParams = {
      'domain': domain,
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
      '/domains/{domain}/sensors/{sensor_id}', 'DELETE',
      pathParams, queryParams, headerParams, formParams, postBody,
      authNames, contentTypes, accepts, returnType);
  }

  /**
   * get sensor
   * 
   * @param {String} domain 
   * @param {String} sensorId 
   * data is of type: {@link module:model/Sensor}
   */
  this.getSensor = async function(domain, sensorId) {
    var postBody = null;

    // verify the required parameter 'domain' is set
    if (domain === undefined || domain === null) {
      throw new Error("Missing the required parameter 'domain' when calling getSensor");
    }

    // verify the required parameter 'sensorId' is set
    if (sensorId === undefined || sensorId === null) {
      throw new Error("Missing the required parameter 'sensorId' when calling getSensor");
    }


    var pathParams = {
      'domain': domain,
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
      '/domains/{domain}/sensors/{sensor_id}', 'GET',
      pathParams, queryParams, headerParams, formParams, postBody,
      authNames, contentTypes, accepts, returnType);
  }

  /**
   * insert location
   * @param {String} domain 
   * @param {String} sensorId 
   * @param {module:model/Location} body 
   */
  this.putSensorLocation = async function(domain, sensorId, body) {
    var postBody = body;

    // verify the required parameter 'domain' is set
    if (domain === undefined || domain === null) {
      throw new Error("Missing the required parameter 'domain' when calling putSensorLocation");
    }

    // verify the required parameter 'sensorId' is set
    if (sensorId === undefined || sensorId === null) {
      throw new Error("Missing the required parameter 'sensorId' when calling putSensorLocation");
    }

    // verify the required parameter 'body' is set
    if (body === undefined || body === null) {
      throw new Error("Missing the required parameter 'body' when calling putSensorLocation");
    }


    var pathParams = {
      'domain': domain,
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
      '/domains/{domain}/sensors/{sensor_id}/location', 'PUT',
      pathParams, queryParams, headerParams, formParams, postBody,
      authNames, contentTypes, accepts, returnType);
  }

  /**
   * get measurements
   * @param {String} domain 
   * @param {String} sensorId 
   * data is of type: {@link Array.<module:model/Measurement>}
   */
  this.getSensorMeasurements = async function(domain, sensorId) {
    var postBody = null;

    // verify the required parameter 'domain' is set
    if (domain === undefined || domain === null) {
      throw new Error("Missing the required parameter 'domain' when calling getSensorMeasurements");
    }

    // verify the required parameter 'sensorId' is set
    if (sensorId === undefined || sensorId === null) {
      throw new Error("Missing the required parameter 'sensorId' when calling getSensorMeasurements");
    }


    var pathParams = {
      'domain': domain,
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
      '/domains/{domain}/sensors/{sensor_id}/measurements', 'GET',
      pathParams, queryParams, headerParams, formParams, postBody,
      authNames, contentTypes, accepts, returnType);
  }

  /**
   * Delete measurement
   * 
   * @param {String} domain 
   * @param {String} sensorId 
   * @param {String} measurementId 
   * @param {module:api/SensorsApi~deleteMeasurementCallback} callback The callback function, accepting three arguments: error, data, response
   */
  this.deleteMeasurement = async function(domain, sensorId, measurementId) {
    var postBody = null;

    // verify the required parameter 'domain' is set
    if (domain === undefined || domain === null) {
      throw new Error("Missing the required parameter 'domain' when calling deleteMeasurement");
    }

    // verify the required parameter 'sensorId' is set
    if (sensorId === undefined || sensorId === null) {
      throw new Error("Missing the required parameter 'sensorId' when calling deleteMeasurement");
    }

    // verify the required parameter 'measurementId' is set
    if (measurementId === undefined || measurementId === null) {
      throw new Error("Missing the required parameter 'measurementId' when calling deleteMeasurement");
    }


    var pathParams = {
      'domain': domain,
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
      '/domains/{domain}/sensors/{sensor_id}/measurements/{measurement_id}', 'DELETE',
      pathParams, queryParams, headerParams, formParams, postBody,
      authNames, contentTypes, accepts, returnType);
  }

  /**
   * put measurement dimension
   * @param {String} domain 
   * @param {String} sensorId 
   * @param {String} measurementId 
   * @param {String} body 
   */
  this.putMeasurementDimension = async function(domain, sensorId, measurementId, body) {
    var postBody = body;

    // verify the required parameter 'domain' is set
    if (domain === undefined || domain === null) {
      throw new Error("Missing the required parameter 'domain' when calling putMeasurementDimension");
    }

    // verify the required parameter 'sensorId' is set
    if (sensorId === undefined || sensorId === null) {
      throw new Error("Missing the required parameter 'sensorId' when calling putMeasurementDimension");
    }

    // verify the required parameter 'measurementId' is set
    if (measurementId === undefined || measurementId === null) {
      throw new Error("Missing the required parameter 'measurementId' when calling putMeasurementDimension");
    }

    // verify the required parameter 'body' is set
    if (body === undefined || body === null) {
      throw new Error("Missing the required parameter 'body' when calling putMeasurementDimension");
    }


    var pathParams = {
      'domain': domain,
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
      '/domains/{domain}/sensors/{sensor_id}/measurements/{measurement_id}/dimension', 'PUT',
      pathParams, queryParams, headerParams, formParams, postBody,
      authNames, contentTypes, accepts, returnType);
  }

  /**
   * get measurement
   * @param {String} domain 
   * @param {String} sensorId 
   * @param {String} measurementId 
   * data is of type: {@link module:model/Measurement}
   */
  this.getMeasurement = async function(domain, sensorId, measurementId) {
    var postBody = null;

    // verify the required parameter 'domain' is set
    if (domain === undefined || domain === null) {
      throw new Error("Missing the required parameter 'domain' when calling getMeasurement");
    }

    // verify the required parameter 'sensorId' is set
    if (sensorId === undefined || sensorId === null) {
      throw new Error("Missing the required parameter 'sensorId' when calling getMeasurement");
    }

    // verify the required parameter 'measurementId' is set
    if (measurementId === undefined || measurementId === null) {
      throw new Error("Missing the required parameter 'measurementId' when calling getMeasurement");
    }


    var pathParams = {
      'domain': domain,
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
      '/domains/{domain}/sensors/{sensor_id}/measurements/{measurement_id}', 'GET',
      pathParams, queryParams, headerParams, formParams, postBody,
      authNames, contentTypes, accepts, returnType);
  }

  /**
   * put measurement name
   * @param {String} domain 
   * @param {String} sensorId 
   * @param {String} measurementId 
   * @param {String} body 
   */
  this.putMeasurementName = async function(domain, sensorId, measurementId, body) {
    var postBody = body;

    // verify the required parameter 'domain' is set
    if (domain === undefined || domain === null) {
      throw new Error("Missing the required parameter 'domain' when calling putMeasurementName");
    }

    // verify the required parameter 'sensorId' is set
    if (sensorId === undefined || sensorId === null) {
      throw new Error("Missing the required parameter 'sensorId' when calling putMeasurementName");
    }

    // verify the required parameter 'measurementId' is set
    if (measurementId === undefined || measurementId === null) {
      throw new Error("Missing the required parameter 'measurementId' when calling putMeasurementName");
    }

    // verify the required parameter 'body' is set
    if (body === undefined || body === null) {
      throw new Error("Missing the required parameter 'body' when calling putMeasurementName");
    }


    var pathParams = {
      'domain': domain,
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
      '/domains/{domain}/sensors/{sensor_id}/measurements/{measurement_id}/name', 'PUT',
      pathParams, queryParams, headerParams, formParams, postBody,
      authNames, contentTypes, accepts, returnType);
  }

  /**
   * insert sensor kind
   * @param {String} domain 
   * @param {String} sensorId 
   * @param {String} measurementId 
   * @param {String} body 
   */
  this.putMeasurementSensorKind = async function(domain, sensorId, measurementId, body) {
    var postBody = body;

    // verify the required parameter 'domain' is set
    if (domain === undefined || domain === null) {
      throw new Error("Missing the required parameter 'domain' when calling putMeasurementSensorKind");
    }

    // verify the required parameter 'sensorId' is set
    if (sensorId === undefined || sensorId === null) {
      throw new Error("Missing the required parameter 'sensorId' when calling putMeasurementSensorKind");
    }

    // verify the required parameter 'measurementId' is set
    if (measurementId === undefined || measurementId === null) {
      throw new Error("Missing the required parameter 'measurementId' when calling putMeasurementSensorKind");
    }

    // verify the required parameter 'body' is set
    if (body === undefined || body === null) {
      throw new Error("Missing the required parameter 'body' when calling putMeasurementSensorKind");
    }


    var pathParams = {
      'domain': domain,
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
      '/domains/{domain}/sensors/{sensor_id}/measurements/{measurement_id}/sensor_kind', 'PUT',
      pathParams, queryParams, headerParams, formParams, postBody,
      authNames, contentTypes, accepts, returnType);
  }

  /**
   * put measurement unit
   * @param {String} domain 
   * @param {String} sensorId 
   * @param {String} measurementId 
   * @param {String} body 
   */
  this.putMeasurementUnit = async function(domain, sensorId, measurementId, body) {
    var postBody = body;

    // verify the required parameter 'domain' is set
    if (domain === undefined || domain === null) {
      throw new Error("Missing the required parameter 'domain' when calling putMeasurementUnit");
    }

    // verify the required parameter 'sensorId' is set
    if (sensorId === undefined || sensorId === null) {
      throw new Error("Missing the required parameter 'sensorId' when calling putMeasurementUnit");
    }

    // verify the required parameter 'measurementId' is set
    if (measurementId === undefined || measurementId === null) {
      throw new Error("Missing the required parameter 'measurementId' when calling putMeasurementUnit");
    }

    // verify the required parameter 'body' is set
    if (body === undefined || body === null) {
      throw new Error("Missing the required parameter 'body' when calling putMeasurementUnit");
    }


    var pathParams = {
      'domain': domain,
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
      '/domains/{domain}/sensors/{sensor_id}/measurements/{measurement_id}/unit', 'PUT',
      pathParams, queryParams, headerParams, formParams, postBody,
      authNames, contentTypes, accepts, returnType);
  }

  /**
   * get measurement values
   * @param {String} domain 
   * @param {String} sensorId 
   * @param {String} measurementId 
   * data is of type: {@link Array.<module:model/MeasurementValue>}
   */
  this.getMeasurementValues = async function(domain, sensorId, measurementId) {
    var postBody = null;

    // verify the required parameter 'domain' is set
    if (domain === undefined || domain === null) {
      throw new Error("Missing the required parameter 'domain' when calling getMeasurementValues");
    }

    // verify the required parameter 'sensorId' is set
    if (sensorId === undefined || sensorId === null) {
      throw new Error("Missing the required parameter 'sensorId' when calling getMeasurementValues");
    }

    // verify the required parameter 'measurementId' is set
    if (measurementId === undefined || measurementId === null) {
      throw new Error("Missing the required parameter 'measurementId' when calling getMeasurementValues");
    }


    var pathParams = {
      'domain': domain,
      'sensor_id': sensorId,
      'measurement_id': measurementId
    };
    var queryParams = {};
    var headerParams = {};
    var formParams = {};

    var authNames = ['Bearer'];
    var contentTypes = ['application/json'];
    var accepts = ['application/json'];
    var returnType = [MeasurementValue];

    return this.apiClient.callApi(
      '/domains/{domain}/sensors/{sensor_id}/measurements/{measurement_id}/values', 'GET',
      pathParams, queryParams, headerParams, formParams, postBody,
      authNames, contentTypes, accepts, returnType);
  }

  /**
   * Create new datapoint
   * @param {String} domain 
   * @param {String} sensorId 
   * @param {String} measurementId 
   * @param {module:model/MeasurementValue} body 
   */
  this.addDatapoint = async function(domain, sensorId, measurementId, body) {
    var postBody = body;

    // verify the required parameter 'domain' is set
    if (domain === undefined || domain === null) {
      throw new Error("Missing the required parameter 'domain' when calling addDatapoint");
    }

    // verify the required parameter 'sensorId' is set
    if (sensorId === undefined || sensorId === null) {
      throw new Error("Missing the required parameter 'sensorId' when calling addDatapoint");
    }

    // verify the required parameter 'measurementId' is set
    if (measurementId === undefined || measurementId === null) {
      throw new Error("Missing the required parameter 'measurementId' when calling addDatapoint");
    }

    // verify the required parameter 'body' is set
    if (body === undefined || body === null) {
      throw new Error("Missing the required parameter 'body' when calling addDatapoint");
    }


    var pathParams = {
      'domain': domain,
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
      '/domains/{domain}/sensors/{sensor_id}/measurements/{measurement_id}/values', 'POST',
      pathParams, queryParams, headerParams, formParams, postBody,
      authNames, contentTypes, accepts, returnType);
  }

  /**
   * insert new measurement
   * @param {String} domain 
   * @param {String} sensorId 
   * @param {module:model/Measurement} body 
   */
  this.addMeasurement = async function(domain, sensorId, body) {
    var postBody = body;

    // verify the required parameter 'domain' is set
    if (domain === undefined || domain === null) {
      throw new Error("Missing the required parameter 'domain' when calling addMeasurement");
    }

    // verify the required parameter 'sensorId' is set
    if (sensorId === undefined || sensorId === null) {
      throw new Error("Missing the required parameter 'sensorId' when calling addMeasurement");
    }

    // verify the required parameter 'body' is set
    if (body === undefined || body === null) {
      throw new Error("Missing the required parameter 'body' when calling addMeasurement");
    }


    var pathParams = {
      'domain': domain,
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
      '/domains/{domain}/sensors/{sensor_id}/measurements', 'POST',
      pathParams, queryParams, headerParams, formParams, postBody,
      authNames, contentTypes, accepts, returnType);
  }

  /**
   * insert name
   * @param {String} domain 
   * @param {String} sensorId 
   * @param {String} body 
   */
  this.putSensorName = async function(domain, sensorId, body) {
    var postBody = body;

    // verify the required parameter 'domain' is set
    if (domain === undefined || domain === null) {
      throw new Error("Missing the required parameter 'domain' when calling putSensorName");
    }

    // verify the required parameter 'sensorId' is set
    if (sensorId === undefined || sensorId === null) {
      throw new Error("Missing the required parameter 'sensorId' when calling putSensorName");
    }

    // verify the required parameter 'body' is set
    if (body === undefined || body === null) {
      throw new Error("Missing the required parameter 'body' when calling putSensorName");
    }


    var pathParams = {
      'domain': domain,
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
      '/domains/{domain}/sensors/{sensor_id}/name', 'PUT',
      pathParams, queryParams, headerParams, formParams, postBody,
      authNames, contentTypes, accepts, returnType);
  }

  /**
   * insert owner
   * @param {String} domain 
   * @param {String} sensorId 
   * @param {String} body 
   */
  this.putSensorOwner = async function(domain, sensorId, body) {
    var postBody = body;

    // verify the required parameter 'domain' is set
    if (domain === undefined || domain === null) {
      throw new Error("Missing the required parameter 'domain' when calling putSensorOwner");
    }

    // verify the required parameter 'sensorId' is set
    if (sensorId === undefined || sensorId === null) {
      throw new Error("Missing the required parameter 'sensorId' when calling putSensorOwner");
    }

    // verify the required parameter 'body' is set
    if (body === undefined || body === null) {
      throw new Error("Missing the required parameter 'body' when calling putSensorOwner");
    }

    var pathParams = {
      'domain': domain,
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
      '/domains/{domain}/sensors/{sensor_id}/owner', 'PUT',
      pathParams, queryParams, headerParams, formParams, postBody,
      authNames, contentTypes, accepts, returnType);
  }
};

export default exports;
