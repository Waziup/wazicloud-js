'use strict';
import ApiClient from '../ApiClient';
import Location from './Location';
import Measurement from './Measurement';

/**
 * Constructs a new <code>Sensor</code>.
 * @alias module:model/Sensor
 * @class
 * @param id {String} Unique ID of the sensor node
 */
var exports = function(id) {
  var _this = this;

  _this['id'] = id;

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
    if (data.hasOwnProperty('measurements')) {
      obj['measurements'] = ApiClient.convertToType(data['measurements'], [Measurement]);
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
 * Unique ID of the sensor node
 * @member {String} id
 */
exports.prototype['id'] = undefined;
/**
 * Unique ID of the gateway
 * @member {String} gateway_id
 */
exports.prototype['gateway_id'] = undefined;
/**
 * name of the sensor node
 * @member {String} name
 */
exports.prototype['name'] = undefined;
/**
 * owner of the sensor node
 * @member {String} owner
 */
exports.prototype['owner'] = undefined;
/**
 * visibility of the sensor node (either "private" or "public")
 * @member {String} visibility
 */
exports.prototype['visibility'] = undefined;
/**
 * @member {Array.<module:model/Measurement>} measurements
 */
exports.prototype['measurements'] = undefined;
/**
 * @member {module:model/Location} location
 */
exports.prototype['location'] = undefined;
/**
 * date at which the sensor has been modified
 * @member {String} dateModified
 */
exports.prototype['date_modified'] = undefined;
/**
 * date at which the sensor has been created
 * @member {String} date_created
 */
exports.prototype['date_created'] = undefined;
/**
 * domain of the sensor
 * @member {String} domain
 */
exports.prototype['domain'] = undefined;



export default exports;
