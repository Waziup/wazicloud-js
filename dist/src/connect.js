"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const waziup_1 = require("./waziup");
async function connect(settings) {
    if (settings) {
        var host = settings.host;
    }
    else {
        var host = "";
    }
    return new waziup_1.Waziup(host, "");
}
exports.connect = connect;
//# sourceMappingURL=connect.js.map