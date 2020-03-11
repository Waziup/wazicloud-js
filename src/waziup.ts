/** @hidden */
var univFetch: (input: RequestInfo, init?: RequestInit) => Promise<Response>;

if (process.title !== "browser") {
    univFetch = require('node-fetch');
} else {
    univFetch = window.fetch;
}

/**
 * Every sensor, actuator and device can have metadata.
 * This is additional data that can be set by apps and by the Waziup system to provide
 * more information on this sensor or actuator.
 * 
 * Use [[setSensorMeta]], [[setActuatorMeta]] and [[setDeviceMeta]] to modify the metadata.
 */
export type Meta = {
    [key: string]: any;
}

/**
 * All sensors and actuators have a value (and historical values in the database).
 * 
 * Depending on the sensor/actuator kind, the value can be any type.
 */
export type Value = any;
/**
 * When reading and writing values some APIs return the the value and its timestamp.
 */
export type ValueWithTime = {
    value: any;
    time: Date;
}

/**
 * A sensor, actuator or device ID.
 */
export type ID = string;

/**
 * A sensor always belongs to a device.
 */
export type Sensor = {
    /** Unique sensor ID. */
    id: ID;
    /** Sensor name. */
    name: string;
    /** Sensor value. */
    value: Value;
    /** Sensor kind. */
    kind: string;
    /** Time at which the sensor was last modified. This includes changes of the name and metadata, but not the upload of new values (see [[time]] for that.). */
    modified: Date;
    /** Time at which the sensor was created. */
    created: Date;
    /** Time at which the last value was uploaded for this sensor. */
    time: Date;
    /** Sensor metadata. */
    meta: Meta;
}

/**
 * An Actuator always belongs to a device.
 */
export type Actuator = {
    /** Unique actuator ID. */
    id: ID;
    /** Actuator name. */
    name: string;
    /** Actuator value. */
    value: Value;
    /** Actuator kind. */
    kind: string;
    /** Time at which the actuator was last modified. This includes changes of the name and metadata, but not the upload of new values (see [[time]] for that.) */
    modified: Date;
    /** Time at which the actuator was created. */
    created: Date;
    /** Time at which the last value was uploaded for this actuator. */
    time: Date;
    /** Actuator metadata. */
    meta: Meta;
}

/**
 * A device can have sensors and actuators.
 */
export type Device = {
    /** Unique device ID. */
    id: ID;
    /** Device name. */
    name: string;
    /** Device sensors. */
    sensors: Sensor[];
    /** Device actuators. */
    actuators: Actuator[];
    /** Time at which the device was last modified. This includes changes of the name and metadata.*/
    modified: Date;
    /** Time at which the device was created. */
    created: Date;
    /** Device metadata. */
    meta: Meta;
}

/**
 * Cloud Credentials.
 * 
 * @category Clouds
 */
export type Credentials = {
    username: string;
    password: string;
    token: string;
}

/**
 * @category Clouds
 */
export type Cloud = {
    id: ID;
    paused: boolean;
    pausing: boolean;
    pausing_mqtt: boolean;
    rest: string;
    mqtt: string;
    credentials: Credentials,
    statusCode: number;
    statusText: string;
}

/**
 * @category Clouds
 */
export type CloudAction = "create" | "modify" | "sync" | "error" | "delete";

/**
 * @category Clouds
 */
export type CloudStatus = {
    entity: {
        device: string;
        sensor?: string;
        actuators?: string;
    },
    status: {
        action: CloudAction[];
        remote: Date;
        sleep: number;
        wakeup: Date;
    }
}[];

export type Event = {
    code: number;
    msg: string;
    time: Date;
}

/**
 * A Waziup App.
 * @category Apps
 */
export type App = {
    name: string;
    type: number;
}

///////////////////////////////////////////////////////////////////////////////

