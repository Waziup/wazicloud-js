'use strict';
import ApiClient from '../ApiClient';


/**
 * Constructs a new <code>NotificationCondition</code>.
 * @alias module:model/NotificationCondition
 * @class
 */
var exports = function(sensors, measurements, expression) {
  var _this = this;

  _this['sensors'] = sensors;
  _this['measurements'] = measurements;
  _this['expression'] = expression;


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

    if (data.hasOwnProperty('sensors')) {
      obj['sensors'] = ApiClient.convertToType(data['sensors'], ['String']);
    }
    if (data.hasOwnProperty('measurements')) {
      obj['measurements'] = ApiClient.convertToType(data['measurements'], ['String']);
    }
    if (data.hasOwnProperty('expression')) {
      obj['expression'] = ApiClient.convertToType(data['expression'], 'String');
    }
  }
  return obj;
}

/**
 * @member {Array.<String>} sensors
 */
exports.prototype['sensors'] = undefined;
/**
 * @member {Array.<String>} measurementss
 */
exports.prototype['meaurements'] = undefined;
/**
 * @member {String} expression
 */
exports.prototype['expression'] = undefined;

export default exports;
