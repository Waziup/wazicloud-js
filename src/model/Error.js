'use strict';
import ApiClient from '../ApiClient';

/**
 * Constructs a new <code>Error</code>.
 * @alias module:model/Error
 * @class
 */
var exports = function() {
  var _this = this;

};

/**
 * Constructs a <code>Error</code> from a plain JavaScript object, optionally creating a new instance.
 * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
 * @param {Object} data The plain JavaScript object bearing properties of interest.
 * @param {module:model/Error} obj Optional instance to populate.
 * @return {module:model/Error} The populated <code>Error</code> instance.
 */
exports.constructFromObject = function(data, obj) {
  if (data) {
    obj = obj || new exports();

    if (data.hasOwnProperty('code')) {
      obj['code'] = ApiClient.convertToType(data['code'], 'Number');
    }
    if (data.hasOwnProperty('message')) {
      obj['message'] = ApiClient.convertToType(data['message'], 'String');
    }
    if (data.hasOwnProperty('fields')) {
      obj['fields'] = ApiClient.convertToType(data['fields'], 'String');
    }
  }
  return obj;
}

/**
 * @member {Number} code
 */
exports.prototype['code'] = undefined;
/**
 * @member {String} message
 */
exports.prototype['message'] = undefined;
/**
 * @member {String} fields
 */
exports.prototype['fields'] = undefined;



export default exports;
