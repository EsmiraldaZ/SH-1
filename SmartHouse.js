"use strict";

function SmartHouse(owner) {
    this._owner = owner;
    this._devices = []
}
SmartHouse.prototype.addDevices = function () {
    for (var i = 0; i < arguments.length; i++) {
        this._devices.push(arguments[i])
    }
}
SmartHouse.prototype.addTVDevice = function (device) {
  this._tvDevice.push(device);
};
SmartHouse.prototype.deleteTVDevice = function (x) {
  this._tvDevice.splice(x, 1);
  return this._tvDevice;
};
SmartHouse.prototype.addFridge = function (device) {
  this._fridge.push(device);
};
SmartHouse.prototype.deleteFridge = function (x) {
  this._fire.splice(x, 1);
  return this._fridge;
};
SmartHouse.prototype.addHeater = function (device) {
  this._heater.push(device);
};
SmartHouse.prototype.deleteHeater = function (x) {
  this._heater(x, 1);
  return this._heater;
};
SmartHouse.prototype.addLamp = function (device) {
  this._lamp.push(device);
};
SmartHouse.prototype.deleteLamp = function (x) {
  this._lamp(x, 1);
  return this._air;
};
SmartHouse.prototype.getTVDevice = function () {
  return this._tvDevice;
};
SmartHouse.prototype.getLamp = function () {
  return this._lamp;
};
SmartHouse.prototype.getFridge = function () {
  return this._fridge;
};
SmartHouse.prototype.getHeater = function () {
  return this._heater;
};







          

          