'use strict';
import ApiClient from '../ApiClient';
import Location from './Location';
import Sensor from './Device';

/**
 * Constructs a new <code>Device</code>.
 * @alias module:model/Device
 * @class
 * @param devId {String} Unique ID of the device node
 */
var exports = function(devId) {
  var _this = this;

  _this['devId'] = devId;

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

    if (data.hasOwnProperty('devId')) {
      obj['devId'] = ApiClient.convertToType(data['devId'], 'String');
    }
    if (data.hasOwnProperty('devGatewayId')) {
      obj['devGatewayId'] = ApiClient.convertToType(data['devGatewayId'], 'String');
    }
    if (data.hasOwnProperty('devName')) {
      obj['devName'] = ApiClient.convertToType(data['devName'], 'String');
    }
    if (data.hasOwnProperty('devOwner')) {
      obj['devOwner'] = ApiClient.convertToType(data['devOwner'], 'String');
    }
    if (data.hasOwnProperty('devVisibility')) {
      obj['devVisibility'] = ApiClient.convertToType(data['devVisibility'], 'String');
    }
    if (data.hasOwnProperty('devSensors')) {
      obj['devSensors'] = ApiClient.convertToType(data['devSensors'], [Sensor]);
    }
    if (data.hasOwnProperty('devLocation')) {
      obj['devLocation'] = Location.constructFromObject(data['devLocation']);
    }
    if (data.hasOwnProperty('devDateCreated')) {
      obj['devDateCreated'] = ApiClient.convertToType(data['devDateCreated'], 'String');
    }
    if (data.hasOwnProperty('devDateModified')) {
      obj['devDateModified'] = ApiClient.convertToType(data['devDateModified'], 'String');
    }
    if (data.hasOwnProperty('devDomain')) {
      obj['devDomain'] = ApiClient.convertToType(data['devDomain'], 'String');
    }
  }
  
  return obj;
}

/**
 * Unique ID of the device node
 * @member {String} devId
 */
exports.prototype['devId'] = undefined;
/**
 * Unique ID of the gateway
 * @member {String} devGatewayId
 */
exports.prototype['devGatewayId'] = undefined;
/**
 * name of the device node
 * @member {String} devName
 */
exports.prototype['devName'] = undefined;
/**
 * devOwner of the device node
 * @member {String} devOwner
 */
exports.prototype['devOwner'] = undefined;
/**
 * visibility of the device node (either "private" or "public")
 * @member {String} devVisibility
 */
exports.prototype['devVisibility'] = undefined;
/**
 * @member {Array.<module:model/Sensor>} devSensors
 */
exports.prototype['devSensors'] = undefined;
/**
 * @member {module:model/Location} devLocation
 */
exports.prototype['devLocation'] = undefined;
/**
 * date at which the device has been modified
 * @member {String} devDateModified
 */
exports.prototype['devDateModified'] = undefined;
/**
 * date at which the device has been created
 * @member {String} devDateCreated
 */
exports.prototype['devDateCreated'] = undefined;
/**
 * domain of the device
 * @member {String} devDomain
 */
exports.prototype['devDomain'] = undefined;



export default exports;
