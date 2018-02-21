'use strict';
import ApiClient from '../ApiClient';
import MeasurementValue from './MeasurementValue';

/**
 * Constructs a new <code>Measurement</code>.
 * @alias module:model/Measurement
 * @class
 */
var exports = function(id) {
  var _this = this;

  _this['id'] = id;

};

/**
 * Constructs a <code>Measurement</code> from a plain JavaScript object, optionally creating a new instance.
 * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
 * @param {Object} data The plain JavaScript object bearing properties of interest.
 * @param {module:model/Measurement} obj Optional instance to populate.
 * @return {module:model/Measurement} The populated <code>Measurement</code> instance.
 */
exports.constructFromObject = function(data, obj) {
  if (data) {
    obj = obj || new exports();

    if (data.hasOwnProperty('id')) {
      obj['id'] = ApiClient.convertToType(data['id'], 'String');
    }
    if (data.hasOwnProperty('name')) {
      obj['name'] = ApiClient.convertToType(data['name'], 'String');
    }
    if (data.hasOwnProperty('last_value')) {
      obj['last_value'] = ApiClient.convertToType(data['last_value'], 'Number');
    }
    if (data.hasOwnProperty('timestamp')) {
      obj['timestamp'] = ApiClient.convertToType(data['timestamp'], 'String');
    }
    if (data.hasOwnProperty('dimension')) {
      obj['dimension'] = ApiClient.convertToType(data['dimension'], 'String');
    }
    if (data.hasOwnProperty('unit')) {
      obj['unit'] = ApiClient.convertToType(data['unit'], 'String');
    }
    if (data.hasOwnProperty('sensor_kind')) {
      obj['sensor_kind'] = ApiClient.convertToType(data['sensor_kind'], 'String');
    }
    if (data.hasOwnProperty('values')) {
      obj['values'] = ApiClient.convertToType(data['values'], [MeasurementValue]);
    }
  }
  return obj;
}

/**
 * ID of the measurement
 * @member {String} id
 */
exports.prototype['id'] = undefined;
/**
 * name of the measurement
 * @member {String} name
 */
exports.prototype['name'] = undefined;
/**
 * last value measured
 * @member {String} last_value 
 */
exports.prototype['last_value'] = undefined;
/**
 * timestamp of the last value measured
 * @member {String} timestamp 
 */
exports.prototype['timestamp'] = undefined;
/**
 * physical dimension of the measurement
 * @member {String} dimension
 */
exports.prototype['dimension'] = undefined;
/**
 * unit of the measurement
 * @member {String} unit
 */
exports.prototype['unit'] = undefined;
/**
 * kind of sensor providing the measurement
 * @member {String} sensor_kind
 */
exports.prototype['sensor_kind'] = undefined;
/**
 * @member {Array.<module:model/MeasurementValue>} values
 */
exports.prototype['values'] = undefined;


export default exports;
