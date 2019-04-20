'use strict';
import ApiClient from '../ApiClient';

/**
 * Constructs a new <code>Actuator</code>.
 * @alias module:model/Actuator
 * @class
 */
var exports = function(id) {
  var _this = this;

  _this['id'] = id;

};

/**
 * Constructs a <code>Actuator</code> from a plain JavaScript object, optionally creating a new instance.
 * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
 * @param {Object} data The plain JavaScript object bearing properties of interest.
 * @param {module:model/Actuator} obj Optional instance to populate.
 * @return {module:model/Actuator} The populated <code>Actuator</code> instance.
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
      obj['value'] = ApiClient.convertToType(data['value'], 'String');
    }
    if (data.hasOwnProperty('actuator_kind')) {
      obj['actuator_kind'] = ApiClient.convertToType(data['actuator_kind'], 'String');
    }
    if (data.hasOwnProperty('actuator_value_type')) {
      obj['actuator_value_type'] = ApiClient.convertToType(data['actuator_value_type'], 'String');
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
 * @member {String} value 
 */
exports.prototype['value'] = undefined;
/**
 * actuator value type
 * @member {String} actuator_value_type 
 */
exports.prototype['actuator_value_type'] = undefined;
/**
 * kind of device providing the sensor
 * @member {model/ActuatorKinds} actuator_kind 
 */
exports.prototype['actuator_kind'] = undefined;

export default exports;
