'use strict';
import ApiClient from '../ApiClient';

/**
 * Constructs a new <code>SocialMessageBatch</code>.
 * A message to be sent to several users and socials
 * @alias module:model/SocialMessageBatch
 * @class
 * @param channels {Array.<String>} channels where to send the messages
 * @param message {String} 
 */
var exports = function(device_id, actuator_id, actuator_value) {
  var _this = this;

  _this['device_id'] = device_id;
  _this['actuator_id'] = actuator_id;
  _this['actuator_value'] = actuator_value;
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

    if (data.hasOwnProperty('device_id')) {
      obj['device_id'] = ApiClient.convertToType(data['device_id'], 'String');
    }
    if (data.hasOwnProperty('actuator_id')) {
      obj['actuator_id'] = ApiClient.convertToType(data['actuator_id'], 'String');
    }
    if (data.hasOwnProperty('actuator_value')) {
      obj['actuator_value'] = ApiClient.convertToType(data['actuator_value'], 'String');
    }
  }
  return obj;
}

/**
 * names of the destination users
 * @member {Array.<String>} usernames
 */
exports.prototype['device_id'] = undefined;
/**
 * channels where to send the messages
 * @member {Array.<String>} channels
 */
exports.prototype['actuator_id'] = undefined;
/**
 * @member {String} message
 */
exports.prototype['actuator_value'] = undefined;

export default exports;