/**
 * This class represents a client of the Waziup platform. The client is connected to a specific host: either the [Waziup Cloud](https://dashboard.waziup.io/) or a [Wazigate](https://www.waziup.io/documentation/wazigate/).
 * 
 * From inside an App you can [[connect]] like this:
 * 
 * ```ts
 *   var waziup = await require("waziup")
 *   var gateway = await waziup.connect();
 *   var id = await gateway.getID();
 *   console.log("This Wazigate has the ID:", id);
 * ```
 */
export class Waziup {

    /** @hidden */
    private host: string;
    /** @hidden */
    private auth: string;

    /**
     * Construct a new Waziup API client that connects to a given host (either a Wazigate or Waziup Cloud).
     * The auth token must be received by proceeding the login procedure first.
     * 
     * **Use the [[connect]] function to create a new Waziup client for you!**
     * 
     * @param host hostname, like "waziup.io" or an IP address.
     * @param auth login token, recieved by the Gateway or Waziup Cloud.
     * 
     * @hidden
     */
    constructor(host: string, auth: string) {
        this.host = host;
        this.auth = auth;
    }

    /**
     * Get the ID of the Waziup device. *Use on Wazigates only!*
     */
    async getID(): Promise<ID> {
        return this.get<ID>("device/id");
    }

    /**
     * Get the device with this ID.
     */
    async getDevice(id?: ID): Promise<Device>;
    /**
     * Get the Wazigate device.
     */
    async getDevice(): Promise<Device>;
    async getDevice(id?: ID): Promise<Device> {
        if (!id) {
            var device = await this.get<Device>("device");
        } else {
            var device = await this.get<Device>(`devices/${id}`);
        }
        polishDevice(device);
        return device;
    }

    /**
     * Get all the declared devices.
     */
    async getDevices(): Promise<Device[]> {
        var devices = await this.get<Device[]>("devices");
        devices.forEach(polishDevice);
        return devices;
    }

    /**
     * Get the name of a device.
     */
    async getDeviceName(device: ID): Promise<string>;
    /**
     * Get the name of this device. *Use on Wazigates only!*
     */
    async getDeviceName(): Promise<string>;
    async getDeviceName(id?: ID): Promise<string> {
        if (id) {
            var name = await this.get<string>(`device/${id}/name`);
        } else {
            var name = await this.get<string>(`device/name`);
        }
        return name;
    }

    /**
     * Set the name of a device.
     */
    async setDeviceName(device: ID, name: string): Promise<void>;
    /**
     * Set the name of this device. *Use on Wazigates only!*
     */
    async setDeviceName(name: string): Promise<void>;
    async setDeviceName(arg1: ID | string, arg2?: string): Promise<void> {
        if (arguments.length === 2) {
            await this.set(`device/${arg1}/name`, arg2);
        } else {
            await this.set(`device/name`, arg1);
        }
    }

    //////////////////////////////////////////////////
    // Sensors

    /**
     * Get all sensors of the device with the given ID.
     */
    async getSensors(device?: ID): Promise<Sensor[]>;
    /**
     * Get all sensors of the Wazigate. *Use on Wazigates only!*
     */
    async getSensors(): Promise<Sensor[]>;
    async getSensors(id?: ID): Promise<Sensor[]> {
        if (!id) {
            var sensors = await this.get<Sensor[]>("sensors");
        } else {
            var sensors = await this.get<Sensor[]>(`devices/${id}/sensors`);
        }
        sensors.forEach(polishEntity);
        return sensors;
    }

    /**
     * Get a sensor of a specific device.
     */
    async getSensor(device: ID, sensor: ID): Promise<Sensor>;
    /**
     * Get a sensor of the Wazigate. *Use on Wazigates only!*
     */
    async getSensor(sensor: ID): Promise<Sensor>;
    async getSensor(id1: ID, id2?: ID): Promise<Sensor> {
        if (!id2) {
            var sensor = await this.get<Sensor>(`sensors/${id1}`);
        } else {
            var sensor = await this.get<Sensor>(`devices/${id1}/sensors/${id2}`);
        }
        polishEntity(sensor);
        return sensor;
    }

