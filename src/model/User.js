'use strict';
import ApiClient from '../ApiClient';

/**
 * Constructs a new <code>User</code>.
 * @alias module:model/User
 * @class
 */
var exports = function(id) {
  var _this = this;

  _this['id'] = id;

};

/**
 * Constructs a <code>User</code> from a plain JavaScript object, optionally creating a new instance.
 * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
 * @param {Object} data The plain JavaScript object bearing properties of interest.
 * @param {module:model/User} obj Optional instance to populate.
 * @return {module:model/User} The populated <code>User</code> instance.
 */
exports.constructFromObject = function(data, obj) {
  if (data) {
    obj = obj || new exports();

    if (data.hasOwnProperty('id')) {
      obj['id'] = ApiClient.convertToType(data['id'], 'String');
    }
    if (data.hasOwnProperty('username')) {
      obj['username'] = ApiClient.convertToType(data['username'], 'String');
    }
    if (data.hasOwnProperty('firstName')) {
      obj['firstName'] = ApiClient.convertToType(data['firstName'], 'String');
    }
    if (data.hasOwnProperty('lastName')) {
      obj['lastName'] = ApiClient.convertToType(data['lastName'], 'String');
    }
    if (data.hasOwnProperty('subservice')) {
      obj['subservice'] = ApiClient.convertToType(data['subservice'], 'String');
    }
    if (data.hasOwnProperty('email')) {
      obj['email'] = ApiClient.convertToType(data['email'], 'String');
    }
    if (data.hasOwnProperty('phone')) {
      obj['phone'] = ApiClient.convertToType(data['phone'], 'String');
    }
    if (data.hasOwnProperty('address')) {
      obj['address'] = ApiClient.convertToType(data['address'], 'String');
    }
    if (data.hasOwnProperty('facebook')) {
      obj['facebook'] = ApiClient.convertToType(data['facebook'], 'String');
    }
    if (data.hasOwnProperty('twitter')) {
      obj['twitter'] = ApiClient.convertToType(data['twitter'], 'String');
    }
    if (data.hasOwnProperty('roles')) {
      obj['roles'] = ApiClient.convertToType(data['roles'], 'String');
    }
  }
  return obj;
}

/**
 * @member {String} id
 */
exports.prototype['id'] = undefined;
/**
 * @member {String} username
 */
exports.prototype['username'] = undefined;
/**
 * @member {String} firstName
 */
exports.prototype['firstName'] = undefined;
/**
 * @member {String} lastName
 */
exports.prototype['lastName'] = undefined;
/**
 * @member {String} subservice
 */
exports.prototype['subservice'] = undefined;
/**
 * @member {String} email
 */
exports.prototype['email'] = undefined;
/**
 * @member {String} phone
 */
exports.prototype['phone'] = undefined;
/**
 * @member {String} address
 */
exports.prototype['address'] = undefined;
/**
 * @member {String} facebook
 */
exports.prototype['facebook'] = undefined;
/**
 * @member {String} twitter
 */
exports.prototype['twitter'] = undefined;
/**
 * @member {String} roles
 */
exports.prototype['roles'] = undefined;

export default exports;
