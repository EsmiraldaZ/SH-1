"use strict";
function Lamp(type, name, device){
    Device.call(this, type, name);
	this._light = 50;
	this._name = name;
	this.type = type;
}
    Lamp.MAX_BRIGT = 100;
    Lamp.MIN_BRIGT = 0;

Lamp.prototype = Object.create(Device.prototype);
Lamp.prototype.constructor = Lamp;
 
Lamp.prototype.getlight = function(){
	 return this._light; 
}
Lamp.prototype.setBasicBright = function(value){
     if (value >= Lamp.MIN_BRIGHT && value <= Lamp.MAX_BRIGHT) {
        this._power = value;
    }
    this.isPowered();	
}
Lamp.prototype.lightSetMax = function () {
	 this._light = Lamp.MAX_BRIGHT;
}
	
Lamp.prototype.lightSetMin = function () {
	this._light = Lamp.MIN_BRIGHT;
	
}
Lamp.prototype.increaseBright = function(){
	if(this._light < Lamp.MAX_BRIGT){
		this._light++;
	}
};
Lamp.prototype.decreaseBright = function(){
	if(this._light > Lamp.MIN_BRIGT){
		this._light--;
	}
}
