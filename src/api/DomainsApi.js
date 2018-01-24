(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient', 'model/Domain', 'model/Error'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/Domain'), require('../model/Error'));
  } else {
    // Browser globals (root is window)
    if (!root.WaziupApi) {
      root.WaziupApi = {};
    }
    root.WaziupApi.DomainsApi = factory(root.WaziupApi.ApiClient, root.WaziupApi.Domain, root.WaziupApi.Error);
  }
}(this, function(ApiClient, Domain, Error) {
  'use strict';

  /**
   * Constructs a new DomainsApi. 
   * @alias module:api/DomainsApi
   * @class
   * @param {module:ApiClient} apiClient Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;

    /**
     * Delete domain
     * @param {String} domain 
     * @param {module:api/DomainsApi~domainsDomainDeleteCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.deleteDomain = function(domain, callback) {
      var postBody = null;

      // verify the required parameter 'domain' is set
      if (domain === undefined || domain === null) {
        throw new Error("Missing the required parameter 'domain' when calling domainsDomainDelete");
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
        '/domains/{domain}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * get domain
     * 
     * @param {String} domain 
     * @param {module:api/DomainsApi~domainsDomainGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Domain}
     */
    this.getDomains = function(domain, callback) {
      var postBody = null;

      // verify the required parameter 'domain' is set
      if (domain === undefined || domain === null) {
        throw new Error("Missing the required parameter 'domain' when calling domainsDomainGet");
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
      var returnType = Domain;

      return this.apiClient.callApi(
        '/domains/{domain}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * list domains
     * @param {module:api/DomainsApi~domainsGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:model/Domain>}
     */
    this.getDomains = function(callback) {
      var postBody = null;


      var pathParams = {};
      var queryParams = {};
      var headerParams = {};
      var formParams = {};

      var authNames = ['Bearer'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = [Domain];

      return this.apiClient.callApi(
        '/domains', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

     /**
     * Create a domain
     * @param {module:model/Domain} body 
     * @param {module:api/DomainsApi~domainsPostCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.domainsPost = function(body, callback) {
      var postBody = body;

      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling domainsPost");
      }


      var pathParams = {};
      var queryParams = {};
      var headerParams = {};
      var formParams = {};

      var authNames = ['Bearer'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = null;

      return this.apiClient.callApi(
        '/domains', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
  };

  return exports;
}));
