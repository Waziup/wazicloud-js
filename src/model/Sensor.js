'use strict';
import ApiClient from '../ApiClient';
import SensorValue from './SensorValue';

/**
 * Constructs a new <code>Sensor</code>.
 * @alias module:model/Sensor
 * @class
 */
var exports = function(senId) {
  var _this = this;

  _this['senId'] = senId;

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

    if (data.hasOwnProperty('senId')) {
      obj['senId'] = ApiClient.convertToType(data['senId'], 'String');
    }
    if (data.hasOwnProperty('senName')) {
      obj['senName'] = ApiClient.convertToType(data['senName'], 'String');
    }
    if (data.hasOwnProperty('senValue')) {
      obj['senValue'] = SensorValue.constructFromObject(data['senValue']);
    }
    if (data.hasOwnProperty('senSensorKind')) {
      obj['senSensorKind'] = ApiClient.convertToType(data['senSensorKind'], 'String');
    }
    if (data.hasOwnProperty('senQuantityKind')) {
      obj['senQuantityKind'] = ApiClient.convertToType(data['senQuantityKind'], 'String');
    }
    if (data.hasOwnProperty('senUnit')) {
      obj['senUnit'] = ApiClient.convertToType(data['senUnit'], 'String');
    }
  }
  return obj;
}

/**
 * ID of the sensor
 * @member {String} senId
 */
exports.prototype['senId'] = undefined;
/**
 * name of the sensor
 * @member {String} senName
 */
exports.prototype['senName'] = undefined;
/**
 * last value measured
 * @member {model/SensorValue} senValue 
 */
exports.prototype['senValue'] = undefined;
/**
 * quantity kind measured
 * @member {model/QuantityKinds} senQuantityKind 
 */
exports.prototype['senQuantityKind'] = undefined;
/**
 * unit of the sensor
 * @member {model/Units} senUnit
 */
exports.prototype['senUnit'] = undefined;
/**
 * kind of device providing the sensor
 * @member {model/SensorKinds} senSensorKind 
 */
exports.prototype['senSensorKind'] = undefined;


export default exports;
