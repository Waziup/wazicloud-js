"use strict";
import ApiClient from "../ApiClient";
import Sensor from "../model/Sensor";
import Device from "../model/Device";

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
    var queryParams = {
      q: opts["q"],
      limit: opts["limit"],
      offset: opts["offset"]
    };
    var headerParams = {};
    var formParams = {};

    var authNames = ["Bearer"];
    var contentTypes = ["application/json"];
    var accepts = ["application/json"];
    var returnType = [Device];

    return this.apiClient.callApi(
      "/devices",
      "GET",
      pathParams,
      queryParams,
      headerParams,
      formParams,
      postBody,
      authNames,
      contentTypes,
      accepts,
      returnType
    );
  };

  /**
   * Create devices
   * Endpoint to create sensing devices.
   * @param {module:model/Device} body
   */
  this.createDevice = async function(body) {
    var postBody = body;

    // verify the required parameter 'body' is set
    if (body === undefined || body === null) {
      throw "Missing the required parameter 'body' when calling createDevice";
    }

    var pathParams = {};
    var queryParams = {};
    var headerParams = {};
    var formParams = {};

    var authNames = ["Bearer"];
    var contentTypes = ["application/json"];
    var accepts = ["application/json"];
    var returnType = null;

    return this.apiClient.callApi(
      "devices",
      "POST",
      pathParams,
      queryParams,
      headerParams,
      formParams,
      postBody,
      authNames,
      contentTypes,
      accepts,
      returnType
    );
  };

  /**
   * Delete device
   *
   * @param {String} deviceId
   */
  this.deleteDevice = async function(deviceId) {
    var postBody = null;

    // verify the required parameter 'deviceId' is set
    if (deviceId === undefined || deviceId === null) {
      throw "Missing the required parameter 'deviceId' when calling deleteDevice";
    }

    var pathParams = {
      device_id: deviceId
    };
    var queryParams = {};
    var headerParams = {};
    var formParams = {};

    var authNames = ["Bearer"];
    var contentTypes = ["application/json"];
    var accepts = ["application/json"];
    var returnType = null;

    return this.apiClient.callApi(
      "/devices/{device_id}",
      "DELETE",
      pathParams,
      queryParams,
      headerParams,
      formParams,
      postBody,
      authNames,
      contentTypes,
      accepts,
      returnType
    );
  };

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
      throw "Missing the required parameter 'deviceId' when calling getDevice";
    }

    var pathParams = {
      device_id: deviceId
    };
    var queryParams = {};
    var headerParams = {};
    var formParams = {};

    var authNames = ["Bearer"];
    var contentTypes = ["application/json"];
    var accepts = ["application/json"];
    var returnType = Device;

    return this.apiClient.callApi(
      "/devices/{device_id}",
      "GET",
      pathParams,
      queryParams,
      headerParams,
      formParams,
      postBody,
      authNames,
      contentTypes,
      accepts,
      returnType
    );
  };

  /**
   * insert location
   * @param {String} deviceId
   * @param {module:model/Location} body
   */
  this.putDeviceLocation = async function(deviceId, body) {
    var postBody = body;

    // verify the required parameter 'deviceId' is set
    if (deviceId === undefined || deviceId === null) {
      throw "Missing the required parameter 'deviceId' when calling putDeviceLocation";
    }

    // verify the required parameter 'body' is set
    if (body === undefined || body === null) {
      throw "Missing the required parameter 'body' when calling putDeviceLocation";
    }

    var pathParams = {
      device_id: deviceId
    };
    var queryParams = {};
    var headerParams = {};
    var formParams = {};

    var authNames = ["Bearer"];
    var contentTypes = ["application/json"];
    var accepts = ["application/json"];
    var returnType = null;

    return this.apiClient.callApi(
      "/devices/{device_id}/location",
      "PUT",
      pathParams,
      queryParams,
      headerParams,
      formParams,
      postBody,
      authNames,
      contentTypes,
      accepts,
      returnType
    );
  };

  /**
   * get sensors
   * @param {String} deviceId
   * data is of type: {@link Array.<module:model/Sensor>}
   */
  this.getDeviceSensors = async function(deviceId) {
    var postBody = null;

    // verify the required parameter 'deviceId' is set
    if (deviceId === undefined || deviceId === null) {
      throw "Missing the required parameter 'deviceId' when calling getDeviceSensors";
    }

    var pathParams = {
      device_id: deviceId
    };
    var queryParams = {};
    var headerParams = {};
    var formParams = {};

    var authNames = ["Bearer"];
    var contentTypes = ["application/json"];
    var accepts = ["application/json"];
    var returnType = [Sensor];

    return this.apiClient.callApi(
      "/devices/{device_id}/sensors",
      "GET",
      pathParams,
      queryParams,
      headerParams,
      formParams,
      postBody,
      authNames,
      contentTypes,
      accepts,
      returnType
    );
  };

  /**
   * insert name
   * @param {String} deviceId
   * @param {String} body
   */
  this.putDeviceName = async function(deviceId, body) {
    var postBody = body;

    // verify the required parameter 'deviceId' is set
    if (deviceId === undefined || deviceId === null) {
      throw "Missing the required parameter 'deviceId' when calling putDeviceName";
    }

    // verify the required parameter 'body' is set
    if (body === undefined || body === null) {
      throw "Missing the required parameter 'body' when calling putDeviceName";
    }

    var pathParams = {
      device_id: deviceId
    };
    var queryParams = {};
    var headerParams = {};
    var formParams = {};

    var authNames = ["Bearer"];
    var contentTypes = ["text/plain"];
    var accepts = ["application/json"];
    var returnType = null;

    return this.apiClient.callApi(
      "/devices/{device_id}/name",
      "PUT",
      pathParams,
      queryParams,
      headerParams,
      formParams,
      postBody,
      authNames,
      contentTypes,
      accepts,
      returnType
    );
  };

  /**
   * insert owner
   * @param {String} deviceId
   * @param {String} body
   */
  this.putDeviceOwner = async function(deviceId, body) {
    var postBody = body;

    // verify the required parameter 'deviceId' is set
    if (deviceId === undefined || deviceId === null) {
      throw "Missing the required parameter 'deviceId' when calling putDeviceOwner";
    }

    // verify the required parameter 'body' is set
    if (body === undefined || body === null) {
      throw "Missing the required parameter 'body' when calling putDeviceOwner";
    }

    var pathParams = {
      device_id: deviceId
    };
    var queryParams = {};
    var headerParams = {};
    var formParams = {};

    var authNames = ["Bearer"];
    var contentTypes = ["text/plain"];
    var accepts = ["application/json"];
    var returnType = null;

    return this.apiClient.callApi(
      "/devices/{device_id}/owner",
      "PUT",
      pathParams,
      queryParams,
      headerParams,
      formParams,
      postBody,
      authNames,
      contentTypes,
      accepts,
      returnType
    );
  };

  /**
   * insert visibility
   * @param {String} deviceId
   * @param {String} body
   */
  this.putDeviceVisibility = async function(deviceId, body) {
    var postBody = body;

    // verify the required parameter 'deviceId' is set
    if (deviceId === undefined || deviceId === null) {
      throw "Missing the required parameter 'deviceId' when calling putDeviceVisibility";
    }

    // verify the required parameter 'body' is set
    if (body === undefined || body === null) {
      throw "Missing the required parameter 'body' when calling putDeviceVisibility";
    }

    var pathParams = {
      device_id: deviceId
    };
    var queryParams = {};
    var headerParams = {};
    var formParams = {};

    var authNames = ["Bearer"];
    var contentTypes = ["text/plain"];
    var accepts = ["application/json"];
    var returnType = null;

    return this.apiClient.callApi(
      "/devices/{device_id}/visibility",
      "PUT",
      pathParams,
      queryParams,
      headerParams,
      formParams,
      postBody,
      authNames,
      contentTypes,
      accepts,
      returnType
    );
  };
  /**
   * insert gateway_id
   * @param {String} deviceId
   * @param {String} body
   */
  this.putDeviceGatewayId = async function(deviceId, body) {
    var postBody = body;

    // verify the required parameter 'deviceId' is set
    if (deviceId === undefined || deviceId === null) {
      throw "Missing the required parameter 'deviceId' when calling putDeviceGatewayId";
    }

    // verify the required parameter 'body' is set
    if (body === undefined || body === null) {
      throw "Missing the required parameter 'body' when calling putDeviceGatewayId";
    }

    var pathParams = {
      device_id: deviceId
    };
    var queryParams = {};
    var headerParams = {};
    var formParams = {};

    var authNames = ["Bearer"];
    var contentTypes = ["text/plain"];
    var accepts = ["application/json"];
    var returnType = null;

    return this.apiClient.callApi(
      "/devices/{device_id}/gateway_id",
      "PUT",
      pathParams,
      queryParams,
      headerParams,
      formParams,
      postBody,
      authNames,
      contentTypes,
      accepts,
      returnType
    );
  };
};

export default exports;
