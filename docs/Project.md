# WaziupApi.Project

## Properties

| Name         | Type         | Description                       | Notes      |
| ------------ | ------------ | --------------------------------- | ---------- |
| **id**       | **String**   | Unique ID of the project          |
| **name**     | **String**   | name of the project               | [optional] |
| **devices**  | **[String]** | devices connected to the project  | [optional] |
| **gateways** | **[String]** | gateways connected to the project | [optional] |
| **device_ids**  | **[String]** | devices ids connected to the project  | [optional] |
| **gateway_ids** | **[String]** | gateways ids connected to the project | [optional] |
| **owner** | **[String]** | owner of the project node | [optional] |



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
