"use strict";
function Lamp(name){
    Device.call(this, "lamp", name);
    this._basicBright = Lamp.MIN_BRIGHT;
    
Lamp.MAX_BRIGT = 100;
Lamp.MIN_BRIGT = 0;
Lamp.prototype = Object.create(Device.prototype);
Lamp.prototype.constructor = Lamp;
 
Lamp.prototype.getBasicBright = function(){
	 return this._basictBright; 
	
Lamp.prototype.setBasicBright = function(value){
     if (value >= Lamp.MIN_BRIGHT && value <= Lamp.MAX_BRIGHT) {
        this._power = value;
    }
    this.isPowered();	
}

Lamp.prototype.increaseBright = function(){
	if(this._basictBright < Lamp.MAX_BRIGT){
		this._currentBright++;
	}
}

Lamp.prototype.decreaseBright = function(){
	if(this._basicBright > Lamp.MIN_BRIGT){
		this._basicBright--;
	}
}
