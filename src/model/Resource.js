'use strict';
import ApiClient from '../ApiClient';

/**
 * Enum class Resource.
 * @enum {}
 * @readonly
 */
var exports = {
  /**
   * value: "Devices"
   * @const
   */
  "Devices": "Devices",
  /**
   * value: "Domains"
   * @const
   */
  "Domains": "Domains",
  /**
   * value: "History"
   * @const
   */
  "History": "History",
  /**
   * value: "Notifications"
   * @const
   */
  "Notifications": "Notifications",
  /**
   * value: "Socials"
   * @const
   */
  "Socials": "Socials",
  /**
   * value: "Users"
   * @const
   */
  "Users": "Users"  };

/**
 * Returns a <code>Resource</code> enum value from a Javascript object name.
 * @param {Object} data The plain JavaScript object containing the name of the enum value.
 * @return {module:model/Resource} The enum <code>Resource</code> value.
 */
exports.constructFromObject = function(object) {
  return object;
}

export default exports;
