WAZIUP-JS
=========


Waziup-js is a javascript client to interact with the [Waziup plaform](www.waziup.io).

## Installation

Install it via:

```shell
npm install --save -g waziup-js
```

## Getting Started

Here is an example code to retrieve all sensors from Waziup:

```javascript
const WaziupApi = require('waziup-js');

WaziupApi.ApiClient.instance.basePath = 'https://api.waziup.io/api/v1'
var api = new WaziupApi.SensorsApi()

api.getSensors().then((sensors) =>{
    console.log('List of sensors: ', JSON.stringify(sensors));
})

```
Save this file as test.js and run:

```
node test.js
```
You should get a list of sensors.
The format of the sensors is given [here](https://github.com/Waziup/waziup-js/blob/master/docs/Sensor.md).


## Authentication

You need a token to access protected resources. You can retrieve one like that:


```javascript
const WaziupApi = require('waziup-js');

WaziupApi.ApiClient.instance.basePath = 'https://api.waziup.io/api/v1'
var sensorApi = new WaziupApi.SensorsApi()
var authApi = new WaziupApi.AuthApi()

//Deleting a resource requires authentication
async function testDelete() {
  var token = await authApi.getAuthToken("waziup", new WaziupApi.AuthBody('YOUR_USERNAME', 'YOUR_PASSWORD')) 
  WaziupApi.ApiClient.instance.authentications['Bearer'].apiKey = 'Bearer ' + token
  
  try {
    await sensorApi.deleteSensor("MySensor")
  } catch (error) {
    console.log("Error " + error.status)
  }
}

testDelete()
```

You should create a user beforehand on https://dashboard.waziup.io.
As a rule of thumb, you can only update or delete resources that you are owner of.

## Documentation for API Endpoints

There are 5 endpoints:

 - [Sensors API](docs/SensorsApi.md)
 - [Socials API](docs/SocialsApi.md)
 - [Notifications API](docs/NotificationsApi.md)
 - [Users API](docs/UsersApi.md)


## Documentation for Models

 - [WaziupApi.AuthBody](docs/AuthBody.md)
 - [WaziupApi.Error](docs/Error.md)
 - [WaziupApi.HistoricalValue](docs/HistoricalValue.md)
 - [WaziupApi.Location](docs/Location.md)
 - [WaziupApi.Measurement](docs/Measurement.md)
 - [WaziupApi.MeasurementValue](docs/MeasurementValue.md)
 - [WaziupApi.Notification](docs/Notification.md)
 - [WaziupApi.NotificationCondition](docs/NotificationCondition.md)
 - [WaziupApi.NotificationEntity](docs/NotificationEntity.md)
 - [WaziupApi.NotificationSubject](docs/NotificationSubject.md)
 - [WaziupApi.Sensor](docs/Sensor.md)
 - [WaziupApi.SocialMessage](docs/SocialMessage.md)
 - [WaziupApi.SocialMessageBatch](docs/SocialMessageBatch.md)
 - [WaziupApi.User](docs/User.md)
 - [WaziupApi.UserUpdateBody](docs/UserUpdateBody.md)


## Documentation for Authorization

### Bearer

- **Type**: API key
- **API key parameter name**: Authorization
- **Location**: HTTP header

## Developement

##### Local development

To use the library locally without publishing to a remote npm registry, first install the dependencies by changing 
into the directory containing `package.json` (and this README). Let's call this `JAVASCRIPT_CLIENT_DIR`. Then run:

```shell
npm install
```

Next, [link](https://docs.npmjs.com/cli/link) it globally in npm with the following, also from `JAVASCRIPT_CLIENT_DIR`:

```shell
npm link
```

Finally, switch to the directory you want to use your waziup-js from, and run:

```shell
npm link /path/to/<JAVASCRIPT_CLIENT_DIR>
```

You should now be able to `require('waziup-js')` in javascript files from the directory you ran the last 
command above from.


### For browser

The library also works in the browser environment via npm and [browserify](http://browserify.org/). After following
the above steps with Node.js and installing browserify with `npm install -g browserify`,
perform the following (assuming *main.js* is your entry file, that's to say your javascript file where you actually 
use this library):

```shell
browserify main.js > bundle.js
```

Then include *bundle.js* in the HTML pages.
