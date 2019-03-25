'use strict';
import ApiClient from '../ApiClient';
import Resource from './Resource';
import Scope from './Scope';

/**
   * Constructs a new <code>Permission</code>.
   * @alias module:model/Permission
   * @class
   */
  var exports = function() {
    var _this = this;
  };

  /**
   * Constructs a <code>Permission</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/Permission} obj Optional instance to populate.
   * @return {module:model/Permission} The populated <code>Permission</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('permResource')) {
        obj['permResource'] = Resource.constructFromObject(data['permResource']);
      }
      if (data.hasOwnProperty('permScopes')) {
        obj['permScopes'] = data['permScopes'].map(s => Scope.constructFromObject(s));
      }
    }
    return obj;
  }

  /**
   * @member {module:model/Resource} permResource
   */
  exports.prototype['permResource'] = undefined;
  /**
   * @member {Array.<module:model/Scope>} permScopes
   */
  exports.prototype['permScopes'] = undefined;


export default exports;
