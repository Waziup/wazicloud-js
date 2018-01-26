(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient', 'model/Error', 'model/Location', 'model/Measurement', 'model/MeasurementValue', 'model/Sensor'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/Error'), require('../model/Location'), require('../model/Measurement'), require('../model/MeasurementValue'), require('../model/Sensor'));
  } else {
    // Browser globals (root is window)
    if (!root.WaziupApi) {
      root.WaziupApi = {};
    }
    root.WaziupApi.SensorsApi = factory(root.WaziupApi.ApiClient, root.WaziupApi.Error, root.WaziupApi.Location, root.WaziupApi.Measurement, root.WaziupApi.MeasurementValue, root.WaziupApi.Sensor);
  }
}(this, function(ApiClient, Error, Location, Measurement, MeasurementValue, Sensor) {
  'use strict';

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
     * @param {module:api/SensorsApi~getSensorsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:model/Sensor>}
     */
    this.getSensors = function(domain, opts, callback) {
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
        authNames, contentTypes, accepts, returnType, callback
      );
    }


    /**
     * Create sensors
     * Endpoint to create sensing devices.
     * @param {module:model/Sensor} body 
     * @param {String} domain 
     * @param {module:api/SensorsApi~createSensorCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.createSensor = function(body, domain, callback) {
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
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Delete sensor
     * 
     * @param {String} domain 
     * @param {String} sensorId 
     * @param {module:api/SensorsApi~deleteSensorCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.deleteSensor = function(domain, sensorId, callback) {
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
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * get sensor
     * 
     * @param {String} domain 
     * @param {String} sensorId 
     * @param {module:api/SensorsApi~getSensorCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Sensor}
     */
    this.getSensor = function(domain, sensorId, callback) {
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
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * insert location
     * @param {String} domain 
     * @param {String} sensorId 
     * @param {module:model/Location} body 
     * @param {module:api/SensorsApi~putSensorLocationCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.putSensorLocation = function(domain, sensorId, body, callback) {
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
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * get measurements
     * @param {String} domain 
     * @param {String} sensorId 
     * @param {module:api/SensorsApi~getSensorMeasurementsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:model/Measurement>}
     */
    this.getSensorMeasurements = function(domain, sensorId, callback) {
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
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Delete measurement
     * 
     * @param {String} domain 
     * @param {String} sensorId 
     * @param {String} measurementId 
     * @param {module:api/SensorsApi~deleteMeasurementCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.deleteMeasurement = function(domain, sensorId, measurementId, callback) {
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
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * put measurement dimension
     * @param {String} domain 
     * @param {String} sensorId 
     * @param {String} measurementId 
     * @param {String} body 
     * @param {module:api/SensorsApi~putMeasurementDimensionCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.putMeasurementDimension = function(domain, sensorId, measurementId, body, callback) {
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
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * get measurement
     * @param {String} domain 
     * @param {String} sensorId 
     * @param {String} measurementId 
     * @param {module:api/SensorsApi~getMeasurementCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Measurement}
     */
    this.getMeasurement = function(domain, sensorId, measurementId, callback) {
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
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * put measurement name
     * @param {String} domain 
     * @param {String} sensorId 
     * @param {String} measurementId 
     * @param {String} body 
     * @param {module:api/SensorsApi~putMeasurementNameCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.putMeasurementName = function(domain, sensorId, measurementId, body, callback) {
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
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * insert sensor kind
     * @param {String} domain 
     * @param {String} sensorId 
     * @param {String} measurementId 
     * @param {String} body 
     * @param {module:api/SensorsApi~putMeasurementSensorKindCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.putMeasurementSensorKind = function(domain, sensorId, measurementId, body, callback) {
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
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * put measurement unit
     * @param {String} domain 
     * @param {String} sensorId 
     * @param {String} measurementId 
     * @param {String} body 
     * @param {module:api/SensorsApi~putMeasurementUnitCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.putMeasurementUnit = function(domain, sensorId, measurementId, body, callback) {
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
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * get measurement values
     * @param {String} domain 
     * @param {String} sensorId 
     * @param {String} measurementId 
     * @param {module:api/SensorsApi~getMeasurementValuesCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:model/MeasurementValue>}
     */
    this.getMeasurementValues = function(domain, sensorId, measurementId, callback) {
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
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Create new datapoint
     * @param {String} domain 
     * @param {String} sensorId 
     * @param {String} measurementId 
     * @param {module:model/MeasurementValue} body 
     * @param {module:api/SensorsApi~addDatapointCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.addDatapoint = function(domain, sensorId, measurementId, body, callback) {
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
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * insert new measurement
     * @param {String} domain 
     * @param {String} sensorId 
     * @param {module:model/Measurement} body 
     * @param {module:api/SensorsApi~addMeasurementCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.addMeasurement = function(domain, sensorId, body, callback) {
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
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * insert name
     * @param {String} domain 
     * @param {String} sensorId 
     * @param {String} body 
     * @param {module:api/SensorsApi~putSensorNameCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.putSensorName = function(domain, sensorId, body, callback) {
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
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * insert owner
     * @param {String} domain 
     * @param {String} sensorId 
     * @param {String} body 
     * @param {module:api/SensorsApi~putSensorOwnerCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.putSensorOwner = function(domain, sensorId, body, callback) {
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
        authNames, contentTypes, accepts, returnType, callback
      );
    }
  };

  return exports;
}));
