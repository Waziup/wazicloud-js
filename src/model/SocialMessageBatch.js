'use strict';
import ApiClient from '../ApiClient';

/**
 * Constructs a new <code>SocialMessageBatch</code>.
 * A message to be sent to several users and socials
 * @alias module:model/SocialMessageBatch
 * @class
 * @param socBatchChannels {Array.<String>} channels where to send the messages
 * @param socBatchMessage {String} 
 */
var exports = function(socBatchChannels, socBatchMessage, socBatchUsernames) {
  var _this = this;

  _this['socBatchChannels'] = socBatchChannels;
  _this['socBatchMessage'] = socBatchMessage;
  _this['socBatchUsernames'] = socBatchUsernames;
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

    if (data.hasOwnProperty('socBatchUsernames')) {
      obj['socBatchUsernames'] = ApiClient.convertToType(data['socBatchUsernames'], ['String']);
    }
    if (data.hasOwnProperty('socBatchChannels')) {
      obj['socBatchChannels'] = ApiClient.convertToType(data['socBatchChannels'], ['String']);
    }
    if (data.hasOwnProperty('socBatchMessage')) {
      obj['socBatchMessage'] = ApiClient.convertToType(data['socBatchMessage'], 'String');
    }
  }
  return obj;
}

/**
 * names of the destination users
 * @member {Array.<String>} socBatchUsernames
 */
exports.prototype['socBatchUsernames'] = undefined;
/**
 * socBatchChannels where to send the messages
 * @member {Array.<String>} socBatchChannels
 */
exports.prototype['socBatchChannels'] = undefined;
/**
 * @member {String} socBatchMessage
 */
exports.prototype['socBatchMessage'] = undefined;

export default exports;
