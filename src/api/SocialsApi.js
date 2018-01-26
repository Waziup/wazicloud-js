(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient', 'model/Error', 'model/SocialMessage', 'model/SocialMessageBatch'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/Error'), require('../model/SocialMessage'), require('../model/SocialMessageBatch'));
  } else {
    // Browser globals (root is window)
    if (!root.WaziupApi) {
      root.WaziupApi = {};
    }
    root.WaziupApi.SocialsApi = factory(root.WaziupApi.ApiClient, root.WaziupApi.Error, root.WaziupApi.SocialMessage, root.WaziupApi.SocialMessageBatch);
  }
}(this, function(ApiClient, Error, SocialMessage, SocialMessageBatch) {
  'use strict';

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
     * @param {module:api/SocialsApi~createSocialMsgsBatchCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.createSocialMsgsBatch = function(domain, data, callback) {
      var postBody = data;

      // verify the required parameter 'domain' is set
      if (domain === undefined || domain === null) {
        throw new Error("Missing the required parameter 'domain'");
      }

      // verify the required parameter 'data' is set
      if (data === undefined || data === null) {
        throw new Error("Missing the required parameter 'data'");
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
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Get all messages sent
     * @param {String} domain 
     * @param {module:api/SocialsApi~getSocialMsgsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/SocialMessage}
     */
    this.getSocialMsgs = function(domain, callback) {
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
      var returnType = SocialMessage;

      return this.apiClient.callApi(
        '/domains/{domain}/socials', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * delete a message to social networks
     * @param {String} domain 
     * @param {String} msgId 
     * @param {module:api/SocialsApi~deleteSocialsMsgCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.deleteSocialsMsg = function(domain, msgId, callback) {
      var postBody = null;

      // verify the required parameter 'domain' is set
      if (domain === undefined || domain === null) {
        throw new Error("Missing the required parameter 'domain'");
      }

      // verify the required parameter 'msgId' is set
      if (msgId === undefined || msgId === null) {
        throw new Error("Missing the required parameter 'msgId'");
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
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Get one message
     * @param {String} domain 
     * @param {String} msgId 
     * @param {module:api/SocialsApi~getSocialsMsgCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/SocialMessage}
     */
    this.getSocialsMsg = function(domain, msgId, callback) {
      var postBody = null;

      // verify the required parameter 'domain' is set
      if (domain === undefined || domain === null) {
        throw new Error("Missing the required parameter 'domain'");
      }

      // verify the required parameter 'msgId' is set
      if (msgId === undefined || msgId === null) {
        throw new Error("Missing the required parameter 'msgId'");
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
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * post a message to social networks
     * @param {String} domain 
     * @param {module:model/SocialMessage} data social message
     * @param {module:api/SocialsApi~createSocialMsgCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.createSocialMsg = function(domain, data, callback) {
      var postBody = data;

      // verify the required parameter 'domain' is set
      if (domain === undefined || domain === null) {
        throw new Error("Missing the required parameter 'domain'");
      }

      // verify the required parameter 'data' is set
      if (data === undefined || data === null) {
        throw new Error("Missing the required parameter 'data'");
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
        authNames, contentTypes, accepts, returnType, callback
      );
    }
  };

  return exports;
}));