    /**
     * Declare a new new sensor to a specific device.
     * @returns the ID of the new sensor.
     */
    async addSensor(device: ID, sensor: Sensor): Promise<ID>;
    /**
     * Declare a new sensor to the Wazigate. *Use on Wazigates only!*
     * @returns the ID of the new sensor.
     */
    async addSensor(sensor: Sensor): Promise<ID>;
    async addSensor(arg1: ID | Sensor, arg2?: Sensor): Promise<ID> {
        if (!arg2) {
            var id = await this.set<ID>(`sensor`, arg1);
        } else {
            var id = await this.set<ID>(`devices/${arg1}/sensors`, arg2);
        }
        return id;
    }

    /**
     * Delete a sensor of a specific device.
     */
    async deleteSensor(device: ID, sensor: ID): Promise<void>;
    /**
     * Delete a sensor of the Wazigate. *Use on Wazigates only!*
     */
    async deleteSensor(sensor: ID): Promise<void>;
    async deleteSensor(id1: ID, id2?: ID): Promise<void> {
        if (!id2) {
            await this.del(`sensors/${id1}`);
        } else {
            await this.del(`devices/${id1}/sensors/${id2}`);
        }
    }

    /**
     * Get the last uploaded value of the sensor.
     */
    async getSensorValue(device: ID, sensor: ID): Promise<Value>;
    /**
     * Get the last uploaded value of the Wazigate-sensor. *Use on Wazigates only!*
     */
    async getSensorValue(sensor: ID): Promise<Value>;
    async getSensorValue(id1: ID, id2?: ID): Promise<Value> {
        if (!id2) {
            var value = await this.get<Value>(`sensors/${id1}/value`);
        } else {
            var value = await this.get<Value>(`devices/${id1}/sensors/${id2}/value`);
        }
        return value;
    }

    /**
     * Add (upload) a new value to the sensor.
     */
    async addSensorValue(device: ID, sensor: ID, value: Value | ValueWithTime): Promise<void>;
    /**
     * Add (upload) a new value to the Wazigate-sensor. *Use on Wazigates only!*
     */
    async addSensorValue(sensor: ID, value: Value | ValueWithTime): Promise<void>;
    async addSensorValue(id1: ID, arg2: ID | Value | ValueWithTime, arg3?: Value | ValueWithTime): Promise<void> {
        if(arguments.length === 2)  {
            await this.set(`sensors/${id1}/value`, arg2);
        } else {
            await this.set(`devices/${id1}/sensors/${arg2}/value`, arg3);
        }
    }

    /**
     * Get (read) uploaded sensor values.
     */
    async getSensorValues(device: ID, sensor: ID): Promise<Value>;
    /**
     * Get (read) uploaded sensor values of the Wazigate-sensor. *Use on Wazigates only!*
     */
    async getSensorValues(sensor: ID): Promise<Value>;
    async getSensorValues(id1: ID, id2?: ID): Promise<Value> {
        if (!id2) {
            var values = await this.get<ValueWithTime[]>(`sensors/${id1}/values`);
        } else {
            var values = await this.get<ValueWithTime[]>(`devices/${id1}/sensors/${id2}/values`);
        }
        values.forEach(polishValue);
        return values;
    }

    /**
     * Add (upload) new values to the sensor.
     */
    async addSensorValues(device: ID, sensor: ID, values: Value[] | ValueWithTime[]): Promise<void>;
    /**
     * Add (upload) new values to the Wazigate-sensor. *Use on Wazigates only!*
     */
    async addSensorValues(sensor: ID, values: Value[] | ValueWithTime[]): Promise<void>;
    async addSensorValues(id1: ID, arg2: ID | Value[] | ValueWithTime[], arg3?: Value[] | ValueWithTime[]): Promise<void> {
        if(arguments.length === 2)  {
            await this.set(`sensors/${id1}/values`, arg2);
        } else {
            await this.set(`devices/${id1}/sensors/${arg2}/values`, arg3);
        }
    }

