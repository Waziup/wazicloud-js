'use strict';
import ApiClient from '../ApiClient';

/**
 * Constructs a new <code>SensorValue</code>.
 * @alias module:model/SensorValue
 * @class
 */
var exports = function(senValValue) {
  var _this = this;
  _this['senValValue'] = senValValue;
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

    if (data.hasOwnProperty('senValValue')) {
      obj['senValValue'] = ApiClient.convertToType(data['senValValue'], 'Blob');
    }
    if (data.hasOwnProperty('senValTimestamp')) {
      obj['senValTimestamp'] = ApiClient.convertToType(data['senValTimestamp'], 'String');
    }
    if (data.hasOwnProperty('senValDateReceived')) {
      obj['senValDateReceived'] = ApiClient.convertToType(data['senValDateReceived'], 'String');
    }
  }
  return obj;
}

/**
 * value of the sensor
 * @member {Number} senValValue
 */
exports.prototype['senValValue'] = undefined;
/**
 * time of the sensor
 * @member {String} senValTimestamp
 */
exports.prototype['senValTimestamp'] = undefined;
/**
 * time received on Cloud side
 * @member {String} senValDateReceived
 */
exports.prototype['senValDateReceived'] = undefined;


export default exports;
