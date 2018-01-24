(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient', 'model/AuthBody', 'model/User', 'model/UserUpdateBody'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/AuthBody'), require('../model/User'), require('../model/UserUpdateBody'));
  } else {
    // Browser globals (root is window)
    if (!root.WaziupApi) {
      root.WaziupApi = {};
    }
    root.WaziupApi.UsersApi = factory(root.WaziupApi.ApiClient, root.WaziupApi.AuthBody, root.WaziupApi.User, root.WaziupApi.UserUpdateBody);
  }
}(this, function(ApiClient, AuthBody, User, UserUpdateBody) {
  'use strict';

  /**
   * Constructs a new UsersApi. 
   * @alias module:api/UsersApi
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
     * @param {module:api/UsersApi~domainsDomainAuthPostCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.postAuth = function(domain, credentials, callback) {
      var postBody = credentials;

      // verify the required parameter 'domain' is set
      if (domain === undefined || domain === null) {
        throw new Error("Missing the required parameter 'domain'");
      }

      // verify the required parameter 'credentials' is set
      if (credentials === undefined || credentials === null) {
        throw new Error("Missing the required parameter 'credentials'");
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
      var returnType = null;

      return this.apiClient.callApi(
        '/domains/{domain}/auth/', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Get all users in a realm
     * @param {String} domain 
     * @param {module:api/UsersApi~domainsDomainUsersGetCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.getUsers = function(domain, callback) {
      var postBody = null;

      // verify the required parameter 'domain' is set
      if (domain === undefined || domain === null) {
        throw new Error("Missing the required parameter 'domain' when calling domainsDomainUsersGet");
      }

      var pathParams = {
        'domain': domain
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};

      var authNames = ['Bearer'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = null;

      return this.apiClient.callApi(
        '/domains/{domain}/users/', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Create a new user in a realm
     * @param {String} domain 
     * @param {module:model/User} user user object
     * @param {module:api/UsersApi~domainsDomainUsersPostCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.createUser = function(domain, user, callback) {
      var postBody = user;

      // verify the required parameter 'domain' is set
      if (domain === undefined || domain === null) {
        throw new Error("Missing the required parameter 'domain' when calling domainsDomainUsersPost");
      }

      // verify the required parameter 'user' is set
      if (user === undefined || user === null) {
        throw new Error("Missing the required parameter 'user' when calling domainsDomainUsersPost");
      }


      var pathParams = {
        'domain': domain
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};

      var authNames = ['Bearer'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = null;

      return this.apiClient.callApi(
        '/domains/{domain}/users/', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Search users with specific criteria
     * @param {String} domain 
     * @param {module:api/UsersApi~domainsDomainUsersSearchGetCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.searchUsers = function(domain, callback) { //TODO: complete arguments
      var postBody = null;

      // verify the required parameter 'domain' is set
      if (domain === undefined || domain === null) {
        throw new Error("Missing the required parameter 'domain'");
      }

      var pathParams = {
        'domain': domain
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};

      var authNames = ['Bearer'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = null;

      return this.apiClient.callApi(
        '/domains/{domain}/users/search/', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

     /**
     * @param {String} domain 
     * @param {String} userid 
     * @param {module:api/UsersApi~domainsDomainUsersUseridDeleteCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.deleteUser = function(domain, userid, callback) {
      var postBody = null;

      // verify the required parameter 'domain' is set
      if (domain === undefined || domain === null) {
        throw new Error("Missing the required parameter 'domain'");
      }

      // verify the required parameter 'userid' is set
      if (userid === undefined || userid === null) {
        throw new Error("Missing the required parameter 'userid'");
      }


      var pathParams = {
        'domain': domain,
        'userid': userid
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};

      var authNames = ['Bearer'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = null;

      return this.apiClient.callApi(
        '/domains/{domain}/users/{userid}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * @param {String} domain 
     * @param {String} userid 
     * @param {module:api/UsersApi~domainsDomainUsersUseridGetCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.getUser = function(domain, userid, callback) {
      var postBody = null;

      // verify the required parameter 'domain' is set
      if (domain === undefined || domain === null) {
        throw new Error("Missing the required parameter 'domain'");
      }

      // verify the required parameter 'userid' is set
      if (userid === undefined || userid === null) {
        throw new Error("Missing the required parameter 'userid'");
      }


      var pathParams = {
        'domain': domain,
        'userid': userid
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};

      var authNames = ['Bearer'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = null;

      return this.apiClient.callApi(
        '/domains/{domain}/users/{userid}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * @param {String} domain 
     * @param {String} userid 
     * @param {module:model/UserUpdateBody} data user data to update
     * @param {module:api/UsersApi~domainsDomainUsersUseridPutCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.updateUser = function(domain, userid, data, callback) {
      var postBody = data;

      // verify the required parameter 'domain' is set
      if (domain === undefined || domain === null) {
        throw new Error("Missing the required parameter 'domain' when calling domainsDomainUsersUseridPut");
      }

      // verify the required parameter 'userid' is set
      if (userid === undefined || userid === null) {
        throw new Error("Missing the required parameter 'userid' when calling domainsDomainUsersUseridPut");
      }

      // verify the required parameter 'data' is set
      if (data === undefined || data === null) {
        throw new Error("Missing the required parameter 'data' when calling domainsDomainUsersUseridPut");
      }


      var pathParams = {
        'domain': domain,
        'userid': userid
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};

      var authNames = ['Bearer'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = null;

      return this.apiClient.callApi(
        '/domains/{domain}/users/{userid}', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
  };

  return exports;
}));
