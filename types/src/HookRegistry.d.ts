/// <reference types="react" />
import { Device, Sensor, Actuator } from "./waziup";
export declare type Hook = () => JSX.Element;
export interface MenuHookProps {
    handleMenuClose: () => void;
}
export interface DeviceHookProps {
    device: Device;
    setDevice: React.Dispatch<React.SetStateAction<Device>>;
}
export declare type DeviceHook = (props: DeviceHookProps) => JSX.Element;
export declare type DeviceMenuHook = (props: DeviceHookProps & MenuHookProps) => JSX.Element;
export interface SensorHookProps {
    sensor: Sensor;
    deviceId: string;
}
export declare type SensorHook = (props: SensorHookProps) => JSX.Element;
export declare type SensorMenuHook = (props: SensorHookProps & MenuHookProps) => JSX.Element;
export interface ActuatorHookProps {
    actuator: Actuator;
    deviceId: string;
}
export declare type ActuatorHook = (props: ActuatorHookProps) => JSX.Element;
export declare type ActuatorMenuHook = (props: ActuatorHookProps & MenuHookProps) => JSX.Element;
export declare type MenuHook = {
    primary: string;
    icon?: JSX.Element;
    href: string;
    target?: string;
};
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
    get<I = any>(id: string): I[];
    getAt(id: string): {
        [id: string]: any[];
    };
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
