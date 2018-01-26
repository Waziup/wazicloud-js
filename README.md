WAZIUP-JS
=========


Waziup-js is a javascript client to interact with the Waziup plaform.

## Installation

Install it via:

```shell
npm install waziup-js --save
```

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

## Getting Started

Please follow the [installation](#installation) instruction and execute the following JS code:

```javascript
var WaziupApi = require('waziup-js');

var defaultClient = WaziupApi.ApiClient.instance;

// Configure API key authorization: Bearer
var Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = "YOUR API KEY"
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix['Authorization'] = "Token"

var api = new WaziupApi.SensorsApi()

var domain = "waziup"; 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
api.getSensors(domain, null, callback);

```

## Documentation for API Endpoints

All URIs are relative to *http://127.0.0.1:8000/api/v1*
There are 5 endpoints:

 - [Sensors API](docs/SensorsApi.md)
 - [Domains_API](docs/DomainsApi.md)
 - [Socials_API](docs/SocialsApi.md)
 - [Notifications_API](docs/NotificationsApi.md)
 - [Users_API](docs/UsersApi.md)


## Documentation for Models

 - [WaziupApi.AuthBody](docs/AuthBody.md)
 - [WaziupApi.Domain](docs/Domain.md)
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

