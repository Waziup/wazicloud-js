'use strict';
import ApiClient from '../ApiClient';

/**
 * Constructs a new <code>GatewayTunnel</code>.
 * @alias module:model/GatewayTunnel
 * @class
 * @param tunnel_port {Integer} of the gateway tunnel
 */
var exports = function(tunnel_port) {
  var _this = this;

  _this['tunnel_port'] = tunnel_port;

};

/**
 * Constructs a <code>GatewayTunnel</code> from a plain JavaScript object, optionally creating a new instance.
 * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
 * @param {Object} data The plain JavaScript object bearing properties of interest.
 * @param {module:model/GatewayTunnel} obj Optional instance to populate.
 * @return {module:model/GatewayTunnel} The populated <code>GatewayTunnel</code> instance.
 */
exports.constructFromObject = function(data, obj) {
  if (data) {
    obj = obj || new exports();

    if (data.hasOwnProperty('tunnel_port')) {
      obj['tunnel_port'] = ApiClient.convertToType(data['tunnel_port'], 'Integer');
    }
  }
  
  return obj;
}

/**
 * Tunnel port of the gateway tunnel node
 * @member {String} tunnel_port
 */
exports.prototype['tunnel_port'] = undefined;

export default exports;
