'use strict';
import ApiClient from '../ApiClient';

/**
 * Enum class Scope.
 * @enum {}
 * @readonly
 */
var exports = {
  /**
   * value: "sensors:create"
   * @const
   */
  "sensors:create": "sensors:create",
  /**
   * value: "sensors:view"
   * @const
   */
  "sensors:view": "sensors:view",
  /**
   * value: "sensors:update"
   * @const
   */
  "sensors:update": "sensors:update",
  /**
   * value: "sensors:delete"
   * @const
   */
  "sensors:delete": "sensors:delete",
  /**
   * value: "domains:create"
   * @const
   */
  "domains:create": "domains:create",
  /**
   * value: "domains:view"
   * @const
   */
  "domains:view": "domains:view",
  /**
   * value: "domains:update"
   * @const
   */
  "domains:update": "domains:update",
  /**
   * value: "domains:delete"
   * @const
   */
  "domains:delete": "domains:delete",
  /**
   * value: "socials:create"
   * @const
   */
  "socials:create": "socials:create",
  /**
   * value: "socials:view"
   * @const
   */
  "socials:view": "socials:view",
  /**
   * value: "socials:update"
   * @const
   */
  "socials:update": "socials:update",
  /**
   * value: "socials:delete"
   * @const
   */
  "socials:delete": "socials:delete",
  /**
   * value: "notifications:create"
   * @const
   */
  "notifications:create": "notifications:create",
  /**
   * value: "notifications:view"
   * @const
   */
  "notifications:view": "notifications:view",
  /**
   * value: "notifications:update"
   * @const
   */
  "notifications:update": "notifications:update",
  /**
   * value: "notifications:delete"
   * @const
   */
  "notifications:delete": "notifications:delete",
  /**
   * value: "history:create"
   * @const
   */
  "history:create": "history:create",
  /**
   * value: "history:view"
   * @const
   */
  "history:view": "history:view",
  /**
   * value: "history:update"
   * @const
   */
  "history:update": "history:update",
  /**
   * value: "history:delete"
   * @const
   */
  "history:delete": "history:delete",
  /**
   * value: "users:create"
   * @const
   */
  "users:create": "users:create",
  /**
   * value: "users:view"
   * @const
   */
  "users:view": "users:view",
  /**
   * value: "users:update"
   * @const
   */
  "users:update": "users:update",
  /**
   * value: "users:delete"
   * @const
   */
  "users:delete": "users:delete"  };

/**
 * Returns a <code>Scope</code> enum value from a Javascript object name.
 * @param {Object} data The plain JavaScript object containing the name of the enum value.
 * @return {module:model/Scope} The enum <code>Scope</code> value.
 */
exports.constructFromObject = function(object) {
  return object;
}

export default exports;
