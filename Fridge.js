"use strict";
function Fridge(name) {
	Device.call(this, "fridge", name);
	this._state = false;
	this._minTemperature = -7;
	this._maxTemperature = 7;
	this._temperature = 0;
 
};
Fridge.prototype = Object.create(Device.prototype); 
Fridge.prototype.constructor = Fridge;

Fridge.prototype.on = function() {
         return this._state = true;
};
   
Fridge.prototype.getState = function() {
    return this._state;
}

Fridge.prototype.increaseTemp = function() {
      if (this._temperature < Fridge._maxTemperature ) {
         this._temperature ++;
      }
   };
Fridge.prototype.decreaseTemp = function() {
      if (this._temperature > Fridge._minTemperature) {
         this._temperature --;
      }
   }
Fridge.prototype.temperatureSetMax = function (temperature){
	return this._maxTemperature;
}
Fridge.prototype.temperatureSetMin = function (temperature){
	return this._minTemperature;
}