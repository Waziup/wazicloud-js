'use strict';
import ApiClient from '../ApiClient';
import NotificationSubject from './NotificationSubject';
import SocialMessageBatch from './SocialMessageBatch';

/**
 * Constructs a new <code>Notification</code>.
 * @alias module:model/Notification
 * @class
 * @param subject {module:model/NotificationSubject} 
 * @param notification {module:model/SocialMessageBatch} 
 */
var exports = function(subject, description, notification, throttling) {
  var _this = this;

  _this['subject'] = subject;
  _this['notification'] = notification;
  _this['description'] = description;
  _this['throttling'] = throttling;

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
    if (data.hasOwnProperty('subject')) {
      obj['subject'] = NotificationSubject.constructFromObject(data['subject']);
    }
    if (data.hasOwnProperty('notification')) {
      obj['notification'] = SocialMessageBatch.constructFromObject(data['notification']);
    }
    if (data.hasOwnProperty('throttling')) {
      obj['throttling'] = ApiClient.convertToType(data['throttling'], 'Number');
    }
  }
  return obj;
}

/**
 * Description of the notification
 * @member {String} description
 */
exports.prototype['description'] = undefined;
/**
 * @member {module:model/NotificationSubject} subject
 */
exports.prototype['subject'] = undefined;
/**
 * @member {module:model/SocialMessageBatch} notification
 */
exports.prototype['notification'] = undefined;
/**
 * minimum interval between two messages in seconds
 * @member {Number} throttling
 */
exports.prototype['throttling'] = undefined;

export default exports;
