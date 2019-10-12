'use strict';
import ApiClient from '../ApiClient';
import GatewayTunnel from './GatewayTunnel';

/**
 * Constructs a new <code>Gateway</code>.
 * @alias module:model/Gateway
 * @class
 * @param id {String} Unique ID of the project node
 */
var exports = function(id) {
  var _this = this;

  _this['id'] = id;

};

/**
 * Constructs a <code>Gateway</code> from a plain JavaScript object, optionally creating a new instance.
 * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
 * @param {Object} data The plain JavaScript object bearing properties of interest.
 * @param {module:model/Gateway} obj Optional instance to populate.
 * @return {module:model/Gateway} The populated <code>Gateway</code> instance.
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
    if (data.hasOwnProperty('visibility')) {
      obj['visibility'] = ApiClient.convertToType(data['visibility'], 'String');
    }
    if (data.hasOwnProperty('devices')) {
      obj['devices'] = ApiClient.convertToType(data['devices'], 'Array');
    }
    if (data.hasOwnProperty('date_created')) {
      obj['date_created'] = ApiClient.convertToType(data['date_created'], 'String');
    }
    if (data.hasOwnProperty('date_modified')) {
      obj['date_modified'] = ApiClient.convertToType(data['date_modified'], 'String');
    }
    if (data.hasOwnProperty('connected')) {
      obj['connected'] = ApiClient.convertToType(data['connected'], 'Bool');
    }
    if (data.hasOwnProperty('last_seen')) {
      obj['last_seen'] = ApiClient.convertToType(data['last_seen'], 'String');
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
 * owner of the device node
 * @member {String} owner
 */
exports.prototype['owner'] = undefined;
/**
 * visibility of the device node (either "private" or "public")
 * @member {String} visibility
 */
exports.prototype['visibility'] = undefined;
/**
 * @member {module:model/GatewayTunnel} tunnel
 */
exports.prototype['tunnel'] = undefined;
/**
 * @member {Array} devices
 */
exports.prototype['devices'] = undefined;
/**
 * time created on Cloud side
 * @member {String} date_created
 */
exports.prototype['date_created'] = undefined;
/**
 * time modified on Cloud side
 * @member {String} date_modified
 */
exports.prototype['date_modified'] = undefined;
/**
 * time modified on Cloud side
 * @member {String} date_modified
 */
exports.prototype['connected'] = undefined;
/**
 * time modified on Cloud side
 * @member {String} date_modified
 */
exports.prototype['last_seen'] = undefined;

export default exports;
