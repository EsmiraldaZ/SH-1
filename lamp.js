"use strict";
function Lamp(name){
    Device.call(this, "lamp", name);
    this._currentBright = 50;
    this._memoryBright = 0;
    this.MAX_BRIGT = 100;
    this.MIN_BRIGT = 0;
}

Lamp.prototype = Object.create(Device.prototype);
Lamp.prototype.constructor = Lamp;
 
Lamp.prototype.getCurrentBright = function(){
	 return this._currentBright; 
	
Lamp.prototype.setCurrentBright = function(value){
     if (value >= Lamp.MIN_BRIGHT && value <= Lamp.MAX_BRIGHT) {
        this._power = value;
    }
    this.isPowered();	
}

Lamp.prototype.increaseBright = function(){
	if(this._currentBright < this.MAX_BRIGT){
		this._currentBright++;
	}
}

Lamp.prototype.decreaseBright = function(){
	if(this._currentBright > this.MIN_BRIGT){
		this._currentBright--;
	}
}
