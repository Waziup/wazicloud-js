'use strict';
import ApiClient from '../ApiClient';

/**
 * Constructs a new <code>SocialMessage</code>.
 * One social network message
 * @alias module:model/SocialMessage
 * @class
 * @param socChannel {String} 
 * @param socMessage {String} 
 */
var exports = function(socChannel, socMessage) {
  var _this = this;


  _this['socChannel'] = socChannel;
  _this['socMessage'] = socMessage;
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

    if (data.hasOwnProperty('socUsername')) {
      obj['socUsername'] = ApiClient.convertToType(data['socUsername'], 'String');
    }
    if (data.hasOwnProperty('socChannel')) {
      obj['socChannel'] = ApiClient.convertToType(data['socChannel'], 'String');
    }
    if (data.hasOwnProperty('socMessage')) {
      obj['socMessage'] = ApiClient.convertToType(data['socMessage'], 'String');
    }
  }
  return obj;
}

/**
 * User name in Keycloak
 * @member {String} socUsername
 */
exports.prototype['socUsername'] = undefined;
/**
 * @member {String} socChannel
 */
exports.prototype['socChannel'] = undefined;
/**
 * @member {String} socMessage
 */
exports.prototype['socMessage'] = undefined;

export default exports;
