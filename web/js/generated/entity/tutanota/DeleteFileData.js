"use strict";

tutao.provide('tutao.entity.tutanota.DeleteFileData');

/**
 * @constructor
 * @param {Object=} data The json data to store in this entity.
 */
tutao.entity.tutanota.DeleteFileData = function(data) {
  if (data) {
    this.updateData(data);
  } else {
    this.__format = "0";
    this._file = null;
  }
  this._entityHelper = new tutao.entity.EntityHelper(this);
  this.prototype = tutao.entity.tutanota.DeleteFileData.prototype;
};

/**
 * Updates the data of this entity.
 * @param {Object=} data The json data to store in this entity.
 */
tutao.entity.tutanota.DeleteFileData.prototype.updateData = function(data) {
  this.__format = data._format;
  this._file = data.file;
};

/**
 * The version of the model this type belongs to.
 * @const
 */
tutao.entity.tutanota.DeleteFileData.MODEL_VERSION = '14';

/**
 * The url path to the resource.
 * @const
 */
tutao.entity.tutanota.DeleteFileData.PATH = '/rest/tutanota/deletefileservice';

/**
 * The encrypted flag.
 * @const
 */
tutao.entity.tutanota.DeleteFileData.prototype.ENCRYPTED = false;

/**
 * Provides the data of this instances as an object that can be converted to json.
 * @return {Object} The json object.
 */
tutao.entity.tutanota.DeleteFileData.prototype.toJsonData = function() {
  return {
    _format: this.__format, 
    file: this._file
  };
};

/**
 * Sets the format of this DeleteFileData.
 * @param {string} format The format of this DeleteFileData.
 */
tutao.entity.tutanota.DeleteFileData.prototype.setFormat = function(format) {
  this.__format = format;
  return this;
};

/**
 * Provides the format of this DeleteFileData.
 * @return {string} The format of this DeleteFileData.
 */
tutao.entity.tutanota.DeleteFileData.prototype.getFormat = function() {
  return this.__format;
};

/**
 * Sets the file of this DeleteFileData.
 * @param {Array.<string>} file The file of this DeleteFileData.
 */
tutao.entity.tutanota.DeleteFileData.prototype.setFile = function(file) {
  this._file = file;
  return this;
};

/**
 * Provides the file of this DeleteFileData.
 * @return {Array.<string>} The file of this DeleteFileData.
 */
tutao.entity.tutanota.DeleteFileData.prototype.getFile = function() {
  return this._file;
};

/**
 * Loads the file of this DeleteFileData.
 * @return {Promise.<tutao.entity.tutanota.File>} Resolves to the loaded file of this DeleteFileData or an exception if the loading failed.
 */
tutao.entity.tutanota.DeleteFileData.prototype.loadFile = function() {
  return tutao.entity.tutanota.File.load(this._file);
};

/**
 * Updates this service.
 * @param {Object.<string, string>} parameters The parameters to send to the service.
 * @param {?Object.<string, string>} headers The headers to send to the service. If null, the default authentication data is used.
 * @return {Promise.<null>} Resolves to the string result of the server or rejects with an exception if the post failed.
 */
tutao.entity.tutanota.DeleteFileData.prototype.update = function(parameters, headers) {
  if (!headers) {
    headers = tutao.entity.EntityHelper.createAuthHeaders();
  }
  parameters["v"] = "14";
  return tutao.locator.entityRestClient.putService(tutao.entity.tutanota.DeleteFileData.PATH, this, parameters, headers, null);
};
/**
 * Provides the entity helper of this entity.
 * @return {tutao.entity.EntityHelper} The entity helper.
 */
tutao.entity.tutanota.DeleteFileData.prototype.getEntityHelper = function() {
  return this._entityHelper;
};
