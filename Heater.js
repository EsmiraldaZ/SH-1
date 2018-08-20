"use strict";
function Heater (name) {
	Device.call(this, "heater", name);
	this._minTemperature = 0;
	this._maxTemperature = 80;
	this._temperature = 40;
	this._heaterPower = 100;
};
Heater.prototype = Object.create(Device.prototype); 
Heater.prototype.constructor = Heater;

Heater.prototype.fullPower = function () {
	this._heaterPower = 100;
};
Heater.prototype.halfPower = function () {
	this._heaterPower = 50;
};
Heater.prototype.increaseTemperature = function(){
      if (this._temperature < Heater._minTemperature) {
         this._temperature++;
      }
   };
Heater.prototype.dicreaseTemperature = function(){
      if (this._temperature > Heater._maxTemperature){
         this._temperature--;
      }
   };