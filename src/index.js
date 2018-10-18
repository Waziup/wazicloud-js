'use strict';
import ApiClient              from './ApiClient'
import AuthBody               from './model/AuthBody'
import Error                  from './model/Error'
import Location               from './model/Location'
import Measurement            from './model/Measurement'
import MeasurementValue       from './model/MeasurementValue'
import Notification           from './model/Notification'
import NotificationCondition  from './model/NotificationCondition'
import NotificationSubject    from './model/NotificationSubject'
import QuantityKinds          from './model/QuantityKinds'
import SensingDevices         from './model/SensingDevices'
import Sensor                 from './model/Sensor'
import SocialMessage          from './model/SocialMessage'
import SocialMessageBatch     from './model/SocialMessageBatch'
import Units                  from './model/Units'
import User                   from './model/User'
import UserUpdateBody         from './model/UserUpdateBody'
import NotificationsApi       from './api/NotificationsApi'
import SensorsApi             from './api/SensorsApi'
import SocialsApi             from './api/SocialsApi'
import UsersApi               from './api/UsersApi'               
import AuthApi                from './api/AuthApi'               

/**
 * Waziup API<br>
 * This module provides access to constructors for all the classes which comprise the public API.
 * Usage:
 * <p>
 * <pre>
 * var WaziupApi = require('index'); // See note below*.
 * var xxxSvc = new WaziupApi.XxxApi(); // Allocate the API class we're going to use.
 * var yyyModel = new WaziupApi.Yyy(); // Construct a model instance.
 * yyyModel.someProperty = 'someValue';
 * ...
 * var zzz = xxxSvc.doSomething(yyyModel); // Invoke the service.
 * ...
 * </pre>
 * <em>*NOTE: For a top-level AMD script, use require(['index'], function(){...})
 * and put the application logic within the callback function.</em>
 * </p>
 * <p>
 * A non-AMD browser application (discouraged) might do something like this:
 * <pre>
 * var xxxSvc = new WaziupApi.XxxApi(); // Allocate the API class we're going to use.
 * var yyy = new WaziupApi.Yyy(); // Construct a model instance.
 * yyyModel.someProperty = 'someValue';
 * ...
 * var zzz = xxxSvc.doSomething(yyyModel); // Invoke the service.
 * ...
 * </pre>
 * </p>
 */
 export {
  /**
   * The ApiClient constructor.
   * @property {module:ApiClient}
   */
  ApiClient,
  /**
   * The AuthBody model constructor.
   * @property {module:model/AuthBody}
   */
  AuthBody,
  /**
   * The Error model constructor.
   * @property {module:model/Error}
   */
  Error,
  /**
   * The Location model constructor.
   * @property {module:model/Location}
   */
  Location,
  /**
   * The Measurement model constructor.
   * @property {module:model/Measurement}
   */
  Measurement,
  /**
   * The MeasurementValue model constructor.
   * @property {module:model/MeasurementValue}
   */
  MeasurementValue,
  /**
   * The Notification model constructor.
   * @property {module:model/Notification}
   */
  Notification,
  /**
   * The NotificationCondition model constructor.
   * @property {module:model/NotificationCondition}
   */
  NotificationCondition,
  /**
   * The NotificationSubject model constructor.
   * @property {module:model/NotificationSubject}
   */
  NotificationSubject,
  /**
   * List of Quantity kinds
   * @property {module:model/QuantityKinds}
   */
  QuantityKinds,
  /**
   * List of sensing devices
   * @property {module:model/SensingDevices}
   */
  SensingDevices,
  /**
   * The Sensor model constructor.
   * @property {module:model/Sensor}
   */
  Sensor,
  /**
   * The SocialMessage model constructor.
   * @property {module:model/SocialMessage}
   */
  SocialMessage,
  /**
   * The SocialMessageBatch model constructor.
   * @property {module:model/SocialMessageBatch}
   */
  SocialMessageBatch,
  /**
   * List of Units
   * @property {module:model/Units}
   */
  Units,
  /**
   * The User model constructor.
   * @property {module:model/User}
   */
  User,
  /**
   * The UserUpdateBody model constructor.
   * @property {module:model/UserUpdateBody}
   */
  UserUpdateBody,
  /**
   * The DomainsApi service constructor.
   * @property {module:api/DomainsApi}
   */
  NotificationsApi,
  /**
   * The SensorsApi service constructor.
   * @property {module:api/SensorsApi}
   */
  SensorsApi,
  /**
   * The SocialsApi service constructor.
   * @property {module:api/SocialsApi}
   */
  SocialsApi,
  /**
   * The UsersApi service constructor.
   * @property {module:api/UsersApi}
   */
  UsersApi,
  /**
   * The AuthApi service constructor.
   * @property {module:api/AuthApi}
   */
  AuthApi
}
