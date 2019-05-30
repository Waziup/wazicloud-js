'use strict';

import ApiClient from '../ApiClient';

/**
 * Constructs a new <code>CalibFunction</code>.
 * location is a pair of [enabled, func].
 * @alias module:model/CalibFunction
 * @class
 */
var exports = function exports(enabled, func) {
  var _this = this;

  _this['enabled'] = enabled;
  _this['func'] = func;
};

/**
 * Constructs a <code>CalibFunction</code> from a plain JavaScript object, optionally creating a new instance.
 * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
 * @param {Object} data The plain JavaScript object bearing properties of interest.
 * @param {module:model/CalibFunction} obj Optional instance to populate.
 * @return {module:model/CalibFunction} The populated <code>CalibFunction</code> instance.
 */
exports.constructFromObject = function (data, obj) {
  if (data) {
    obj = obj || new exports();

    if (data.hasOwnProperty('enabled')) {
      obj['enabled'] = ApiClient.convertToType(data['enabled'], 'Boolean');
    }
    if (data.hasOwnProperty('func')) {
      obj['func'] = ApiClient.convertToType(data['func'], 'Number');
    }
  }
  return obj;
};

/**
 * @member {Boolean} enabled
 */
exports.prototype['enabled'] = undefined;
/**
 * @member {Number} func
 */
exports.prototype['func'] = undefined;

export default exports;