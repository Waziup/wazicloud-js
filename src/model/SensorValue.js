'use strict';
import ApiClient from '../ApiClient';

/**
 * Constructs a new <code>SensorValue</code>.
 * @alias module:model/SensorValue
 * @class
 */
var exports = function(value) {
  var _this = this;
  _this['value'] = value;
};

/**
 * Constructs a <code>SensorValue</code> from a plain JavaScript object, optionally creating a new instance.
 * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
 * @param {Object} data The plain JavaScript object bearing properties of interest.
 * @param {module:model/SensorValue} obj Optional instance to populate.
 * @return {module:model/SensorValue} The populated <code>SensorValue</code> instance.
 */
exports.constructFromObject = function(data, obj) {
  if (data) {
    obj = obj || new exports();

    if (data.hasOwnProperty('value')) {
      obj['value'] = ApiClient.convertToType(data['value'], 'Blob');
    }
    if (data.hasOwnProperty('timestamp')) {
      obj['timestamp'] = ApiClient.convertToType(data['timestamp'], 'String');
    }
    if (data.hasOwnProperty('date_received')) {
      obj['date_received'] = ApiClient.convertToType(data['date_received'], 'String');
    }
  }
  return obj;
}

/**
 * value of the sensor
 * @member {Number} value
 */
exports.prototype['value'] = undefined;
/**
 * time of the sensor
 * @member {String} timestamp
 */
exports.prototype['timestamp'] = undefined;
/**
 * time received on Cloud side
 * @member {String} date_received
 */
exports.prototype['date_received'] = undefined;


export default exports;
