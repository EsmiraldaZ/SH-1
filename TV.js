"use strict";
function TvDevice(name) {
   Device.call(this, "tv", name);
   this._name = name;
   this._channel = TvDevice.MIN_CHANNEL;
   this._volume = 25;
}

   TvDevice.MIN_CHANNEL = 1;
   TvDevice.MAX_CHANNEL = 99;
   TvDevice.MIN_VOLUME = 0;
   TvDevice.MAX_VOLUME = 100;

TvDevice.prototype = Object.create(Device.prototype);
TvDevice.prototype.constructor = TvDevice;

TvDevice.prototype.getChannel = function() {
	return this._channel;
};
TvDevice.prototype.setChannel = function(channel) {
      if (channel <  TvDevice.MIN_CHANNEL || channel > TvDevice.MAX_CHANNEL) {
         throw new RangeError("Incorrect channel number");
      } else {
         this._channel = channel;
      }
   };
TvDevice.prototype.increaseChannel = function() {
      if (this._channel < TvDevice.MAX_CHANNEL) {
         this._channel++;
      }
   };

TvDevice.prototype.decriaseChannel = function() {
      if (this._channel >  TvDevice.MIN_CHANNEL) {
         this._channel--;
      }
   };
TvDevice.prototype.getVolume = function() {
      return this._volume;
   };
   TvDevice.prototype.increaseVolume = function() {
      if(this._volume < TvDevice.MAX_VOLUME) {
         this._volume++;
      }
   };
   TvDevice.prototype.decreaseVolume = function() {
      if(this._volume > TvDevice.MIN_VOLUME) {
         this._volume--;
      }
   };
