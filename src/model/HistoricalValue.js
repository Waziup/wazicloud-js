(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient', 'model/MeasurementValue'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./MeasurementValue'));
  } else {
    // Browser globals (root is window)
    if (!root.WaziupApi) {
      root.WaziupApi = {};
    }
    root.WaziupApi.HistoricalValue = factory(root.WaziupApi.ApiClient, root.WaziupApi.MeasurementValue);
  }
}(this, function(ApiClient, MeasurementValue) {
  'use strict';



  /**
   * Constructs a new <code>HistoricalValue</code>.
   * @alias module:model/HistoricalValue
   * @class
   */
  var exports = function() {
    var _this = this;

  };

  /**
   * Constructs a <code>HistoricalValue</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/HistoricalValue} obj Optional instance to populate.
   * @return {module:model/HistoricalValue} The populated <code>HistoricalValue</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('id')) {
        obj['id'] = ApiClient.convertToType(data['id'], 'String');
      }
      if (data.hasOwnProperty('attribute_id')) {
        obj['attribute_id'] = ApiClient.convertToType(data['attribute_id'], 'String');
      }
      if (data.hasOwnProperty('datapoint')) {
        obj['datapoint'] = MeasurementValue.constructFromObject(data['datapoint']);
      }
    }
    return obj;
  }

  /**
   * UUID of the sensor
   * @member {String} id
   */
  exports.prototype['id'] = undefined;
  /**
   * UUID of the measurement
   * @member {String} attribute_id
   */
  exports.prototype['attribute_id'] = undefined;
  /**
   * @member {module:model/MeasurementValue} datapoint
   */
  exports.prototype['datapoint'] = undefined;



  return exports;
}));


