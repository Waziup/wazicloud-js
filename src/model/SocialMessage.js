(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'));
  } else {
    // Browser globals (root is window)
    if (!root.WaziupApi) {
      root.WaziupApi = {};
    }
    root.WaziupApi.SocialMessage = factory(root.WaziupApi.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';


  /**
   * Constructs a new <code>SocialMessage</code>.
   * One social network message
   * @alias module:model/SocialMessage
   * @class
   * @param channel {String} 
   * @param message {String} 
   */
  var exports = function(channel, message) {
    var _this = this;


    _this['channel'] = channel;
    _this['message'] = message;
  };

  /**
   * Constructs a <code>SocialMessage</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/SocialMessage} obj Optional instance to populate.
   * @return {module:model/SocialMessage} The populated <code>SocialMessage</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('username')) {
        obj['username'] = ApiClient.convertToType(data['username'], 'String');
      }
      if (data.hasOwnProperty('channel')) {
        obj['channel'] = ApiClient.convertToType(data['channel'], 'String');
      }
      if (data.hasOwnProperty('message')) {
        obj['message'] = ApiClient.convertToType(data['message'], 'String');
      }
    }
    return obj;
  }

  /**
   * User name in Keycloak
   * @member {String} username
   */
  exports.prototype['username'] = undefined;
  /**
   * @member {String} channel
   */
  exports.prototype['channel'] = undefined;
  /**
   * @member {String} message
   */
  exports.prototype['message'] = undefined;



  return exports;
}));


