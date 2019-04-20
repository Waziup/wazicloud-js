'use strict';
import ApiClient              from './ApiClient'
import AuthBody               from './model/AuthBody'
import Error                  from './model/Error'
import Location               from './model/Location'
import Sensor            from './model/Sensor'
import SensorValue       from './model/SensorValue'
import Notification           from './model/Notification'
import NotificationCondition  from './model/NotifcationCondition'
import QuantityKinds          from './model/QuantityKinds'
import SensorKinds         from './model/SensorKinds'
import Device                 from './model/Device'
import SocialMessage          from './model/SocialMessage'
import SocialMessageBatch     from './model/SocialMessageBatch'
import Units                  from './model/Units'
import Calib                  from './model/Calib'
import CalibFunction          from './model/CalibFunction'
import CalibLinear            from './model/CalibLinear'
import CalibValue             from './model/CalibValue'
import Actuator               from './model/Actuator'
import ActuatorKinds          from './model/ActuatorKinds'
import Gateway                from './model/Gateway'
import GatewayTunnel          from './model/GatewayTunnel'
import Project                from './model/Project'
import User                   from './model/User'
import UserUpdateBody         from './model/UserUpdateBody'
import NotificationsApi       from './api/NotificationsApi'
import DevicesApi             from './api/DevicesApi'
import SensorsApi             from './api/SensorsApi'
import ActuatorsApi           from './api/ActuatorsApi'
import GatewaysApi            from './api/GatewaysApi'
import ProjectsApi            from './api/ProjectsApi'
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
   * The Sensor model constructor.
   * @property {module:model/Sensor}
   */
  Sensor,
  /**
   * The SensorValue model constructor.
   * @property {module:model/SensorValue}
   */
  SensorValue,
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
   * List of Quantity kinds
   * @property {module:model/QuantityKinds}
   */
  QuantityKinds,
  /**
   * List of sensing devices
   * @property {module:model/SensorKinds}
   */
  SensorKinds,
  /**
   * The Device model constructor.
   * @property {module:model/Device}
   */
  Device,
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
   * List of Calib
   * @property {module:model/Calib}
   */
  Calib,  
  /**
   * List of CalibFunction
   * @property {module:model/CalibFunction}
   */
  CalibFunction,
  /**
   * List of CalibLinear
   * @property {module:model/CalibLinear}
   */
  CalibLinear,
    /**
   * List of CalibValue
   * @property {module:model/CalibValue}
   */
  CalibValue,  
  /**
   * The Actuator model constructor.
   * @property {module:model/Actuator}
   */
  Actuator,
  /**
   * The ActuatorKinds model constructor.
   * @property {module:model/ActuatorKinds}
   */
  ActuatorKinds,
  /**
   * The Gateway model constructor.
   * @property {module:model/Gateway}
   */
  Gateway,
  /**
   * The GatewayTunnel model constructor.
   * @property {module:model/GatewayTunnel}
   */
  GatewayTunnel,
  /**
   * The Project model constructor.
   * @property {module:model/Project}
   */
  Project,
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
   * The Notifications service constructor.
   * @property {module:api/NotificationsApi}
   */
  NotificationsApi,
  /**
   * The DevicesApi service constructor.
   * @property {module:api/DevicesApi}
   */
  DevicesApi,
  /**
   * The SensorsApi service constructor.
   * @property {module:api/SensorsApi}
   */
  SensorsApi,
  /**
   * The ActuatorsApi service constructor.
   * @property {module:api/ActuatorsApi}
   */
  ActuatorsApi,
  /**
   * The GatewaysApi service constructor.
   * @property {module:api/GatewaysApi}
   */
  GatewaysApi,
  /**
   * The ProjectsApi service constructor.
   * @property {module:api/ProjectsApi}
   */
  ProjectsApi,
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