    /**
     * Set (override) a sensor's metadata.
     */
    async setSensorMeta(device: ID, sensor: ID, meta: Meta): Promise<void>;
    /**
     * Set (override) a Wazigate-sensor's metadata. *Use on Wazigates only!*
     */
    async setSensorMeta(sensor: ID, meta: Meta): Promise<void>;
    async setSensorMeta(id1: ID, arg2: ID | Meta, arg3?: Meta): Promise<void> {
        if(arguments.length === 2)  {
            await this.set(`sensors/${id1}/meta`, arg2);
        } else {
            await this.set(`devices/${id1}/sensors/${arg2}/meta`, arg3);
        }
    }

    /**
     * Get a sensor's metadata.
     */
    async getSensorMeta(device: ID, sensor: ID): Promise<Meta>;
    /**
     * Get a Wazigate-sensor's metadata. *Use on Wazigates only!*
     */
    async getSensorMeta(sensor: ID): Promise<Meta>;
    async getSensorMeta(id1: ID, id2?: ID): Promise<Meta> {
        if(!id2)  {
            var meta = await this.get<Meta>(`sensors/${id1}/meta`);
        } else {
            var meta = await this.get<Meta>(`devices/${id1}/sensors/${id2}/meta`);
        }
        return meta;
    }

    //////////////////////////////////////////////////
    // Actuators

        /**
     * Get all actuators of the device with the given ID.
     */
    async getActuators(device?: ID): Promise<Actuator[]>;
    /**
     * Get all actuators of the Wazigate. *Use on Wazigates only!*
     */
    async getActuators(): Promise<Actuator[]>;
    async getActuators(id?: ID): Promise<Actuator[]> {
        if (!id) {
            var actuators = await this.get<Actuator[]>("actuators");
        } else {
            var actuators = await this.get<Actuator[]>(`devices/${id}/actuators`);
        }
        actuators.forEach(polishEntity);
        return actuators;
    }

    /**
     * Get a actuator of a specific device.
     */
    async getActuator(device: ID, actuator: ID): Promise<Actuator>;
    /**
     * Get a actuator of the Wazigate. *Use on Wazigates only!*
     */
    async getActuator(actuator: ID): Promise<Actuator>;
    async getActuator(id1: ID, id2?: ID): Promise<Actuator> {
        if (!id2) {
            var actuator = await this.get<Actuator>(`actuators/${id1}`);
        } else {
            var actuator = await this.get<Actuator>(`devices/${id1}/actuators/${id2}`);
        }
        polishEntity(actuator);
        return actuator;
    }

    /**
     * Declare a new new actuator to a specific device.
     * @returns the ID of the new actuator.
     */
    async addActuator(device: ID, actuator: Actuator): Promise<ID>;
    /**
     * Declare a new actuator to the Wazigate. *Use on Wazigates only!*
     * @returns the ID of the new actuator.
     */
    async addActuator(actuator: Actuator): Promise<ID>;
    async addActuator(arg1: ID | Actuator, arg2?: Actuator): Promise<ID> {
        if (!arg2) {
            var id = await this.set<ID>(`actuator`, arg1);
        } else {
            var id = await this.set<ID>(`devices/${arg1}/actuators`, arg2);
        }
        return id;
    }

    /**
     * Delete a actuator of a specific device.
     */
    async deleteActuator(device: ID, actuator: ID): Promise<void>;
    /**
     * Delete a actuator of the Wazigate. *Use on Wazigates only!*
     */
    async deleteActuator(actuator: ID): Promise<void>;
    async deleteActuator(id1: ID, id2?: ID): Promise<void> {
        if (!id2) {
            await this.del(`actuators/${id1}`);
        } else {
            await this.del(`devices/${id1}/actuators/${id2}`);
        }
    }

    /**
     * Get the last uploaded value of the actuator.
     */
    async getActuatorValue(device: ID, actuator: ID): Promise<Value>;
    /**
     * Get the last uploaded value of the Wazigate-actuator. *Use on Wazigates only!*
     */
    async getActuatorValue(actuator: ID): Promise<Value>;
    async getActuatorValue(id1: ID, id2?: ID): Promise<Value> {
        if (!id2) {
            var value = await this.get<Value>(`actuators/${id1}/value`);
        } else {
            var value = await this.get<Value>(`devices/${id1}/actuators/${id2}/value`);
        }
        return value;
    }

