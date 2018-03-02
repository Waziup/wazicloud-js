'use strict';
import ApiClient from '../ApiClient'
import AuthBody from '../model/AuthBody'
import User from '../model/User'
import UserUpdateBody from '../model/UserUpdateBody'

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
      '/domains/{domain}/auth/', 'POST',
      pathParams, queryParams, headerParams, formParams, postBody,
      authNames, contentTypes, accepts, returnType);
  }

  /**
   * Get all users in a realm
   * @param {String} domain 
   */
  this.getUsers = async function(domain) {
    var postBody = null;

    // verify the required parameter 'domain' is set
    if (domain === undefined || domain === null) {
      throw("Missing the required parameter 'domain' when calling getUsers");
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
    var returnType = [User];

    return this.apiClient.callApi(
      '/domains/{domain}/users/', 'GET',
      pathParams, queryParams, headerParams, formParams, postBody,
      authNames, contentTypes, accepts, returnType);
  }

  /**
   * Create a new user in a realm
   * @param {String} domain 
   * @param {module:model/User} user user object
   */
  this.createUser = async function(domain, user) {
    var postBody = user;

    // verify the required parameter 'domain' is set
    if (domain === undefined || domain === null) {
      throw("Missing the required parameter 'domain' when calling createUser");
    }

    // verify the required parameter 'user' is set
    if (user === undefined || user === null) {
      throw("Missing the required parameter 'user' when calling createUser");
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
      authNames, contentTypes, accepts, returnType);
  }

  /**
   * Search users with specific criteria
   * @param {String} domain 
   */
  this.searchUsers = async function(domain) { //TODO: complete arguments
    var postBody = null;

    // verify the required parameter 'domain' is set
    if (domain === undefined || domain === null) {
      throw("Missing the required parameter 'domain'");
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
    var returnType = [User];

    return this.apiClient.callApi(
      '/domains/{domain}/users/search/', 'GET',
      pathParams, queryParams, headerParams, formParams, postBody,
      authNames, contentTypes, accepts, returnType);
  }

   /**
   * @param {String} domain 
   * @param {String} userid 
   */
  this.deleteUser = async function(domain, userid) {
    var postBody = null;

    // verify the required parameter 'domain' is set
    if (domain === undefined || domain === null) {
      throw("Missing the required parameter 'domain'");
    }

    // verify the required parameter 'userid' is set
    if (userid === undefined || userid === null) {
      throw("Missing the required parameter 'userid'");
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
      authNames, contentTypes, accepts, returnType);
  }

  /**
   * @param {String} domain 
   * @param {String} userid 
   */
  this.getUser = async function(domain, userid) {
    var postBody = null;

    // verify the required parameter 'domain' is set
    if (domain === undefined || domain === null) {
      throw("Missing the required parameter 'domain'");
    }

    // verify the required parameter 'userid' is set
    if (userid === undefined || userid === null) {
      throw("Missing the required parameter 'userid'");
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
    var returnType = User;

    return this.apiClient.callApi(
      '/domains/{domain}/users/{userid}', 'GET',
      pathParams, queryParams, headerParams, formParams, postBody,
      authNames, contentTypes, accepts, returnType);
  }

  /**
   * @param {String} domain 
   * @param {String} userid 
   * @param {module:model/UserUpdateBody} data user data to update
   */
  this.updateUser = async function(domain, userid, data) {
    var postBody = data;

    // verify the required parameter 'domain' is set
    if (domain === undefined || domain === null) {
      throw("Missing the required parameter 'domain' when calling updateUser");
    }

    // verify the required parameter 'userid' is set
    if (userid === undefined || userid === null) {
      throw("Missing the required parameter 'userid' when calling updateUser");
    }

    // verify the required parameter 'data' is set
    if (data === undefined || data === null) {
      throw("Missing the required parameter 'data' when calling updateUser");
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
      authNames, contentTypes, accepts, returnType);
  }
};

export default exports;
