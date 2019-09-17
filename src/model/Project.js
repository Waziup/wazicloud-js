'use strict';
import ApiClient from '../ApiClient';
import Device from './Device';
import Gateway from './Gateway';

/**
 * Constructs a new <code>Project</code>.
 * @alias module:model/Project
 * @class
 * @param id {String} Unique ID of the project node
 */
var exports = function(id) {
  var _this = this;

  _this['id'] = id;

};

/**
 * Constructs a <code>Project</code> from a plain JavaScript object, optionally creating a new instance.
 * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
 * @param {Object} data The plain JavaScript object bearing properties of interest.
 * @param {module:model/Project} obj Optional instance to populate.
 * @return {module:model/Project} The populated <code>Project</code> instance.
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
    if (data.hasOwnProperty('owner')) {
      obj['owner'] = ApiClient.convertToType(data['owner'], 'String');
    }
    if (data.hasOwnProperty('devices')) {
      obj['devices'] = ApiClient.convertToType(data['devices'], 'Array');
    }
    if (data.hasOwnProperty('gateways')) {
      obj['gateways'] = ApiClient.convertToType(data['gateways'], 'Array');
    }
    if (data.hasOwnProperty('device_ids')) {
      obj['device_ids'] = ApiClient.convertToType(data['device_ids'], 'Array');
    }
    if (data.hasOwnProperty('gateway_ids')) {
      obj['gateway_ids'] = ApiClient.convertToType(data['gateway_ids'], 'Array');
    }
  }
  
  return obj;
}

/**
 * Unique ID of the project node
 * @member {String} id
 */
exports.prototype['id'] = undefined;
/**
 * name of the project node
 * @member {String} name
 */
exports.prototype['name'] = undefined;
/**
 * owner of the project node
 * @member {String} owner
 */
exports.prototype['owner'] = undefined;
/**
 * @member {Array} devices
 */
exports.prototype['devices'] = undefined;
/**
 * @member {Array} gateways
 */
exports.prototype['gateways'] = undefined;
/**
 * @member {Array} device_ids
 */
exports.prototype['device_ids'] = undefined;
/**
 * @member {Array} gateway_ids
 */
exports.prototype['gateway_ids'] = undefined;

export default exports;
