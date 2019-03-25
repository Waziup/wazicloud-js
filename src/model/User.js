'use strict';
import ApiClient from '../ApiClient';

/**
 * Constructs a new <code>User</code>.
 * @alias module:model/User
 * @class
 */
var exports = function(userId) {
  var _this = this;

  _this['userId'] = userId;

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

    if (data.hasOwnProperty('userId')) {
      obj['userId'] = ApiClient.convertToType(data['userId'], 'String');
    }
    if (data.hasOwnProperty('userUsername')) {
      obj['userUsername'] = ApiClient.convertToType(data['userUsername'], 'String');
    }
    if (data.hasOwnProperty('userFirstName')) {
      obj['userFirstName'] = ApiClient.convertToType(data['userFirstName'], 'String');
    }
    if (data.hasOwnProperty('userLastName')) {
      obj['userLastName'] = ApiClient.convertToType(data['userLastName'], 'String');
    }
    if (data.hasOwnProperty('subservice')) {
      obj['subservice'] = ApiClient.convertToType(data['subservice'], 'String');
    }
    if (data.hasOwnProperty('userEmail')) {
      obj['userEmail'] = ApiClient.convertToType(data['userEmail'], 'String');
    }
    if (data.hasOwnProperty('userPhone')) {
      obj['userPhone'] = ApiClient.convertToType(data['userPhone'], 'String');
    }
    if (data.hasOwnProperty('address')) {
      obj['address'] = ApiClient.convertToType(data['address'], 'String');
    }
    if (data.hasOwnProperty('userFacebook')) {
      obj['userFacebook'] = ApiClient.convertToType(data['userFacebook'], 'String');
    }
    if (data.hasOwnProperty('userTwitter')) {
      obj['userTwitter'] = ApiClient.convertToType(data['userTwitter'], 'String');
    }
    if (data.hasOwnProperty('roles')) {
      obj['roles'] = ApiClient.convertToType(data['roles'], 'String');
    }
  }
  return obj;
}

/**
 * @member {String} userId
 */
exports.prototype['userId'] = undefined;
/**
 * @member {String} userUsername
 */
exports.prototype['userUsername'] = undefined;
/**
 * @member {String} userFirstName
 */
exports.prototype['userFirstName'] = undefined;
/**
 * @member {String} userLastName
 */
exports.prototype['userLastName'] = undefined;
/**
 * @member {String} subservice
 */
exports.prototype['subservice'] = undefined;
/**
 * @member {String} userEmail
 */
exports.prototype['userEmail'] = undefined;
/**
 * @member {String} userPhone
 */
exports.prototype['userPhone'] = undefined;
/**
 * @member {String} address
 */
exports.prototype['address'] = undefined;
/**
 * @member {String} userFacebook
 */
exports.prototype['userFacebook'] = undefined;
/**
 * @member {String} userTwitter
 */
exports.prototype['userTwitter'] = undefined;
/**
 * @member {String} roles
 */
exports.prototype['roles'] = undefined;

export default exports;
