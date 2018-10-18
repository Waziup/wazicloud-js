'use strict';
import ApiClient from '../ApiClient'
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
   * Get all users in a realm
   */
  this.getUsers = async function() {
    var postBody = null;

    var pathParams = {
    };
    var queryParams = {};
    var headerParams = {};
    var formParams = {};

    var authNames = ['Bearer'];
    var contentTypes = ['application/json'];
    var accepts = ['application/json'];
    var returnType = [User];

    return this.apiClient.callApi(
      '/users/', 'GET',
      pathParams, queryParams, headerParams, formParams, postBody,
      authNames, contentTypes, accepts, returnType);
  }


  /**
   * Search users with specific criteria
   */
  this.searchUsers = async function(q) {
    var postBody = null;

    var pathParams = {
    };
    var queryParams = q;
    var headerParams = {};
    var formParams = {};

    var authNames = ['Bearer'];
    var contentTypes = ['application/json'];
    var accepts = ['application/json'];
    var returnType = [User];

    return this.apiClient.callApi(
      '/users/search/', 'GET',
      pathParams, queryParams, headerParams, formParams, postBody,
      authNames, contentTypes, accepts, returnType);
  }

  /**
   * @param {String} userid 
   */
  this.getUser = async function(userid) {
    var postBody = null;

    // verify the required parameter 'userid' is set
    if (userid === undefined || userid === null) {
      throw("Missing the required parameter 'userid'");
    }


    var pathParams = {
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
      '/users/{userid}', 'GET',
      pathParams, queryParams, headerParams, formParams, postBody,
      authNames, contentTypes, accepts, returnType);
  }

};

export default exports;
