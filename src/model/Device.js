'use strict';
import ApiClient from '../ApiClient';
import Location from './Location';
import Sensor from './Device';

/**
 * Constructs a new <code>Device</code>.
 * @alias module:model/Device
 * @class
 * @param id {String} Unique ID of the device node
 */
var exports = function(id) {
  var _this = this;

  _this['id'] = id;

};

/**
 * Constructs a <code>Device</code> from a plain JavaScript object, optionally creating a new instance.
 * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
 * @param {Object} data The plain JavaScript object bearing properties of interest.
 * @param {module:model/Device} obj Optional instance to populate.
 * @return {module:model/Device} The populated <code>Device</code> instance.
 */
exports.constructFromObject = function(data, obj) {
  if (data) {
    obj = obj || new exports();

    if (data.hasOwnProperty('id')) {
      obj['id'] = ApiClient.convertToType(data['id'], 'String');
    }
    if (data.hasOwnProperty('gateway_id')) {
      obj['gateway_id'] = ApiClient.convertToType(data['gateway_id'], 'String');
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
    if (data.hasOwnProperty('sensors')) {
      obj['sensors'] = ApiClient.convertToType(data['sensors'], [Sensor]);
    }
    if (data.hasOwnProperty('location')) {
      obj['location'] = Location.constructFromObject(data['location']);
    }
    if (data.hasOwnProperty('date_created')) {
      obj['date_created'] = ApiClient.convertToType(data['date_created'], 'String');
    }
    if (data.hasOwnProperty('date_modified')) {
      obj['date_modified'] = ApiClient.convertToType(data['date_modified'], 'String');
    }
    if (data.hasOwnProperty('domain')) {
      obj['domain'] = ApiClient.convertToType(data['domain'], 'String');
    }
  }
  
  return obj;
}

/**
 * Unique ID of the device node
 * @member {String} id
 */
exports.prototype['id'] = undefined;
/**
 * Unique ID of the gateway
 * @member {String} gateway_id
 */
exports.prototype['gateway_id'] = undefined;
/**
 * name of the device node
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
 * @member {Array.<module:model/Sensor>} sensors
 */
exports.prototype['sensors'] = undefined;
/**
 * @member {module:model/Location} location
 */
exports.prototype['location'] = undefined;
/**
 * date at which the device has been modified
 * @member {String} date_modified
 */
exports.prototype['date_modified'] = undefined;
/**
 * date at which the device has been created
 * @member {String} date_created
 */
exports.prototype['date_created'] = undefined;
/**
 * domain of the device
 * @member {String} domain
 */
exports.prototype['domain'] = undefined;



export default exports;
