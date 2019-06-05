"use strict";
import ApiClient from "../ApiClient";
import User from "../model/User";
import UserUpdateBody from "../model/UserUpdateBody";

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
  this.getUsers = async function(opts) {
    opts = opts || {};
    var postBody = null;

    var pathParams = {};
    var queryParams = {
      username: opts["username"],
      limit: opts["limit"],
      offset: opts["offset"]
    };
    var headerParams = {};
    var formParams = {};

    var authNames = ["Bearer"];
    var contentTypes = ["application/json"];
    var accepts = ["application/json"];
    var returnType = [User];

    return this.apiClient.callApi(
      "/users/",
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
   * @param {String} userid
   */
  this.getUser = async function(userid) {
    var postBody = null;

    // verify the required parameter 'userid' is set
    if (userid === undefined || userid === null) {
      throw "Missing the required parameter 'userid'";
    }

    var pathParams = {
      userid: userid
    };
    var queryParams = {};
    var headerParams = {};
    var formParams = {};

    var authNames = ["Bearer"];
    var contentTypes = ["application/json"];
    var accepts = ["application/json"];
    var returnType = User;

    return this.apiClient.callApi(
      "/users/{userid}",
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
   * put a user sms credit
   * @param {String} userId 
   * @param {String} body 
   */
  this.putUserSmsCredit = async function(userId, body) {
    var postBody = body;

    // verify the required parameter 'userId' is set
    if (userId === undefined || userId === null) {
      throw("Missing the required parameter 'userId' when calling putUserSmsCredit");
    }

    // verify the required parameter 'body' is set
    if (body === undefined || body === null) {
      throw("Missing the required parameter 'body' when calling putUserSmsCredit");
    }

    var pathParams = {
      'user_id': userId
    };
    var queryParams = {};
    var headerParams = {};
    var formParams = {};

    var authNames = ['Bearer'];
    var contentTypes = ['text/plain;charset=utf-8'];
    var accepts = ['application/json'];
    var returnType = null;

    return this.apiClient.callApi(
      '/users/{user_id}/sms_credit', 'PUT',
      pathParams, queryParams, headerParams, formParams, postBody,
      authNames, contentTypes, accepts, returnType);
  }
};

export default exports;
