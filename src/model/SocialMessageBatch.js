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
    root.WaziupApi.SocialMessageBatch = factory(root.WaziupApi.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';


  /**
   * Constructs a new <code>SocialMessageBatch</code>.
   * A message to be sent to several users and socials
   * @alias module:model/SocialMessageBatch
   * @class
   * @param channels {Array.<String>} channels where to send the messages
   * @param message {String} 
   */
  var exports = function(channels, message, usernames) {
    var _this = this;

    _this['channels'] = channels;
    _this['message'] = message;
    _this['usernames'] = usernames;
  };

  /**
   * Constructs a <code>SocialMessageBatch</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/SocialMessageBatch} obj Optional instance to populate.
   * @return {module:model/SocialMessageBatch} The populated <code>SocialMessageBatch</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('usernames')) {
        obj['usernames'] = ApiClient.convertToType(data['usernames'], ['String']);
      }
      if (data.hasOwnProperty('channels')) {
        obj['channels'] = ApiClient.convertToType(data['channels'], ['String']);
      }
      if (data.hasOwnProperty('message')) {
        obj['message'] = ApiClient.convertToType(data['message'], 'String');
      }
    }
    return obj;
  }

  /**
   * names of the destination users
   * @member {Array.<String>} usernames
   */
  exports.prototype['usernames'] = undefined;
  /**
   * channels where to send the messages
   * @member {Array.<String>} channels
   */
  exports.prototype['channels'] = undefined;
  /**
   * @member {String} message
   */
  exports.prototype['message'] = undefined;



  return exports;
}));


