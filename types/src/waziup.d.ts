/// <reference types="node" />
export declare type Meta = {
    [key: string]: any;
};
export declare type Value = any;
export declare type ValueWithTime = {
    value: any;
    time: Date;
};
export declare type ID = string;
export declare type Sensor = {
    id: ID;
    name: string;
    value: Value;
    kind: string;
    quantity: string;
    unit: string;
    modified: Date;
    created: Date;
    time: Date;
    meta: Meta;
};
export declare type Actuator = {
    id: ID;
    name: string;
    value: Value;
    kind: string;
    quantity: string;
    unit: string;
    modified: Date;
    created: Date;
    time: Date;
    meta: Meta;
};
export declare type Device = {
    id: ID;
    name: string;
    sensors: Sensor[];
    actuators: Actuator[];
    modified: Date;
    created: Date;
    meta: Meta;
};
export declare type Credentials = {
    username: string;
    password: string;
    token: string;
};
export declare type Cloud = {
    id: ID;
    paused: boolean;
    pausing: boolean;
    pausing_mqtt: boolean;
    rest: string;
    mqtt: string;
    credentials: Credentials;
    statusCode: number;
    statusText: string;
};
export declare type CloudAction = "create" | "modify" | "sync" | "error" | "delete";
export declare type CloudStatus = {
    entity: {
        device: string;
        sensor?: string;
        actuators?: string;
    };
    status: {
        action: CloudAction[];
        remote: Date;
        sleep: number;
        wakeup: Date;
    };
}[];
export declare type Event = {
    code: number;
    msg: string;
    time: Date;
};
export declare type App = {
    id: string;
    internal: boolean;
    state: "started" | "stopped" | "starting" | "stopping" | "uninstalled";
    restart: "always" | "on-failure" | "unless-stopped" | "no";
    log: string;
};
export interface AppConfig {
    state?: "started" | "stopped" | "starting" | "stopping" | "uninstalled";
    restart?: "always" | "on-failure" | "unless-stopped" | "no";
}
export declare class Waziup {
    private host;
    private auth;
    private client;
    private topics;
    clientID: string;
    constructor(host: string, auth: string);
    getID(): Promise<ID>;
    getDevice(id?: ID): Promise<Device>;
    getDevice(): Promise<Device>;
    getDevices(): Promise<Device[]>;
    addDevice(device: Device): Promise<ID>;
    getDeviceName(device: ID): Promise<string>;
    getDeviceName(): Promise<string>;
    setDeviceName(device: ID, name: string): Promise<void>;
    setDeviceName(name: string): Promise<void>;
    getDeviceMeta(device: ID): Promise<Meta>;
    setDeviceMeta(device: ID, meta: Meta): Promise<void>;
    getSensors(device?: ID): Promise<Sensor[]>;
    getSensors(): Promise<Sensor[]>;
    getSensor(device: ID, sensor: ID): Promise<Sensor>;
    getSensor(sensor: ID): Promise<Sensor>;
    addSensor(device: ID, sensor: Sensor): Promise<ID>;
    addSensor(sensor: Sensor): Promise<ID>;
    deleteSensor(device: ID, sensor: ID): Promise<void>;
    deleteSensor(sensor: ID): Promise<void>;
    getSensorValue(device: ID, sensor: ID): Promise<Value>;
    getSensorValue(sensor: ID): Promise<Value>;
    addSensorValue(device: ID, sensor: ID, value: Value | ValueWithTime): Promise<void>;
    addSensorValue(sensor: ID, value: Value | ValueWithTime): Promise<void>;
    getSensorValues(device: ID, sensor: ID): Promise<Value>;
    getSensorValues(sensor: ID): Promise<Value>;
    addSensorValues(device: ID, sensor: ID, values: Value[] | ValueWithTime[]): Promise<void>;
    addSensorValues(sensor: ID, values: Value[] | ValueWithTime[]): Promise<void>;
    setSensorMeta(device: ID, sensor: ID, meta: Meta): Promise<void>;
    setSensorMeta(sensor: ID, meta: Meta): Promise<void>;
    getSensorMeta(device: ID, sensor: ID): Promise<Meta>;
    getSensorMeta(sensor: ID): Promise<Meta>;
    getActuators(device?: ID): Promise<Actuator[]>;
    getActuators(): Promise<Actuator[]>;
    getActuator(device: ID, actuator: ID): Promise<Actuator>;
    getActuator(actuator: ID): Promise<Actuator>;
    addActuator(device: ID, actuator: Actuator): Promise<ID>;
    addActuator(actuator: Actuator): Promise<ID>;
    deleteActuator(device: ID, actuator: ID): Promise<void>;
    deleteActuator(actuator: ID): Promise<void>;
    getActuatorValue(device: ID, actuator: ID): Promise<Value>;
    getActuatorValue(actuator: ID): Promise<Value>;
    addActuatorValue(device: ID, actuator: ID, value: Value | ValueWithTime): Promise<void>;
    addActuatorValue(actuator: ID, value: Value | ValueWithTime): Promise<void>;
    getActuatorValues(device: ID, actuator: ID): Promise<Value>;
    getActuatorValues(actuator: ID): Promise<Value>;
    addActuatorValues(device: ID, actuator: ID, values: Value[] | ValueWithTime[]): Promise<void>;
    addActuatorValues(actuator: ID, values: Value[] | ValueWithTime[]): Promise<void>;
    setActuatorMeta(device: ID, actuator: ID, meta: Meta): Promise<void>;
    setActuatorMeta(actuator: ID, meta: Meta): Promise<void>;
    getActuatorMeta(device: ID, actuator: ID): Promise<Meta>;
    getActuatorMeta(actuator: ID): Promise<Meta>;
    getClouds(): Promise<{
        [id: string]: Cloud;
    }>;
    addCloud(cloud: Cloud): Promise<ID>;
    getCloud(id: ID): Promise<Cloud>;
    deleteCloud(id: ID): Promise<void>;
    setCloudPaused(id: ID, paused: boolean): Promise<void>;
    setCloudCredentials(id: ID, cred: Credentials): Promise<void>;
    getCloudStatus(id: ID): Promise<CloudStatus>;
    getApps(): Promise<App[]>;
    getApp(id: string): Promise<App>;
    setAppConfig(id: string, config: AppConfig): Promise<void>;
    uninstallApp(id: string, keepConfig: boolean): Promise<void>;
    installApp(id: string): Promise<void>;
    toProxyURL(app: string, path: string): string;
    toURL(path: string): string;
    connectMQTT(onConnect: () => void, onError?: (err: Error) => void): void;
    disconnectMQTT(onDisconnect: () => void): void;
    on(event: "message", cb: (topic: string, payload: Buffer) => void): void;
    on(event: "error", cb: (error: Error) => void): void;
    on(event: "connect", cb: () => void): void;
    off(event: "message", cb: (topic: string, payload: Buffer) => void): void;
    off(event: "error", cb: (error: Error) => void): void;
    off(event: "connect", cb: () => void): void;
    reconnectMQTT(): void;
    subscribe<T = any>(path: string, cb: (msg: T) => void): void;
    unsubscribe(path: string, cb: (data: any) => void): void;
    get<T>(path: string): Promise<T>;
    fetch(path: string, init?: RequestInit): Promise<Response>;
    del<T = void>(path: string): Promise<T>;
    set<T = void>(path: string, val: any): Promise<T>;
}
