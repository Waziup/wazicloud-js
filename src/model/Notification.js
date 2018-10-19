'use strict';
import ApiClient from '../ApiClient';
import NotificationCondition from './NotificationCondition';
import SocialMessageBatch from './SocialMessageBatch';

/**
 * Constructs a new <code>Notification</code>.
 * @alias module:model/Notification
 * @class
 * @param condition {module:model/NotificationCondition} 
 * @param notification {module:model/SocialMessageBatch} 
 */
var exports = function(condition, description, notification) {
  var _this = this;

  _this['condition'] = condition;
  _this['notification'] = notification;
  _this['description'] = description;

};

/**
 * Constructs a <code>Notification</code> from a plain JavaScript object, optionally creating a new instance.
 * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
 * @param {Object} data The plain JavaScript object bearing properties of interest.
 * @param {module:model/Notification} obj Optional instance to populate.
 * @return {module:model/Notification} The populated <code>Notification</code> instance.
 */
exports.constructFromObject = function(data, obj) {
  if (data) {
    obj = obj || new exports();

    if (data.hasOwnProperty('id')) {
      obj['id'] = ApiClient.convertToType(data['id'], 'String');
    }
    if (data.hasOwnProperty('description')) {
      obj['description'] = ApiClient.convertToType(data['description'], 'String');
    }
    if (data.hasOwnProperty('condition')) {
      obj['condition'] = NotificationCondition.constructFromObject(data['condition']);
    }
    if (data.hasOwnProperty('notification')) {
      obj['notification'] = SocialMessageBatch.constructFromObject(data['notification']);
    }
    if (data.hasOwnProperty('expires')) {
      obj['expires'] = ApiClient.convertToType(data['expires'], 'String');
    }
    if (data.hasOwnProperty('throttling')) {
      obj['throttling'] = ApiClient.convertToType(data['throttling'], 'Number');
    }
    if (data.hasOwnProperty('times_sent')) {
      obj['times_sent'] = ApiClient.convertToType(data['times_sent'], 'String');
    }
    if (data.hasOwnProperty('last_notification')) {
      obj['last_notification'] = ApiClient.convertToType(data['last_notification'], 'String');
    }
    if (data.hasOwnProperty('status')) {
      obj['status'] = ApiClient.convertToType(data['status'], 'String');
    }
  }
  return obj;
}

/**
 * id of the notification
 * @member {String} id
 */
exports.prototype['id'] = undefined;
/**
 * Description of the notification
 * @member {String} description
 */
exports.prototype['description'] = undefined;
/**
 * @member {module:model/NotificationCondition} conndition
 */
exports.prototype['condition'] = undefined;
/**
 * @member {module:model/SocialMessageBatch} notification
 */
exports.prototype['notification'] = undefined;
/**
 * @member {Number} expires
 */
exports.prototype['expires'] = undefined;
/**
 * minimum interval between two messages in seconds
 * @member {Number} throttling
 */
exports.prototype['throttling'] = undefined;
/**
 * times_sent of the notification
 * @member {String} times_sent
 */
exports.prototype['times_sent'] = undefined;
/**
 * last_notification of the notification
 * @member {String} last_notification
 */
exports.prototype['last_notification'] = undefined;
/**
 * status of the notification
 * @member {String} status
 */
exports.prototype['status'] = undefined;

export default exports;
