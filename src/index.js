(function(factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient', 'model/AuthBody', 'model/Domain', 'model/Error', 'model/Location', 'model/Measurement', 'model/MeasurementValue', 'model/Notification', 'model/NotificationCondition', 'model/NotificationSubject', 'model/Sensor', 'model/SocialMessage', 'model/SocialMessageBatch', 'model/User', 'model/UserUpdateBody', 'api/DomainsApi', 'api/NotificationsApi', 'api/SensorsApi', 'api/SocialsApi', 'api/UsersApi'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('./ApiClient'), require('./model/AuthBody'), require('./model/Domain'), require('./model/Error'), require('./model/Location'), require('./model/Measurement'), require('./model/MeasurementValue'), require('./model/Notification'), require('./model/NotificationCondition'), require('./model/NotificationSubject'), require('./model/Sensor'), require('./model/SocialMessage'), require('./model/SocialMessageBatch'), require('./model/User'), require('./model/UserUpdateBody'), require('./api/DomainsApi'), require('./api/NotificationsApi'), require('./api/SensorsApi'), require('./api/SocialsApi'), require('./api/UsersApi'));
  }
}(function(ApiClient, AuthBody, Domain, Error, Location, Measurement, MeasurementValue, Notification, NotificationCondition, NotificationSubject, Sensor, SocialMessage, SocialMessageBatch, User, UserUpdateBody, DomainsApi, NotificationsApi, SensorsApi, SocialsApi, UsersApi) {
  'use strict';

  /**
   * Applications_API.<br>
   * The <code>index</code> module provides access to constructors for all the classes which comprise the public API.
   * <p>
   * An AMD (recommended!) or CommonJS application will generally do something equivalent to the following:
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
   * @module index
   * @version 1.0.0
   */
  var exports = {
    /**
     * The ApiClient constructor.
     * @property {module:ApiClient}
     */
    ApiClient: ApiClient,
    /**
     * The AuthBody model constructor.
     * @property {module:model/AuthBody}
     */
    AuthBody: AuthBody,
    /**
     * The Domain model constructor.
     * @property {module:model/Domain}
     */
    Domain: Domain,
    /**
     * The Error model constructor.
     * @property {module:model/Error}
     */
    Error: Error,
    /**
     * The Location model constructor.
     * @property {module:model/Location}
     */
    Location: Location,
    /**
     * The Measurement model constructor.
     * @property {module:model/Measurement}
     */
    Measurement: Measurement,
    /**
     * The MeasurementValue model constructor.
     * @property {module:model/MeasurementValue}
     */
    MeasurementValue: MeasurementValue,
    /**
     * The Notification model constructor.
     * @property {module:model/Notification}
     */
    Notification: Notification,
    /**
     * The NotificationCondition model constructor.
     * @property {module:model/NotificationCondition}
     */
    NotificationCondition: NotificationCondition,
    /**
     * The NotificationSubject model constructor.
     * @property {module:model/NotificationSubject}
     */
    NotificationSubject: NotificationSubject,
    /**
     * The Sensor model constructor.
     * @property {module:model/Sensor}
     */
    Sensor: Sensor,
    /**
     * The SocialMessage model constructor.
     * @property {module:model/SocialMessage}
     */
    SocialMessage: SocialMessage,
    /**
     * The SocialMessageBatch model constructor.
     * @property {module:model/SocialMessageBatch}
     */
    SocialMessageBatch: SocialMessageBatch,
    /**
     * The User model constructor.
     * @property {module:model/User}
     */
    User: User,
    /**
     * The UserUpdateBody model constructor.
     * @property {module:model/UserUpdateBody}
     */
    UserUpdateBody: UserUpdateBody,
    /**
     * The DomainsApi service constructor.
     * @property {module:api/DomainsApi}
     */
    DomainsApi: DomainsApi,
    /**
     * The NotificationsApi service constructor.
     * @property {module:api/NotificationsApi}
     */
    NotificationsApi: NotificationsApi,
    /**
     * The SensorsApi service constructor.
     * @property {module:api/SensorsApi}
     */
    SensorsApi: SensorsApi,
    /**
     * The SocialsApi service constructor.
     * @property {module:api/SocialsApi}
     */
    SocialsApi: SocialsApi,
    /**
     * The UsersApi service constructor.
     * @property {module:api/UsersApi}
     */
    UsersApi: UsersApi
  };

  return exports;
}));