    /**
     * Add (upload) a new value to the actuator.
     */
    async addActuatorValue(device: ID, actuator: ID, value: Value | ValueWithTime): Promise<void>;
    /**
     * Add (upload) a new value to the Wazigate-actuator. *Use on Wazigates only!*
     */
    async addActuatorValue(actuator: ID, value: Value | ValueWithTime): Promise<void>;
    async addActuatorValue(id1: ID, arg2: ID | Value | ValueWithTime, arg3?: Value | ValueWithTime): Promise<void> {
        if(arguments.length === 2)  {
            await this.set(`actuators/${id1}/value`, arg2);
        } else {
            await this.set(`devices/${id1}/actuators/${arg2}/value`, arg3);
        }
    }

    /**
     * Get (read) uploaded actuator values.
     */
    async getActuatorValues(device: ID, actuator: ID): Promise<Value>;
    /**
     * Get (read) uploaded actuator values of the Wazigate-actuator. *Use on Wazigates only!*
     */
    async getActuatorValues(actuator: ID): Promise<Value>;
    async getActuatorValues(id1: ID, id2?: ID): Promise<Value> {
        if (!id2) {
            var values = await this.get<ValueWithTime[]>(`actuators/${id1}/values`);
        } else {
            var values = await this.get<ValueWithTime[]>(`devices/${id1}/actuators/${id2}/values`);
        }
        values.forEach(polishValue);
        return values;
    }

    /**
     * Add (upload) new values to the actuator.
     */
    async addActuatorValues(device: ID, actuator: ID, values: Value[] | ValueWithTime[]): Promise<void>;
    /**
     * Add (upload) new values to the Wazigate-actuator. *Use on Wazigates only!*
     */
    async addActuatorValues(actuator: ID, values: Value[] | ValueWithTime[]): Promise<void>;
    async addActuatorValues(id1: ID, arg2: ID | Value[] | ValueWithTime[], arg3?: Value[] | ValueWithTime[]): Promise<void> {
        if(arguments.length === 2)  {
            await this.set(`actuators/${id1}/values`, arg2);
        } else {
            await this.set(`devices/${id1}/actuators/${arg2}/values`, arg3);
        }
    }

    /**
     * Set (override) a actuator's metadata.
     */
    async setActuatorMeta(device: ID, actuator: ID, meta: Meta): Promise<void>;
    /**
     * Set (override) a Wazigate-actuator's metadata. *Use on Wazigates only!*
     */
    async setActuatorMeta(actuator: ID, meta: Meta): Promise<void>;
    async setActuatorMeta(id1: ID, arg2: ID | Meta, arg3?: Meta): Promise<void> {
        if(arguments.length === 2)  {
            await this.set(`actuators/${id1}/meta`, arg2);
        } else {
            await this.set(`devices/${id1}/actuators/${arg2}/meta`, arg3);
        }
    }

    /**
     * Get a actuator's metadata.
     */
    async getActuatorMeta(device: ID, actuator: ID): Promise<Meta>;
    /**
     * Get a Wazigate-actuator's metadata. *Use on Wazigates only!*
     */
    async getActuatorMeta(actuator: ID): Promise<Meta>;
    async getActuatorMeta(id1: ID, id2?: ID): Promise<Meta> {
        if(!id2)  {
            var meta = await this.get<Meta>(`actuators/${id1}/meta`);
        } else {
            var meta = await this.get<Meta>(`devices/${id1}/actuators/${id2}/meta`);
        }
        return meta;
    }

    
    //////////////////////////////////////////////////
    // Apps

    /**
     * @category Clouds
     */
    getClouds(): Promise<{[id: string]: Cloud}> {
        return this.get<{[id: string]: Cloud}>("clouds");
    }

    /**
     * @category Clouds
     */
    addCloud(cloud: Cloud): Promise<ID> {
        return this.set<ID>("clouds", cloud);
    }

