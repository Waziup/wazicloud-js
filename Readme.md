# Waziup

This repository implements a client to call APIs of the Waziup Cloud and Wazigate platform.

Connect to the Waziup Cloud or to a Wazigate from a remote machine like this:

```ts
import * as waziup from "waziup";

main();

async function main() {

    // connect to the Wazigate (or the Cloud).
    var gateway = await waziup.connect({
        host: "wazigate.local", // a local Wazigate
        // host: "waziup.io", // or the Waziup Cloud
        username: "MyUsername",
        password: "MyPassword"
    });

    // read the devices list
    var devices = await gateway.getDevices();
    console.log(`We have ${devices.length} devices:`, devices);

    // rename a device
    gateway.setDeviceName(myDevice, "New Name :)");

    // upload a new sensor value
    var value = 47.5; // measurement value
    gateway.addSensorValues(myDevice, mySensor, value);
}
```

From inside a Waziup App things a little bit easier:

```ts
import * as waziup from "waziup";

main();

async function main() {

    // connect to the Wazigate
    var gateway = await waziup.connect();

    // read the Gateway ID
    var id = await gateway.getDeviceID();
    console.log(`This is Wazigate #${id}.`)

    // rename the gateway
    gateway.setDeviceName("New Gateway :)");

    // upload a new sensor value
    var value = 47.5; // measurement value
    gateway.addSensorValues(mySensor, value);
}
```