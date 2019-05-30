'use strict';

import ApiClient from '../ApiClient';
import CalibValue from './CalibValue';

/**
 * Constructs a new <code>CalibLinear</code>.
 * CalibLinear is a pair of [value_min, value_max].
 * @alias module:model/CalibValue
 * @alias module:model/CalibValue
 * @class
 */
var exports = function exports(value_min, value_max) {
  var _this = this;

  _this['value_min'] = value_min;
  _this['value_max'] = value_max;
};

/**
 * Constructs a <code>CalibLinear</code> from a plain JavaScript object, optionally creating a new instance.
 * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
 * @param {Object} data The plain JavaScript object bearing properties of interest.
 * @param {module:model/CalibLinear} obj Optional instance to populate.
 * @return {module:model/CalibLinear} The populated <code>CalibLinear</code> instance.
 */
exports.constructFromObject = function (data, obj) {
  if (data) {
    obj = obj || new exports();
    if (data.hasOwnProperty('enabled')) {
      obj['enabled'] = ApiClient.convertToType(data['enabled'], 'Boolean');
    }
    if (data.hasOwnProperty('value_min')) {
      obj['value_min'] = CalibValue.constructFromObject(data['value_min']);
    }
    if (data.hasOwnProperty('value_max')) {
      obj['value_max'] = CalibValue.constructFromObject(data['value_max']);
    }
  }
  return obj;
};

/**
 * @member {Boolean} enabled
 */
exports.prototype['enabled'] = undefined;
/**
 * @member {module:model/CalibValue} valueMin
 */
exports.prototype['value_min'] = undefined;
/**
 * @member {module:model/CalibValue} valueMax
 */
exports.prototype['value_max'] = undefined;

export default exports;