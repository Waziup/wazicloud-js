(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient', 'model/Error', 'model/Notification'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/Error'), require('../model/Notification'));
  } else {
    // Browser globals (root is window)
    if (!root.WaziupApi) {
      root.WaziupApi = {};
    }
    root.WaziupApi.NotificationsApi = factory(root.WaziupApi.ApiClient, root.WaziupApi.Error, root.WaziupApi.Notification);
  }
}(this, function(ApiClient, Error, Notification) {
  'use strict';


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
     * @param {module:api/NotificationsApi~getNotificationsGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:model/Notification>}
     */
    this.getNotifications = function(domain, callback) {
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
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * delete a message to social networks
     * @param {String} domain 
     * @param {String} notifId 
     * @param {module:api/NotificationsApi~getNotificationsNotifIdDeleteCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.deleteNotification = function(domain, notifId, callback) {
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
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getNotificationsNotifIdGet operation.
     * @callback module:api/NotificationsApi~getNotificationsNotifIdGetCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Notification} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get one message
     * @param {String} domain 
     * @param {String} notifId 
     * @param {module:api/NotificationsApi~getNotificationsNotifIdGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Notification}
     */
    this.getNotification = function(domain, notifId, callback) {
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
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * post a message to social networks
     * @param {String} domain 
     * @param {module:model/Notification} data social message
     * @param {module:api/NotificationsApi~getNotificationsPostCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.createNotification = function(domain, data, callback) {
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
        authNames, contentTypes, accepts, returnType, callback
      );
    }
  };

  return exports;
}));
