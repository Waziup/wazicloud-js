'use strict';
import ApiClient from '../ApiClient';
import SocialMessageBatch from './SocialMessageBatch';
import ActuationAction from './ActuationAction';


/**
 * Constructs a new <code>NotificationAction</code>.
 * @alias module:model/NotificationAction
 * @class
 */
var exports = function(type, value) {
  var _this = this;

  _this['type'] = type;
  _this['value'] = value;
};

//exports.ActionType = {
//  ACTUATION_ACTION: "ActuationAction",
//  SOCIAL_ACTION: "SocialAction",
//};

/**
 * Constructs a <code>NotificationAction</code> from a plain JavaScript object, optionally creating a new instance.
 * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
 * @param {Object} data The plain JavaScript object bearing properties of interest.
 * @param {module:model/NotificationAction} obj Optional instance to populate.
 * @return {module:model/NotificationAction} The populated <code>NotificationAction</code> instance.
 */
exports.constructFromObject = function(data, obj) {
  console.log(data);
  if (data) {
    obj = obj || new exports();

    if (data.hasOwnProperty('type')) {
      obj['type'] = ApiClient.convertToType(data['type'], 'String');
    }
    if (data.hasOwnProperty('value') && obj['type'] == "SocialAction") {
      obj['value'] = SocialMessageBatch.constructFromObject(data['value']);
    }
    if (data.hasOwnProperty('value') && obj['type'] == "ActuationAction") {
      obj['value'] = ActuationAction.constructFromObject(data['value']);
    }
  }
  return obj;
}

/**
 * @member {Array.<String>} type
 */
exports.prototype['type'] = undefined;
/**
 * @member {Array.<String>} value
 */
exports.prototype['value'] = undefined;

export default exports;
