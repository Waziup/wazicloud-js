'use strict';
import ApiClient from '../ApiClient';

/**
 * Constructs a new <code>Domain</code>.
 * @alias module:model/Domain
 * @class
 */
var exports = function() {
  var _this = this;
};

/**
 * Constructs a <code>Domain</code> from a plain JavaScript object, optionally creating a new instance.
 * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
 * @param {Object} data The plain JavaScript object bearing properties of interest.
 * @param {module:model/Domain} obj Optional instance to populate.
 * @return {module:model/Domain} The populated <code>Domain</code> instance.
 */
exports.constructFromObject = function(data, obj) {
  if (data) {
    obj = obj || new exports();

    if (data.hasOwnProperty('id')) {
      obj['id'] = ApiClient.convertToType(data['id'], 'String');
    }
  }
  return obj;
}

/**
 * @member {String} id
 */
exports.prototype['id'] = undefined;


export default exports;
