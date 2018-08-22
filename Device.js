"use strict";
function Device (type, name) {
   this._type = type;
   this._name = name;
   this._isOn = false;
   this._state = false;
}
   Device.prototype.on = function () {
      this._isOn = true;
   };
   Device.prototype.off = function() {
      this._isOn = false;
   }
   Device.prototype.getName = function(){
      return this._name;
   };
   Device.prototype.setName = function(name){
      this._name = name;
   };
   Device.prototype.getType = function(){
      return this._type;
   };
   Device.prototype.setValue = function () {
	if (this._userValue >= this._minValue && this._userValue <= this._maxValue) {
		this._basicFeature = this._userValue;
	} else {
		this._basicFeature = this._basicFeature;
	}
};
   Device.prototype.getStatus = function () {
    if (this._state === true) {
      return 'Вкл';
  } else {
      return 'Выкл';
  }
};