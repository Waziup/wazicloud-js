'use strict';
import ApiClient from '../ApiClient'
import Error from '../model/Error'
import Notification from '../model/Notification'

/**
 * Constructs a new NotificationsApi. 
 * @alias module:api/NotificationsApi
 * @class
 * @param {module:ApiClient} apiClient Optional API client implementation to use,
 * default to {@link module:ApiClient#instance} if unspecified.
 */
var exports = function(apiClient) {
  this.apiClient = apiClient || ApiClient.instance;


  /**
   * Get all notifications
   * @param {String} domain 
   * data is of type: {@link Array.<module:model/Notification>}
   */
  this.getNotifications = async function(domain) {
    var postBody = null;

    // verify the required parameter 'domain' is set
    if (domain === undefined || domain === null) {
      throw new Error("Missing the required parameter 'domain' when calling getNotifications");
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
    var returnType = [Notification];

    return this.apiClient.callApi(
      '/domains/{domain}/notifications', 'GET',
      pathParams, queryParams, headerParams, formParams, postBody,
      authNames, contentTypes, accepts, returnType);
  }

  /**
   * delete a message to social networks
   * @param {String} domain 
   * @param {String} notifId 
   */
  this.deleteNotification = async function(domain, notifId) {
    var postBody = null;

    // verify the required parameter 'domain' is set
    if (domain === undefined || domain === null) {
      throw new Error("Missing the required parameter 'domain' when calling getNotificationsNotifIdDelete");
    }

    // verify the required parameter 'notifId' is set
    if (notifId === undefined || notifId === null) {
      throw new Error("Missing the required parameter 'notifId' when calling getNotificationsNotifIdDelete");
    }


    var pathParams = {
      'domain': domain,
      'notif_id': notifId
    };
    var queryParams = {};
    var headerParams = {};
    var formParams = {};

    var authNames = ['Bearer'];
    var contentTypes = ['application/json'];
    var accepts = ['application/json'];
    var returnType = null;

    return this.apiClient.callApi(
      '/domains/{domain}/notifications/{notif_id}', 'DELETE',
      pathParams, queryParams, headerParams, formParams, postBody,
      authNames, contentTypes, accepts, returnType);
  }

  /**
   * Get one message
   * @param {String} domain 
   * @param {String} notifId 
   * data is of type: {@link module:model/Notification}
   */
  this.getNotification = async function(domain, notifId) {
    var postBody = null;

    // verify the required parameter 'domain' is set
    if (domain === undefined || domain === null) {
      throw new Error("Missing the required parameter 'domain' when calling getNotificationsNotifIdGet");
    }

    // verify the required parameter 'notifId' is set
    if (notifId === undefined || notifId === null) {
      throw new Error("Missing the required parameter 'notifId' when calling getNotificationsNotifIdGet");
    }


    var pathParams = {
      'domain': domain,
      'notif_id': notifId
    };
    var queryParams = {};
    var headerParams = {};
    var formParams = {};

    var authNames = ['Bearer'];
    var contentTypes = ['application/json'];
    var accepts = ['application/json'];
    var returnType = Notification;

    return this.apiClient.callApi(
      '/domains/{domain}/notifications/{notif_id}', 'GET',
      pathParams, queryParams, headerParams, formParams, postBody,
      authNames, contentTypes, accepts, returnType);
  }

  /**
   * post a message to social networks
   * @param {String} domain 
   * @param {module:model/Notification} data social message
   */
  this.createNotification = async function(domain, data) {
    var postBody = data;

    // verify the required parameter 'domain' is set
    if (domain === undefined || domain === null) {
      throw new Error("Missing the required parameter 'domain' when calling getNotificationsPost");
    }

    // verify the required parameter 'data' is set
    if (data === undefined || data === null) {
      throw new Error("Missing the required parameter 'data' when calling getNotificationsPost");
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
      '/domains/{domain}/notifications', 'POST',
      pathParams, queryParams, headerParams, formParams, postBody,
      authNames, contentTypes, accepts, returnType);
  }
};

export default exports;
