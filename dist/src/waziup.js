"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var univFetch;
if (process.title !== "browser") {
    univFetch = require('node-fetch');
}
else {
    univFetch = window.fetch;
}
class Waziup {
    constructor(host, auth) {
        this.host = host;
        this.auth = auth;
    }
    async getID() {
        return this.get("device/id");
    }
    async getDevice(id) {
        if (!id) {
            var device = await this.get("device");
        }
        else {
            var device = await this.get(`devices/${id}`);
        }
        polishDevice(device);
        return device;
    }
    async getDevices() {
        var devices = await this.get("devices");
        devices.forEach(polishDevice);
        return devices;
    }
    async getDeviceName(id) {
        if (id) {
            var name = await this.get(`device/${id}/name`);
        }
        else {
            var name = await this.get(`device/name`);
        }
        return name;
    }
    async setDeviceName(arg1, arg2) {
        if (arguments.length === 2) {
            await this.set(`device/${arg1}/name`, arg2);
        }
        else {
            await this.set(`device/name`, arg1);
        }
    }
    async getSensors(id) {
        if (!id) {
            var sensors = await this.get("sensors");
        }
        else {
            var sensors = await this.get(`devices/${id}/sensors`);
        }
        sensors.forEach(polishEntity);
        return sensors;
    }
    async getSensor(id1, id2) {
        if (!id2) {
            var sensor = await this.get(`sensors/${id1}`);
        }
        else {
            var sensor = await this.get(`devices/${id1}/sensors/${id2}`);
        }
        polishEntity(sensor);
        return sensor;
    }
    async addSensor(arg1, arg2) {
        if (!arg2) {
            var id = await this.set(`sensor`, arg1);
        }
        else {
            var id = await this.set(`devices/${arg1}/sensors`, arg2);
        }
        return id;
    }
    async deleteSensor(id1, id2) {
        if (!id2) {
            await this.del(`sensors/${id1}`);
        }
        else {
            await this.del(`devices/${id1}/sensors/${id2}`);
        }
    }
    async getSensorValue(id1, id2) {
        if (!id2) {
            var value = await this.get(`sensors/${id1}/value`);
        }
        else {
            var value = await this.get(`devices/${id1}/sensors/${id2}/value`);
        }
        return value;
    }
    async addSensorValue(id1, arg2, arg3) {
        if (arguments.length === 2) {
            await this.set(`sensors/${id1}/value`, arg2);
        }
        else {
            await this.set(`devices/${id1}/sensors/${arg2}/value`, arg3);
        }
    }
    async getSensorValues(id1, id2) {
        if (!id2) {
            var values = await this.get(`sensors/${id1}/values`);
        }
        else {
            var values = await this.get(`devices/${id1}/sensors/${id2}/values`);
        }
        values.forEach(polishValue);
        return values;
    }
    async addSensorValues(id1, arg2, arg3) {
        if (arguments.length === 2) {
            await this.set(`sensors/${id1}/values`, arg2);
        }
        else {
            await this.set(`devices/${id1}/sensors/${arg2}/values`, arg3);
        }
    }
    async setSensorMeta(id1, arg2, arg3) {
        if (arguments.length === 2) {
            await this.set(`sensors/${id1}/meta`, arg2);
        }
        else {
            await this.set(`devices/${id1}/sensors/${arg2}/meta`, arg3);
        }
    }
    async getSensorMeta(id1, id2) {
        if (!id2) {
            var meta = await this.get(`sensors/${id1}/meta`);
        }
        else {
            var meta = await this.get(`devices/${id1}/sensors/${id2}/meta`);
        }
        return meta;
    }
    async getActuators(id) {
        if (!id) {
            var actuators = await this.get("actuators");
        }
        else {
            var actuators = await this.get(`devices/${id}/actuators`);
        }
        actuators.forEach(polishEntity);
        return actuators;
    }
    async getActuator(id1, id2) {
        if (!id2) {
            var actuator = await this.get(`actuators/${id1}`);
        }
        else {
            var actuator = await this.get(`devices/${id1}/actuators/${id2}`);
        }
        polishEntity(actuator);
        return actuator;
    }
    async addActuator(arg1, arg2) {
        if (!arg2) {
            var id = await this.set(`actuator`, arg1);
        }
        else {
            var id = await this.set(`devices/${arg1}/actuators`, arg2);
        }
        return id;
    }
    async deleteActuator(id1, id2) {
        if (!id2) {
            await this.del(`actuators/${id1}`);
        }
        else {
            await this.del(`devices/${id1}/actuators/${id2}`);
        }
    }
    async getActuatorValue(id1, id2) {
        if (!id2) {
            var value = await this.get(`actuators/${id1}/value`);
        }
        else {
            var value = await this.get(`devices/${id1}/actuators/${id2}/value`);
        }
        return value;
    }
    async addActuatorValue(id1, arg2, arg3) {
        if (arguments.length === 2) {
            await this.set(`actuators/${id1}/value`, arg2);
        }
        else {
            await this.set(`devices/${id1}/actuators/${arg2}/value`, arg3);
        }
    }
    async getActuatorValues(id1, id2) {
        if (!id2) {
            var values = await this.get(`actuators/${id1}/values`);
        }
        else {
            var values = await this.get(`devices/${id1}/actuators/${id2}/values`);
        }
        values.forEach(polishValue);
        return values;
    }
    async addActuatorValues(id1, arg2, arg3) {
        if (arguments.length === 2) {
            await this.set(`actuators/${id1}/values`, arg2);
        }
        else {
            await this.set(`devices/${id1}/actuators/${arg2}/values`, arg3);
        }
    }
    async setActuatorMeta(id1, arg2, arg3) {
        if (arguments.length === 2) {
            await this.set(`actuators/${id1}/meta`, arg2);
        }
        else {
            await this.set(`devices/${id1}/actuators/${arg2}/meta`, arg3);
        }
    }
    async getActuatorMeta(id1, id2) {
        if (!id2) {
            var meta = await this.get(`actuators/${id1}/meta`);
        }
        else {
            var meta = await this.get(`devices/${id1}/actuators/${id2}/meta`);
        }
        return meta;
    }
    getClouds() {
        return this.get("clouds");
    }
    addCloud(cloud) {
        return this.set("clouds", cloud);
    }
    getCloud(id) {
        return this.get(`clouds/${id}`);
    }
    deleteCloud(id) {
        return this.del(`clouds/${id}`);
    }
    setCloudPaused(id, paused) {
        return this.set(`clouds/${id}/paused`, paused);
    }
    setCloudCredentials(id, cred) {
        return this.set(`clouds/${id}/credentials`, cred);
    }
    async getCloudStatus(id) {
        var status = await this.get(`clouds/${id}/status`);
        polishCloudStatus(status);
        return status;
    }
    async getApps() {
        return this.get("apps");
    }
    async getApp(id) {
        return this.get(`apps/${id}`);
    }
    async setAppConfig(id, config) {
        return this.set(`apps/${id}`, config);
    }
    uninstallApp(id, keepConfig) {
        return this.del(`apps/${id}?keepConfig=${keepConfig}`);
    }
    installApp(id) {
        return this.set(`apps`, id);
    }
    toProxyURL(app, path) {
        return `${this.host}/apps/${app}/${path}`;
    }
    toURL(path) {
        return `${this.host}/${path}`;
    }
    async subscribe(path, cb) {
        return;
    }
    async unsubscribe(path, cb) {
        return;
    }
    async get(path) {
        var resp = await univFetch(this.toURL(path));
        if (!resp.ok) {
            if (resp.headers.get("Content-Type").startsWith("application/json")) {
                var data = await resp.json();
                throw data;
            }
            else {
                var text = await resp.text();
                throw text;
            }
        }
        var data = await resp.json();
        if (!resp.ok)
            throw data;
        return data;
    }
    async fetch(path, init) {
        return univFetch(path, init);
    }
    async del(path) {
        var resp = await univFetch(this.toURL(path), {
            method: "DELETE"
        });
        if (!resp.ok) {
            if (resp.headers.get("Content-Type").startsWith("application/json")) {
                var data = await resp.json();
                throw data;
            }
            else {
                var text = await resp.text();
                throw text;
            }
        }
        return;
    }
    async set(path, val) {
        var resp = await univFetch(this.toURL(path), {
            method: "POST",
            headers: {
                "Content-Type": "application/json; charset=utf-8"
            },
            body: JSON.stringify(val)
        });
        if (!resp.ok) {
            if (resp.headers.get("Content-Type").startsWith("application/json")) {
                var data = await resp.json();
                throw data;
            }
            else {
                var text = await resp.text();
                throw text;
            }
        }
        if (resp.headers.get("Content-Type").startsWith("application/json")) {
            var data = await resp.json();
            return data;
        }
        return;
    }
}
exports.Waziup = Waziup;
function polishEntity(ent) {
    ent.modified = new Date(ent.modified);
    ent.created = new Date(ent.created);
    ent.time = new Date(ent.time);
}
function polishDevice(device) {
    device.created = new Date(device.created);
    device.modified = new Date(device.modified);
    device.sensors.forEach(polishEntity);
    device.actuators.forEach(polishEntity);
}
function polishValue(val) {
    val.time = new Date(val.time);
}
function polishCloudStatus(status) {
    for (var stat of status) {
        stat.status.remote = new Date(stat.status.remote);
        stat.status.wakeup = new Date(stat.status.wakeup);
    }
}
//# sourceMappingURL=waziup.js.map