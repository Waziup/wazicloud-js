"use strict";
import ApiClient from "../ApiClient";
import Project from "../model/Project";

/**
 * Constructs a new ProjectsApi.
 * @alias module:api/ProjectsApi
 * @class
 * @param {module:ApiClient} apiClient Optional API client implementation to use,
 * default to {@link module:ApiClient#instance} if unspecified.
 */
var exports = function(apiClient) {
  this.apiClient = apiClient || ApiClient.instance;

  /**
   * Project data
   *
   * @param {Object} opts Optional parameters
   * @param {String} opts.q filter the results
   * data is of type: {@link Array.<module:model/Project>}
   */
  this.getProjects = async function(opts) {
    opts = opts || {};
    var postBody = null;

    var pathParams = {};
    var queryParams = {
      q: opts["q"],
      limit: opts["limit"],
      offset: opts["offset"],
      full: opts["full"]
    };
    var headerParams = {};
    var formParams = {};

    var authNames = ["Bearer"];
    var contentTypes = ["application/json"];
    var accepts = ["application/json"];
    var returnType = [Project];

    return this.apiClient.callApi(
      "/projects",
      "GET",
      pathParams,
      queryParams,
      headerParams,
      formParams,
      postBody,
      authNames,
      contentTypes,
      accepts,
      returnType
    );
  };

  /**
   * Create projects
   * Endpoint to create sensing projects.
   * @param {module:model/Project} body
   */
  this.createProject = async function(body) {
    var postBody = body;

    // verify the required parameter 'body' is set
    if (body === undefined || body === null) {
      throw "Missing the required parameter 'body' when calling createProject";
    }

    var pathParams = {};
    var queryParams = {};
    var headerParams = {};
    var formParams = {};

    var authNames = ["Bearer"];
    var contentTypes = ["application/json"];
    var accepts = ["application/json"];
    var returnType = null;

    return this.apiClient.callApi(
      "projects",
      "POST",
      pathParams,
      queryParams,
      headerParams,
      formParams,
      postBody,
      authNames,
      contentTypes,
      accepts,
      returnType
    );
  };

  /**
   * Delete project
   *
   * @param {String} projectId
   */
  this.deleteProject = async function(projectId) {
    var postBody = null;

    // verify the required parameter 'projectId' is set
    if (projectId === undefined || projectId === null) {
      throw "Missing the required parameter 'projectId' when calling deleteProject";
    }

    var pathParams = {
      id: projectId
    };
    var queryParams = {};
    var headerParams = {};
    var formParams = {};

    var authNames = ["Bearer"];
    var contentTypes = ["application/json"];
    var accepts = ["application/json"];
    var returnType = null;

    return this.apiClient.callApi(
      "/projects/{id}",
      "DELETE",
      pathParams,
      queryParams,
      headerParams,
      formParams,
      postBody,
      authNames,
      contentTypes,
      accepts,
      returnType
    );
  };

  /**
   * get project
   *
   * @param {String} projectId
   * data is of type: {@link module:model/Project}
   */
  this.getProject = async function(projectId) {
    var postBody = null;

    // verify the required parameter 'projectId' is set
    if (projectId === undefined || projectId === null) {
      throw "Missing the required parameter 'projectId' when calling getProject";
    }

    var pathParams = {
      id: projectId
    };
    var queryParams = {
      full: false
    };
    var headerParams = {};
    var formParams = {};

    var authNames = ["Bearer"];
    var contentTypes = ["application/json"];
    var accepts = ["application/json"];
    var returnType = Project;

    return this.apiClient.callApi(
      "/projects/{id}",
      "GET",
      pathParams,
      queryParams,
      headerParams,
      formParams,
      postBody,
      authNames,
      contentTypes,
      accepts,
      returnType
    );
  };

  /**
   * insert device
   * @param {String} projectId
   * @param {module:model/Device} body
   */
  this.putDevices = async function(projectId, body) {
    var postBody = body;

    // verify the required parameter 'projectId' is set
    if (projectId === undefined || projectId === null) {
      throw "Missing the required parameter 'projectId' when calling putDevices";
    }

    // verify the required parameter 'body' is set
    if (body === undefined || body === null) {
      throw "Missing the required parameter 'body' when calling putDevices";
    }

    var pathParams = {
      id: projectId
    };
    var queryParams = {};
    var headerParams = {};
    var formParams = {};

    var authNames = ["Bearer"];
    var contentTypes = ["application/json"];
    var accepts = ["application/json"];
    var returnType = null;

    return this.apiClient.callApi(
      "/projects/{id}/devices",
      "PUT",
      pathParams,
      queryParams,
      headerParams,
      formParams,
      postBody,
      authNames,
      contentTypes,
      accepts,
      returnType
    );
  };

  /**
   * insert gateway
   * @param {String} projectId
   * @param {module:model/Gateway} body
   */
  this.putGateways = async function(projectId, body) {
    var postBody = body;

    // verify the required parameter 'projectId' is set
    if (projectId === undefined || projectId === null) {
      throw "Missing the required parameter 'projectId' when calling putGateways";
    }

    // verify the required parameter 'body' is set
    if (body === undefined || body === null) {
      throw "Missing the required parameter 'body' when calling putGateways";
    }

    var pathParams = {
      id: projectId
    };
    var queryParams = {};
    var headerParams = {};
    var formParams = {};

    var authNames = ["Bearer"];
    var contentTypes = ["application/json"];
    var accepts = ["application/json"];
    var returnType = null;

    return this.apiClient.callApi(
      "/projects/{id}/gateways",
      "PUT",
      pathParams,
      queryParams,
      headerParams,
      formParams,
      postBody,
      authNames,
      contentTypes,
      accepts,
      returnType
    );
  };


  /**
   * insert name
   * @param {String} projectId
   * @param {String} body
   */
  this.putProjectName = async function(projectId, body) {
    var postBody = body;

    // verify the required parameter 'projectId' is set
    if (projectId === undefined || projectId === null) {
      throw "Missing the required parameter 'projectId' when calling putProjectName";
    }

    // verify the required parameter 'body' is set
    if (body === undefined || body === null) {
      throw "Missing the required parameter 'body' when calling putProjectName";
    }

    var pathParams = {
      project_id: projectId
    };
    var queryParams = {};
    var headerParams = {};
    var formParams = {};

    var authNames = ["Bearer"];
    var contentTypes = ["application/json;charset=utf-8"];
    var accepts = ["application/json;charset=utf-8"];
    var returnType = null;

    return this.apiClient.callApi(
      "/projects/{project_id}/name",
      "PUT",
      pathParams,
      queryParams,
      headerParams,
      formParams,
      postBody,
      authNames,
      contentTypes,
      accepts,
      returnType
    );
  };

};

export default exports;
