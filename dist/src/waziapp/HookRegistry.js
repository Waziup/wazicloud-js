"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class HookRegistry {
    constructor() {
        this.hooks = {};
    }
    add(id, hook, prio = 0) {
        if (id in this.hooks) {
            this.hooks[id].push([hook, prio]);
            this.hooks[id].sort((a, b) => a[1] - b[1]);
        }
        else {
            this.hooks[id] = [[hook, prio]];
        }
    }
    set(id, hook, prio = 0) {
        this.hooks[id] = [[hook, prio]];
    }
    delete(id, hook) {
        if (id in this.hooks) {
            const i = this.hooks[id].findIndex(a => a[0] == hook);
            if (i !== -1) {
                if (this.hooks[id].length === 1)
                    delete this.hooks[id];
                else
                    this.hooks[id].splice(i, 1);
            }
        }
    }
    clear() {
        this.hooks = {};
    }
    get(id) {
        if (id in this.hooks) {
            return this.hooks[id].map(a => a[0]);
        }
        return [];
    }
    getAt(id) {
        const subId = `${id}.`;
        const d = depth(id) + 1;
        const hooksList = Object.entries(this.hooks)
            .filter(([id]) => id.startsWith(subId) && depth(id) === d);
        var hooks = {};
        for (const hook of hooksList) {
            hooks[hook[0]] = hook[1].map(h => h[0]);
        }
        return hooks;
    }
    getAtPrio(id) {
        const subId = `${id}.`;
        const d = depth(id) + 1;
        const hooks = Object.entries(this.hooks)
            .filter(([id]) => id.startsWith(subId) && depth(id) === d)
            .map(([id, hooks]) => hooks.map(([hook, prio]) => [id, hook, prio]))
            .flat()
            .sort((a, b) => a[2] - b[2]);
        return hooks;
    }
    getAtFlat(id) {
        const subId = `${id}.`;
        const d = depth(id) + 1;
        const hooks = Object.entries(this.hooks)
            .filter(([id]) => id.startsWith(subId) && depth(id) === d)
            .map(([id, hooks]) => hooks)
            .flat()
            .sort((a, b) => a[1] - b[1])
            .map(hook => hook[0]);
        return hooks;
    }
    getSubIDs(id) {
        const subID = `${id}.`;
        const d = depth(id) + 1;
        const keys = Object.keys(this.hooks)
            .filter(id => id.startsWith(subID) && depth(id) === d);
        return keys;
    }
    setMenuHook(menu, hook, prio = 0) {
        this.set(`menu.${menu}`, hook, prio);
    }
    addDeviceHook(hook, prio = 0) {
        this.add("device", hook, prio);
    }
    addDeviceMetaHook(meta, hook, prio = 0) {
        this.add(`device.meta.${meta}`, hook, prio);
    }
    addDeviceMenuHook(hook, prio = 0) {
        this.add("device.menu", hook, prio);
    }
    addSensorHook(hook, prio = 0) {
        this.add("sensor", hook, prio);
    }
    addSensorMenuHook(hook, prio = 0) {
        this.add("sensor.menu", hook, prio);
    }
    addSensorMetaHook(meta, hook, prio = 0) {
        this.add(`sensor.meta.${meta}`, hook, prio);
    }
    addActuatorHook(hook, prio = 0) {
        this.add("sensor", hook, prio);
    }
    addActuatorMenuHook(hook, prio = 0) {
        this.add("sensor.menu", hook, prio);
    }
    addActuatorMetaHook(meta, hook, prio = 0) {
        this.add(`sensor.meta.${meta}`, hook, prio);
    }
}
exports.HookRegistry = HookRegistry;
function depth(id) {
    for (var c = -1, i = -2; i != -1; c++, i = id.indexOf(".", i + 1))
        ;
    return c;
}
//# sourceMappingURL=HookRegistry.js.map