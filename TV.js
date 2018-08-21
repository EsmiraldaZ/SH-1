"use strict";
function TvDevice(name) {
	Device.call(this, "tv", name);
	this._volume = 25;
	this._minVolume = 0;
	this._maxVolume = 100;
	this._channel = 1;
	this._minChannel = 1;
	this._maxChannel = 99;
}
TvDevice.prototype = Object.create(Device.prototype);
TvDevice.prototype.constructor = TvDevice;

TvDevice.prototype.getChannel = function() {
	return this._channel;
};
TvDevice.prototype.setChannel = function(channel) {
      if (channel < TvDevice._minChannel || channel > TvDevice._maxChannel) {
         throw new RangeError("Incorrect channel number");
      } else {
         this._channel = channel;
      }
   };
TvDevice.prototype.increaseChannel = function() {
      if (this._channel < TvDevice._maxChannel) {
         this._channel++;
      }
   };

TvDevice.prototype.decriaseChannel = function() {
      if (this._channel > TvDevice._minChannel) {
         this._channel--;
      }
   };
TvDevice.prototype.getVolume = function() {
      return this._volume;
   };
   TvDevice.prototype.increaseVolume = function() {
      if(this._volume < TvDevice._maxVolume) {
         this._volume++;
      }
   };
   TvDevice.prototype.decriaseVolume = function() {
      if(this._volume > TvDevice._minVolume) {
         this._volume--;
      }
   };
