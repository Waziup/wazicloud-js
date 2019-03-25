'use strict';
import ApiClient from '../ApiClient';


/**
 * Constructs a new <code>NotificationCondition</code>.
 * @alias module:model/NotificationCondition
 * @class
 */
var exports = function(notifDevices, notifSensors, notifExpression) {
  var _this = this;

  _this['notifDevices'] = notifDevices;
  _this['notifSensors'] = notifSensors;
  _this['notifExpression'] = notifExpression;


};

/**
 * Constructs a <code>NotificationCondition</code> from a plain JavaScript object, optionally creating a new instance.
 * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
 * @param {Object} data The plain JavaScript object bearing properties of interest.
 * @param {module:model/NotificationCondition} obj Optional instance to populate.
 * @return {module:model/NotificationCondition} The populated <code>NotificationCondition</code> instance.
 */
exports.constructFromObject = function(data, obj) {
  if (data) {
    obj = obj || new exports();

    if (data.hasOwnProperty('notifDevices')) {
      obj['notifDevices'] = ApiClient.convertToType(data['notifDevices'], ['String']);
    }
    if (data.hasOwnProperty('notifSensors')) {
      obj['notifSensors'] = ApiClient.convertToType(data['notifSensors'], ['String']);
    }
    if (data.hasOwnProperty('notifExpression')) {
      obj['notifExpression'] = ApiClient.convertToType(data['notifExpression'], 'String');
    }
  }
  return obj;
}

/**
 * @member {Array.<String>} notifDevices
 */
exports.prototype['notifDevices'] = undefined;
/**
 * @member {Array.<String>} notifSensors
 */
exports.prototype['notifSensors'] = undefined;
/**
 * @member {String} notifExpression
 */
exports.prototype['notifExpression'] = undefined;

export default exports;
