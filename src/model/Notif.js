'use strict';
import ApiClient from '../ApiClient';
import NotificationCondition from './NotifCondition';
import SocialMessageBatch from './SocialMessageBatch';

/**
 * Constructs a new <code>Notification</code>.
 * @alias module:model/Notification
 * @class
 * @param notifCondition {module:model/NotificationCondition} 
 * @param notifAction {module:model/SocialMessageBatch} 
 */
var exports = function(notifCondition, notifDescription, notifAction) {
  var _this = this;

  _this['notifCondition'] = notifCondition;
  _this['notifAction'] = notifAction;
  _this['notifDescription'] = notifDescription;

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

    if (data.hasOwnProperty('notifId')) {
      obj['notifId'] = ApiClient.convertToType(data['notifId'], 'String');
    }
    if (data.hasOwnProperty('notifDescription')) {
      obj['notifDescription'] = ApiClient.convertToType(data['notifDescription'], 'String');
    }
    if (data.hasOwnProperty('notifCondition')) {
      obj['notifCondition'] = NotificationCondition.constructFromObject(data['notifCondition']);
    }
    if (data.hasOwnProperty('notifAction')) {
      obj['notifAction'] = SocialMessageBatch.constructFromObject(data['notifAction']);
    }
    if (data.hasOwnProperty('notifExpires')) {
      obj['notifExpires'] = ApiClient.convertToType(data['notifExpires'], 'String');
    }
    if (data.hasOwnProperty('notifThrottling')) {
      obj['notifThrottling'] = ApiClient.convertToType(data['notifThrottling'], 'Number');
    }
    if (data.hasOwnProperty('notifTimesSent')) {
      obj['notifTimesSent'] = ApiClient.convertToType(data['notifTimesSent'], 'String');
    }
    if (data.hasOwnProperty('notifLastNotif')) {
      obj['notifLastNotif'] = ApiClient.convertToType(data['notifLastNotif'], 'String');
    }
    if (data.hasOwnProperty('notifStatus')) {
      obj['notifStatus'] = ApiClient.convertToType(data['notifStatus'], 'String');
    }
  }
  return obj;
}

/**
 * Id of the notification
 * @member {String} notifId
 */
exports.prototype['notifId'] = undefined;
/**
 * Description of the notification
 * @member {String} notifDescription
 */
exports.prototype['notifDescription'] = undefined;
/**
 * @member {module:model/NotificationCondition} notifCondition
 */
exports.prototype['notifCondition'] = undefined;
/**
 * @member {module:model/SocialMessageBatch} notifAction
 */
exports.prototype['notifAction'] = undefined;
/**
 * @member {Number} notifExpires
 */
exports.prototype['notifExpires'] = undefined;
/**
 * minimum interval between two messages in seconds
 * @member {Number} notifThrottling
 */
exports.prototype['notifThrottling'] = undefined;
/**
 * times_sent of the notification
 * @member {String} notifTimesSent
 */
exports.prototype['notifTimesSent'] = undefined;
/**
 * last_notification of the notification
 * @member {String} notifLastNotif
 */
exports.prototype['notifLastNotif'] = undefined;
/**
 * status of the notification
 * @member {String} notifStatus
 */
exports.prototype['notifStatus'] = undefined;

export default exports;
