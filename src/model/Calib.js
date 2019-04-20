'use strict';

import ApiClient from '../ApiClient';
import CalibLinear from './CalibLinear';
import CalibFunction from './CalibFunction';

/**
 * Constructs a new <code>Calib</code>.
 * Calib is a pair of [linear, calFunction].
 * @alias module:model/CalibLinear
 * @alias module:model/CalibFunction
 * @class
 */
var exports = function exports(linear, calFunction) {
  var _this = this;

  _this['linear'] = linear;
  _this['function'] = calFunction;
};

/**
 * Constructs a <code>Calib</code> from a plain JavaScript object, optionally creating a new instance.
 * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
 * @param {Object} data The plain JavaScript object bearing properties of interest.
 * @param {module:model/Calib} obj Optional instance to populate.
 * @return {module:model/Calib} The populated <code>Calib</code> instance.
 */
exports.constructFromObject = function (data, obj) {
  if (data) {
    obj = obj || new exports();
    if (data.hasOwnProperty('linear')) {
      obj['linear'] = ApiClient.convertToType(data['linear'], [CalibLinear.default]);
    }
    if (data.hasOwnProperty('function')) {
      obj['function'] = ApiClient.convertToType(data['function'], [CalibFunction.default]);
    }
  }
  return obj;
};

/**
 * @member {module:model/CalibLinear} linear
 */
exports.prototype['linear'] = undefined;
/**
 * @member {module:model/CalibFunction} function
 */
exports.prototype['function'] = undefined;

exports.default = exports;