'use strict';
import ApiClient from '../ApiClient';

/**
 * Constructs a new <code>MeasurementValue</code>.
 * @alias module:model/MeasurementValue
 * @class
 */
var exports = function() {
  var _this = this;



};

/**
 * Constructs a <code>MeasurementValue</code> from a plain JavaScript object, optionally creating a new instance.
 * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
 * @param {Object} data The plain JavaScript object bearing properties of interest.
 * @param {module:model/MeasurementValue} obj Optional instance to populate.
 * @return {module:model/MeasurementValue} The populated <code>MeasurementValue</code> instance.
 */
exports.constructFromObject = function(data, obj) {
  if (data) {
    obj = obj || new exports();

    if (data.hasOwnProperty('value')) {
      obj['value'] = ApiClient.convertToType(data['value'], 'Number');
    }
    if (data.hasOwnProperty('timestamp')) {
      obj['timestamp'] = ApiClient.convertToType(data['timestamp'], 'String');
    }
  }
  return obj;
}

/**
 * value of the measurement
 * @member {Number} value
 */
exports.prototype['value'] = undefined;
/**
 * time of the measurement
 * @member {String} timestamp
 */
exports.prototype['timestamp'] = undefined;


export default exports;
