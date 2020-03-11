import { Waziup } from "./waziup";

/**
 * Pass this settings to [[connect]].
 * You can either connect by username+password or with a connect-token from the cloud or gateway that you want to connect to.
 */
interface ConnectSettings {
    /**
     * Waziup Cloud or Gateway address. This can be a hostname (like "waziup.io") or an IP address.
     */
    host?: string;
    /**
     * Your username.
     */
    username?: string;
    /**
     * Your password.
     */
    password?: string;
    /**
     * A connect-token that you got from the cloud or the gateway that you want to connect to.
     */
    token?: string;
}

/**
 * Connect to the Waziup Cloud or to a Wazigate.
 * 
 * From inside an App you don't need to specify any settings:
 * 
 * ```ts
 *   var waziup = await require("waziup")
 *   var gateway = await waziup.connect();
 *   var id = await gateway.getID();
 *   console.log("This Wazigate has the ID:", id);
 * ```
 * 
 * If you want to connect to the Waziup Cloud or to antother Gateway:
 * 
 * ```ts
 *   var Waziup = require("waziup");
 *   var cloud = await Waziup.connect({
 *     host: "waziup.io", // or gateway IP
 *     username: "myUsername",
 *     password: "myPassword"
 *   });
 *   var device = await cloud.getDevice(myDeviceID);
 *   console.log("The device is:", device);
 * ```
 * 
 * If you got a connect-token from the Cloud or the Gateway, use the token like this:
 * 
 * ```ts
 *   var Waziup = require("waziup");
 *   var cloud = await Waziup.connect({
 *     token: "mvZfwLueeAXYrhnsPDhV...",
 *   });
 *   var value = 47; // measurement value
 *   cloud.addValue(myDeviceId, mySensorId, value);
 * ```
 */
export async function connect(settings?: ConnectSettings): Promise<Waziup> {
    if (settings) {
        var host = settings.host;
    } else {
        var host = "";
    }
    return new Waziup(host, "");
}