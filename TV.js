"use strict";
function TvDevice(name) {
	Device.call(this, "tv", name);
	this._volume = 25;
	this._minVolume = 0;
	this._maxVolume = 100;
	this._channe = 1;
	this._minChannel = 1;
	this._maxChannel = 99;
}
TvDevice.prototype = Object.create(Device.prototype);
TvDevice.prototype.constructor = TvDevice;

TvDevice.prototype.getChannel = function() {
	return this.channel;
};
TvDevice.prototype.setChannel = function(channelNumber) {
      if (channelNumber < TvDevice._minChannel || channelNumber > TvDevice._maxChannel) {
         throw new RangeError("Incorrect channel number");
      } else {
         this.channel = channel;
      }
   };
TvDevice.prototype.increaseChannel = function() {
      if (this.channel < TvDevice._maxChannel) {
         this.channel++;
      }
   };

TvDevice.prototype.decriaseChannel = function() {
      if (this.channel > TvDevice._minChannel) {
         this.channel--;
      }
   };
TvDevice.prototype.getVolume = function() {
      return this.volume;
   };
   TvDevice.prototype.increaseVolume = function() {
      if(this.volume < TvDevice._maxVolume) {
         this.volume++;
      }
   };
   TvDevice.prototype.decriaseVolume = function() {
      if(this.volume > TvDevice._minVolume) {
         this.volume--;
      }
   };