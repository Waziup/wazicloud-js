'use strict';
import ApiClient from '../ApiClient'
import Permission from '../model/Permission'

/**
 * Constructs a new AuthApi. 
 * @alias module:api/AuthApi
 * @class
 * @param {module:ApiClient} apiClient Optional API client implementation to use,
 * default to {@link module:ApiClient#instance} if unspecified.
 */
var exports = function(apiClient) {
  this.apiClient = apiClient || ApiClient.instance;

  /**
   * Get the access token for subsequent calls
   * @param {String} domain 
   * @param {module:model/AuthBody} credentials auth credentials
   */
  this.getAuthToken = async function(domain, credentials) {
    var postBody = credentials;

    // verify the required parameter 'domain' is set
    if (domain === undefined || domain === null) {
      throw("Missing the required parameter 'domain'");
    }

    // verify the required parameter 'credentials' is set
    if (credentials === undefined || credentials === null) {
      throw("Missing the required parameter 'credentials'");
    }

    var pathParams = {
      'domain': domain
    };
    var queryParams = {};
    var headerParams = {};
    var formParams = {};

    var authNames = [];
    var contentTypes = ['application/json'];
    var accepts = ['application/json'];
    var returnType = AuthBody;

    return this.apiClient.callApi(
      '/auth/token', 'POST',
      pathParams, queryParams, headerParams, formParams, postBody,
      authNames, contentTypes, accepts, returnType);
  }

  /**
   * Get the permissions
   */
  this.getPermissions = async function() {
    var postBody = null;

    var pathParams = {};
    var queryParams = {};
    var headerParams = {};
    var formParams = {};

    var authNames = ['Bearer'];
    var contentTypes = ['application/json'];
    var accepts = ['application/json'];
    var returnType = [Permission];

    return this.apiClient.callApi(
      '/auth/permissions', 'GET',
      pathParams, queryParams, headerParams, formParams, postBody,
      authNames, contentTypes, accepts, returnType);
  }
};

export default exports;
