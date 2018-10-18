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
   * data is of type: {@link Array.<module:model/Notification>}
   */
  this.getNotifications = async function() {
    var postBody = null;

    var pathParams = {
    };
    var queryParams = {};
    var headerParams = {};
    var formParams = {};

    var authNames = ['Bearer'];
    var contentTypes = ['application/json'];
    var accepts = ['application/json'];
    var returnType = [Notification];

    return this.apiClient.callApi(
      '/notifications', 'GET',
      pathParams, queryParams, headerParams, formParams, postBody,
      authNames, contentTypes, accepts, returnType);
  }

  /**
   * delete a message to social networks
   * @param {String} notifId 
   */
  this.deleteNotification = async function(notifId) {
    var postBody = null;

    // verify the required parameter 'notifId' is set
    if (notifId === undefined || notifId === null) {
      throw("Missing the required parameter 'notifId' when calling getNotificationsNotifIdDelete");
    }


    var pathParams = {
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
      '/notifications/{notif_id}', 'DELETE',
      pathParams, queryParams, headerParams, formParams, postBody,
      authNames, contentTypes, accepts, returnType);
  }

  /**
   * Get one message
   * @param {String} notifId 
   * data is of type: {@link module:model/Notification}
   */
  this.getNotification = async function(notifId) {
    var postBody = null;

    // verify the required parameter 'notifId' is set
    if (notifId === undefined || notifId === null) {
      throw("Missing the required parameter 'notifId' when calling getNotificationsNotifIdGet");
    }


    var pathParams = {
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
      '/notifications/{notif_id}', 'GET',
      pathParams, queryParams, headerParams, formParams, postBody,
      authNames, contentTypes, accepts, returnType);
  }

  /**
   * post a message to social networks
   * @param {module:model/Notification} data social message
   */
  this.createNotification = async function(data) {
    var postBody = data;

    // verify the required parameter 'data' is set
    if (data === undefined || data === null) {
      throw("Missing the required parameter 'data' when calling getNotificationsPost");
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
      '/notifications', 'POST',
      pathParams, queryParams, headerParams, formParams, postBody,
      authNames, contentTypes, accepts, returnType);
  }
};

export default exports;
