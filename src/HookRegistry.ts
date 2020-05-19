import { Device, Sensor, Actuator } from "./waziup";

/** 
 * A generic UI hook returns a fragment that will be added to the UI.
 */
export type Hook = () => JSX.Element
/** 
 * The props are passed to a MenuHook.
 */
export interface MenuHookProps {
    handleMenuClose: () => void;
}

/** 
 * The props are passed to a DeviceHook.
 */
export interface DeviceHookProps {
    device: Device;
    setDevice: React.Dispatch<React.SetStateAction<Device>>;
}
/**
 * Use this hook to add additional UI fragments to a Device.
 */
export type DeviceHook = (props: DeviceHookProps) => JSX.Element;
/**
 * Use this hook to add additional items to the context-menu of a Device.
 */
export type DeviceMenuHook = (props: DeviceHookProps & MenuHookProps) => JSX.Element;

/** 
 * The props are passed to a SensorHook.
 */
export interface SensorHookProps {
    sensor: Sensor;
    deviceId: string;
}
/**
 * Use this hook to add additional UI fragments to a Sensor.
 */
export type SensorHook = (props: SensorHookProps) => JSX.Element;
/** 
 * Use this hook to add additional items to the context-menu of a Sensor.
 */
export type SensorMenuHook = (props: SensorHookProps & MenuHookProps) => JSX.Element;

/**
 * The props are passed to an ActuatorHook.
 */
export interface ActuatorHookProps {
    actuator: Actuator;
    deviceId: string;
}
/**
 * Use this hook to add additional UI fragments to an Actuator.
 */
export type ActuatorHook = (props: ActuatorHookProps) => JSX.Element;
/**
 * Use this hook to add additional items to the context-menu of an Actuator.
 */
export type ActuatorMenuHook = (props: ActuatorHookProps & MenuHookProps) => JSX.Element;

/**
 * Use this hook to add additional items to the menu (navbar).
 */
export type MenuHook = {
    primary: string;
    icon?: JSX.Element;
    href: string;
    target?: string;
};

/**
 * The HookRegistry allows you to add various hooks to sensors, actuators, devices, menus etc.
 * Each hook returns a UI fragment that will be added to the dashboard.
 */
export interface HookRegistry {

    load(src: string): Promise<void>;
    resolve(): void;

    depth(id: string): number;

    add(id: string, hook: any, prio?: number): void;

    set(id: string, hook: any, prio?: number): void;

    delete(id: string, hook: any): void;

    clear(): void;

    on(id: RegExp, cb: (id: string, hook: any) => void): void;

    off(id: RegExp, cb: (id: string, hook: any) => void): void;

    get<I=any>(id: string): I[];

    getAt(id: string): {[id: string]: any[]};

    getAtPrio(id: string): [string, any][];

    getAtFlat(id: string): any[];

    getSubIDs(id: string): string[];

    setMenuHook(menu: string, hook: MenuHook, prio?: number): void;

    addDeviceHook(hook: DeviceHook, prio?: number): void;
    addDeviceMetaHook(meta: string, hook: DeviceHook, prio?: number): void;
    addDeviceMenuHook(hook: DeviceMenuHook, prio?: number): void;

    addSensorHook(hook: SensorHook, prio?: number): void;
    addSensorMenuHook(hook: SensorMenuHook, prio?: number): void;
    addSensorMetaHook(meta: string, hook: SensorHook, prio?: number): void;

    addActuatorHook(hook: ActuatorHook, prio?: number): void;
    addActuatorMenuHook(hook: ActuatorMenuHook, prio?: number): void;
    addActuatorMetaHook(meta: string, hook: ActuatorHook, prio?: number): void;
}

 