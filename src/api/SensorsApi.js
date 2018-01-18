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
     * @param {module:api/SensorsApi~domainsDomainSensorsGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:model/Sensor>}
     */
    this.getSensors = function(domain, opts, callback) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'domain' is set
      if (domain === undefined || domain === null) {
        throw new Error("Missing the required parameter 'domain' when calling domainsDomainSensorsGet");
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
     * @param {module:api/SensorsApi~domainsDomainSensorsPostCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.addSensor = function(body, domain, callback) {
      var postBody = body;

      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling domainsDomainSensorsPost");
      }

      // verify the required parameter 'domain' is set
      if (domain === undefined || domain === null) {
        throw new Error("Missing the required parameter 'domain' when calling domainsDomainSensorsPost");
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
     * @param {module:api/SensorsApi~domainsDomainSensorsSensorIdDeleteCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.deleteSensor = function(domain, sensorId, callback) {
      var postBody = null;

      // verify the required parameter 'domain' is set
      if (domain === undefined || domain === null) {
        throw new Error("Missing the required parameter 'domain' when calling domainsDomainSensorsSensorIdDelete");
      }

      // verify the required parameter 'sensorId' is set
      if (sensorId === undefined || sensorId === null) {
        throw new Error("Missing the required parameter 'sensorId' when calling domainsDomainSensorsSensorIdDelete");
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
     * @param {module:api/SensorsApi~domainsDomainSensorsSensorIdGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Sensor}
     */
    this.getSensor = function(domain, sensorId, callback) {
      var postBody = null;

      // verify the required parameter 'domain' is set
      if (domain === undefined || domain === null) {
        throw new Error("Missing the required parameter 'domain' when calling domainsDomainSensorsSensorIdGet");
      }

      // verify the required parameter 'sensorId' is set
      if (sensorId === undefined || sensorId === null) {
        throw new Error("Missing the required parameter 'sensorId' when calling domainsDomainSensorsSensorIdGet");
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
     * @param {module:api/SensorsApi~domainsDomainSensorsSensorIdLocationPutCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.putSensorLocation = function(domain, sensorId, body, callback) {
      var postBody = body;

      // verify the required parameter 'domain' is set
      if (domain === undefined || domain === null) {
        throw new Error("Missing the required parameter 'domain' when calling domainsDomainSensorsSensorIdLocationPut");
      }

      // verify the required parameter 'sensorId' is set
      if (sensorId === undefined || sensorId === null) {
        throw new Error("Missing the required parameter 'sensorId' when calling domainsDomainSensorsSensorIdLocationPut");
      }

      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling domainsDomainSensorsSensorIdLocationPut");
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
     * @param {module:api/SensorsApi~domainsDomainSensorsSensorIdMeasurementsGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:model/Measurement>}
     */
    this.getSensorMeasurements = function(domain, sensorId, callback) {
      var postBody = null;

      // verify the required parameter 'domain' is set
      if (domain === undefined || domain === null) {
        throw new Error("Missing the required parameter 'domain' when calling domainsDomainSensorsSensorIdMeasurementsGet");
      }

      // verify the required parameter 'sensorId' is set
      if (sensorId === undefined || sensorId === null) {
        throw new Error("Missing the required parameter 'sensorId' when calling domainsDomainSensorsSensorIdMeasurementsGet");
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
     * @param {module:api/SensorsApi~domainsDomainSensorsSensorIdMeasurementsMeasurementIdDeleteCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.deleteMeasurement = function(domain, sensorId, measurementId, callback) {
      var postBody = null;

      // verify the required parameter 'domain' is set
      if (domain === undefined || domain === null) {
        throw new Error("Missing the required parameter 'domain' when calling domainsDomainSensorsSensorIdMeasurementsMeasurementIdDelete");
      }

      // verify the required parameter 'sensorId' is set
      if (sensorId === undefined || sensorId === null) {
        throw new Error("Missing the required parameter 'sensorId' when calling domainsDomainSensorsSensorIdMeasurementsMeasurementIdDelete");
      }

      // verify the required parameter 'measurementId' is set
      if (measurementId === undefined || measurementId === null) {
        throw new Error("Missing the required parameter 'measurementId' when calling domainsDomainSensorsSensorIdMeasurementsMeasurementIdDelete");
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
     * @param {module:api/SensorsApi~domainsDomainSensorsSensorIdMeasurementsMeasurementIdDimensionPutCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.putMeasurementDimension = function(domain, sensorId, measurementId, body, callback) {
      var postBody = body;

      // verify the required parameter 'domain' is set
      if (domain === undefined || domain === null) {
        throw new Error("Missing the required parameter 'domain' when calling domainsDomainSensorsSensorIdMeasurementsMeasurementIdDimensionPut");
      }

      // verify the required parameter 'sensorId' is set
      if (sensorId === undefined || sensorId === null) {
        throw new Error("Missing the required parameter 'sensorId' when calling domainsDomainSensorsSensorIdMeasurementsMeasurementIdDimensionPut");
      }

      // verify the required parameter 'measurementId' is set
      if (measurementId === undefined || measurementId === null) {
        throw new Error("Missing the required parameter 'measurementId' when calling domainsDomainSensorsSensorIdMeasurementsMeasurementIdDimensionPut");
      }

      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling domainsDomainSensorsSensorIdMeasurementsMeasurementIdDimensionPut");
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
     * @param {module:api/SensorsApi~domainsDomainSensorsSensorIdMeasurementsMeasurementIdGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Measurement}
     */
    this.getMeasurement = function(domain, sensorId, measurementId, callback) {
      var postBody = null;

      // verify the required parameter 'domain' is set
      if (domain === undefined || domain === null) {
        throw new Error("Missing the required parameter 'domain' when calling domainsDomainSensorsSensorIdMeasurementsMeasurementIdGet");
      }

      // verify the required parameter 'sensorId' is set
      if (sensorId === undefined || sensorId === null) {
        throw new Error("Missing the required parameter 'sensorId' when calling domainsDomainSensorsSensorIdMeasurementsMeasurementIdGet");
      }

      // verify the required parameter 'measurementId' is set
      if (measurementId === undefined || measurementId === null) {
        throw new Error("Missing the required parameter 'measurementId' when calling domainsDomainSensorsSensorIdMeasurementsMeasurementIdGet");
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
     * Callback function to receive the result of the domainsDomainSensorsSensorIdMeasurementsMeasurementIdNamePut operation.
     * @callback module:api/SensorsApi~domainsDomainSensorsSensorIdMeasurementsMeasurementIdNamePutCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * put measurement name
     * @param {String} domain 
     * @param {String} sensorId 
     * @param {String} measurementId 
     * @param {String} body 
     * @param {module:api/SensorsApi~domainsDomainSensorsSensorIdMeasurementsMeasurementIdNamePutCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.putMeasurementName = function(domain, sensorId, measurementId, body, callback) {
      var postBody = body;

      // verify the required parameter 'domain' is set
      if (domain === undefined || domain === null) {
        throw new Error("Missing the required parameter 'domain' when calling domainsDomainSensorsSensorIdMeasurementsMeasurementIdNamePut");
      }

      // verify the required parameter 'sensorId' is set
      if (sensorId === undefined || sensorId === null) {
        throw new Error("Missing the required parameter 'sensorId' when calling domainsDomainSensorsSensorIdMeasurementsMeasurementIdNamePut");
      }

      // verify the required parameter 'measurementId' is set
      if (measurementId === undefined || measurementId === null) {
        throw new Error("Missing the required parameter 'measurementId' when calling domainsDomainSensorsSensorIdMeasurementsMeasurementIdNamePut");
      }

      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling domainsDomainSensorsSensorIdMeasurementsMeasurementIdNamePut");
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
     * @param {module:api/SensorsApi~domainsDomainSensorsSensorIdMeasurementsMeasurementIdSensorKindPutCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.putMeasurementSensorKind = function(domain, sensorId, measurementId, body, callback) {
      var postBody = body;

      // verify the required parameter 'domain' is set
      if (domain === undefined || domain === null) {
        throw new Error("Missing the required parameter 'domain' when calling domainsDomainSensorsSensorIdMeasurementsMeasurementIdSensorKindPut");
      }

      // verify the required parameter 'sensorId' is set
      if (sensorId === undefined || sensorId === null) {
        throw new Error("Missing the required parameter 'sensorId' when calling domainsDomainSensorsSensorIdMeasurementsMeasurementIdSensorKindPut");
      }

      // verify the required parameter 'measurementId' is set
      if (measurementId === undefined || measurementId === null) {
        throw new Error("Missing the required parameter 'measurementId' when calling domainsDomainSensorsSensorIdMeasurementsMeasurementIdSensorKindPut");
      }

      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling domainsDomainSensorsSensorIdMeasurementsMeasurementIdSensorKindPut");
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
     * @param {module:api/SensorsApi~domainsDomainSensorsSensorIdMeasurementsMeasurementIdUnitPutCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.putMeasurementUnit = function(domain, sensorId, measurementId, body, callback) {
      var postBody = body;

      // verify the required parameter 'domain' is set
      if (domain === undefined || domain === null) {
        throw new Error("Missing the required parameter 'domain' when calling domainsDomainSensorsSensorIdMeasurementsMeasurementIdUnitPut");
      }

      // verify the required parameter 'sensorId' is set
      if (sensorId === undefined || sensorId === null) {
        throw new Error("Missing the required parameter 'sensorId' when calling domainsDomainSensorsSensorIdMeasurementsMeasurementIdUnitPut");
      }

      // verify the required parameter 'measurementId' is set
      if (measurementId === undefined || measurementId === null) {
        throw new Error("Missing the required parameter 'measurementId' when calling domainsDomainSensorsSensorIdMeasurementsMeasurementIdUnitPut");
      }

      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling domainsDomainSensorsSensorIdMeasurementsMeasurementIdUnitPut");
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
     * @param {module:api/SensorsApi~domainsDomainSensorsSensorIdMeasurementsMeasurementIdValuesGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:model/MeasurementValue>}
     */
    this.getMeasurementValues = function(domain, sensorId, measurementId, callback) {
      var postBody = null;

      // verify the required parameter 'domain' is set
      if (domain === undefined || domain === null) {
        throw new Error("Missing the required parameter 'domain' when calling domainsDomainSensorsSensorIdMeasurementsMeasurementIdValuesGet");
      }

      // verify the required parameter 'sensorId' is set
      if (sensorId === undefined || sensorId === null) {
        throw new Error("Missing the required parameter 'sensorId' when calling domainsDomainSensorsSensorIdMeasurementsMeasurementIdValuesGet");
      }

      // verify the required parameter 'measurementId' is set
      if (measurementId === undefined || measurementId === null) {
        throw new Error("Missing the required parameter 'measurementId' when calling domainsDomainSensorsSensorIdMeasurementsMeasurementIdValuesGet");
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
     * @param {module:api/SensorsApi~domainsDomainSensorsSensorIdMeasurementsMeasurementIdValuesPostCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.addMeasurement = function(domain, sensorId, measurementId, body, callback) {
      var postBody = body;

      // verify the required parameter 'domain' is set
      if (domain === undefined || domain === null) {
        throw new Error("Missing the required parameter 'domain' when calling domainsDomainSensorsSensorIdMeasurementsMeasurementIdValuesPost");
      }

      // verify the required parameter 'sensorId' is set
      if (sensorId === undefined || sensorId === null) {
        throw new Error("Missing the required parameter 'sensorId' when calling domainsDomainSensorsSensorIdMeasurementsMeasurementIdValuesPost");
      }

      // verify the required parameter 'measurementId' is set
      if (measurementId === undefined || measurementId === null) {
        throw new Error("Missing the required parameter 'measurementId' when calling domainsDomainSensorsSensorIdMeasurementsMeasurementIdValuesPost");
      }

      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling domainsDomainSensorsSensorIdMeasurementsMeasurementIdValuesPost");
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
     * @param {module:api/SensorsApi~domainsDomainSensorsSensorIdMeasurementsPostCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.addMeasurement = function(domain, sensorId, body, callback) {
      var postBody = body;

      // verify the required parameter 'domain' is set
      if (domain === undefined || domain === null) {
        throw new Error("Missing the required parameter 'domain' when calling domainsDomainSensorsSensorIdMeasurementsPost");
      }

      // verify the required parameter 'sensorId' is set
      if (sensorId === undefined || sensorId === null) {
        throw new Error("Missing the required parameter 'sensorId' when calling domainsDomainSensorsSensorIdMeasurementsPost");
      }

      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling domainsDomainSensorsSensorIdMeasurementsPost");
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
     * @param {module:api/SensorsApi~domainsDomainSensorsSensorIdNamePutCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.putSensorName = function(domain, sensorId, body, callback) {
      var postBody = body;

      // verify the required parameter 'domain' is set
      if (domain === undefined || domain === null) {
        throw new Error("Missing the required parameter 'domain' when calling domainsDomainSensorsSensorIdNamePut");
      }

      // verify the required parameter 'sensorId' is set
      if (sensorId === undefined || sensorId === null) {
        throw new Error("Missing the required parameter 'sensorId' when calling domainsDomainSensorsSensorIdNamePut");
      }

      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling domainsDomainSensorsSensorIdNamePut");
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
     * @param {module:api/SensorsApi~domainsDomainSensorsSensorIdOwnerPutCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.putSensorOwner = function(domain, sensorId, body, callback) {
      var postBody = body;

      // verify the required parameter 'domain' is set
      if (domain === undefined || domain === null) {
        throw new Error("Missing the required parameter 'domain' when calling domainsDomainSensorsSensorIdOwnerPut");
      }

      // verify the required parameter 'sensorId' is set
      if (sensorId === undefined || sensorId === null) {
        throw new Error("Missing the required parameter 'sensorId' when calling domainsDomainSensorsSensorIdOwnerPut");
      }

      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling domainsDomainSensorsSensorIdOwnerPut");
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