    /**
     * @category Clouds
     */
    getCloud(id: ID): Promise<Cloud> {
        return this.get<Cloud>(`clouds/${id}`);
    }

    /**
     * @category Clouds
     */
    deleteCloud(id: ID) {
        return this.del(`clouds/${id}`);
    }

    /**
     * @category Clouds
     */
    setCloudPaused(id: ID, paused: boolean) {
        return this.set(`clouds/${id}/paused`, paused);
    }

    /**
     * @category Clouds
     */
    setCloudCredentials(id: ID, cred: Credentials) {
        return this.set(`clouds/${id}/credentials`, cred);
    }

    /**
     * @category Clouds
     */
    async getCloudStatus(id: ID): Promise<CloudStatus> {
        var status = await this.get<CloudStatus>(`clouds/${id}/status`);
        polishCloudStatus(status);
        return status;
    }

    //////////////////////////////////////////////////
    // Apps

    /**
     * @category Apps
     */
    async getApps(): Promise<App[]> {
        return this.get<App[]>("apps");
    }

    /**
     * @category Apps
     */
    toProxyURL(app: string, path: string) {
        return `${this.host}/apps/${app}/${path}`;
    }

    //////////////////////////////////////////////////
    // Generic API

    /**
     * @category Generic API
     */
    toURL(path: string) {
        return `${this.host}/${path}`;
    }

    /**
     * @category Generic API
     */
    async subscribe(path: string, cb: (data: any) => void) {
        return
    }

     /**
     * @category Generic API
     */
    async unsubscribe(path: string, cb: (data: any) => void) {
        return
    }

    /**
     * @category Generic API
     */
    async get<T>(path: string) {
        var resp = await univFetch(this.toURL(path));
        if(!resp.ok) {
            if(resp.headers.get("Content-Type").startsWith("application/json")) {
                var data = await resp.json();
                throw data;
            } else {
                var text = await resp.text();
                throw text;
            }
        }
        var data = await resp.json();
        if(!resp.ok) throw data;
        return data as T;
    }

    async fetch(path: string, init?: RequestInit): Promise<Response> {
        return univFetch(path, init);
    }

    /**
     * @category Generic API
     */
    async del(path: string) {
        var resp = await univFetch(this.toURL(path), {
            method: "DELETE"
        });
        if(!resp.ok) {
            if(resp.headers.get("Content-Type").startsWith("application/json")) {
                var data = await resp.json();
                throw data;
            } else {
                var text = await resp.text();
                throw text;
            }
        }
        return;
    }

    /**
     * @category Generic API
     */
    async set<T=void>(path: string, val: any) {
        var resp = await univFetch(this.toURL(path), {
            method: "POST",
            headers: {
                "Content-Type": "application/json; charset=utf-8"
            },
            body: JSON.stringify(val)
        });
        if(!resp.ok) {
            if(resp.headers.get("Content-Type").startsWith("application/json")) {
                var data = await resp.json();
                throw data;
            } else {
                var text = await resp.text();
                throw text;
            }
        }
        if(resp.headers.get("Content-Type").startsWith("application/json")) {
            var data = await resp.json();
            return data as T;
        }
        return;
    }
}

///////////////////////////////////////////////////////////////////////////////

/** @hidden */
function polishEntity(ent: Sensor | Actuator) {
    ent.modified = new Date(ent.modified);
    ent.created = new Date(ent.created);
    ent.time = new Date(ent.time);
}

/** @hidden */
function polishDevice(device: Device) {
    device.created = new Date(device.created);
    device.modified = new Date(device.modified);
    device.sensors.forEach(polishEntity);
    device.actuators.forEach(polishEntity);
}

/** @hidden */
function polishValue(val: ValueWithTime) {
    val.time = new Date(val.time);
}

/** @hidden */
function polishCloudStatus(status: CloudStatus) {
    for(var stat of status) {
        stat.status.remote = new Date(stat.status.remote);
        stat.status.wakeup = new Date(stat.status.wakeup);
    }
}