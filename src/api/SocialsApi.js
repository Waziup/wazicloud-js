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
   * @param {String} domain 
   * @param {module:model/SocialMessageBatch} data social message
   */
  this.createSocialMsgsBatch = async function(domain, data) {
    var postBody = data;

    // verify the required parameter 'domain' is set
    if (domain === undefined || domain === null) {
      throw("Missing the required parameter 'domain'");
    }

    // verify the required parameter 'data' is set
    if (data === undefined || data === null) {
      throw("Missing the required parameter 'data'");
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
      '/domains/{domain}/socials/batch', 'POST',
      pathParams, queryParams, headerParams, formParams, postBody,
      authNames, contentTypes, accepts, returnType);
  }

  /**
   * Get all messages sent
   * @param {String} domain 
   * data is of type: {@link module:model/SocialMessage}
   */
  this.getSocialMsgs = async function(domain) {
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
    var returnType = SocialMessage;

    return this.apiClient.callApi(
      '/domains/{domain}/socials', 'GET',
      pathParams, queryParams, headerParams, formParams, postBody,
      authNames, contentTypes, accepts, returnType);
  }

  /**
   * delete a message to social networks
   * @param {String} domain 
   * @param {String} msgId 
   */
  this.deleteSocialsMsg = async function(domain, msgId) {
    var postBody = null;

    // verify the required parameter 'domain' is set
    if (domain === undefined || domain === null) {
      throw("Missing the required parameter 'domain'");
    }

    // verify the required parameter 'msgId' is set
    if (msgId === undefined || msgId === null) {
      throw("Missing the required parameter 'msgId'");
    }


    var pathParams = {
      'domain': domain,
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
      '/domains/{domain}/socials/{msg_id}', 'DELETE',
      pathParams, queryParams, headerParams, formParams, postBody,
      authNames, contentTypes, accepts, returnType);
  }

  /**
   * Get one message
   * @param {String} domain 
   * @param {String} msgId 
   * data is of type: {@link module:model/SocialMessage}
   */
  this.getSocialsMsg = async function(domain, msgId) {
    var postBody = null;

    // verify the required parameter 'domain' is set
    if (domain === undefined || domain === null) {
      throw("Missing the required parameter 'domain'");
    }

    // verify the required parameter 'msgId' is set
    if (msgId === undefined || msgId === null) {
      throw("Missing the required parameter 'msgId'");
    }


    var pathParams = {
      'domain': domain,
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
      '/domains/{domain}/socials/{msg_id}', 'GET',
      pathParams, queryParams, headerParams, formParams, postBody,
      authNames, contentTypes, accepts, returnType);
  }

  /**
   * post a message to social networks
   * @param {String} domain 
   * @param {module:model/SocialMessage} data social message
   */
  this.createSocialMsg = async function(domain, data) {
    var postBody = data;

    // verify the required parameter 'domain' is set
    if (domain === undefined || domain === null) {
      throw("Missing the required parameter 'domain'");
    }

    // verify the required parameter 'data' is set
    if (data === undefined || data === null) {
      throw("Missing the required parameter 'data'");
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
      '/domains/{domain}/socials', 'POST',
      pathParams, queryParams, headerParams, formParams, postBody,
      authNames, contentTypes, accepts, returnType);
  }
};

export default exports;
