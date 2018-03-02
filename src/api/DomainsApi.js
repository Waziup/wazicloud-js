'use strict';
import ApiClient from '../ApiClient'
import Domain from '../model/Domain'
import Error from '../model/Error'

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
   */
  this.deleteDomain = async function(domain) {
    var postBody = null;

    // verify the required parameter 'domain' is set
    if (domain === undefined || domain === null) {
      throw("Missing the required parameter 'domain' when calling deleteDomain");
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
      authNames, contentTypes, accepts, returnType);
  }

  /**
   * get domain
   * 
   * @param {String} domain 
   * data is of type: {@link module:model/Domain}
   */
  this.getDomains = async function(domain) {
    var postBody = null;

    // verify the required parameter 'domain' is set
    if (domain === undefined || domain === null) {
      throw("Missing the required parameter 'domain' when calling getDomains");
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
      authNames, contentTypes, accepts, returnType);
  }

  /**
   * list domains
   * data is of type: {@link Array.<module:model/Domain>}
   */
  this.getDomains = async function() {
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
      authNames, contentTypes, accepts, returnType);
  }

   /**
   * Create a domain
   * @param {module:model/Domain} body 
   */
  this.createDomain = async function(body) {
    var postBody = body;

    // verify the required parameter 'body' is set
    if (body === undefined || body === null) {
      throw("Missing the required parameter 'body' when calling createDomain");
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
      authNames, contentTypes, accepts, returnType);
  }
}

export default exports
