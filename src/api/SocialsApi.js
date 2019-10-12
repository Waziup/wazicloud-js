'use strict';
import ApiClient from '../ApiClient'
import Error from '../model/Error'
import SocialMessage from '../model/SocialMessage'
import SocialMessageBatch from '../model/SocialMessageBatch'

/**
 * Constructs a new SocialsApi. 
 * @alias module:api/SocialsApi
 * @class
 * @param {module:ApiClient} apiClient Optional API client implementation to use,
 * default to {@link module:ApiClient#instance} if unspecified.
 */
var exports = function(apiClient) {
  this.apiClient = apiClient || ApiClient.instance;


  /**
   * post several message to social networks
   * @param {module:model/SocialMessageBatch} data social message
   */
  this.createSocialMsgsBatch = async function(data) {
    var postBody = data;

    // verify the required parameter 'data' is set
    if (data === undefined || data === null) {
      throw("Missing the required parameter 'data'");
    }

    var pathParams = {
    };
    var queryParams = {};
    var headerParams = {};
    var formParams = {};

    var authNames = ['Bearer'];
    var contentTypes = ['application/json'];
    var accepts = ['application/json'];
    var returnType = null;

    return this.apiClient.callApi(
      '/socials/batch', 'POST',
      pathParams, queryParams, headerParams, formParams, postBody,
      authNames, contentTypes, accepts, returnType);
  }

  /**
   * Get all messages sent
   * data is of type: {@link Array.<module:model/SocialMessage>}
   */
  this.getSocialMsgs = async function() {
    var postBody = null;

    var pathParams = {
    };
    var queryParams = {};
    var headerParams = {};
    var formParams = {};

    var authNames = ['Bearer'];
    var contentTypes = ['application/json'];
    var accepts = ['application/json'];
    var returnType = [SocialMessage];

    return this.apiClient.callApi(
      '/socials', 'GET',
      pathParams, queryParams, headerParams, formParams, postBody,
      authNames, contentTypes, accepts, returnType);
  }

  /**
   * delete a message to social networks
   * @param {String} msgId 
   */
  this.deleteSocialsMsg = async function(msgId) {
    var postBody = null;

    // verify the required parameter 'msgId' is set
    if (msgId === undefined || msgId === null) {
      throw("Missing the required parameter 'msgId'");
    }


    var pathParams = {
      'msg_id': msgId
    };
    var queryParams = {};
    var headerParams = {};
    var formParams = {};

    var authNames = ['Bearer'];
    var contentTypes = ['application/json'];
    var accepts = ['application/json'];
    var returnType = null;

    return this.apiClient.callApi(
      '/socials/{msg_id}', 'DELETE',
      pathParams, queryParams, headerParams, formParams, postBody,
      authNames, contentTypes, accepts, returnType);
  }

  /**
   * Get one message
   * @param {String} msgId 
   * data is of type: {@link module:model/SocialMessage}
   */
  this.getSocialsMsg = async function(msgId) {
    var postBody = null;

    // verify the required parameter 'msgId' is set
    if (msgId === undefined || msgId === null) {
      throw("Missing the required parameter 'msgId'");
    }


    var pathParams = {
      'msg_id': msgId
    };
    var queryParams = {};
    var headerParams = {};
    var formParams = {};

    var authNames = ['Bearer'];
    var contentTypes = ['application/json'];
    var accepts = ['application/json'];
    var returnType = SocialMessage;

    return this.apiClient.callApi(
      '/socials/{msg_id}', 'GET',
      pathParams, queryParams, headerParams, formParams, postBody,
      authNames, contentTypes, accepts, returnType);
  }

  /**
   * post a message to social networks
   * @param {module:model/SocialMessage} data social message
   */
  this.createSocialMsg = async function(data) {
    var postBody = data;

    // verify the required parameter 'data' is set
    if (data === undefined || data === null) {
      throw("Missing the required parameter 'data'");
    }


    var pathParams = {
    };
    var queryParams = {};
    var headerParams = {};
    var formParams = {};

    var authNames = ['Bearer'];
    var contentTypes = ['application/json'];
    var accepts = ['application/json'];
    var returnType = null;

    return this.apiClient.callApi(
      '/socials', 'POST',
      pathParams, queryParams, headerParams, formParams, postBody,
      authNames, contentTypes, accepts, returnType);
  }
};

export default exports;
