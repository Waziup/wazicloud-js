'use strict';
import ApiClient from '../ApiClient';
import SensorValue from './SensorValue';

/**
 * Constructs a new <code>Sensor</code>.
 * @alias module:model/Sensor
 * @class
 */
var exports = function(id) {
  var _this = this;

  _this['id'] = id;

};

/**
 * Constructs a <code>Sensor</code> from a plain JavaScript object, optionally creating a new instance.
 * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
 * @param {Object} data The plain JavaScript object bearing properties of interest.
 * @param {module:model/Sensor} obj Optional instance to populate.
 * @return {module:model/Sensor} The populated <code>Sensor</code> instance.
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
    if (data.hasOwnProperty('value')) {
      obj['value'] = SensorValue.constructFromObject(data['value']);
    }
    if (data.hasOwnProperty('sensor_kind')) {
      obj['sensor_kind'] = ApiClient.convertToType(data['sensor_kind'], 'String');
    }
    if (data.hasOwnProperty('quantity_kind')) {
      obj['quantity_kind'] = ApiClient.convertToType(data['quantity_kind'], 'String');
    }
    if (data.hasOwnProperty('unit')) {
      obj['unit'] = ApiClient.convertToType(data['unit'], 'String');
    }
  }
  return obj;
}

/**
 * ID of the sensor
 * @member {String} id
 */
exports.prototype['id'] = undefined;
/**
 * name of the sensor
 * @member {String} name
 */
exports.prototype['name'] = undefined;
/**
 * last value measured
 * @member {model/SensorValue} value 
 */
exports.prototype['value'] = undefined;
/**
 * quantity kind measured
 * @member {model/QuantityKinds} quantity_kind 
 */
exports.prototype['quantity_kind'] = undefined;
/**
 * unit of the sensor
 * @member {model/Units} unit
 */
exports.prototype['unit'] = undefined;
/**
 * kind of device providing the sensor
 * @member {model/SensorKinds} sensor_kind 
 */
exports.prototype['sensor_kind'] = undefined;


export default exports;
